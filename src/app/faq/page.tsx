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
  Gift,
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
        a: "We specialize in working with children who have autism, ADHD, sensory processing differences, and anxiety. We offer noise-canceling headphones, whisper-quiet clippers, weighted lap pads, visual timers, and most importantly - no time pressure. Our stylists are trained and certified in sensory-friendly techniques.",
      },
      {
        q: "Do you charge extra for sensory-friendly haircuts?",
        a: "No! Our sensory-friendly accommodations are included at no extra charge. We believe every child deserves a comfortable haircut experience.",
      },
      {
        q: "Can we take breaks during the haircut?",
        a: "Absolutely! We never rush. If your child needs a break, we pause. Some haircuts take 15 minutes, others take an hour - and that's perfectly okay.",
      },
      {
        q: "What if my child has never completed a haircut before?",
        a: "You're in the right place! Many families come to us after struggling at other salons. We've helped hundreds of children who previously couldn't sit through a haircut. We'll work at your child's pace.",
      },
      {
        q: "Can I stay with my child during the haircut?",
        a: "Yes! Parents are always welcome to stay. You can sit right next to your child, hold their hand, or even have them sit on your lap if that helps.",
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
        a: "You can book online through our website or call us directly. We recommend booking at least a few days in advance, especially for weekend appointments.",
      },
      {
        q: "What's your cancellation policy?",
        a: "We understand life with kids is unpredictable! We ask for at least 24 hours notice for cancellations. Last-minute cancellations due to illness are always understood.",
      },
      {
        q: "Can I book multiple kids at the same time?",
        a: "Yes! Our booking system lets you add multiple children to one appointment. It's a great way to get everyone done in one trip.",
      },
      {
        q: "Do you take walk-ins?",
        a: "We accept walk-ins when availability allows, but we recommend booking ahead to guarantee your spot and minimize wait time.",
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
        q: "What entertainment do you have for kids?",
        a: "Every station has a TV with cartoons, tablets with games, and fun themed chairs. We want kids to be so entertained they forget they're getting a haircut!",
      },
      {
        q: "Do kids get a treat after their haircut?",
        a: "Yes! Every child gets a lollipop (or alternative treat) after their haircut. We believe in ending on a sweet note!",
      },
      {
        q: "What age kids do you serve?",
        a: "We serve children of all ages - from first haircuts (typically around 1-2 years old) through teens. We also cut parents' hair!",
      },
      {
        q: "Do you do birthday parties?",
        a: "Yes! We offer birthday party packages with hair styling, tinsel, temporary color, and party favors. Contact us for custom quotes.",
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
        a: "We're coming soon to Las Vegas, Nevada! Sign up for our newsletter on our Grand Opening page to be the first to know our exact location.",
      },
      {
        q: "What are your hours?",
        a: "Tuesday through Saturday, 10am to 6pm. Closed daily from 1pm to 2pm. Closed Sunday and Monday.",
      },
      {
        q: "How do I enter the building?",
        a: "Little Roots Studio is inside a secured building with no waiting room. When you arrive, text (702) 917-2350. Once your suite is ready, you'll receive the entry code.",
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
              <Link href="/coming-soon">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#5B8A8A] rounded-full px-8"
                >
                  <Gift className="w-5 h-5 mr-2" />
                  Grand Opening Info
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
