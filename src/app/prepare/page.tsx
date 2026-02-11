"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  Calendar,
  Car,
  DoorOpen,
  MessageSquare,
  Brain,
  Heart,
  Shield,
  Star,
  Lightbulb,
  Timer,
  Tv,
  Book,
  Camera,
  Gift,
  Sparkles,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function PreparePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#7BA3A3]/10 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge className="bg-[#7BA3A3]/10 text-[#7BA3A3] border-[#7BA3A3]/20 mb-4">
              <Book className="w-4 h-4 mr-2" />
              Prepare for Your Visit
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Setting Up for <span className="gradient-text">Success</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every appointment begins with understanding. Here&apos;s what to expect from booking through arrival so your child feels comfortable and safe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Before the Day */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Badge className="bg-[#5B8A8A]/10 text-[#5B8A8A] border-[#5B8A8A]/20 mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              Days Before
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Preparing in the Days Before
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Book,
                title: "Complete the Intake Questionnaire",
                description:
                  "After booking, you will receive a short intake questionnaire asking about your child's past experiences, sensitivities, dislikes, comforts, and favorites. This allows Carla to prepare the space specifically for your child.",
                color: "#5B8A8A",
              },
              {
                icon: Tv,
                title: "Pick Their Favorite Show or Song",
                description:
                  "Let us know your child's favorite show, song, or sound — it can already be playing when they arrive in the suite.",
                color: "#A69080",
              },
              {
                icon: Camera,
                title: "Share Comforts & Sensitivities",
                description:
                  "The intake questionnaire covers what helps your child feel safe. The more we know, the better prepared the space will be.",
                color: "#6B5B4F",
              },
              {
                icon: Sparkles,
                title: "Talk About the Visit",
                description:
                  "Let your child know they'll be going to a calm, private space where they can watch their favorite show and play with toys. Nothing will be rushed or forced.",
                color: "#7BA3A3",
              },
              {
                icon: Timer,
                title: "Know There's No Pressure",
                description:
                  "If your child does not want to sit in the barber chair, that's okay. Haircuts can happen on a parent's lap, the floor, or wherever they feel safest.",
                color: "#D4E5E5",
              },
              {
                icon: Gift,
                title: "No Charge If Unable to Complete",
                description:
                  "If your child is unable to complete the haircut, you will not be charged. Comfort and trust always come first.",
                color: "#F15BB5",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-gray-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <item.icon
                        className="w-6 h-6"
                        style={{ color: item.color }}
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Badge className="bg-[#6B5B4F]/10 text-[#6B5B4F] border-[#6B5B4F]/20 mb-4">
              <Heart className="w-4 h-4 mr-2" />
              What to Bring
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Comfort Items Welcome!
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Feel free to bring anything that helps your child feel
              comfortable. We have sensory tools available, but your
              child&apos;s own items may feel more familiar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-[#7BA3A3]">
                We Provide:
              </h3>
              <div className="space-y-3">
                {[
                  "Earth-toned, calming decor",
                  "Light-controlled and low-noise environment",
                  "TV with favorite shows or videos",
                  "Nintendo Switch gaming option",
                  "Sensory toys and regulation tools",
                  "Weighted capes available",
                  "Flexible seating options (chair, lap, floor)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#7BA3A3] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-[#5B8A8A]">
                You&apos;re Welcome to Bring:
              </h3>
              <div className="space-y-3">
                {[
                  "Their own headphones",
                  "Favorite stuffed animal or comfort object",
                  "Preferred snacks or treats",
                  "Tablet with their favorite shows loaded",
                  "Chew necklace or oral sensory tools",
                  "Their own fidget toys",
                  "A photo of the haircut style they want",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-[#5B8A8A] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Day Of Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Badge className="bg-[#A69080]/10 text-[#A69080] border-[#A69080]/20 mb-4">
              <Clock className="w-4 h-4 mr-2" />
              Day Of
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tips for Appointment Day
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Arriving at the Studio",
                tips: [
                  "Little Roots Studio is inside a secured building with no waiting room",
                  "When you arrive, send a text to (702) 917-2350",
                  "If Carla does not respond immediately, she is still with the previous family",
                  "Once your appointment time begins and the suite is ready, you will receive the entry code",
                ],
              },
              {
                title: "When You Enter",
                tips: [
                  "Your child will be welcomed into a calm, private environment",
                  "Their favorite show, song, or sound can already be playing",
                  "Toys and sensory-friendly items will be available",
                  "The space will remain quiet and light-controlled",
                ],
              },
              {
                title: "During the Haircut",
                tips: [
                  "Carla gently introduces herself and her tools at your child's pace",
                  "Nothing is rushed and nothing is forced",
                  "Haircuts can be done on a parent's lap, being held, or on the floor",
                  "Only patience, flexibility, and gentle supportive positioning",
                ],
              },
              {
                title: "If Things Get Hard",
                tips: [
                  "There is no restraining and no forcing a child to hold still",
                  "If your child is unable to complete the haircut, you will not be charged",
                  "Comfort and trust always come first",
                  "There's no judgment here, ever",
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-gray-100">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                    <div className="space-y-2">
                      {section.tips.map((tip) => (
                        <div key={tip} className="flex items-start gap-3">
                          <Star className="w-4 h-4 text-[#D4E5E5] flex-shrink-0 mt-1" />
                          <span className="text-gray-600">{tip}</span>
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

      {/* Private Sensory Suite Option */}
      <section className="py-16 bg-gradient-to-r from-[#5B8A8A]/10 to-[#7BA3A3]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="bg-[#5B8A8A]/20 text-[#5B8A8A] border-[#5B8A8A]/30 mb-4">
              <DoorOpen className="w-4 h-4 mr-2" />
              Private Sensory Suite Option
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Need the Calmest Experience?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              For children who need extra support, ask about booking
              Carla&apos;s Private Sensory Suite.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">
                What Makes It Different:
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: DoorOpen,
                    text: "Private entrance — Walk directly from car to suite",
                  },
                  {
                    icon: Car,
                    text: "Wait in car — Text when you arrive, we'll text when ready",
                  },
                  {
                    icon: Shield,
                    text: "No waiting room — Skip the lobby entirely",
                  },
                  {
                    icon: Heart,
                    text: "Complete privacy — Just you, your child, and Carla",
                  },
                  {
                    icon: Clock,
                    text: "Same space every time — Builds familiarity and routine",
                  },
                  {
                    icon: Lightbulb,
                    text: "Controlled environment — You control lighting, sound, everything",
                  },
                  {
                    icon: Brain,
                    text: "Calm corner available — Break space if needed",
                  },
                  {
                    icon: CheckCircle2,
                    text: "Private exit — Leave directly when done",
                  },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-[#5B8A8A] flex-shrink-0" />
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">
                This Option is Ideal For:
              </h3>
              <div className="space-y-3">
                {[
                  "First appointments for highly anxious children",
                  "Kids who've had traumatic haircut experiences",
                  "Children with autism who need predictable, controlled environments",
                  "Gradual exposure therapy (just visit the space — no haircut required!)",
                  "Any situation where minimal stimulation is essential",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-white rounded-xl p-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#7BA3A3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/our-space">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#5B8A8A] to-[#7BA3A3] text-white rounded-full px-10 shadow-xl"
              >
                <DoorOpen className="w-5 h-5 mr-2" />
                Learn More About Our Space
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* For First Haircuts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <Badge className="bg-[#D4E5E5]/20 text-yellow-700 border-[#D4E5E5]/30">
                <Star className="w-4 h-4 mr-2" />
                First Haircut?
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Special Tips for First Timers
              </h2>
              <div className="space-y-4">
                {[
                  'Consider a "practice visit" first — just come see the space, no haircut',
                  "Bring a sibling or friend who's had haircuts before",
                  "Start with just a trim — we can always do more later",
                  "Our First Haircut Package includes a certificate and keepsake lock of hair",
                  "Take photos to celebrate the milestone!",
                ].map((tip) => (
                  <div key={tip} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4E5E5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
              <Link href="/services#first-haircut">
                <Button
                  size="lg"
                  className="rounded-full bg-[#D4E5E5] text-gray-900 hover:bg-[#D4E5E5]/90"
                >
                  Learn About First Haircut Package
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4E5E5] to-[#6B5B4F] rounded-3xl rotate-3 opacity-20" />
              <Image
                src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=600&h=500&fit=crop"
                alt="Baby's first haircut milestone moment"
                width={600}
                height={500}
                className="relative rounded-3xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Questions CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#A69080]/10 flex items-center justify-center">
              <Phone className="w-8 h-8 text-[#A69080]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              We&apos;re happy to chat before your visit to answer any
              questions, discuss your child&apos;s needs, or help you prepare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-full bg-[#A69080] text-white"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
              <Link href="/faq">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-[#5B8A8A] text-[#5B8A8A] hover:bg-[#5B8A8A] hover:text-white"
                >
                  Read Our FAQ
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
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
              Text or call (702) 917-2350 to book your appointment.
            </p>
            <a href="tel:+17029172350">
              <Button
                size="lg"
                className="bg-white text-[#5B8A8A] hover:bg-white/90 rounded-full px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Text or Call to Book
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
