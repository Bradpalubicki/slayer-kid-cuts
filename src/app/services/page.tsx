"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Scissors, Baby, Car, Sparkles, Shield, PartyPopper, CheckCircle2, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: "kids-haircuts",
    icon: Scissors,
    title: "Kids Haircuts",
    tagline: "Expert cuts that make kids smile",
    price: "From $25",
    duration: "30 minutes",
    color: "#FF6B9D",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=500&fit=crop",
    description: "Our signature kids haircuts are designed to be a fun, stress-free experience. Each station features a TV with cartoons, tablets with games, and themed chairs to keep your little one entertained.",
    includes: [
      "Consultation with stylist",
      "Fun themed styling chair",
      "Entertainment during cut",
      "Hot towel finish",
      "Lollipop treat after",
    ],
  },
  {
    id: "first-haircut",
    icon: Baby,
    title: "First Haircut Package",
    tagline: "Capture the milestone forever",
    price: "$35",
    duration: "45 minutes",
    color: "#9B5DE5",
    image: "https://images.unsplash.com/photo-1519699047748-de8e44e9dee9?w=800&h=500&fit=crop",
    description: "Your baby's first haircut is a special milestone! Our First Haircut Package celebrates this moment with keepsakes you'll treasure forever.",
    includes: [
      "Everything in Kids Haircut",
      "Official First Haircut Certificate",
      "Lock of hair in keepsake envelope",
      "Photo opportunity",
      "Special first haircut bib",
    ],
  },
  {
    id: "mobile-visits",
    icon: Car,
    title: "Mobile Home Visits",
    tagline: "We bring the salon to you!",
    price: "From $40",
    duration: "45 minutes",
    color: "#00BBF9",
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&h=500&fit=crop",
    description: "Can't make it to the salon? No problem! Our mobile service brings the full Slayer Kid Cuts experience right to your home. Perfect for anxious children or busy families.",
    includes: [
      "Full haircut service at your home",
      "All professional equipment provided",
      "Same great experience",
      "Flexible scheduling",
      "Available across Henderson & Las Vegas",
    ],
  },
  {
    id: "hair-tinsel",
    icon: Sparkles,
    title: "Hair Tinsel & Fun Styles",
    tagline: "Add some sparkle and pizzazz",
    price: "From $10",
    duration: "15-30 minutes",
    color: "#FEE440",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=500&fit=crop",
    description: "Want to add some extra fun? Our hair tinsel and creative styling options let kids express their personality with sparkle, temporary color, and fun styles!",
    includes: [
      "Hair tinsel application",
      "Temporary color streaks",
      "Creative updos",
      "Braids and twists",
      "Lasts 4-8 weeks (tinsel)",
    ],
  },
  {
    id: "special-needs",
    icon: Shield,
    title: "Special Needs Friendly",
    tagline: "Patient, understanding, caring",
    price: "No extra cost",
    duration: "As needed",
    color: "#00F5D4",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=500&fit=crop",
    description: "Every child deserves to feel comfortable during their haircut. Slayer is specially trained to work with children who have sensory sensitivities, autism, ADHD, or other special needs.",
    includes: [
      "Quieter, calmer environment",
      "Extra time and patience",
      "Sensory-friendly tools available",
      "Parent can stay close",
      "Flexible scheduling for quieter times",
    ],
  },
  {
    id: "birthday-parties",
    icon: PartyPopper,
    title: "Birthday Parties",
    tagline: "A glamorous celebration",
    price: "Custom quote",
    duration: "2-3 hours",
    color: "#F15BB5",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=500&fit=crop",
    description: "Make their birthday unforgettable! Our birthday party packages include hair styling, tinsel, temporary color, and tons of fun for the birthday child and their friends.",
    includes: [
      "Private party space",
      "Hair styling for all guests",
      "Tinsel or temp color",
      "Party favors",
      "Photo opportunities",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#9B5DE5]/5 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge className="bg-[#9B5DE5]/10 text-[#9B5DE5] border-[#9B5DE5]/20 mb-4">
              <Scissors className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Haircuts That Make <span className="gradient-text">Kids Happy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From first haircuts to fun styles, we offer everything to make your child&apos;s haircut experience amazing!
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
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div
                  className="absolute inset-0 rounded-3xl -rotate-3 opacity-20"
                  style={{ background: `linear-gradient(135deg, ${service.color}, #9B5DE5)` }}
                />
                <Image
                  src={service.image}
                  alt={service.title}
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
                      <service.icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                    <div>
                      <p className="font-bold text-2xl" style={{ color: service.color }}>
                        {service.price}
                      </p>
                      <p className="text-sm text-gray-500">{service.duration}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
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
                <h2 className="text-3xl sm:text-4xl font-bold">{service.title}</h2>
                <p className="text-lg text-gray-600">{service.description}</p>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">What&apos;s Included:</h3>
                  {service.includes.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: service.color }} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="/book">
                  <Button
                    size="lg"
                    className="rounded-full px-8 text-white"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}, #9B5DE5)`,
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
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
                        <service.icon className="w-6 h-6" style={{ color: service.color }} />
                      </div>
                      <div>
                        <h3 className="font-bold">{service.title}</h3>
                        <p className="text-sm text-gray-500">{service.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <p className="text-2xl font-bold" style={{ color: service.color }}>
                        {service.price}
                      </p>
                      <Link href="/book">
                        <Button variant="ghost" size="sm" className="text-[#9B5DE5]">
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
                <Button size="lg" className="bg-white text-[#9B5DE5] hover:bg-white/90 rounded-full px-8">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#9B5DE5] rounded-full px-8">
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
