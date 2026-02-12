"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone, FileText, DoorOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { calculateTotals } from "@/lib/booking-utils";
import type { ChildFormData } from "./step-service";

interface BookingConfirmationProps {
  bookingId: string;
  childEntries: ChildFormData[];
  date: Date;
  time: string;
  parentName: string;
  onReset: () => void;
}

const INTAKE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSetWpeKLI6A_HaWhivbO3BuWvgoVwqDgtrJzz7jqU-GLdP5EQ/viewform";

export default function BookingConfirmation({
  bookingId,
  childEntries,
  date,
  time,
  parentName,
  onReset,
}: BookingConfirmationProps) {
  const { totalPrice } = calculateTotals(childEntries);

  return (
    <div className="flex flex-col items-center gap-6 text-center">
      {/* Animated check */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
        className="w-20 h-20 rounded-full bg-gradient-to-br from-[#5B8A8A] to-[#7BA3A3] flex items-center justify-center shadow-lg"
      >
        <CheckCircle2 className="w-10 h-10 text-white" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-gray-900">Booking Confirmed!</h2>
        <p className="text-gray-500 mt-1">
          Thanks, {parentName}. Carla will confirm via text.
        </p>
      </motion.div>

      {/* Summary card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full"
      >
        <Card className="border-[#5B8A8A]/20 bg-[#5B8A8A]/5">
          <CardContent className="p-5 flex flex-col gap-3">
            <div className="text-xs text-gray-400 uppercase tracking-wider">
              Booking ID
            </div>
            <div className="text-lg font-mono font-bold text-[#5B8A8A]">
              {bookingId}
            </div>
            <div className="border-t border-[#5B8A8A]/10 pt-3 flex flex-col gap-1.5 text-sm text-gray-700">
              <p>{format(date, "EEEE, MMMM d, yyyy")} at {time}</p>
              {childEntries.map((child, idx) => (
                <p key={idx}>
                  {child.name} — {child.service?.name}
                </p>
              ))}
              <p className="font-semibold text-[#5B8A8A] mt-1">Total: ${totalPrice}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Next steps */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full"
      >
        <h3 className="text-sm font-semibold text-gray-700 mb-3">What Happens Next</h3>
        <div className="flex flex-col gap-3">
          {[
            {
              icon: Phone,
              text: "Carla will confirm your appointment via text",
            },
            {
              icon: FileText,
              text: "Complete the intake questionnaire so she can prepare the space for your child",
            },
            {
              icon: DoorOpen,
              text: "On arrival, text (702) 917-2350 for the suite entry code",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100 text-left"
            >
              <div className="w-8 h-8 rounded-full bg-[#5B8A8A]/10 flex items-center justify-center flex-shrink-0">
                <step.icon className="w-4 h-4 text-[#5B8A8A]" />
              </div>
              <p className="text-sm text-gray-700">{step.text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-3 w-full"
      >
        <a
          href={INTAKE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button className="w-full bg-[#5B8A8A] hover:bg-[#4A7272] text-white rounded-full">
            <FileText className="w-4 h-4 mr-2" />
            Complete Intake Form
          </Button>
        </a>
        <Button
          variant="outline"
          onClick={onReset}
          className="flex-1 rounded-full"
        >
          Book Another Appointment
        </Button>
      </motion.div>
    </div>
  );
}
