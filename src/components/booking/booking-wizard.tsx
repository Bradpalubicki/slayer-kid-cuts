"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { calculateTotals } from "@/lib/booking-utils";
import StepService, { type ChildFormData } from "./step-service";
import StepDateTime from "./step-datetime";
import StepDetails from "./step-details";
import StepReview from "./step-review";
import BookingConfirmation from "./booking-confirmation";

// ------------------------------------------------------------------
// Types
// ------------------------------------------------------------------

type WizardStatus = "form" | "submitting" | "success" | "error";

interface BookingFormData {
  children: ChildFormData[];
  date: Date | undefined;
  time: string;
  parentName: string;
  phone: string;
  email: string;
  notes: string;
}

const STEPS = ["Service", "Date & Time", "Details", "Review"] as const;

const initialChild: ChildFormData = {
  name: "",
  age: "",
  service: null,
  specialNeeds: false,
  specialNeedsNotes: "",
};

const initialFormData: BookingFormData = {
  children: [{ ...initialChild }],
  date: undefined,
  time: "",
  parentName: "",
  phone: "",
  email: "",
  notes: "",
};

// ------------------------------------------------------------------
// Component
// ------------------------------------------------------------------

export default function BookingWizard() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [status, setStatus] = useState<WizardStatus>("form");
  const [bookingId, setBookingId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Computed
  const { totalDuration } = useMemo(
    () => calculateTotals(formData.children),
    [formData.children]
  );

  // Navigation
  const goTo = useCallback(
    (target: number) => {
      setDirection(target > step ? 1 : -1);
      setStep(target);
    },
    [step]
  );

  const next = useCallback(() => goTo(step + 1), [goTo, step]);
  const back = useCallback(() => goTo(step - 1), [goTo, step]);

  // Updaters
  const updateChildren = useCallback(
    (children: ChildFormData[]) => {
      setFormData((prev) => {
        const updated = { ...prev, children };
        // If services changed and selected time is no longer valid, clear it
        const { totalDuration: newDuration } = calculateTotals(children);
        const { totalDuration: oldDuration } = calculateTotals(prev.children);
        if (newDuration !== oldDuration) {
          return { ...updated, time: "" };
        }
        return updated;
      });
    },
    []
  );

  const updateDateTime = useCallback((date: Date | undefined, time?: string) => {
    setFormData((prev) => ({
      ...prev,
      date: date ?? prev.date,
      time: time ?? prev.time,
    }));
  }, []);

  const updateDetails = useCallback(
    (fields: { parentName?: string; phone?: string; email?: string; notes?: string }) => {
      setFormData((prev) => ({ ...prev, ...fields }));
    },
    []
  );

  // Submit
  const handleSubmit = useCallback(async () => {
    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      children: formData.children.map((child) => ({
        name: child.name,
        age: child.age,
        service: {
          id: child.service!.id,
          name: child.service!.name,
          price: child.service!.price,
          priceNum: child.service!.priceNum,
          duration: child.service!.duration,
        },
        addOns: [],
        specialNeeds: child.specialNeeds,
        specialNeedsNotes: child.specialNeedsNotes || undefined,
      })),
      locationType: "salon" as const,
      date: format(formData.date!, "EEEE, MMMM d, yyyy"),
      time: formData.time,
      parentName: formData.parentName,
      phone: formData.phone,
      email: formData.email,
      notes: formData.notes || undefined,
      total: calculateTotals(formData.children).totalPrice,
    };

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Booking failed");
      setBookingId(data.bookingId);
      setStatus("success");
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  }, [formData]);

  // Reset
  const handleReset = useCallback(() => {
    setFormData({ ...initialFormData, children: [{ ...initialChild }] });
    setStep(0);
    setDirection(1);
    setStatus("form");
    setBookingId("");
    setErrorMessage("");
  }, []);

  // Success screen
  if (status === "success") {
    return (
      <BookingConfirmation
        bookingId={bookingId}
        childEntries={formData.children}
        date={formData.date!}
        time={formData.time}
        parentName={formData.parentName}
        onReset={handleReset}
      />
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-1">
        {STEPS.map((label, idx) => (
          <div key={label} className="flex items-center">
            <button
              type="button"
              onClick={() => idx < step && goTo(idx)}
              disabled={idx >= step}
              className={cn(
                "flex items-center gap-1.5 transition-all",
                idx < step && "cursor-pointer",
                idx >= step && "cursor-default"
              )}
            >
              <div
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all",
                  idx < step
                    ? "bg-[#5B8A8A] text-white"
                    : idx === step
                      ? "border-2 border-[#5B8A8A] text-[#5B8A8A]"
                      : "border-2 border-gray-200 text-gray-300"
                )}
              >
                {idx < step ? <Check className="w-3.5 h-3.5" /> : idx + 1}
              </div>
              <span
                className={cn(
                  "text-xs font-medium hidden sm:inline",
                  idx <= step ? "text-[#5B8A8A]" : "text-gray-300"
                )}
              >
                {label}
              </span>
            </button>
            {idx < STEPS.length - 1 && (
              <div
                className={cn(
                  "w-6 sm:w-10 h-0.5 mx-1",
                  idx < step ? "bg-[#5B8A8A]" : "bg-gray-200"
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          initial={{ x: direction * 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction * -150, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {step === 0 && (
            <StepService
              childEntries={formData.children}
              updateChildren={updateChildren}
              onNext={next}
            />
          )}
          {step === 1 && (
            <StepDateTime
              date={formData.date}
              time={formData.time}
              totalDuration={totalDuration}
              onDateChange={(date) => updateDateTime(date)}
              onTimeChange={(time) => updateDateTime(undefined, time)}
              onNext={next}
              onBack={back}
            />
          )}
          {step === 2 && (
            <StepDetails
              childEntries={formData.children}
              parentName={formData.parentName}
              phone={formData.phone}
              email={formData.email}
              notes={formData.notes}
              updateChildren={updateChildren}
              updateDetails={updateDetails}
              onNext={next}
              onBack={back}
            />
          )}
          {step === 3 && (
            <StepReview
              childEntries={formData.children}
              date={formData.date!}
              time={formData.time}
              parentName={formData.parentName}
              phone={formData.phone}
              email={formData.email}
              notes={formData.notes}
              status={status}
              errorMessage={errorMessage}
              onSubmit={handleSubmit}
              onBack={back}
              goToStep={goTo}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
