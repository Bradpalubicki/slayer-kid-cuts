"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Scissors, Star, Heart, Sparkles, Car, Calendar,
  CheckCircle2, Phone, MapPin, Clock, Shield,
  Smile, Music, Gamepad2, Baby, PartyPopper, ChevronRight,
  ShoppingBag, Crown, Users, Brain, Headphones, Volume2,
  MessageSquare, DoorOpen, Lightbulb, VolumeX, Timer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="absolute inset-0 confetti-bg opacity-30" />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-32 left-10 w-20 h-20 rounded-full bg-[#FF6B9D]/20 blur-xl"
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-48 right-20 w-32 h-32 rounded-full bg-[#00BBF9]/20 blur-xl"
          animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-24 h-24 rounded-full bg-[#9B5DE5]/20 blur-xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              className="text-center lg:text-left space-y-8"
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              <motion.div variants={fadeInUp}>
                <Badge className="bg-[#9B5DE5]/10 text-[#9B5DE5] border-[#9B5DE5]/20 px-4 py-2 text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Henderson&apos;s Favorite Kids Salon
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Where Haircuts
                <br />
                <span className="gradient-text">Are Fun!</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0"
              >
                Making every snip an adventure! Stress-free haircuts for kids at our magical salon or in the comfort of your home.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/book">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#FF6B9D] via-[#9B5DE5] to-[#00BBF9] text-white border-0 rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-shadow animate-gradient-x">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 py-6 text-lg border-2 border-[#9B5DE5] text-[#9B5DE5] hover:bg-[#9B5DE5] hover:text-white">
                    View Services
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-700 font-semibold">4.9</span>
                  <span className="text-gray-500">(247 reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>Special Needs Friendly</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 gradient-hero rounded-[3rem] rotate-6 opacity-20" />
                  <div className="relative bg-white rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                      src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=600&fit=crop"
                      alt="Happy child getting a haircut"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#FF6B9D]/10 flex items-center justify-center">
                    <Smile className="w-6 h-6 text-[#FF6B9D]" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Happy Kids</p>
                    <p className="text-sm text-gray-500">2000+ served</p>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#00BBF9]/10 flex items-center justify-center">
                    <Car className="w-6 h-6 text-[#00BBF9]" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Mobile Cuts</p>
                    <p className="text-sm text-gray-500">We come to you!</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* AUTISM & SENSORY-FRIENDLY SECTION - FEATURED */}
      <section className="py-24 bg-gradient-to-b from-[#9B5DE5]/10 via-[#00F5D4]/5 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#9B5DE5] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#00F5D4] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-[#00F5D4]/20 text-[#00F5D4] border-[#00F5D4]/30 mb-4 px-4 py-2">
              <Brain className="w-4 h-4 mr-2" />
              Our Specialty
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Autism & Sensory-Friendly</span> Haircuts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Slayer Kid Cuts is Henderson&apos;s trusted destination for children with autism, ADHD, sensory processing differences, and anxiety. We don&apos;t just accommodate - we specialize.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Headphones, title: "Noise-Canceling Headphones", desc: "Block out clippers and salon noise" },
                  { icon: Volume2, title: "Quiet Clippers", desc: "Whisper-quiet professional tools" },
                  { icon: Clock, title: "No Time Pressure", desc: "Take breaks whenever needed" },
                  { icon: Shield, title: "Certified Training", desc: "Specialized sensory techniques" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full border-2 border-[#00F5D4]/20 hover:border-[#00F5D4]/50 transition-colors">
                      <CardContent className="p-4">
                        <item.icon className="w-8 h-8 text-[#00F5D4] mb-2" />
                        <h4 className="font-bold text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#9B5DE5]">
                <p className="text-gray-600 italic mb-4">
                  &quot;My son with autism had never completed a full haircut before Slayer. She spent 45 minutes just letting him explore the tools before even starting. Now he asks to go back!&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">- Amanda R., Henderson</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9B5DE5] to-[#00F5D4] rounded-3xl rotate-3 opacity-20" />
                <Image
                  src="https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=500&fit=crop"
                  alt="Sensory-friendly haircut for child with autism"
                  width={600}
                  height={500}
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#00F5D4]/20 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-[#00F5D4]" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">500+</p>
                    <p className="text-sm text-gray-500">Special needs haircuts</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/sensory-friendly">
              <Button size="lg" className="bg-gradient-to-r from-[#9B5DE5] to-[#00F5D4] text-white rounded-full px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-shadow">
                <Brain className="w-5 h-5 mr-2" />
                Learn About Our Sensory-Friendly Services
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Slayer's Private Sensory Suite Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-[#9B5DE5]/10 text-[#9B5DE5] border-[#9B5DE5]/20 mb-4 px-4 py-2">
              <DoorOpen className="w-4 h-4 mr-2" />
              Private Experience
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Slayer&apos;s <span className="gradient-text">Private Sensory Suite</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For children who need the calmest possible experience, Slayer offers appointments in her private suite — completely separate from the main salon.
            </p>
          </motion.div>

          {/* Wait in Car Process */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">A Different Kind of Arrival</h3>
              <div className="space-y-4">
                {[
                  { icon: Car, title: "Text When You Arrive", desc: "Pull into our parking lot and text us. No need to come inside.", color: "#00BBF9" },
                  { icon: Timer, title: "Wait in Your Car", desc: "Stay in your comfortable, familiar space while we prepare the suite.", color: "#9B5DE5" },
                  { icon: MessageSquare, title: "We'll Text When Ready", desc: "When everything is set, we'll let you know. Walk straight in through Slayer's private entrance.", color: "#00F5D4" },
                  { icon: DoorOpen, title: "Private Entrance", desc: "Your child never has to walk through the main salon or encounter unexpected triggers.", color: "#FF6B9D" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Inside the Suite</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, title: "One-on-One Attention", desc: "Just Slayer, your child, and you" },
                  { icon: Lightbulb, title: "Adjustable Lighting", desc: "Dimmed or brightened to preference" },
                  { icon: VolumeX, title: "Sound Control", desc: "Quiet environment, no salon noise" },
                  { icon: Heart, title: "Familiar Setup", desc: "Same space every visit" },
                  { icon: Shield, title: "Sensory Tools Ready", desc: "Weighted blankets, fidgets, headphones" },
                  { icon: Clock, title: "No Time Pressure", desc: "Your appointment is the only one" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="h-full border-2 border-gray-100 hover:border-[#9B5DE5]/30 transition-colors">
                      <CardContent className="p-4">
                        <item.icon className="w-6 h-6 text-[#9B5DE5] mb-2" />
                        <h4 className="font-bold text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Ideal For */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#00F5D4]/10 rounded-3xl p-8 mb-8"
          >
            <h3 className="text-xl font-bold mb-4 text-center">This Experience is Ideal For:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Children with autism or sensory differences",
                "Kids with severe anxiety",
                "Traumatic haircut experiences",
                "First-time clients needing extra time",
                "Any child who does better in calm spaces"
              ].map((item) => (
                <Badge key={item} className="bg-white text-gray-700 border-gray-200 px-4 py-2">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-[#00F5D4]" />
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/our-space">
              <Button size="lg" className="bg-gradient-to-r from-[#9B5DE5] to-[#00F5D4] text-white rounded-full px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-shadow">
                <DoorOpen className="w-5 h-5 mr-2" />
                Learn More About Our Space
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Wait-in-Car Callout Banner */}
      <section className="py-8 bg-gradient-to-r from-[#00BBF9] to-[#9B5DE5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 text-white"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <Car className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Wait-in-Car Service Available</h3>
                <p className="text-white/90 text-sm">Text when you arrive, stay in your car, we&apos;ll text when Slayer&apos;s private suite is ready.</p>
              </div>
            </div>
            <Link href="/our-space">
              <Button size="lg" className="bg-white text-[#9B5DE5] hover:bg-white/90 rounded-full px-6 whitespace-nowrap">
                Learn How It Works
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-[#00BBF9]/10 text-[#00BBF9] border-[#00BBF9]/20 mb-4">
              Our Services
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Haircuts That Make <span className="gradient-text">Kids Smile</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From first haircuts to fun styles, we make every visit a celebration!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Scissors,
                title: "Kids Haircuts",
                description: "Expert cuts with TVs and games!",
                price: "From $25",
                color: "#FF6B9D",
                image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop"
              },
              {
                icon: Baby,
                title: "First Haircut",
                description: "Certificate & keepsake included",
                price: "$35",
                color: "#9B5DE5",
                image: "https://images.unsplash.com/photo-1519699047748-de8e44e9dee9?w=400&h=300&fit=crop"
              },
              {
                icon: Users,
                title: "Mom & Dad Cuts",
                description: "While the kids play, parents get pampered too!",
                price: "From $30",
                color: "#00BBF9",
                image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=300&fit=crop"
              },
              {
                icon: Sparkles,
                title: "Hair Tinsel & Styles",
                description: "Sparkle, temp color & fun!",
                price: "From $10",
                color: "#F15BB5",
                image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=300&fit=crop"
              },
              {
                icon: Shield,
                title: "Sensory-Friendly",
                description: "Specialized for special needs",
                price: "Same price",
                color: "#9B5DE5",
                image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&h=300&fit=crop"
              },
              {
                icon: PartyPopper,
                title: "Birthday Parties",
                description: "Glamorous group styling!",
                price: "Custom",
                color: "#FF6B9D",
                image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop"
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div
                      className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <service.icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                    <Badge className="absolute bottom-4 right-4 bg-white/90 text-gray-900 font-bold">
                      {service.price}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/services">
              <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-[#9B5DE5] text-[#9B5DE5] hover:bg-[#9B5DE5] hover:text-white">
                View All Services
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 confetti-bg opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-[#FF6B9D]/10 text-[#FF6B9D] border-[#FF6B9D]/20 mb-4">
              Why Parents Love Us
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              More Than Just a <span className="gradient-text">Haircut</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;ve created an experience that kids actually look forward to!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Gamepad2,
                title: "Entertainment Galore",
                description: "TVs, tablets, and games at every station keep kids happily distracted.",
                color: "#FF6B9D"
              },
              {
                icon: Heart,
                title: "Patience & Care",
                description: "Specially trained to work with anxious or sensitive children.",
                color: "#9B5DE5"
              },
              {
                icon: DoorOpen,
                title: "Private Sensory Suite",
                description: "Separate entrance, wait-in-car service, complete calm.",
                color: "#00BBF9"
              },
              {
                icon: Music,
                title: "Fun Atmosphere",
                description: "Colorful decor, fun music, and a vibe that makes kids smile.",
                color: "#00F5D4"
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="w-20 h-20 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-10 h-10" style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Slayer Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 gradient-hero rounded-3xl -rotate-3 opacity-20" />
                <Image
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=700&fit=crop"
                  alt="Slayer - Kids Hair Stylist"
                  width={600}
                  height={700}
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>

              {/* Experience Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-center">
                  <p className="text-4xl font-bold gradient-text">10+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Badge className="bg-[#9B5DE5]/10 text-[#9B5DE5] border-[#9B5DE5]/20">
                Meet Your Stylist
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Hi, I&apos;m <span className="gradient-text">Slayer!</span>
              </h2>
              <p className="text-xl text-gray-600">
                With over 10 years of experience cutting kids&apos; hair, I&apos;ve learned that the secret to a great haircut isn&apos;t just skill - it&apos;s creating an experience kids actually enjoy!
              </p>
              <p className="text-gray-600">
                I started Slayer Kid Cuts because I believe every child deserves to feel like a superstar when they get their haircut. Whether your little one is nervous, wiggly, or has special needs, I have the patience and expertise to make it work.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "Certified in special needs hair services",
                  "Expert with first-time haircuts",
                  "Mobile services for your convenience",
                  "Fun, engaging personality kids love"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#00F5D4] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/book">
                <Button size="lg" className="mt-6 bg-gradient-to-r from-[#FF6B9D] via-[#9B5DE5] to-[#00BBF9] text-white border-0 rounded-full px-8 shadow-lg animate-gradient-x">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book With Slayer
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-[#9B5DE5]/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-[#FEE440]/20 text-yellow-700 border-[#FEE440]/30 mb-4">
              <Star className="w-4 h-4 mr-2 fill-yellow-500 text-yellow-500" />
              247 Five-Star Reviews
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What Parents Are <span className="gradient-text">Saying</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jessica M.",
                child: "Mom of 3",
                text: "Slayer is AMAZING with my kids! My son used to scream during haircuts, but now he actually asks to go. The mobile service is a lifesaver for our busy family.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
              },
              {
                name: "Michael T.",
                child: "Dad of twins",
                text: "Finally found someone who understands kids with sensory issues. Slayer was so patient with my daughter who has autism. She left with a beautiful cut AND a smile!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
              },
              {
                name: "Sarah K.",
                child: "First haircut mom",
                text: "The first haircut package was perfect! We got the cutest certificate and a lock of hair to keep. My little one did so well thanks to all the entertainment options.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              },
            ].map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">&quot;{review.text}&quot;</p>
                    <div className="flex items-center gap-4">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-bold text-gray-900">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.child}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Preview Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#FF6B9D]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-[#FF6B9D]/10 text-[#FF6B9D] border-[#FF6B9D]/20 mb-4">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Slayer Shop
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Take the Fun <span className="gradient-text">Home!</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kid-friendly hair products, sensory tools, and fun accessories - all curated by Slayer!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Kids Hair Care",
                description: "Gentle shampoos, detanglers & styling products made for kids",
                image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&h=300&fit=crop",
                badge: "Best Sellers"
              },
              {
                title: "Sensory Tools",
                description: "Fidget toys, weighted blankets & calming accessories",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
                badge: "For Autism"
              },
              {
                title: "Fun Accessories",
                description: "Hair tinsel kits, clips, bows & sparkly hair gems",
                image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop",
                badge: "Popular"
              },
              {
                title: "Gift Sets",
                description: "Perfect presents for birthdays & special occasions",
                image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=300&h=300&fit=crop",
                badge: "Gift Ideas"
              },
            ].map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-[#9B5DE5] font-medium">
                      {product.badge}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                    <p className="text-sm text-gray-600">{product.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/shop">
              <Button size="lg" className="bg-gradient-to-r from-[#FF6B9D] via-[#9B5DE5] to-[#00BBF9] text-white rounded-full px-10 shadow-lg animate-gradient-x">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Browse the Shop
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103073.28897988795!2d-115.07382!3d36.0397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d0f9c2f5f5f5%3A0x0!2sHenderson%2C%20NV!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <Badge className="bg-[#00F5D4]/10 text-[#00F5D4] border-[#00F5D4]/20 mb-4">
                  Visit Us
                </Badge>
                <h2 className="text-4xl font-bold">
                  Come Say <span className="gradient-text">Hi!</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#9B5DE5]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-[#9B5DE5]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-gray-600">1234 Fun Street, Suite 100</p>
                    <p className="text-gray-600">Henderson, NV 89014</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#FF6B9D]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-[#FF6B9D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <a href="tel:+17025551234" className="text-gray-600 hover:text-[#9B5DE5] transition-colors">
                      (702) 555-1234
                    </a>
                    <p className="text-sm text-gray-500">Call, text, or leave a message!</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#00BBF9]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-[#00BBF9]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9am - 6pm</p>
                      <p>Saturday: 9am - 5pm</p>
                      <p>Sunday: 10am - 4pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-[#9B5DE5] text-[#9B5DE5] hover:bg-[#9B5DE5] hover:text-white">
                  Get Directions
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 confetti-bg opacity-20" />

        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Scissors className="w-16 h-16 text-white" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready for an Amazing Haircut?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Book online in seconds, or chat with us to schedule. We can&apos;t wait to meet your little one!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#9B5DE5] hover:bg-white/90 rounded-full px-10 py-6 text-lg shadow-xl">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </Link>
            <a href="tel:+17025551234">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#9B5DE5] rounded-full px-10 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
