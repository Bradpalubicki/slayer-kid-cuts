"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Scissors, Heart, Sparkles,
  CheckCircle2, ChevronDown,
  Clock, Shield, Leaf, Home, Tv, Gamepad2,
  Users, Brain, Headphones, Eye, Coffee, HandHeart
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
    console.log("Waitlist signup:", { name, email });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center roots-shadow ${variant === "compact" ? "" : "max-w-md mx-auto"}`}
      >
        <div className="w-16 h-16 bg-[#5B8A8A] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-[#6B5B4F] mb-2">You&apos;re on the list!</h3>
        <p className="text-[#8B7B6F]">We&apos;ll notify you first when we open. Thank you for your support!</p>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="flex-1 px-4 py-3 rounded-xl bg-white border border-[#D4E5E5] text-[#6B5B4F] placeholder-[#A69080] focus:outline-none focus:ring-2 focus:ring-[#5B8A8A]/50"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-3 rounded-xl bg-white border border-[#D4E5E5] text-[#6B5B4F] placeholder-[#A69080] focus:outline-none focus:ring-2 focus:ring-[#5B8A8A]/50"
        />
        <Button
          type="submit"
          className="bg-[#5B8A8A] hover:bg-[#4A7272] text-white rounded-xl px-6 py-3 font-medium"
        >
          <Leaf className="w-4 h-4 mr-2" />
          Join Waitlist
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h3 className="text-xl font-semibold text-white text-center mb-4">Join the Waitlist</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
      />
      <Button
        type="submit"
        className="w-full bg-white text-[#5B8A8A] hover:bg-white/90 rounded-xl px-6 py-3 font-semibold"
      >
        <Leaf className="w-4 h-4 mr-2" />
        Get Early Access
      </Button>
    </form>
  );
}

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#FDFCFA]">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-8 overflow-hidden">
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4E5E5]/50 via-[#F8F6F3] to-[#FDFCFA]" />

        {/* Subtle leaf pattern */}
        <div className="absolute inset-0 leaf-bg opacity-30" />

        {/* Floating organic shapes */}
        <motion.div
          className="absolute top-32 left-10 w-32 h-32 rounded-full bg-[#5B8A8A]/10 blur-2xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-48 right-20 w-40 h-40 rounded-full bg-[#D4E5E5]/40 blur-2xl"
          animate={{ y: [0, 15, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-[#A69080]/10 blur-xl"
          animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 9, repeat: Infinity, delay: 2 }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="space-y-8"
          >
            {/* Logo */}
            <motion.div variants={fadeInUp} className="flex justify-center">
              <Image
                src="/images/little-roots-logo.webp"
                alt="Little Roots Studio"
                width={280}
                height={200}
                className="w-auto h-32 sm:h-40"
                priority
              />
            </motion.div>

            {/* Coming Soon Badge */}
            <motion.div variants={fadeInUp}>
              <Badge className="bg-[#5B8A8A]/10 text-[#5B8A8A] border-[#5B8A8A]/20 px-6 py-2 text-lg font-medium">
                <Leaf className="w-4 h-4 mr-2" />
                Coming Soon to Las Vegas
              </Badge>
            </motion.div>

            {/* Tagline */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#6B5B4F] leading-tight">
                A Safe Space for
                <br />
                <span className="gradient-text">Every Little One</span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#8B7B6F] max-w-3xl mx-auto leading-relaxed">
                Las Vegas&apos;s first sensory-friendly, judgment-free hair studio designed for children who need a little more patience, privacy, and care.
              </p>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div variants={fadeInUp} className="py-6">
              <p className="text-[#A69080] mb-4 text-sm uppercase tracking-wide">Opening in</p>
              <div className="flex justify-center gap-3 sm:gap-4">
                {[
                  { value: timeLeft.days, label: "Days" },
                  { value: timeLeft.hours, label: "Hours" },
                  { value: timeLeft.minutes, label: "Mins" },
                  { value: timeLeft.seconds, label: "Secs" }
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    className="bg-white rounded-2xl p-4 sm:p-5 min-w-[70px] sm:min-w-[85px] roots-shadow"
                    whileHover={{ scale: 1.03 }}
                  >
                    <motion.p
                      key={item.value}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="text-2xl sm:text-4xl font-bold text-[#5B8A8A]"
                    >
                      {item.value.toString().padStart(2, '0')}
                    </motion.p>
                    <p className="text-[#A69080] text-xs sm:text-sm">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Waitlist Form */}
            <motion.div variants={fadeInUp} className="pt-4">
              <WaitlistForm variant="compact" />
              <p className="text-[#A69080] text-sm mt-3">Be the first to book when we open!</p>
            </motion.div>

            {/* Key differentiators */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 pt-6">
              {[
                { icon: Shield, text: "Judgment-Free" },
                { icon: Users, text: "One Family at a Time" },
                { icon: Brain, text: "Autism-Trained" },
                { icon: Clock, text: "Never Rushed" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full text-sm text-[#6B5B4F] roots-shadow">
                  <item.icon className="w-4 h-4 text-[#5B8A8A]" />
                  {item.text}
                </div>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              variants={fadeInUp}
              className="pt-10"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-[#A69080] text-sm mb-2">Learn more about Little Roots</p>
              <ChevronDown className="w-6 h-6 text-[#5B8A8A] mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY LITTLE ROOTS Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-[#D4E5E5] text-[#4A7272] border-0 mb-4 px-4 py-2">
              <Heart className="w-4 h-4 mr-2" />
              Why Little Roots?
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6B5B4F] mb-4">
              This Isn&apos;t Just a Salon
            </h2>
            <p className="text-xl text-[#8B7B6F] max-w-2xl mx-auto">
              It&apos;s a safe space. A loving, one-on-one experience for every kiddo who needs a little extra care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Problem */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-[#A69080]/20 bg-[#F8F6F3]">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#A69080] mb-4">Traditional salons can be overwhelming...</h3>
                  <ul className="space-y-3 text-[#8B7B6F]">
                    {[
                      "Loud, busy environments",
                      "Rushed appointments",
                      "No privacy or calm spaces",
                      "Judgment from staff or other parents",
                      "One-size-fits-all approach",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#A69080] mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* The Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-[#5B8A8A]/30 bg-gradient-to-br from-white to-[#D4E5E5]/30">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#5B8A8A] mb-4">Little Roots is different...</h3>
                  <ul className="space-y-3 text-[#6B5B4F]">
                    {[
                      "Earth-toned, calming environment",
                      "Never rushed — time for breaks & trust-building",
                      "Complete privacy — one family at a time",
                      "Judgment-free zone, always",
                      "Every child is met exactly where they are",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#5B8A8A] mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR Section */}
      <section className="py-20 bg-[#F8F6F3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-[#5B8A8A]/10 text-[#5B8A8A] border-[#5B8A8A]/20 mb-4 px-4 py-2">
              <HandHeart className="w-4 h-4 mr-2" />
              Every Child Deserves a Calm Haircut
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6B5B4F] mb-4">
              Who Little Roots Is For
            </h2>
            <p className="text-lg text-[#8B7B6F] max-w-2xl mx-auto">
              Children who need more patience, privacy, and understanding
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: Brain, title: "Autistic children", desc: "Sensory-friendly approach" },
              { icon: Sparkles, title: "Neurodivergent kids", desc: "ADHD, SPD, and more" },
              { icon: Heart, title: "Anxious children", desc: "Gentle, patient care" },
              { icon: Shield, title: "Trauma history", desc: "Trauma-informed practice" },
              { icon: Eye, title: "Sensory sensitivities", desc: "Calming environment" },
              { icon: Coffee, title: "Anyone who prefers quiet", desc: "Peace and privacy" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 bg-white card-hover">
                  <CardContent className="p-5 sm:p-6 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-[#D4E5E5] flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-[#5B8A8A]" />
                    </div>
                    <h3 className="font-semibold text-[#6B5B4F] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#A69080]">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO FEATURES Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-[#D4E5E5] text-[#4A7272] border-0 mb-4 px-4 py-2">
              <Home className="w-4 h-4 mr-2" />
              Intentionally Designed for Calm
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6B5B4F] mb-4">
              A Space Built with Purpose
            </h2>
            <p className="text-lg text-[#8B7B6F] max-w-2xl mx-auto">
              Every detail chosen to reduce sensory overload and help children regulate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Leaf,
                title: "Earth-Toned Decor",
                desc: "Calming colors and natural elements to reduce visual overwhelm"
              },
              {
                icon: Tv,
                title: "TV & Video Games",
                desc: "Familiar distractions to help children feel comfortable"
              },
              {
                icon: Gamepad2,
                title: "Sensory Box & Tools",
                desc: "Fidgets, weighted items, and sensory-friendly equipment"
              },
              {
                icon: Clock,
                title: "Never Rushed",
                desc: "Appointments include time for regulation, breaks, and trust-building"
              },
              {
                icon: Users,
                title: "One Family at a Time",
                desc: "Complete privacy — your child is never rushed or compared"
              },
              {
                icon: Headphones,
                title: "Sound Control",
                desc: "Quiet environment with noise-reducing options available"
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border border-[#E8E4DF] hover:border-[#5B8A8A]/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#5B8A8A]/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-[#5B8A8A]" />
                    </div>
                    <h3 className="font-semibold text-[#6B5B4F] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#8B7B6F]">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET CARLA Section */}
      <section className="py-20 bg-[#F8F6F3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#5B8A8A]/20 rounded-3xl -rotate-3" />
                <Image
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=700&fit=crop"
                  alt="Carla - Founder of Little Roots Studio"
                  width={500}
                  height={600}
                  className="relative rounded-3xl shadow-xl object-cover"
                  unoptimized
                />
              </div>

              {/* Experience Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-5"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#5B8A8A]">13</p>
                  <p className="text-[#8B7B6F] text-sm">Years Experience</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Badge className="bg-[#5B8A8A]/10 text-[#5B8A8A] border-[#5B8A8A]/20">
                <Scissors className="w-4 h-4 mr-2" />
                Meet Your Stylist
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6B5B4F]">
                Hi, I&apos;m <span className="gradient-text">Carla</span>
              </h2>
              <div className="space-y-4 text-[#6B5B4F] leading-relaxed">
                <p>
                  I have <strong>13 years of experience</strong> working with children of all kinds, and specialized training in autism-friendly haircutting.
                </p>
                <p>
                  I&apos;ve seen firsthand how rushed, loud environments can overwhelm kids — and how transformative it is when they are given <strong>time, choice, and understanding</strong>.
                </p>
                <p>
                  This space will offer <strong>privacy, patience, and compassion</strong> — a place where children are never judged, parents feel supported, and every child is met exactly where they are.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  "Autism-Trained",
                  "Trauma-Informed",
                  "13 Years with Kids"
                ].map((badge) => (
                  <Badge key={badge} className="bg-[#D4E5E5] text-[#4A7272] border-0 px-4 py-2">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    {badge}
                  </Badge>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#E8E4DF] mt-6">
                <p className="text-[#6B5B4F] italic">
                  &quot;This isn&apos;t just a salon. It&apos;s a safe space. A loving one-on-one experience for each kiddo who needs my special care!&quot;
                </p>
                <p className="text-[#5B8A8A] font-medium mt-2">— Carla</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 leaf-bg opacity-20" />

        <motion.div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Leaf className="w-12 h-12 text-white" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Help Bring Little Roots to Life
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            This studio is being built with love for our community. Join the waitlist to be the first to know when we open — and to support a space that Las Vegas truly needs.
          </p>

          <WaitlistForm />

          <p className="text-white/70 text-sm mt-8">
            Thank you for supporting this vision.
            <br />
            <span className="text-white font-medium">— Carla</span>
          </p>
        </motion.div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 bg-[#6B5B4F] text-white/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/little-roots-logo.webp"
              alt="Little Roots Studio"
              width={120}
              height={80}
              className="h-16 w-auto opacity-90"
            />
          </div>
          <p className="text-sm mb-2">Las Vegas, Nevada</p>
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} Little Roots Studio. Coming Soon.
          </p>
        </div>
      </footer>
    </div>
  );
}
