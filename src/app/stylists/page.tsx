"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Scissors, CheckCircle2, ChevronRight, DollarSign, Users,
  Clock, Building2, Sparkles, Heart, Shield, Calendar,
  MapPin, Phone, Mail, DoorOpen, Brain, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function StylistsPage() {
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
              For Stylists
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Booth Rental <span className="gradient-text">Opportunities</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join Las Vegas&apos;s premier family-friendly salon! We&apos;re looking for experienced
              stylists who love working with kids and families.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Build Your Business at Little Roots Studio
              </h2>
              <p className="text-lg text-gray-600">
                We&apos;re creating something special in Las Vegas — a kid-focused salon that families
                love to visit. Whether you specialize in kids, adults, or both, there&apos;s a place
                for you here.
              </p>
              <p className="text-lg text-gray-600">
                Benefit from Carla&apos;s reputation as Las Vegas&apos;s sensory-friendly specialist
                while running your own independent practice.
              </p>
              <div className="space-y-3">
                {[
                  "Keep 100% of your service revenue",
                  "Set your own hours and prices",
                  "Built-in family traffic",
                  "Professional, kid-friendly environment",
                  "Shared reception and amenities",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#7BA3A3] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 gradient-hero rounded-3xl rotate-3 opacity-20" />
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=500&fit=crop"
                alt="Salon styling station"
                width={600}
                height={500}
                className="relative rounded-3xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Space */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Badge className="bg-[#A69080]/10 text-[#A69080] border-[#A69080]/20 mb-4">
              <Building2 className="w-4 h-4 mr-2" />
              The Space
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Two Distinct Areas
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Carla's Suite */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-[#7BA3A3]/30 bg-[#7BA3A3]/5">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#7BA3A3]/20 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-[#7BA3A3]" />
                    </div>
                    <h3 className="text-xl font-bold">Carla&apos;s Private Sensory Suite</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Carla&apos;s dedicated space for her sensory-friendly clients. Features a private
                    entrance and is designed specifically for children with autism and anxiety.
                  </p>
                  <Badge className="bg-white text-[#7BA3A3] border-[#7BA3A3]/30">
                    Not available for rent — Carla&apos;s dedicated suite
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* Main Salon */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-[#5B8A8A]/30 bg-[#5B8A8A]/5">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#5B8A8A]/20 flex items-center justify-center">
                      <Scissors className="w-6 h-6 text-[#5B8A8A]" />
                    </div>
                    <h3 className="text-xl font-bold">Main Salon (Your Space)</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    The adjacent main salon is available for booth rentals. Choose from:
                  </p>
                  <div className="space-y-2">
                    {[
                      "4 private suites with sinks",
                      "4 styling chairs on open floor",
                      "Shared reception and waiting area",
                      "Shampoo stations",
                      "Laundry facilities",
                      "Break room",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#5B8A8A]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/our-space">
              <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-[#5B8A8A] text-[#5B8A8A] hover:bg-[#5B8A8A] hover:text-white">
                View Full Floor Plan
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What&apos;s Included
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                title: "Your Station",
                items: ["Private suite or open chair", "Styling chair", "Mirror", "Storage cabinet"],
                color: "#5B8A8A"
              },
              {
                icon: Sparkles,
                title: "Shared Amenities",
                items: ["Reception desk", "Waiting area", "Shampoo stations", "Laundry facilities"],
                color: "#A69080"
              },
              {
                icon: DollarSign,
                title: "Business Support",
                items: ["Appointment scheduling", "Card processing available", "Built-in foot traffic", "Marketing exposure"],
                color: "#7BA3A3"
              },
              {
                icon: Heart,
                title: "Family-Friendly",
                items: ["Kid-friendly environment", "Play area for children", "Themed chairs available", "Entertainment systems"],
                color: "#6B5B4F"
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-gray-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <category.icon className="w-6 h-6" style={{ color: category.color }} />
                    </div>
                    <h3 className="text-lg font-bold mb-4">{category.title}</h3>
                    <div className="space-y-2">
                      {category.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4" style={{ color: category.color }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <Badge className="bg-[#D4E5E5]/20 text-yellow-700 border-[#D4E5E5]/30 mb-4">
              <DollarSign className="w-4 h-4 mr-2" />
              Rental Options
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Flexible Terms to Fit Your Business
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-[#A69080]/30">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">Private Suite</h3>
                    <p className="text-gray-600">Your own room with door and sink</p>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Complete privacy with clients",
                      "Personal sink and styling setup",
                      "Lockable storage",
                      "Climate control",
                      "Great for building clientele",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#A69080] flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 mb-2">Starting at</p>
                    <p className="text-4xl font-bold text-[#A69080]">Contact Us</p>
                    <p className="text-sm text-gray-500">for pricing</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-[#6B5B4F]/30">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">Open Floor Chair</h3>
                    <p className="text-gray-600">Station on the main styling floor</p>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Fun, social environment",
                      "Shared shampoo stations",
                      "Great energy and vibe",
                      "Lower overhead",
                      "Perfect for walk-ins",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#6B5B4F] flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 mb-2">Starting at</p>
                    <p className="text-4xl font-bold text-[#6B5B4F]">Contact Us</p>
                    <p className="text-sm text-gray-500">for pricing</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ideal Candidates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              We&apos;re Looking For Stylists Who...
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Heart, text: "Love working with kids and families", required: true },
              { icon: Shield, text: "Are patient and understanding", required: true },
              { icon: Star, text: "Have a positive, fun energy", required: true },
              { icon: Scissors, text: "Are licensed cosmetologists in Nevada", required: true },
              { icon: Users, text: "Want to build their own clientele", required: false },
              { icon: Brain, text: "Interest in sensory-friendly techniques (training available!)", required: false },
            ].map((item) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
              >
                <item.icon className="w-6 h-6 text-[#5B8A8A] flex-shrink-0" />
                <div>
                  <p className="text-gray-700">{item.text}</p>
                  {item.required && (
                    <Badge className="mt-2 bg-[#7BA3A3]/10 text-[#7BA3A3] border-[#7BA3A3]/20 text-xs">
                      Required
                    </Badge>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-hero rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We&apos;d love to hear from you! Contact us to schedule a tour of the space and
              discuss rental options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#5B8A8A] hover:bg-white/90 rounded-full px-8">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
              <a href="tel:+17025551234">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#5B8A8A] rounded-full px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
