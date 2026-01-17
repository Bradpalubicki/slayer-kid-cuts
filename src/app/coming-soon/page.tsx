"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Gift, Star, Trophy, Scissors, Calendar, MapPin,
  PartyPopper, Sparkles, Heart, Clock, ChevronRight,
  Mail, Phone, Instagram, Facebook
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// Set your grand opening date (60 days from now or specific date)
const GRAND_OPENING_DATE = new Date();
GRAND_OPENING_DATE.setDate(GRAND_OPENING_DATE.getDate() + 60);

const prizes = [
  {
    place: "1st",
    prize: "FREE Haircuts for 1 Year",
    description: "12 free kids haircuts - one per month!",
    value: "$300",
    icon: Trophy,
    color: "#FFD700",
  },
  {
    place: "2nd",
    prize: "6 Months Free Haircuts",
    description: "6 free kids haircuts for your family",
    value: "$150",
    icon: Star,
    color: "#C0C0C0",
  },
  {
    place: "3rd",
    prize: "3 Months Free Haircuts",
    description: "3 free kids haircuts",
    value: "$75",
    icon: Gift,
    color: "#CD7F32",
  },
  {
    place: "4th-10th",
    prize: "Free First Haircut Package",
    description: "Includes certificate & keepsake",
    value: "$35",
    icon: Sparkles,
    color: "#9B5DE5",
  },
];

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Minutes" },
        { value: timeLeft.seconds, label: "Seconds" },
      ].map((item) => (
        <div key={item.label} className="text-center">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2 border border-white/20">
            <span className="text-2xl md:text-4xl font-bold text-white">
              {item.value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs md:text-sm text-white/80">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to your email list
    console.log("Email submitted:", email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section with Countdown */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 confetti-bg opacity-30" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 text-lg">
              <PartyPopper className="w-5 h-5 mr-2" />
              Grand Opening Coming Soon!
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Slayer Kid Cuts is
              <br />
              <span className="text-[#FEE440]">Almost Here!</span>
            </h1>

            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              As many of you know, I left Cookie Cutters to establish my own
              kid-friendly salon. Get ready for a whole new haircut experience
              in Henderson!
            </p>

            {/* Countdown */}
            <div className="py-8">
              <p className="text-white/80 mb-4 text-lg">Grand Opening In:</p>
              <CountdownTimer targetDate={GRAND_OPENING_DATE} />
            </div>

            {/* Email Signup */}
            <div className="max-w-md mx-auto">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email for updates"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 rounded-full"
                  />
                  <Button type="submit" className="bg-white text-[#9B5DE5] hover:bg-white/90 rounded-full px-6">
                    Notify Me
                  </Button>
                </form>
              ) : (
                <div className="bg-white/20 rounded-2xl p-4 text-white">
                  <Heart className="w-8 h-8 mx-auto mb-2 text-[#FF6B9D]" />
                  <p className="font-semibold">You&apos;re on the list!</p>
                  <p className="text-sm text-white/80">We&apos;ll notify you when we open.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-[#FEE440]/20 text-yellow-700 border-[#FEE440]/30 mb-4">
              <Gift className="w-4 h-4 mr-2" />
              Grand Opening Giveaway
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Win <span className="gradient-text">Amazing Prizes!</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be one of the first to book and you could win FREE haircuts for up to a year!
              Drawing held at our Grand Opening celebration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prizes.map((prize, index) => (
              <motion.div
                key={prize.place}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full border-2 ${index === 0 ? "border-[#FFD700] shadow-xl" : "border-gray-100"}`}>
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: `${prize.color}20` }}
                    >
                      <prize.icon className="w-8 h-8" style={{ color: prize.color }} />
                    </div>
                    <Badge
                      className="mb-3"
                      style={{
                        backgroundColor: `${prize.color}20`,
                        color: prize.color,
                        borderColor: `${prize.color}40`,
                      }}
                    >
                      {prize.place} Place
                    </Badge>
                    <h3 className="font-bold text-lg mb-2">{prize.prize}</h3>
                    <p className="text-sm text-gray-600 mb-3">{prize.description}</p>
                    <p className="text-2xl font-bold" style={{ color: prize.color }}>
                      {prize.value} Value
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#FF6B9D]/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="font-bold text-xl mb-2">How to Enter:</h3>
              <ol className="text-left text-gray-600 space-y-2 max-w-md mx-auto">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#9B5DE5] text-white flex items-center justify-center flex-shrink-0 text-sm">1</span>
                  <span>Sign up for our email list above</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#9B5DE5] text-white flex items-center justify-center flex-shrink-0 text-sm">2</span>
                  <span>Follow us on social media</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#9B5DE5] text-white flex items-center justify-center flex-shrink-0 text-sm">3</span>
                  <span>Book your first appointment during opening week</span>
                </li>
              </ol>
              <p className="text-sm text-gray-500 mt-4">
                Winners drawn live at Grand Opening party. Must be present to win top prizes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Slayer Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Badge className="bg-[#9B5DE5]/10 text-[#9B5DE5] border-[#9B5DE5]/20">
                Meet Your Stylist
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Hi, I&apos;m <span className="gradient-text">Slayer!</span>
              </h2>
              <p className="text-lg text-gray-600">
                After years of experience at Cookie Cutters, I&apos;m thrilled to announce
                I&apos;m opening my own kid-friendly salon right here in Henderson!
              </p>
              <p className="text-gray-600">
                My passion has always been making haircuts fun and stress-free for kids,
                especially those with sensory sensitivities and autism. At Slayer Kid Cuts,
                every child is treated with patience, care, and a whole lot of fun!
              </p>
              <div className="space-y-3">
                {[
                  "10+ years cutting kids' hair",
                  "Certified in sensory-friendly techniques",
                  "Specialist in autism accommodations",
                  "Making haircuts FUN, not scary!",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Scissors className="w-5 h-5 text-[#9B5DE5]" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#FF6B9D]/20 to-[#9B5DE5]/20 rounded-3xl p-8"
            >
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#9B5DE5]" />
                Location Coming Soon
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Area:</strong> Henderson, Nevada
                </p>
                <p>
                  <strong>Opening:</strong> In approximately 60 days
                </p>
                <p className="text-sm">
                  Exact address will be announced soon! Sign up for our email list
                  to be the first to know.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold mb-4">Follow Along:</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#9B5DE5] text-white flex items-center justify-center hover:bg-[#9B5DE5]/80 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#9B5DE5] text-white flex items-center justify-center hover:bg-[#9B5DE5]/80 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What to <span className="gradient-text">Expect</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Fun Atmosphere",
                description: "Themed chairs, TVs, tablets, and entertainment at every station",
                color: "#FF6B9D",
              },
              {
                icon: Heart,
                title: "Sensory-Friendly",
                description: "Specialized accommodations for children with autism and sensory needs",
                color: "#00F5D4",
              },
              {
                icon: Star,
                title: "Expert Care",
                description: "Patient stylists who truly understand kids and their needs",
                color: "#9B5DE5",
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
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon className="w-8 h-8" style={{ color: item.color }} />
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <Scissors className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Don&apos;t Miss Our Grand Opening!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Check out our website, explore our services, and get ready for
              Henderson&apos;s most fun kids hair salon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" className="bg-white text-[#9B5DE5] hover:bg-white/90 rounded-full px-8">
                  View Services
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/sensory-friendly">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#9B5DE5] rounded-full px-8">
                  Sensory-Friendly Info
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
