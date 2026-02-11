"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Scissors,
  CheckCircle2,
  Shield,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    name: "Sensory-Friendly Haircut",
    duration: "60 min",
    price: "$45",
    description: "Full sensory accommodations, intake questionnaire, calm environment, and patience at every step.",
    icon: Shield,
    featured: true,
  },
  {
    name: "Kids Haircut",
    duration: "30 min",
    price: "$30",
    description: "Calm, private haircut experience. One family at a time.",
    icon: Scissors,
    featured: false,
  },
  {
    name: "Buzz Cut / Ends Trimmed",
    duration: "15-20 min",
    price: "$20",
    description: "Quick buzz cut or ends trim in a sensory-friendly environment.",
    icon: Scissors,
    featured: false,
  },
  {
    name: "Bang Trim",
    duration: "10-15 min",
    price: "$15",
    description: "Quick bang trim in a calm, private suite.",
    icon: Scissors,
    featured: false,
  },
];

export default function BookingPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="bg-[#9B5DE5]/10 text-[#9B5DE5] border-[#9B5DE5]/20 mb-4">
            <Phone className="w-4 h-4 mr-2" />
            Book Your Appointment
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Book a <span className="gradient-text">Haircut</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Text or call Carla at{" "}
            <a href="tel:+17029172350" className="text-[#9B5DE5] font-semibold hover:underline">
              (702) 917-2350
            </a>{" "}
            to schedule your appointment.
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-4 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`border-2 ${service.featured ? "border-[#9B5DE5]/30 bg-[#9B5DE5]/5" : "border-gray-100"}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${service.featured ? "bg-[#9B5DE5]/10" : "bg-gray-100"}`}>
                        <service.icon className={`w-6 h-6 ${service.featured ? "text-[#9B5DE5]" : "text-gray-500"}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">{service.name}</h3>
                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{service.duration}</span>
                        </div>
                        <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-[#9B5DE5] flex-shrink-0 ml-4">
                      {service.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="gradient-hero rounded-3xl p-10 text-center text-white"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Ready to Book?
          </h2>
          <p className="text-white/90 mb-6 max-w-lg mx-auto">
            Text or call Carla to schedule. She&apos;ll answer any questions and find the
            perfect time for your family.
          </p>
          <a href="tel:+17029172350">
            <Button
              size="lg"
              className="bg-white text-[#9B5DE5] hover:bg-white/90 rounded-full px-8 shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              (702) 917-2350
            </Button>
          </a>
          <p className="text-white/70 text-sm mt-4">
            Text is preferred — Carla stays fully present with each child during appointments.
          </p>
        </motion.div>

        {/* What to expect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold text-center mb-6 text-gray-900">What to Expect After Booking</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { step: "1", text: "Text or call (702) 917-2350 to pick a date and time" },
              { step: "2", text: "You'll receive a short intake questionnaire about your child's experiences, sensitivities, comforts, and favorites" },
              { step: "3", text: "On arrival, text us and you'll receive the entry code when the suite is ready" },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-[#9B5DE5]/10 flex items-center justify-center text-[#9B5DE5] font-bold text-sm flex-shrink-0">
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
          <Card className="border-2 border-[#9B5DE5]/20 bg-[#9B5DE5]/5">
            <CardContent className="p-6 text-center">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Already Booked?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete the intake questionnaire so Carla can prepare the space specifically for your child.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSetWpeKLI6A_HaWhivbO3BuWvgoVwqDgtrJzz7jqU-GLdP5EQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-full bg-[#9B5DE5] text-white hover:bg-[#9B5DE5]/90 px-8"
                >
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Complete Intake Form
                </Button>
              </a>
              <p className="text-gray-500 text-xs mt-3">
                If your child is unable to complete the haircut, you will not be charged.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
