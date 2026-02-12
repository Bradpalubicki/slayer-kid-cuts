"use client";

import { motion } from "framer-motion";
import { CheckCircle2, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookingWizard from "@/components/booking/booking-wizard";

export default function BookingPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <Badge className="bg-[#5B8A8A]/10 text-[#5B8A8A] border-[#5B8A8A]/20 mb-4">
            <CalendarDays className="w-4 h-4 mr-2" />
            Book Your Appointment
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Book a <span className="gradient-text">Haircut</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Select a service, pick your time, and confirm online. Carla will text to confirm.
          </p>
        </motion.div>

        {/* Phone fallback */}
        <div className="text-center text-sm text-gray-500 mb-8">
          Prefer to text or call?{" "}
          <a
            href="tel:+17029172350"
            className="text-[#5B8A8A] font-semibold hover:underline"
          >
            (702) 917-2350
          </a>
        </div>

        {/* Booking Wizard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <BookingWizard />
        </motion.div>

        {/* What to Expect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-center mb-6 text-gray-900">
            What to Expect After Booking
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                step: "1",
                text: "Book online above or text (702) 917-2350 to pick a date and time",
              },
              {
                step: "2",
                text: "You'll receive a short intake questionnaire about your child's experiences, sensitivities, comforts, and favorites",
              },
              {
                step: "3",
                text: "On arrival, text us and you'll receive the entry code when the suite is ready",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100"
              >
                <div className="w-8 h-8 rounded-full bg-[#5B8A8A]/10 flex items-center justify-center text-[#5B8A8A] font-bold text-sm flex-shrink-0">
                  {item.step}
                </div>
                <p className="text-gray-700 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Intake Form Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card className="border-2 border-[#5B8A8A]/20 bg-[#5B8A8A]/5">
            <CardContent className="p-6 text-center">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Already Booked?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete the intake questionnaire so Carla can prepare the space
                specifically for your child.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSetWpeKLI6A_HaWhivbO3BuWvgoVwqDgtrJzz7jqU-GLdP5EQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-full bg-[#5B8A8A] text-white hover:bg-[#4A7272] px-8"
                >
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Complete Intake Form
                </Button>
              </a>
              <p className="text-gray-500 text-xs mt-3">
                If your child is unable to complete the haircut, you will not be
                charged.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
