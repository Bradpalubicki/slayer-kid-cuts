"use client";

import { useMemo } from "react";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { isDateDisabled, generateTimeSlots } from "@/lib/booking-utils";

interface StepDateTimeProps {
  date: Date | undefined;
  time: string;
  totalDuration: number;
  onDateChange: (date: Date | undefined) => void;
  onTimeChange: (time: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepDateTime({
  date,
  time,
  totalDuration,
  onDateChange,
  onTimeChange,
  onNext,
  onBack,
}: StepDateTimeProps) {
  const slots = useMemo(
    () => generateTimeSlots(totalDuration),
    [totalDuration]
  );

  const canAdvance = !!date && !!time;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Pick a Date & Time</h2>
        <p className="text-sm text-gray-500 mt-1">
          Tue–Sat, 10 AM – 6 PM (closed 1–2 PM for lunch). Carla will confirm via text.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Calendar */}
        <div className="flex flex-col items-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onDateChange}
            disabled={isDateDisabled}
            fromDate={new Date()}
            className="rounded-xl border border-gray-200 shadow-sm"
          />
          {date && (
            <p className="text-sm text-[#5B8A8A] font-medium mt-3">
              <CalendarDays className="w-4 h-4 inline mr-1" />
              {format(date, "EEEE, MMMM d, yyyy")}
            </p>
          )}
        </div>

        {/* Time Slots */}
        <div className="flex flex-col gap-4">
          {!date ? (
            <div className="flex items-center justify-center h-full text-gray-400 text-sm">
              Select a date to see available times
            </div>
          ) : (
            <>
              {slots.morning.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Morning
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {slots.morning.map((slot) => (
                      <Button
                        key={slot}
                        type="button"
                        variant="outline"
                        size="sm"
                        className={cn(
                          "text-sm transition-all",
                          time === slot
                            ? "bg-[#5B8A8A] text-white border-[#5B8A8A] hover:bg-[#4A7272] hover:text-white"
                            : "hover:border-[#5B8A8A]/50 hover:text-[#5B8A8A]"
                        )}
                        onClick={() => onTimeChange(slot)}
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {slots.afternoon.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Afternoon
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {slots.afternoon.map((slot) => (
                      <Button
                        key={slot}
                        type="button"
                        variant="outline"
                        size="sm"
                        className={cn(
                          "text-sm transition-all",
                          time === slot
                            ? "bg-[#5B8A8A] text-white border-[#5B8A8A] hover:bg-[#4A7272] hover:text-white"
                            : "hover:border-[#5B8A8A]/50 hover:text-[#5B8A8A]"
                        )}
                        onClick={() => onTimeChange(slot)}
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {slots.morning.length === 0 && slots.afternoon.length === 0 && (
                <p className="text-sm text-gray-500">
                  No available slots for {totalDuration}-minute appointments on this day.
                </p>
              )}
            </>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="rounded-full px-6"
        >
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!canAdvance}
          className="bg-[#5B8A8A] hover:bg-[#4A7272] text-white rounded-full px-8"
        >
          Next: Your Details
        </Button>
      </div>
    </div>
  );
}
