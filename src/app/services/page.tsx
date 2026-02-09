"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Scissors,
  CheckCircle2,
  Calendar,
  ChevronRight,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: "sensory-friendly",
    icon: Brain,
    title: "Sensory-Friendly Haircut",
    tagline: "Our signature service",
    price: "$45",
    duration: "60 minutes",
    color: "#7BA3A3",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=500&fit=crop",
    imageAlt:
      "Calm child during sensory-friendly haircut with accommodations in Henderson NV",
    description:
      "Every appointment begins with understanding. After booking, you receive a short intake questionnaire about your child's sensitivities, comforts, and favorites. The space is prepared specifically for your child — their favorite show, song, or sound can already be playing when they arrive.",
    includes: [
      "Intake questionnaire before appointment",
      "Personalized space preparation",
      "Weighted capes available",
      "Flexible seating — chair, lap, or floor",
      "No restraining, no forcing — only patience",
      "No charge if child cannot complete the haircut",
    ],
    featured: true,
  },
  {
    id: "kids-haircuts",
    icon: Scissors,
    title: "Kids Haircut",
    tagline: "A calm, private experience",
    price: "$30",
    duration: "30 minutes",
    color: "#6B5B4F",
    image:
      "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=800&h=500&fit=crop",
    imageAlt:
      "Happy child during gentle kids haircut at sensory-friendly salon Henderson Nevada",
    description:
      "A fun, private haircut experience in a calm environment. Your child will enjoy their favorite show or the Nintendo Switch while getting a great cut. One family at a time — never rushed.",
    includes: [
      "Private suite experience",
      "TV with favorite shows or videos",
      "Nintendo Switch gaming option",
      "Sensory toys available",
      "One family at a time",
    ],
  },
  {
    id: "buzz-cut",
    icon: Scissors,
    title: "Buzz Cut / Ends Trimmed",
    tagline: "Quick and gentle",
    price: "$20",
    duration: "15-20 minutes",
    color: "#5B8A8A",
    image:
      "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=800&h=500&fit=crop",
    imageAlt:
      "Quick buzz cut for kids at Little Roots Studio Henderson",
    description:
      "A quick buzz cut or ends trim in our calm, private environment. Same patience and care as every service we offer. Licensed cosmetologist — lowest fade offered is a #1.",
    includes: [
      "Private suite experience",
      "Calm, low-stimulation environment",
      "Patient, gentle approach",
      "Sensory tools available if needed",
    ],
  },
  {
    id: "bang-trim",
    icon: Scissors,
    title: "Bang Trim",
    tagline: "A quick refresh",
    price: "$15",
    duration: "10-15 minutes",
    color: "#A69080",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&h=500&fit=crop",
    imageAlt: "Quick bang trim for kids at sensory-friendly salon",
    description:
      "A quick bang trim in the same calm, private environment. Perfect for a quick refresh between full haircut appointments.",
    includes: [
      "Private suite experience",
      "Calm environment",
      "Quick and gentle",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#5B8A8A]/5 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge className="bg-[#5B8A8A]/10 text-[#5B8A8A] border-[#5B8A8A]/20 mb-4">
              <Scissors className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Haircuts That Make{" "}
              <span className="gradient-text">Kids Happy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From first haircuts to fun styles, we offer everything to make
              your child&apos;s haircut experience amazing!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div
                  className="absolute inset-0 rounded-3xl -rotate-3 opacity-20"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}, #5B8A8A)`,
                  }}
                />
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={800}
                  height={500}
                  className="relative rounded-3xl shadow-2xl"
                />
                <div
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4"
                  style={{ borderLeft: `4px solid ${service.color}` }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <service.icon
                        className="w-6 h-6"
                        style={{ color: service.color }}
                      />
                    </div>
                    <div>
                      <p
                        className="font-bold text-2xl"
                        style={{ color: service.color }}
                      >
                        {service.price}
                      </p>
                      <p className="text-sm text-gray-500">
                        {service.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <Badge
                  className="border"
                  style={{
                    backgroundColor: `${service.color}10`,
                    color: service.color,
                    borderColor: `${service.color}30`,
                  }}
                >
                  {service.tagline}
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600">{service.description}</p>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">
                    What&apos;s Included:
                  </h3>
                  {service.includes.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: service.color }}
                      />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="/book">
                  <Button
                    size="lg"
                    className="rounded-full px-8 text-white"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}, #5B8A8A)`,
                    }}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book {service.title}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h2>
            <p className="text-lg text-gray-600">
              No hidden fees, no surprises - just great haircuts!
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${service.color}15` }}
                      >
                        <service.icon
                          className="w-6 h-6"
                          style={{ color: service.color }}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{service.title}</h3>
                        <p className="text-sm text-gray-500">
                          {service.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <p
                        className="text-2xl font-bold"
                        style={{ color: service.color }}
                      >
                        {service.price}
                      </p>
                      <Link href="/book">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#5B8A8A]"
                        >
                          Book
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-hero rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Book?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule your child&apos;s next fun haircut experience today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-white text-[#5B8A8A] hover:bg-white/90 rounded-full px-8"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#5B8A8A] rounded-full px-8"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
