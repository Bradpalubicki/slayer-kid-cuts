"use client";

import { format } from "date-fns";
import {
  CalendarDays,
  Clock,
  User,
  Users,
  DollarSign,
  Pencil,
  Loader2,
  AlertCircle,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { calculateTotals } from "@/lib/booking-utils";
import type { ChildFormData } from "./step-service";

interface StepReviewProps {
  childEntries: ChildFormData[];
  date: Date;
  time: string;
  parentName: string;
  phone: string;
  email: string;
  notes: string;
  status: "form" | "submitting" | "error";
  errorMessage: string;
  onSubmit: () => void;
  onBack: () => void;
  goToStep: (step: number) => void;
}

export default function StepReview({
  childEntries,
  date,
  time,
  parentName,
  phone,
  email,
  notes,
  status,
  errorMessage,
  onSubmit,
  onBack,
  goToStep,
}: StepReviewProps) {
  const { totalPrice, totalDuration } = calculateTotals(childEntries);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Review Your Booking</h2>
        <p className="text-sm text-gray-500 mt-1">
          Make sure everything looks right before confirming.
        </p>
      </div>

      {status === "error" && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-red-800">Booking failed</p>
              <p className="text-sm text-red-600 mt-0.5">{errorMessage}</p>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="border-gray-200">
        <CardContent className="p-0 divide-y divide-gray-100">
          {/* Date & Time */}
          <div className="p-4 flex items-start justify-between">
            <div className="flex items-start gap-3">
              <CalendarDays className="w-5 h-5 text-[#5B8A8A] mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {format(date, "EEEE, MMMM d, yyyy")}
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                  {time} &middot; {totalDuration} min total
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-[#5B8A8A] hover:text-[#4A7272] h-7"
              onClick={() => goToStep(1)}
            >
              <Pencil className="w-3.5 h-3.5 mr-1" />
              Edit
            </Button>
          </div>

          {/* Children */}
          <div className="p-4 flex items-start justify-between">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-[#5B8A8A] mt-0.5" />
              <div className="flex flex-col gap-2">
                {childEntries.map((child, idx) => (
                  <div key={idx}>
                    <p className="text-sm font-medium text-gray-900">
                      {child.name}, age {child.age}
                    </p>
                    <p className="text-sm text-gray-500">
                      {child.service?.name} — {child.service?.price}
                    </p>
                    {child.specialNeeds && (
                      <Badge className="mt-1 bg-[#D4E5E5] text-[#5B8A8A] border-[#5B8A8A]/20 text-xs">
                        <Shield className="w-3 h-3 mr-1" />
                        Sensory accommodations
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-[#5B8A8A] hover:text-[#4A7272] h-7"
              onClick={() => goToStep(0)}
            >
              <Pencil className="w-3.5 h-3.5 mr-1" />
              Edit
            </Button>
          </div>

          {/* Parent */}
          <div className="p-4 flex items-start justify-between">
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-[#5B8A8A] mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-900">{parentName}</p>
                <p className="text-sm text-gray-500">{phone}</p>
                <p className="text-sm text-gray-500">{email}</p>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-[#5B8A8A] hover:text-[#4A7272] h-7"
              onClick={() => goToStep(2)}
            >
              <Pencil className="w-3.5 h-3.5 mr-1" />
              Edit
            </Button>
          </div>

          {/* Notes */}
          {notes && (
            <div className="p-4">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Notes</p>
              <p className="text-sm text-gray-600">{notes}</p>
            </div>
          )}

          {/* Total */}
          <div className="p-4 flex items-center justify-between bg-[#F8F6F3]">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[#5B8A8A]" />
              <span className="text-sm font-medium text-gray-700">Total</span>
            </div>
            <span className="text-2xl font-bold text-[#5B8A8A]">${totalPrice}</span>
          </div>
        </CardContent>
      </Card>

      <p className="text-xs text-gray-400 text-center">
        Carla will confirm your appointment via text. If your child is unable to complete
        the haircut, you will not be charged.
      </p>

      <div className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          disabled={status === "submitting"}
          className="rounded-full px-6"
        >
          Back
        </Button>
        <Button
          onClick={onSubmit}
          disabled={status === "submitting"}
          className="bg-gradient-to-r from-[#6B5B4F] via-[#5B8A8A] to-[#A69080] text-white rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Booking...
            </>
          ) : (
            "Confirm Booking"
          )}
        </Button>
      </div>
    </div>
  );
}
