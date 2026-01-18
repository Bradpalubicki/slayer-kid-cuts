"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Scissors, Star, Heart, Sparkles, Car, Calendar,
  CheckCircle2, Phone, MapPin, Clock,
  Smile, Music, Gamepad2, ChevronRight, ChevronDown,
  ShoppingBag, Users, Brain, Headphones,
  DoorOpen, Lightbulb, VolumeX, Palette, Moon, Sun
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

// Calculate days until opening (60 days from now)
function getTimeRemaining() {
  const openingDate = new Date();
  openingDate.setDate(openingDate.getDate() + 60);
  openingDate.setHours(9, 0, 0, 0);

  const now = new Date();
  const diff = openingDate.getTime() - now.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

// Waitlist Form Component
function WaitlistForm({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API
    console.log("Waitlist signup:", { name, email });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center ${variant === "compact" ? "" : "max-w-md mx-auto"}`}
      >
        <div className="w-16 h-16 bg-[#00F5D4] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">You&apos;re on the list!</h3>
        <p className="text-white/80">We&apos;ll notify you first when we open. Thank you!</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`${variant === "compact" ? "flex flex-col sm:flex-row gap-3" : "space-y-4 max-w-md mx-auto"}`}>
      {variant === "default" && (
        <h3 className="text-xl font-bold text-white text-center mb-4">Join the Waitlist</h3>
      )}
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className={`${variant === "compact" ? "flex-1" : "w-full"} px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50`}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={`${variant === "compact" ? "flex-1" : "w-full"} px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50`}
      />
      <Button
        type="submit"
        className={`${variant === "compact" ? "" : "w-full"} bg-white text-[#9B5DE5] hover:bg-white/90 rounded-xl px-6 py-3 font-bold`}
      >
        <Sparkles className="w-4 h-4 mr-2" />
        Get Early Access
      </Button>
    </form>
  );
}

// Floor Plan SVG Component
function FloorPlanSVG() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect x="0" y="0" width="800" height="500" fill="#f8fafc" rx="16" />

      {/* Parking Lot */}
      <rect x="50" y="20" width="700" height="80" fill="#64748b" rx="8" />
      <text x="400" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">🚗 PARKING LOT 🚗</text>
      <text x="400" y="80" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="bold">Wait in your car until we text you!</text>

      {/* Parking spots */}
      {[100, 200, 300, 400, 500, 600, 650].map((x, i) => (
        <rect key={i} x={x} y="25" width="40" height="70" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4" />
      ))}

      {/* Wall between sections */}
      <rect x="395" y="120" width="10" height="360" fill="#1e293b" />

      {/* Private Sensory Suite (Left - Purple) */}
      <rect x="50" y="120" width="345" height="360" fill="#9B5DE5" fillOpacity="0.15" stroke="#9B5DE5" strokeWidth="3" rx="8" />
      <text x="222" y="150" textAnchor="middle" fill="#9B5DE5" fontSize="16" fontWeight="bold">🌙 SLAYER&apos;S PRIVATE SENSORY SUITE</text>

      {/* Private Entrance */}
      <rect x="50" y="100" width="80" height="25" fill="#9B5DE5" rx="4" />
      <text x="90" y="117" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">PRIVATE ENTRANCE</text>
      <path d="M 90 100 L 90 60" stroke="#9B5DE5" strokeWidth="2" strokeDasharray="5" markerEnd="url(#arrowPurple)" />

      {/* Suite Features */}
      <rect x="70" y="180" width="140" height="100" fill="white" stroke="#9B5DE5" strokeWidth="2" rx="8" />
      <text x="140" y="210" textAnchor="middle" fill="#9B5DE5" fontSize="12" fontWeight="bold">Welcome Area</text>
      <text x="140" y="230" textAnchor="middle" fill="#64748b" fontSize="10">Decompress zone</text>
      <text x="140" y="250" textAnchor="middle" fill="#64748b" fontSize="10">Sensory tools</text>

      <rect x="230" y="180" width="140" height="100" fill="white" stroke="#9B5DE5" strokeWidth="2" rx="8" />
      <text x="300" y="210" textAnchor="middle" fill="#9B5DE5" fontSize="12" fontWeight="bold">Styling Station</text>
      <text x="300" y="230" textAnchor="middle" fill="#64748b" fontSize="10">Adjustable lighting</text>
      <text x="300" y="250" textAnchor="middle" fill="#64748b" fontSize="10">Quiet clippers</text>

      <rect x="70" y="300" width="140" height="80" fill="white" stroke="#9B5DE5" strokeWidth="2" rx="8" />
      <text x="140" y="330" textAnchor="middle" fill="#9B5DE5" fontSize="12" fontWeight="bold">Calm Corner</text>
      <text x="140" y="350" textAnchor="middle" fill="#64748b" fontSize="10">Weighted blankets</text>

      <rect x="230" y="300" width="140" height="80" fill="white" stroke="#9B5DE5" strokeWidth="2" rx="8" />
      <text x="300" y="330" textAnchor="middle" fill="#9B5DE5" fontSize="12" fontWeight="bold">Shampoo Sink</text>
      <text x="300" y="350" textAnchor="middle" fill="#64748b" fontSize="10">Optional</text>

      {/* Purple arrow marker */}
      <defs>
        <marker id="arrowPurple" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#9B5DE5" />
        </marker>
        <marker id="arrowAmber" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
        </marker>
      </defs>

      {/* Main Salon (Right - Amber/Yellow) */}
      <rect x="405" y="120" width="345" height="360" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="3" rx="8" />
      <text x="577" y="150" textAnchor="middle" fill="#d97706" fontSize="16" fontWeight="bold">🎨 MAIN SALON</text>

      {/* Main Entrance */}
      <rect x="670" y="100" width="80" height="25" fill="#f59e0b" rx="4" />
      <text x="710" y="117" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">MAIN ENTRANCE</text>
      <path d="M 710 100 L 710 60" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5" markerEnd="url(#arrowAmber)" />

      {/* Main Salon Features */}
      <rect x="425" y="180" width="140" height="100" fill="white" stroke="#f59e0b" strokeWidth="2" rx="8" />
      <text x="495" y="210" textAnchor="middle" fill="#d97706" fontSize="12" fontWeight="bold">Reception</text>
      <text x="495" y="230" textAnchor="middle" fill="#64748b" fontSize="10">Check-in desk</text>
      <text x="495" y="250" textAnchor="middle" fill="#64748b" fontSize="10">Treasure chest!</text>

      <rect x="585" y="180" width="140" height="100" fill="white" stroke="#f59e0b" strokeWidth="2" rx="8" />
      <text x="655" y="210" textAnchor="middle" fill="#d97706" fontSize="12" fontWeight="bold">Play Area</text>
      <text x="655" y="230" textAnchor="middle" fill="#64748b" fontSize="10">Games &amp; toys</text>
      <text x="655" y="250" textAnchor="middle" fill="#64748b" fontSize="10">Photo spot</text>

      {/* Styling Stations */}
      <rect x="425" y="300" width="300" height="80" fill="white" stroke="#f59e0b" strokeWidth="2" rx="8" />
      <text x="575" y="330" textAnchor="middle" fill="#d97706" fontSize="12" fontWeight="bold">4 Styling Stations</text>
      <text x="575" y="350" textAnchor="middle" fill="#64748b" fontSize="10">TVs, tablets, fun chairs • Music &amp; entertainment</text>

      {/* Shampoo Area */}
      <rect x="425" y="400" width="140" height="60" fill="white" stroke="#f59e0b" strokeWidth="2" rx="8" />
      <text x="495" y="435" textAnchor="middle" fill="#d97706" fontSize="11" fontWeight="bold">Shampoo Area</text>

      {/* Party Zone */}
      <rect x="585" y="400" width="140" height="60" fill="white" stroke="#f59e0b" strokeWidth="2" rx="8" />
      <text x="655" y="435" textAnchor="middle" fill="#d97706" fontSize="11" fontWeight="bold">🎉 Party Zone</text>

      {/* Legend */}
      <rect x="50" y="420" width="180" height="55" fill="white" stroke="#e2e8f0" strokeWidth="1" rx="8" />
      <text x="65" y="440" fill="#9B5DE5" fontSize="10" fontWeight="bold">● Private Suite:</text>
      <text x="65" y="455" fill="#64748b" fontSize="9">Calm, quiet, one-on-one</text>
      <text x="150" y="440" fill="#f59e0b" fontSize="10" fontWeight="bold">● Main Salon:</text>
      <text x="150" y="455" fill="#64748b" fontSize="9">Fun, energetic, social</text>

      {/* Divider Label */}
      <rect x="380" y="280" width="40" height="60" fill="#1e293b" rx="4" />
      <text x="400" y="300" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" transform="rotate(-90, 400, 310)">WALL</text>
    </svg>
  );
}

// Sample Products Data
const sampleProducts = [
  {
    name: "Fairy Tales Tangle Tamer Spray",
    price: "$9.95",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&h=300&fit=crop",
    description: "Gentle detangling spray for kids"
  },
  {
    name: "Kids Weighted Lap Pad (5lb)",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    description: "Calming pressure for anxious moments"
  },
  {
    name: "Noise-Reducing Headphones",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    description: "Block out clipper noise"
  },
  {
    name: "Fidget Pop-It Toy",
    price: "$6.99",
    image: "https://images.unsplash.com/photo-1612481157367-c7b8a7c6d6c1?w=300&h=300&fit=crop",
    description: "Keep little hands busy"
  },
  {
    name: "Visual Timer (3 inch)",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1524678714210-9917a6c619c2?w=300&h=300&fit=crop",
    description: "See how long until done"
  },
  {
    name: "Temporary Hair Color Spray",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop",
    description: "Wash-out fun colors"
  }
];

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION - COMING SOON */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden gradient-hero">
        {/* Animated Background */}
        <div className="absolute inset-0 confetti-bg opacity-30" />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-32 left-10 w-20 h-20 rounded-full bg-white/20 blur-xl"
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-48 right-20 w-32 h-32 rounded-full bg-white/20 blur-xl"
          animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-24 h-24 rounded-full bg-white/20 blur-xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="space-y-8"
          >
            {/* HUGE Coming Soon Badge */}
            <motion.div variants={fadeInUp}>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-8 py-4 text-2xl sm:text-3xl font-bold shadow-xl">
                  🚀 COMING SOON! 🚀
                </Badge>
              </motion.div>
            </motion.div>

            {/* Logo & Title */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <motion.div
                className="w-24 h-24 mx-auto rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl"
                whileHover={{ rotate: 20 }}
              >
                <Scissors className="w-12 h-12 text-white" />
              </motion.div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Slayer Kid Cuts
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
                Henderson&apos;s first salon designed for every kid — from the wiggly to the nervous, the sensory-sensitive to the first-timer.
              </p>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div variants={fadeInUp} className="py-8">
              <p className="text-white/80 mb-4 text-lg">Opening in:</p>
              <div className="flex justify-center gap-4 sm:gap-6">
                {[
                  { value: timeLeft.days, label: "Days" },
                  { value: timeLeft.hours, label: "Hours" },
                  { value: timeLeft.minutes, label: "Mins" },
                  { value: timeLeft.seconds, label: "Secs" }
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 min-w-[80px] sm:min-w-[100px]"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.p
                      key={item.value}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      className="text-3xl sm:text-5xl font-bold text-white"
                    >
                      {item.value.toString().padStart(2, '0')}
                    </motion.p>
                    <p className="text-white/80 text-sm">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Waitlist Form */}
            <motion.div variants={fadeInUp}>
              <WaitlistForm />
            </motion.div>

            {/* Personal Message */}
            <motion.div variants={fadeInUp}>
              <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-white text-lg leading-relaxed">
                  💇‍♀️ <strong>To My Existing Clients:</strong> Thank you for your patience! After 10+ years cutting kids&apos; hair, I&apos;m building something special. You&apos;ll get first access when we open!
                </p>
                <p className="text-white/80 mt-2 text-sm">— Slayer ✨</p>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              variants={fadeInUp}
              className="pt-8"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-white/60 text-sm mb-2">See what we&apos;re building</p>
              <ChevronDown className="w-8 h-8 text-white/60 mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* A SALON THAT GETS IT - Two Spaces Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-[#9B5DE5]/10 text-[#9B5DE5] border-[#9B5DE5]/20 mb-4 px-4 py-2">
              <Heart className="w-4 h-4 mr-2" />
              A Salon That Gets It
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Two Spaces, <span className="gradient-text">One Mission</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every kid is different. That&apos;s why we built two completely separate spaces — so every child can have the experience that&apos;s right for them.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Main Salon Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-amber-200 overflow-hidden hover:border-amber-400 transition-colors">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop"
                    alt="Fun kids salon environment with colorful decor"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-amber-500 text-white border-0 text-lg px-4 py-2">
                      <Sun className="w-5 h-5 mr-2" />
                      Main Salon
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-amber-600">🎨 The Fun Zone</h3>
                  <p className="text-gray-600">
                    Energetic, playful, and full of entertainment! Perfect for kids who thrive in lively environments.
                  </p>
                  <div className="space-y-2">
                    {[
                      { icon: Gamepad2, text: "TVs & tablets at every station" },
                      { icon: Music, text: "Fun music & colorful decor" },
                      { icon: Sparkles, text: "Treasure chest rewards" },
                      { icon: Users, text: "Multiple stylists & social vibe" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-amber-500" />
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <Badge className="bg-amber-50 text-amber-700 border-amber-200">
                    Great for: Wiggly kids, social butterflies, first-timers who like distractions
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* Private Sensory Suite Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-purple-200 overflow-hidden hover:border-purple-400 transition-colors">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&h=400&fit=crop"
                    alt="Calm private suite for sensory-friendly haircuts"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-[#9B5DE5] text-white border-0 text-lg px-4 py-2">
                      <Moon className="w-5 h-5 mr-2" />
                      Private Suite
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-[#9B5DE5]">🌙 Slayer&apos;s Calm Space</h3>
                  <p className="text-gray-600">
                    Completely separate with its own entrance. Quiet, calm, and private — just you, your child, and Slayer.
                  </p>
                  <div className="space-y-2">
                    {[
                      { icon: DoorOpen, text: "Private entrance from parking" },
                      { icon: Car, text: "Wait-in-car until we text you" },
                      { icon: Lightbulb, text: "Adjustable lighting & quiet tools" },
                      { icon: Headphones, text: "Weighted blankets & headphones" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-[#9B5DE5]" />
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <Badge className="bg-purple-50 text-purple-700 border-purple-200">
                    Ideal for: Autism, anxiety, sensory sensitivities, traumatic haircut history, OR anyone who prefers quiet
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Key Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block bg-gradient-to-r from-amber-50 to-purple-50 rounded-2xl p-6 border border-gray-200">
              <p className="text-lg text-gray-700">
                <strong>Not sure which space is right?</strong> No problem! We&apos;ll help you choose during booking based on your child&apos;s needs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FLOOR PLAN SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-[#00BBF9]/10 text-[#00BBF9] border-[#00BBF9]/20 mb-4 px-4 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              See the Space
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Two Spaces, <span className="gradient-text">Completely Separate</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Private Sensory Suite has its own entrance. Your child never has to walk through the main salon or encounter unexpected triggers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-6 sm:p-8"
          >
            <FloorPlanSVG />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 bg-[#9B5DE5]/10 px-4 py-2 rounded-full">
              <div className="w-4 h-4 rounded-full bg-[#9B5DE5]" />
              <span className="text-[#9B5DE5] font-medium">Private Suite: Separate entrance, complete privacy</span>
            </div>
            <div className="flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full">
              <div className="w-4 h-4 rounded-full bg-amber-500" />
              <span className="text-amber-700 font-medium">Main Salon: Fun, energetic, entertainment galore</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SAMPLE PRODUCTS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-[#FF6B9D]/10 text-[#FF6B9D] border-[#FF6B9D]/20 mb-2 px-4 py-2">
              COMING SOON
            </Badge>
            <Badge className="bg-[#FF6B9D]/10 text-[#FF6B9D] border-[#FF6B9D]/20 mb-4 px-4 py-2 ml-2">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Slayer Shop
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Take the Magic <span className="gradient-text">Home!</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kid-friendly hair products, sensory tools, and fun accessories — curated by Slayer. Preview what&apos;s coming!
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {sampleProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-gray-100 overflow-hidden hover:border-[#FF6B9D]/30 transition-all group">
                  <div className="relative h-32 sm:h-40 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                    <Badge className="absolute top-2 left-2 bg-[#9B5DE5] text-white text-xs">
                      Sample
                    </Badge>
                  </div>
                  <CardContent className="p-3 sm:p-4">
                    <p className="font-bold text-sm text-[#FF6B9D] mb-1">{product.price}</p>
                    <h3 className="font-medium text-xs sm:text-sm text-gray-900 line-clamp-2">{product.name}</h3>
                    <p className="text-xs text-gray-500 mt-1 hidden sm:block">{product.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <p className="text-gray-500 mb-4">Shop opens when we do! Join the waitlist for exclusive early access.</p>
            <Link href="/shop">
              <Button variant="outline" className="rounded-full px-8 border-2 border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Preview Full Shop
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SLAYER SECTION */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=700&fit=crop"
                  alt="Professional kids hair stylist cutting a child's hair"
                  width={600}
                  height={700}
                  className="relative rounded-3xl shadow-2xl"
                  unoptimized
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
                  <p className="text-gray-600">Years with Kids</p>
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
                After 10+ years of cutting kids&apos; hair in Henderson, I&apos;ve learned that the secret to a great haircut isn&apos;t just skill — it&apos;s understanding what each child needs.
              </p>
              <p className="text-gray-600">
                Some kids need music and games. Others need quiet and calm. Some need to sit in their parent&apos;s lap. Others want the &quot;big kid&quot; chair. I&apos;ve built this salon so every child can have the experience that works for them.
              </p>

              <div className="space-y-3 pt-4">
                {[
                  "10+ years specializing in kids haircuts",
                  "Trained in sensory-friendly techniques",
                  "Expert with anxious & first-time clients",
                  "Patience is my superpower!"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#00F5D4] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600">Trusted by 2000+ Henderson families</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
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
            Don&apos;t Miss the Grand Opening!
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Be the first to know when we open. Waitlist members get exclusive early booking access!
          </p>

          <WaitlistForm variant="compact" />

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17025551234">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#9B5DE5] rounded-full px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Questions? Call Slayer
              </Button>
            </a>
            <Link href="/our-space">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#9B5DE5] hover:bg-white/90 rounded-full px-8 py-6 text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                Learn About Our Space
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Location Teaser */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-4">
              <MapPin className="w-8 h-8 text-[#9B5DE5]" />
              <h3 className="text-2xl font-bold text-gray-900">Henderson, Nevada</h3>
            </div>
            <p className="text-gray-600">
              Exact location announcement coming soon! Sign up for the waitlist to be notified.
            </p>
            <div className="flex items-center justify-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Mon-Sat: 9am - 6pm</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+17025551234" className="hover:text-[#9B5DE5] transition-colors">(702) 555-1234</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
