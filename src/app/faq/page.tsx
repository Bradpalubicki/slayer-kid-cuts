"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ChevronDown,
  HelpCircle,
  Calendar,
  Phone,
  Brain,
  Scissors,
  DollarSign,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const faqCategories = [
  {
    name: "Sensory & Special Needs",
    icon: Brain,
    color: "#7BA3A3",
    questions: [
      {
        q: "What makes your salon sensory-friendly?",
        a: "Every appointment begins with understanding. After booking, you receive a short intake questionnaire about your child's past experiences, sensitivities, dislikes, comforts, and favorites. This allows Carla to prepare the space specifically for your child. The studio features earth-toned calming decor, a light-controlled and low-noise environment, sensory toys, weighted capes, flexible seating, and a Nintendo Switch. Nothing is rushed and nothing is forced.",
      },
      {
        q: "What if my child can't complete the haircut?",
        a: "If your child is unable to complete the haircut, you will not be charged. Comfort and trust always come first. There is no restraining and no forcing a child to hold still — only patience, flexibility, and gentle supportive positioning when needed.",
      },
      {
        q: "Does my child have to sit in the barber chair?",
        a: "No! If your child does not want to sit in the barber chair, that is completely okay. Haircuts can be done while sitting on a parent's lap, being held, playing on the floor, or wherever your child feels safest. The traditional barber chair is available but never required.",
      },
      {
        q: "What if my child has never completed a haircut before?",
        a: "You're in the right place! Carla has served hundreds of kids and families across three children's salons over 13+ years. She gently introduces herself and her tools at your child's pace. Nothing is rushed and nothing is forced.",
      },
      {
        q: "Can I stay with my child during the haircut?",
        a: "Yes! Parents are always welcome to stay. You can sit right next to your child, hold their hand, or have them sit on your lap if that helps.",
      },
    ],
  },
  {
    name: "Appointments & Booking",
    icon: Calendar,
    color: "#5B8A8A",
    questions: [
      {
        q: "How do I book an appointment?",
        a: "Text or call Carla at (702) 917-2350 to schedule your appointment. After booking, you will receive a short intake questionnaire so Carla can prepare the space specifically for your child.",
      },
      {
        q: "What happens after I book?",
        a: "After booking, you will receive a short intake questionnaire asking about your child's past experiences, sensitivities, dislikes, comforts, and favorites. This allows Carla to prepare the space — including having their favorite show, song, or sound ready to play when they arrive.",
      },
      {
        q: "How do I enter the building?",
        a: "Little Roots Studio is located inside a secured building and does not have a waiting room. When you arrive, please send a text to (702) 917-2350. If Carla does not respond immediately, she is still with the previous family. Once your appointment time begins and the suite is ready, you will receive the entry code. This system helps maintain a quiet, private, low-stimulation environment for every child.",
      },
      {
        q: "Do you take walk-ins?",
        a: "By appointment only. One family at a time. Text or call (702) 917-2350 to schedule.",
      },
    ],
  },
  {
    name: "Services & Pricing",
    icon: DollarSign,
    color: "#6B5B4F",
    questions: [
      {
        q: "How much does a haircut cost?",
        a: "Sensory-Friendly Haircut (60 min) is $45, Kids Haircut (30 min) is $30, Buzz Cut/Ends Trimmed is $20, and Bang Trim is $15. If your child is unable to complete the haircut, you will not be charged.",
      },
      {
        q: "Do you cut adults' hair?",
        a: "Parents and adults are by request only, unless they are in need of a sensory-friendly haircut. Little Roots Studio is primarily designed for children.",
      },
      {
        q: "What if my child won't sit in the chair?",
        a: "That is completely okay! Haircuts can be done while sitting on a parent's lap, being held, playing on the floor, or wherever your child feels safest. There is no restraining and no forcing.",
      },
      {
        q: "What happens before the appointment?",
        a: "After booking, you will receive a short intake questionnaire asking about your child's past experiences, sensitivities, dislikes, comforts, and favorites. This allows Carla to prepare the space specifically for your child.",
      },
    ],
  },
  {
    name: "The Experience",
    icon: Scissors,
    color: "#A69080",
    questions: [
      {
        q: "What does the studio environment include?",
        a: "Earth-toned, calming decor with a light-controlled and low-noise environment. One-family-at-a-time scheduling. TV with favorite shows or videos, Nintendo Switch gaming option, sensory toys and regulation tools, weighted capes, flexible seating options, and a traditional barber chair (available but not required).",
      },
      {
        q: "Is Carla a barber or cosmetologist?",
        a: "Carla is a licensed cosmetologist (not a barber). She has over 13 years of experience across three children's salons. Lowest fade offered is a #1. A #0.5 may be done under special circumstances. Zero fades are not offered.",
      },
      {
        q: "Do you cut adults' hair?",
        a: "Parents and adults are by request only, unless they are in need of a sensory-friendly haircut. Little Roots Studio is primarily designed for children.",
      },
      {
        q: "Do you sell hair products?",
        a: "No. Little Roots Studio does not offer product sales. Our focus is entirely on providing safe, comfortable haircut experiences for children.",
      },
    ],
  },
  {
    name: "Location & Hours",
    icon: MapPin,
    color: "#D4E5E5",
    questions: [
      {
        q: "Where are you located?",
        a: "We're located at Sunset Suites, 2895 N Green Valley Pkwy #G, Henderson, NV 89014. Text or call (702) 917-2350 to book.",
      },
      {
        q: "What are your hours?",
        a: "Tuesday through Saturday, 10am to 6pm. Closed daily from 1pm to 2pm. Closed Sunday and Monday.",
      },
      {
        q: "How do I enter the building?",
        a: "Little Roots Studio is located inside a secured building and does not have a waiting room. When you arrive, please send a text to (702) 917-2350. If Carla does not respond immediately, she is still with the previous family. Once your appointment time begins and the suite is ready, you will receive the entry code.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#5B8A8A]/5 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge className="bg-[#5B8A8A]/10 text-[#5B8A8A] border-[#5B8A8A]/20 mb-4">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Got <span className="gradient-text">Questions?</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our sensory-friendly salon,
              services, and what to expect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <category.icon
                    className="w-6 h-6"
                    style={{ color: category.color }}
                  />
                </div>
                <h2 className="text-2xl font-bold">{category.name}</h2>
              </div>

              {/* Questions */}
              <div className="space-y-3">
                {category.questions.map((item, qIndex) => {
                  const itemId = `${catIndex}-${qIndex}`;
                  const isOpen = openItems.has(itemId);

                  return (
                    <div
                      key={qIndex}
                      className="border rounded-xl overflow-hidden bg-white shadow-sm"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-5 pb-5 text-gray-600 border-t pt-4">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-hero rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-white/90 mb-8">
              We&apos;re happy to help! Reach out and we&apos;ll get back to you
              quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[#5B8A8A] hover:bg-white/90 rounded-full px-8"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
              <a href="tel:+17029172350">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#5B8A8A] rounded-full px-8"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Text or Call to Book
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
