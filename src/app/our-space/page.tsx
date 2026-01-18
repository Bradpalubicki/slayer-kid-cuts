"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  DoorOpen, Car, MessageSquare, CheckCircle2, ChevronRight,
  Lightbulb, VolumeX, Thermometer, Armchair, Tv, Brain,
  Timer, Shield, MapPin, Phone, Mail, Scissors, Users, Baby,
  Sparkles, Coffee, Droplets
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// SVG Floor Plan Components
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
          <h4 className="font-bold text-[#A69080] mb-2">Private Shampoo Sink</h4>
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
          <h4 className="font-bold text-[#6B5B4F] mb-2">Calm Corner / Break Space</h4>
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
            <p className="text-sm text-gray-600">Same as entrance - back to car</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainSalonFloorPlan() {
  return (
    <div className="bg-gradient-to-br from-[#6B5B4F]/5 to-[#A69080]/5 rounded-3xl p-8 border-2 border-gray-200">
      <div className="space-y-6">
        {/* Main Entrance */}
        <div className="flex items-center gap-3 bg-gray-100 rounded-xl p-4 border-2 border-gray-200">
          <DoorOpen className="w-8 h-8 text-gray-600" />
          <div>
            <p className="font-bold text-gray-900">Main Entrance</p>
            <p className="text-sm text-gray-600">Standard salon entry</p>
          </div>
        </div>

        {/* Reception & Waiting */}
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-3">Reception & Waiting Area</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { icon: Users, label: "Check-in desk" },
              { icon: Armchair, label: "Parent seating" },
              { icon: Baby, label: "Kids play area" },
              { icon: Sparkles, label: "Retail display" },
              { icon: Coffee, label: "Refreshments" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-gray-600">
                <item.icon className="w-4 h-4 text-[#5B8A8A]" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Open Styling Floor */}
        <div className="bg-[#6B5B4F]/10 rounded-xl p-6 border-2 border-[#6B5B4F]/30">
          <h4 className="font-bold text-[#6B5B4F] mb-3">Open Styling Floor (4 Chairs)</h4>
          <div className="grid grid-cols-4 gap-3 mb-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="bg-white rounded-lg p-3 text-center border border-gray-200">
                <Scissors className="w-6 h-6 mx-auto text-[#6B5B4F] mb-1" />
                <span className="text-xs text-gray-600">Chair {num}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <span>• Fun themed chairs (cars, princesses)</span>
            <span>• Individual tablets at each station</span>
            <span>• Kid-height mirrors</span>
            <span>• Booster seats available</span>
          </div>
        </div>

        {/* Private Suites */}
        <div className="bg-[#A69080]/10 rounded-xl p-6 border-2 border-[#A69080]/30">
          <h4 className="font-bold text-[#A69080] mb-3">Private Suites (4 Suites)</h4>
          <div className="grid grid-cols-4 gap-3 mb-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="bg-white rounded-lg p-3 text-center border border-gray-200">
                <DoorOpen className="w-5 h-5 mx-auto text-[#A69080] mb-1" />
                <span className="text-xs text-gray-600">Suite {num}</span>
                <p className="text-xs text-gray-400">w/Sink</p>
              </div>
            ))}
          </div>
          <div className="text-sm text-gray-600">
            <p>• Each suite is a private room with door</p>
            <p>• Full sink and styling setup</p>
            <p>• Available for rent by independent stylists</p>
          </div>
        </div>

        {/* Shared Amenities */}
        <div className="bg-gray-100 rounded-xl p-4 border-2 border-gray-200">
          <h4 className="font-bold text-gray-900 mb-2">Shared Amenities</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <span>• Shampoo stations</span>
            <span>• Family restrooms</span>
            <span>• Staff break room</span>
            <span>• Laundry facilities</span>
          </div>
        </div>

        {/* Connection Note */}
        <div className="bg-[#5B8A8A]/10 rounded-xl p-4 border-l-4 border-[#5B8A8A]">
          <p className="text-sm text-gray-700">
            <strong>Interior Door</strong> → Connects to Carla&apos;s Private Sensory Suite (staff access only).
            Clients using the private suite never need to enter the main salon.
          </p>
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
              Our Space
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Designed for <span className="gradient-text">Sensory Comfort</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Little Roots Studio was designed from the ground up with sensory-friendly experiences in mind.
              Here&apos;s a look at our layout so you know exactly what to expect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carla's Private Sensory Suite */}
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
              Carla&apos;s Private Sensory Suite
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Complete Privacy & Calm
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              <strong>Location:</strong> Separate entrance on the side of the building<br />
              <strong>Access:</strong> Private door directly from parking lot — no need to enter main salon
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
              <h3 className="text-xl font-bold mb-6">Suite Features at a Glance</h3>
              <div className="space-y-3">
                {[
                  { icon: DoorOpen, feature: "Private Entrance", details: "Direct access from parking lot, no main salon exposure" },
                  { icon: Lightbulb, feature: "Lighting", details: "Dimmable LED panels, no harsh fluorescents, natural light option" },
                  { icon: VolumeX, feature: "Sound", details: "Soundproofed walls, white noise machine available, no background music" },
                  { icon: Thermometer, feature: "Temperature", details: "Individual climate control" },
                  { icon: Armchair, feature: "Seating", details: "Adjustable styling chair + parent seating + calm corner" },
                  { icon: Tv, feature: "Entertainment", details: "Wall-mounted tablet, headphones, favorite shows welcome" },
                  { icon: Brain, feature: "Sensory Tools", details: "Weighted lap pad, blanket, fidgets, noise-canceling headphones, chewy jewelry" },
                  { icon: Timer, feature: "Visual Supports", details: "Posted schedule, \"first-then\" board, timer display" },
                  { icon: Shield, feature: "Escape Option", details: "Break anytime in calm corner, or exit directly to car" },
                ].map((item) => (
                  <div key={item.feature} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                    <item.icon className="w-6 h-6 text-[#5B8A8A] flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">{item.feature}</h4>
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
              Here&apos;s exactly how a private suite appointment works
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: 1, icon: Car, title: "Drive & Park", desc: "Pull into our parking lot. Dedicated spots near Carla's private entrance." },
              { step: 2, icon: MessageSquare, title: "Text Us", desc: "Send a quick text: \"We're here!\" Stay in your car where your child is comfortable." },
              { step: 3, icon: Sparkles, title: "We Prepare", desc: "Carla sets up the suite exactly how your child likes it." },
              { step: 4, icon: Phone, title: "You're Invited In", desc: "You'll receive a text: \"All ready! Come on in through the private door.\"" },
              { step: 5, icon: DoorOpen, title: "Direct Entry", desc: "Walk straight from car to suite. No waiting room. No surprises." },
              { step: 6, icon: CheckCircle2, title: "Private Exit", desc: "Leave directly through the same door. Back to your car in seconds." },
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
              <strong>Total exposure to unfamiliar environments:</strong> Minimal<br />
              <strong>Control over the experience:</strong> Maximum
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Salon */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Badge className="bg-[#6B5B4F]/10 text-[#6B5B4F] border-[#6B5B4F]/20 mb-4">
              <Scissors className="w-4 h-4 mr-2" />
              The Main Salon
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Fun & Kid-Friendly Environment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              For families comfortable with a traditional salon environment, or when siblings
              need haircuts too, our main salon offers a fun, kid-friendly experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MainSalonFloorPlan />
          </motion.div>
        </div>
      </section>

      {/* Choosing the Right Space */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Choosing the Right Space for Your Child
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 font-bold">If your child...</th>
                  <th className="text-left p-4 font-bold">We recommend...</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { condition: "Gets overwhelmed in busy environments", recommendation: "Private Sensory Suite", suite: true },
                  { condition: "Has had traumatic haircut experiences", recommendation: "Private Sensory Suite", suite: true },
                  { condition: "Needs a completely predictable routine", recommendation: "Private Sensory Suite", suite: true },
                  { condition: "Does well with some activity around them", recommendation: "Main Salon", suite: false },
                  { condition: "Enjoys watching other kids", recommendation: "Main Salon", suite: false },
                  { condition: "Has siblings getting cuts at the same time", recommendation: "Main Salon (or both!)", suite: false },
                  { condition: "Is trying a haircut for the first time", recommendation: "Private Sensory Suite (recommended)", suite: true },
                  { condition: "Has graduated from needing full accommodation", recommendation: "Main Salon with Carla", suite: false },
                ].map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4 text-gray-700">{row.condition}</td>
                    <td className="p-4">
                      <Badge className={row.suite ? "bg-[#7BA3A3]/10 text-[#7BA3A3] border-[#7BA3A3]/20" : "bg-[#6B5B4F]/10 text-[#6B5B4F] border-[#6B5B4F]/20"}>
                        {row.recommendation}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-gray-600 mb-4">
              Not sure? Contact us and we&apos;ll help you decide what&apos;s best for your child.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-[#5B8A8A] text-[#5B8A8A] hover:bg-[#5B8A8A] hover:text-white">
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
                    Coming Soon! We&apos;ll share photos of our space before we open so you can show your child exactly what they&apos;ll see.
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
                    Coming Soon! A video walkthrough so your child can &quot;visit&quot; before their first appointment.
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
              Join our waitlist to be notified when we open and get priority booking!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/coming-soon">
                <Button size="lg" className="bg-white text-[#5B8A8A] hover:bg-white/90 rounded-full px-8">
                  Join the Waitlist
                </Button>
              </Link>
              <Link href="/prepare">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#5B8A8A] rounded-full px-8">
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
