"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Scissors,
  CheckCircle2,
  Heart,
  Shield,
  Brain,
  Star,
  Send,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function CareersPage() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      experience: fd.get("experience") as string,
      message: fd.get("message") as string,
    };

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit");
      }
      setFormStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setFormStatus("error");
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#5B8A8A]/5 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="bg-[#5B8A8A]/10 text-[#5B8A8A] border-[#5B8A8A]/20 mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Join Our Team
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Work at <span className="gradient-text">Little Roots Studio</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re growing! If you love working with children and want to be part of
              Henderson&apos;s first sensory-friendly children&apos;s salon suite, we&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-brown">
                More Than a Salon — A Safe Space
              </h2>
              <p className="text-brown/70">
                Little Roots Studio is a private suite inside Sunset Suites in Henderson, NV.
                We specialize in sensory-friendly haircuts for children with autism, anxiety,
                sensory processing differences, and all kids who deserve a calm, patient experience.
              </p>
              <p className="text-brown/70">
                Owner Carla has 13+ years of experience working with children across three
                different salons. As the studio grows, we&apos;re looking for compassionate,
                patient stylists and assistants who share our mission.
              </p>
            </div>

            <div className="bg-cream rounded-3xl p-8 border border-sage/10">
              <h3 className="font-bold text-brown text-lg mb-4">Our Values</h3>
              <div className="space-y-4">
                {[
                  { icon: Heart, text: "Children\u2019s comfort always comes first" },
                  { icon: Shield, text: "Trauma-informed, never-forced approach" },
                  { icon: Brain, text: "Understanding over accommodation" },
                  { icon: Star, text: "Patience is not optional \u2014 it\u2019s the standard" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                    <span className="text-brown/80 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-brown mb-8 text-center">
              Who We&apos;re Looking For
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: Scissors,
                  title: "Licensed Stylists",
                  desc: "Nevada cosmetology license required. Experience with children preferred.",
                  required: true,
                },
                {
                  icon: Heart,
                  title: "Patient & Compassionate",
                  desc: "Comfort with anxious, neurodivergent, or scared children is essential.",
                  required: true,
                },
                {
                  icon: Shield,
                  title: "Dependable & Professional",
                  desc: "Families trust us with their children. Reliability matters.",
                  required: true,
                },
                {
                  icon: Brain,
                  title: "Open to Learning",
                  desc: "Sensory-friendly training provided. Willingness to learn is key.",
                  required: false,
                },
                {
                  icon: Star,
                  title: "Salon Assistants",
                  desc: "Help maintain the studio, assist during appointments, and welcome families.",
                  required: false,
                },
                {
                  icon: Heart,
                  title: "Share Our Mission",
                  desc: "You believe every child deserves to feel safe during a haircut.",
                  required: true,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-5 border border-sage/10 hover:shadow-md transition-shadow"
                >
                  <item.icon className="w-6 h-6 text-sage mb-3" />
                  <h3 className="font-bold text-brown mb-1">{item.title}</h3>
                  <p className="text-brown/60 text-sm">{item.desc}</p>
                  {item.required && (
                    <Badge className="mt-2 bg-sage/10 text-sage border-sage/20 text-xs">
                      Required
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-brown mb-2 text-center">
              Apply Now
            </h2>
            <p className="text-brown/70 text-center mb-8">
              Tell us about yourself. Carla will reach out if there&apos;s a good fit.
            </p>

            {formStatus === "success" ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-sage" />
                </div>
                <h3 className="text-xl font-bold text-brown mb-2">Application Received!</h3>
                <p className="text-brown/70">
                  Thank you for your interest. Carla will review your application
                  and reach out if there&apos;s a good fit.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(702) 555-0000"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="experience">
                    Experience with Children / Relevant Background *
                  </Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    required
                    placeholder="Tell us about your experience working with kids, any licenses you hold, and your background in hair/beauty..."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">
                    Why Little Roots Studio?
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="What draws you to our mission? (Optional)"
                    rows={3}
                    className="mt-1"
                  />
                </div>

                {formStatus === "error" && (
                  <div className="bg-red-50 text-red-700 p-3 rounded-xl text-sm">
                    {errorMsg}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-sage hover:bg-sage-dark text-white rounded-full py-6 text-lg"
                >
                  {formStatus === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Application
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA for clients */}
      <section className="py-12 bg-cream">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-brown/60 mb-3">Looking to book an appointment instead?</p>
          <Link href="/book">
            <Button
              variant="outline"
              className="rounded-full border-sage text-sage hover:bg-sage hover:text-white"
            >
              Book an Appointment →
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
