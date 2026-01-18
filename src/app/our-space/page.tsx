"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  DoorOpen,
  Car,
  MessageSquare,
  CheckCircle2,
  ChevronRight,
  Lightbulb,
  VolumeX,
  Thermometer,
  Armchair,
  Tv,
  Brain,
  Timer,
  Shield,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// SVG Floor Plan Component
function SensorySuiteFloorPlan() {
  return (
    <div className="bg-gradient-to-br from-[#5B8A8A]/5 to-[#7BA3A3]/5 rounded-3xl p-8 border-2 border-[#5B8A8A]/20">
      <div className="max-w-md mx-auto space-y-4">
        {/* Private Entrance */}
        <div className="flex items-center gap-3 bg-[#7BA3A3]/20 rounded-xl p-4 border-2 border-[#7BA3A3]/30">
          <DoorOpen className="w-8 h-8 text-[#7BA3A3]" />
          <div>
            <p className="font-bold text-[#7BA3A3]">Private Entrance</p>
            <p className="text-sm text-gray-600">Direct from parking lot</p>
          </div>
          <Car className="w-6 h-6 text-gray-400 ml-auto" />
        </div>

        <div className="flex justify-center">
          <ChevronRight className="w-6 h-6 text-gray-300 rotate-90" />
        </div>

        {/* Welcome Area */}
        <div className="bg-white rounded-xl p-4 border-2 border-gray-200 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">Welcome Area</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <span>• Coat hooks (child height)</span>
            <span>• Cubbies for belongings</span>
            <span>• Visual schedule posted</span>
            <span>• &quot;What happens today&quot; board</span>
          </div>
        </div>

        <div className="flex justify-center">
          <ChevronRight className="w-6 h-6 text-gray-300 rotate-90" />
        </div>

        {/* Styling Area */}
        <div className="bg-[#5B8A8A]/10 rounded-xl p-4 border-2 border-[#5B8A8A]/30">
          <h4 className="font-bold text-[#5B8A8A] mb-2">Styling Area</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <span>• Adjustable salon chair</span>
            <span>• Large mirror (removable)</span>
            <span>• Tablet/entertainment</span>
            <span>• Dimmable lighting</span>
            <span>• Sensory tool station</span>
            <span>• Quiet clippers & tools</span>
          </div>
        </div>

        <div className="flex justify-center">
          <ChevronRight className="w-6 h-6 text-gray-300 rotate-90" />
        </div>

        {/* Shampoo Sink */}
        <div className="bg-[#A69080]/10 rounded-xl p-4 border-2 border-[#A69080]/30">
          <h4 className="font-bold text-[#A69080] mb-2">
            Private Shampoo Sink
          </h4>
          <div className="text-sm text-gray-600">
            <span>• Reclined washing option</span>
            <span className="ml-4">• Skip-the-wash option OK</span>
          </div>
        </div>

        <div className="flex justify-center">
          <ChevronRight className="w-6 h-6 text-gray-300 rotate-90" />
        </div>

        {/* Calm Corner */}
        <div className="bg-[#6B5B4F]/10 rounded-xl p-4 border-2 border-[#6B5B4F]/30">
          <h4 className="font-bold text-[#6B5B4F] mb-2">
            Calm Corner / Break Space
          </h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <span>• Bean bag / soft seating</span>
            <span>• Weighted blanket</span>
            <span>• Dim lighting</span>
            <span>• Noise-canceling headphones</span>
            <span>• Fidget basket</span>
          </div>
        </div>

        <div className="flex justify-center">
          <ChevronRight className="w-6 h-6 text-gray-300 rotate-90" />
        </div>

        {/* Private Exit */}
        <div className="flex items-center gap-3 bg-[#7BA3A3]/20 rounded-xl p-4 border-2 border-[#7BA3A3]/30">
          <DoorOpen className="w-8 h-8 text-[#7BA3A3]" />
          <div>
            <p className="font-bold text-[#7BA3A3]">Private Exit</p>
            <p className="text-sm text-gray-600">
              Same as entrance - back to car
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OurSpacePage() {
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
              <MapPin className="w-4 h-4 mr-2" />
              Our Private Suite
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Your Own{" "}
              <span className="gradient-text">Sensory Sanctuary</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Little Roots Studio is a private suite — not a busy salon.
              Just you, your child, and Carla in a calm, controlled environment
              designed specifically for sensitive children.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-brown">
              Not a Salon. A Sanctuary.
            </h2>
            <p className="text-lg text-brown/70">
              Unlike traditional salons — even &ldquo;kid-friendly&rdquo; ones — Little Roots Studio
              is designed from the ground up for children who need calm, privacy, and predictability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "No Waiting Room",
                desc: "Wait in your car until we text you. Walk directly into your private suite.",
                icon: "🚗",
              },
              {
                title: "No Other Families",
                desc: "One appointment at a time. The entire space is yours.",
                icon: "👨‍👩‍👧",
              },
              {
                title: "No Background Noise",
                desc: "No music, no other clippers, no other children. Just calm.",
                icon: "🤫",
              },
              {
                title: "No Rushing",
                desc: "Take breaks whenever needed. Your child sets the pace.",
                icon: "⏰",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-sage/10"
              >
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold text-brown text-lg mb-2">{item.title}</h3>
                <p className="text-brown/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Sensory Suite */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Badge className="bg-[#7BA3A3]/10 text-[#7BA3A3] border-[#7BA3A3]/20 mb-4">
              <Brain className="w-4 h-4 mr-2" />
              The Space
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Complete Privacy & Calm
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              <strong>Location:</strong> Private entrance in Henderson, NV
              <br />
              <strong>Access:</strong> Walk directly from your car into the suite — no lobby, no waiting room
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Floor Plan */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Suite Layout</h3>
              <SensorySuiteFloorPlan />
            </motion.div>

            {/* Features Table */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">
                Suite Features at a Glance
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: DoorOpen,
                    feature: "Private Entrance",
                    details:
                      "Direct access from parking — skip the lobby entirely",
                  },
                  {
                    icon: Lightbulb,
                    feature: "Dimmable Lighting",
                    details:
                      "Adjustable LED panels, no harsh fluorescents, natural light option",
                  },
                  {
                    icon: VolumeX,
                    feature: "Soundproofed",
                    details:
                      "Quiet environment, white noise available, no background music",
                  },
                  {
                    icon: Thermometer,
                    feature: "Climate Control",
                    details: "Temperature adjusted to your child's comfort",
                  },
                  {
                    icon: Armchair,
                    feature: "Flexible Seating",
                    details:
                      "Adjustable styling chair + parent seating + calm corner",
                  },
                  {
                    icon: Tv,
                    feature: "Entertainment",
                    details:
                      "Tablet with shows, headphones available, bring your own if preferred",
                  },
                  {
                    icon: Brain,
                    feature: "Sensory Tools",
                    details:
                      "Weighted lap pad, blanket, fidgets, noise-canceling headphones",
                  },
                  {
                    icon: Timer,
                    feature: "Visual Supports",
                    details:
                      'Posted schedule, "first-then" board, visual timer',
                  },
                  {
                    icon: Shield,
                    feature: "Break Anytime",
                    details:
                      "Calm corner for breaks, or exit directly to your car",
                  },
                ].map((item) => (
                  <div
                    key={item.feature}
                    className="flex gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <item.icon className="w-6 h-6 text-[#5B8A8A] flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {item.feature}
                      </h4>
                      <p className="text-sm text-gray-600">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wait in Car Experience */}
      <section className="py-16 bg-gradient-to-r from-[#A69080] to-[#5B8A8A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The &quot;Wait in Car&quot; Experience
            </h2>
            <p className="text-xl text-white/90">
              Here&apos;s exactly how your appointment works
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                step: 1,
                icon: Car,
                title: "Drive & Park",
                desc: "Pull into our parking lot. Park near the private entrance.",
              },
              {
                step: 2,
                icon: MessageSquare,
                title: "Text Us",
                desc: 'Send a quick text: "We\'re here!" Stay in your car where your child is comfortable.',
              },
              {
                step: 3,
                icon: Sparkles,
                title: "Carla Prepares",
                desc: "Carla sets up the suite exactly how your child likes it.",
              },
              {
                step: 4,
                icon: Phone,
                title: "You're Invited In",
                desc: 'You\'ll receive a text: "All ready! Come on in through the private door."',
              },
              {
                step: 5,
                icon: DoorOpen,
                title: "Direct Entry",
                desc: "Walk straight from car to suite. No waiting room. No surprises.",
              },
              {
                step: 6,
                icon: CheckCircle2,
                title: "Private Exit",
                desc: "Leave directly through the same door. Back to your car in seconds.",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.step * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="bg-white/10 rounded-full w-8 h-8 mx-auto mb-3 flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-white/10 rounded-2xl p-6"
          >
            <p className="text-lg">
              <strong>Total exposure to unfamiliar environments:</strong>{" "}
              Minimal
              <br />
              <strong>Control over the experience:</strong> Maximum
            </p>
          </motion.div>
        </div>
      </section>

      {/* Is This Right For Your Child? */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Is Little Roots Right for Your Child?
            </h2>
            <p className="text-lg text-gray-600">
              Our private sensory suite is ideal for children who:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Get overwhelmed in busy or loud environments",
              "Have had traumatic haircut experiences",
              "Need a completely predictable routine",
              "Are autistic or neurodivergent",
              "Experience sensory processing differences",
              "Have anxiety around new experiences",
              "Need extra time and patience",
              "Are trying a haircut for the first time",
            ].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-sage/10 rounded-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-gray-600 mb-4">
              Not sure if Little Roots is right for your family? Reach out — Carla is
              happy to chat about your child&apos;s needs.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-2 border-[#5B8A8A] text-[#5B8A8A] hover:bg-[#5B8A8A] hover:text-white"
              >
                Contact Us
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-dashed border-gray-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#5B8A8A]/10 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-[#5B8A8A]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Photo Gallery</h3>
                  <p className="text-gray-600 mb-4">
                    Coming Soon! We&apos;ll share photos of our space before we
                    open so you can show your child exactly what they&apos;ll
                    see.
                  </p>
                  <Link href="/coming-soon">
                    <Button className="rounded-full bg-[#5B8A8A] text-white">
                      Join the Waitlist
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-2 border-dashed border-gray-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#7BA3A3]/10 flex items-center justify-center">
                    <Tv className="w-8 h-8 text-[#7BA3A3]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Virtual Tour</h3>
                  <p className="text-gray-600 mb-4">
                    Coming Soon! A video walkthrough so your child can
                    &quot;visit&quot; before their first appointment.
                  </p>
                  <Link href="/coming-soon">
                    <Button className="rounded-full bg-[#7BA3A3] text-gray-900">
                      Get Notified
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
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
              Ready to Visit?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our waitlist to be notified when we open and get priority
              booking!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/coming-soon">
                <Button
                  size="lg"
                  className="bg-white text-[#5B8A8A] hover:bg-white/90 rounded-full px-8"
                >
                  Join the Waitlist
                </Button>
              </Link>
              <Link href="/prepare">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#5B8A8A] rounded-full px-8"
                >
                  Prepare for Your Visit
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
