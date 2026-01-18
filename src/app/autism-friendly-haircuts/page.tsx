"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Brain,
  CheckCircle2,
  ChevronRight,
  Heart,
  Clock,
  Volume2,
  Eye,
  Hand,
  Users,
  Star,
  Calendar,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function AutismFriendlyHaircutsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80"
            alt="Serene forest path representing calm and safety"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sage/70 via-brown/40 to-sage/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Autism-Trained Specialist
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Autism-Friendly Haircuts in Henderson, NV
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Finally, a haircut experience designed specifically for your autistic child.
              Private suite. Trained specialist. No rushing. No judgment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/coming-soon">
                <Button
                  size="lg"
                  className="bg-white text-sage hover:bg-white/90 rounded-full px-8 shadow-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Join the Waitlist
                </Button>
              </Link>
              <Link href="/sensory-friendly">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-sage rounded-full px-8"
                >
                  Learn About Our Approach
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4">
              We Understand the Struggle
            </h2>
            <p className="text-lg text-brown/70">
              If haircuts have been traumatic for your autistic child, you&apos;re not alone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Traditional salons are too loud, bright, and overwhelming",
              '"Kid-friendly" salons are often even MORE stimulating with games, music, and chaos',
              "Stylists rush and don't understand sensory needs",
              "Your child has meltdowns and associates haircuts with trauma",
              "You've tried everything and nothing works",
              "You feel judged by stylists and other parents",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-500 text-sm">✗</span>
                </div>
                <span className="text-brown/80">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-xl text-sage-dark font-semibold">
              Little Roots Studio was built specifically to solve these problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="bg-sage/10 text-sage border-sage/20 mb-4">
              <Star className="w-4 h-4 mr-2" />
              Our Approach
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4">
              What Makes Our Autism-Friendly Haircuts Different
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Autism-Trained Specialist",
                desc: "Carla has 13+ years of experience working with autistic children and specialized training in autism-friendly haircutting techniques.",
              },
              {
                icon: Users,
                title: "One Family at a Time",
                desc: "The entire private suite is yours. No other families, no waiting room, no unexpected people.",
              },
              {
                icon: Volume2,
                title: "Sensory-Controlled Environment",
                desc: "Dimmable lights, soundproofed walls, no background music. We control the sensory input.",
              },
              {
                icon: Clock,
                title: "Never Rushed",
                desc: "Take all the time you need. Breaks are expected and welcomed. Your child sets the pace.",
              },
              {
                icon: Eye,
                title: "Visual Supports",
                desc: "Visual schedules, first-then boards, and timers help your child understand what's happening.",
              },
              {
                icon: Hand,
                title: "Sensory Tools Available",
                desc: "Weighted lap pads, fidgets, noise-canceling headphones, and more — whatever helps your child feel regulated.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-sage/10 hover:border-sage/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-sage/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-sage" />
                    </div>
                    <h3 className="font-bold text-brown text-lg mb-2">{item.title}</h3>
                    <p className="text-brown/60">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Carla Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80"
                  alt="Carla, autism-trained kids hair stylist"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-sage text-white px-6 py-3 rounded-2xl shadow-lg">
                <span className="font-bold text-lg">13+ Years</span>
                <span className="text-white/80 text-sm block">with kids</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-sage/10 text-sage border-sage/20 mb-4">
                <Heart className="w-4 h-4 mr-2" />
                Meet Carla
              </Badge>
              <h2 className="text-3xl font-bold text-brown mb-6">
                Your Child&apos;s Autism-Trained Stylist
              </h2>
              <div className="space-y-4 text-brown/80">
                <p>
                  I&apos;ve spent over 13 years working with children of all abilities —
                  but I have a special place in my heart for autistic and neurodivergent kids.
                </p>
                <p>
                  I understand that traditional haircut experiences don&apos;t work for
                  every child. I&apos;ve seen the tears, the meltdowns, the parents who feel
                  helpless. And I&apos;ve also seen the magic that happens when a child is
                  given the right environment and the right approach.
                </p>
                <p className="text-sage-dark font-semibold">
                  That&apos;s why I built Little Roots Studio — a sanctuary where your child
                  can feel safe.
                </p>
              </div>

              <div className="mt-6 p-4 bg-white rounded-2xl">
                <p className="font-bold text-brown mb-3 text-sm">Training & Credentials:</p>
                <ul className="space-y-2 text-sm text-brown/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage mt-0.5" />
                    <span>Licensed Cosmetologist — State of Nevada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage mt-0.5" />
                    <span>Autism-Friendly Haircutting Certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage mt-0.5" />
                    <span>Trauma-Informed Care Training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage mt-0.5" />
                    <span>Sensory Processing Disorder Awareness</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4">
              What to Expect at Your Appointment
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Pre-Visit Preparation",
                desc: "We'll send you photos of our space and a social story to share with your child before the visit. You can tell us about your child's specific needs, triggers, and what helps them feel calm.",
              },
              {
                step: "2",
                title: "Wait in Your Car",
                desc: "When you arrive, text us and wait in your car where your child is comfortable. We'll text you when we're ready — no waiting room required.",
              },
              {
                step: "3",
                title: "Private Suite Entry",
                desc: "Walk directly from your car into our private suite through a separate entrance. The entire space is yours — no other families.",
              },
              {
                step: "4",
                title: "Go at Your Child's Pace",
                desc: "We never rush. If your child needs breaks, we take breaks. If they need to stop entirely, we stop. Building trust is more important than finishing the haircut.",
              },
              {
                step: "5",
                title: "Celebrate the Win",
                desc: "Every visit is a success — even if we only touched the hair for 30 seconds. Progress happens over time, and we celebrate every step forward.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 bg-cream rounded-2xl"
              >
                <div className="w-12 h-12 rounded-full bg-sage text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-brown text-lg mb-2">{item.title}</h3>
                  <p className="text-brown/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4">
              Autism-Friendly Haircut Services
            </h2>
            <p className="text-lg text-brown/70">
              All services include extended time, sensory accommodations, and no rushing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-sage/20">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-brown">Sensory-Adapted Cut</h3>
                  <span className="text-2xl font-bold text-sage">$50</span>
                </div>
                <p className="text-brown/70 mb-4">
                  Our signature service for autistic and sensory-sensitive children.
                  Extended appointment time with all accommodations included.
                </p>
                <ul className="space-y-2 text-sm text-brown/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    Extended time — never rushed
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    Full sensory tool access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    Breaks as needed
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    Visual supports provided
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brown/20">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-brown">First Haircut Experience</h3>
                  <span className="text-2xl font-bold text-sage">$45</span>
                </div>
                <p className="text-brown/70 mb-4">
                  Perfect for autistic children who have never had a haircut or have
                  significant anxiety around the experience.
                </p>
                <ul className="space-y-2 text-sm text-brown/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    Gentle, trauma-informed approach
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    Certificate and photo keepsake
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    Pre-visit social story
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    All sensory accommodations
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-sage/10 text-sage border-sage/20 mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              Location
            </Badge>
            <h2 className="text-3xl font-bold text-brown mb-4">
              Serving Henderson, NV & Las Vegas Valley
            </h2>
            <p className="text-brown/70 mb-6">
              Little Roots Studio is located in Henderson, Nevada. We serve families from
              Henderson, Las Vegas, Paradise, Boulder City, Green Valley, Summerlin, and
              surrounding areas.
            </p>
            <p className="text-sage-dark font-semibold text-lg">
              Opening Spring 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-hero rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Your Child Deserves a Positive Haircut Experience
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our waitlist to be the first to know when we open.
              Priority booking for waitlist families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/coming-soon">
                <Button
                  size="lg"
                  className="bg-white text-sage hover:bg-white/90 rounded-full px-8"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Join the Waitlist
                </Button>
              </Link>
              <Link href="/prepare">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-sage rounded-full px-8"
                >
                  <ChevronRight className="w-5 h-5 mr-2" />
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
