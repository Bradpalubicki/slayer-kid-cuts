"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Gift,
  Star,
  Trophy,
  Heart,
  ChevronRight,
  PartyPopper,
  Sparkles,
  Instagram,
  Facebook,
  Leaf,
  Shield,
  Clock,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// Set your grand opening date (60 days from now)
const GRAND_OPENING_DATE = new Date();
GRAND_OPENING_DATE.setDate(GRAND_OPENING_DATE.getDate() + 60);

const prizes = [
  {
    place: "1st",
    prize: "FREE Haircuts for 1 Year",
    description: "12 free kids haircuts - one per month!",
    value: "$360",
    icon: Trophy,
    color: "#5B8A8A",
  },
  {
    place: "2nd",
    prize: "6 Months Free Haircuts",
    description: "6 free kids haircuts for your family",
    value: "$180",
    icon: Star,
    color: "#6B5B4F",
  },
  {
    place: "3rd",
    prize: "3 Months Free Haircuts",
    description: "3 free kids haircuts",
    value: "$90",
    icon: Gift,
    color: "#A69080",
  },
  {
    place: "4th-10th",
    prize: "Free First Haircut Package",
    description: "Includes certificate & keepsake",
    value: "$45",
    icon: Sparkles,
    color: "#7BA3A3",
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
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
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
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2 border border-white/30">
            <span className="text-2xl md:text-4xl font-bold text-white">
              {item.value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs md:text-sm text-white/90">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist signup:", { name, email });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Countdown */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#5B8A8A] via-[#6B5B4F] to-[#5B8A8A]">
        <div className="absolute inset-0 leaf-bg opacity-10" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-white p-2 shadow-xl">
                <Image
                  src="/images/little-roots-logo.webp"
                  alt="Little Roots Studio"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 text-lg">
              <PartyPopper className="w-5 h-5 mr-2" />
              Coming Soon to Las Vegas!
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Little Roots Studio
              <br />
              <span className="text-[#D4E5E5]">Opening Soon!</span>
            </h1>

            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Las Vegas&apos;s first sensory-friendly, judgment-free hair studio
              designed for children who need a little more patience, privacy,
              and care.
            </p>

            {/* Countdown */}
            <div className="py-8">
              <p className="text-white/80 mb-4 text-lg">Grand Opening In:</p>
              <CountdownTimer targetDate={GRAND_OPENING_DATE} />
            </div>

            {/* Email Signup */}
            <div className="max-w-md mx-auto">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 rounded-full"
                  />
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/60 rounded-full"
                    />
                    <Button
                      type="submit"
                      className="bg-white text-[#5B8A8A] hover:bg-[#D4E5E5] rounded-full px-6 font-semibold"
                    >
                      Join Waitlist
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="bg-white/20 rounded-2xl p-6 text-white">
                  <Leaf className="w-10 h-10 mx-auto mb-3 text-[#D4E5E5]" />
                  <p className="font-semibold text-lg">
                    You&apos;re on the waitlist!
                  </p>
                  <p className="text-white/80">
                    We&apos;ll be in touch when we open.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grand Opening Prizes */}
      <section className="py-20 bg-[#F8F6F3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-[#5B8A8A]/10 text-[#5B8A8A] border-[#5B8A8A]/20 mb-4">
              <Gift className="w-4 h-4 mr-2" />
              Grand Opening Celebration
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6B5B4F] mb-4">
              Win <span className="text-[#5B8A8A]">Amazing Prizes!</span>
            </h2>
            <p className="text-xl text-[#8B7B6F] max-w-2xl mx-auto">
              Be one of the first to join our waitlist and you could win FREE
              haircuts for up to a year!
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
                <Card
                  className={`h-full border-2 ${index === 0 ? "border-[#5B8A8A] shadow-xl" : "border-[#E8E4DF]"}`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: `${prize.color}15` }}
                    >
                      <prize.icon
                        className="w-8 h-8"
                        style={{ color: prize.color }}
                      />
                    </div>
                    <Badge
                      className="mb-3"
                      style={{
                        backgroundColor: `${prize.color}15`,
                        color: prize.color,
                        borderColor: `${prize.color}30`,
                      }}
                    >
                      {prize.place} Place
                    </Badge>
                    <h3 className="font-bold text-lg mb-2 text-[#6B5B4F]">
                      {prize.prize}
                    </h3>
                    <p className="text-sm text-[#8B7B6F] mb-3">
                      {prize.description}
                    </p>
                    <p
                      className="text-2xl font-bold"
                      style={{ color: prize.color }}
                    >
                      {prize.value} Value
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Carla Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Badge className="bg-[#5B8A8A]/10 text-[#5B8A8A] border-[#5B8A8A]/20">
                Meet Your Stylist
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6B5B4F]">
                Hi, I&apos;m <span className="text-[#5B8A8A]">Carla!</span>
              </h2>
              <p className="text-lg text-[#8B7B6F]">
                With 13 years of experience working with children of all kinds,
                I&apos;m creating the space I always wished existed—a
                sensory-friendly, judgment-free hair studio where every child
                feels welcome.
              </p>
              <p className="text-[#8B7B6F]">
                I&apos;ve worked with countless autistic children, kids with
                sensory processing differences, and children who simply need
                more patience and understanding. Little Roots Studio is my dream
                of creating a truly inclusive space for all families.
              </p>
              <div className="space-y-3">
                {[
                  "13 years cutting kids' hair",
                  "Specialized autism-friendly training",
                  "Private suite—one family at a time",
                  "Never rushed, always patient",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Leaf className="w-5 h-5 text-[#5B8A8A]" />
                    <span className="text-[#6B5B4F]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#D4E5E5] to-[#F8F6F3] rounded-3xl p-8"
            >
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2 text-[#6B5B4F]">
                <Leaf className="w-5 h-5 text-[#5B8A8A]" />
                Opening Soon in Las Vegas
              </h3>
              <div className="space-y-4 text-[#8B7B6F]">
                <p>
                  <strong className="text-[#6B5B4F]">Location:</strong> Las
                  Vegas, Nevada
                </p>
                <p>
                  <strong className="text-[#6B5B4F]">Opening:</strong> Coming
                  Soon!
                </p>
                <p className="text-sm">
                  Exact address will be announced soon. Join our waitlist to be
                  the first to know and get exclusive opening week access.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E8E4DF]">
                <h4 className="font-semibold mb-4 text-[#6B5B4F]">
                  Follow Our Journey:
                </h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#5B8A8A] text-white flex items-center justify-center hover:bg-[#4A7272] transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#5B8A8A] text-white flex items-center justify-center hover:bg-[#4A7272] transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-[#F8F6F3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6B5B4F] mb-4">
              What Makes <span className="text-[#5B8A8A]">Little Roots</span>{" "}
              Different
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Private Suite",
                description: "One family at a time—no waiting rooms, no chaos",
              },
              {
                icon: Heart,
                title: "Judgment-Free",
                description: "All behaviors welcome. No stares, no judgment.",
              },
              {
                icon: Clock,
                title: "Never Rushed",
                description:
                  "Take all the time you need. We work at your pace.",
              },
              {
                icon: Users,
                title: "Sensory-Friendly",
                description: "Designed from the ground up for sensory needs",
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
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-[#5B8A8A]/10">
                  <item.icon className="w-8 h-8 text-[#5B8A8A]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#6B5B4F]">
                  {item.title}
                </h3>
                <p className="text-[#8B7B6F] text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Website CTA */}
      <section className="py-20 bg-gradient-to-br from-[#5B8A8A] to-[#4A7272]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <Leaf className="w-16 h-16 mx-auto mb-6 text-[#D4E5E5]" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Explore What&apos;s Coming
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Take a look around our website to see our services, our
              sensory-friendly approach, and everything Little Roots Studio will
              offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-white text-[#5B8A8A] hover:bg-[#D4E5E5] rounded-full px-8 font-semibold"
                >
                  View Services
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/sensory-friendly">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#5B8A8A] rounded-full px-8"
                >
                  Sensory-Friendly Info
                </Button>
              </Link>
              <Link href="/our-space">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#5B8A8A] rounded-full px-8"
                >
                  See Our Space
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
