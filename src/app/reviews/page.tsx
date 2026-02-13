"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Quote, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const REVIEWS = [
  {
    name: "Jessica M.",
    service: "Sensory-Friendly Haircut",
    rating: 5,
    text: "My son is autistic and haircuts have always been a nightmare. We've tried four different salons and he would scream and cry every time. Carla was the first person to actually listen to what he needs. She let him sit on my lap, used the weighted cape, and played his favorite show. He sat through the entire haircut. I cried happy tears in the car.",
    date: "January 2026",
    childAge: "5",
  },
  {
    name: "Amanda R.",
    service: "Kids Haircut",
    rating: 5,
    text: "The private suite makes ALL the difference. My daughter gets overstimulated by noise and other kids. At Little Roots it's just us and Carla in a calm, quiet space. My daughter actually asked when she can go back. That has never happened.",
    date: "January 2026",
    childAge: "7",
  },
  {
    name: "Michael T.",
    service: "Sensory-Friendly Haircut",
    rating: 5,
    text: "Carla sent us an intake questionnaire before the appointment and had everything ready when we arrived — his favorite music was already playing, the lights were dimmed, and she had sensory toys out. The level of preparation blew us away. Our son has SPD and she handled everything with so much patience.",
    date: "February 2026",
    childAge: "4",
  },
  {
    name: "Sarah K.",
    service: "First Haircut",
    rating: 5,
    text: "We brought our 2-year-old for her first haircut and were so nervous. Carla let us do a practice visit first at no charge so our daughter could see the space. On haircut day, she was calm and even smiled. Carla is a gift to families like ours.",
    date: "December 2025",
    childAge: "2",
  },
  {
    name: "Rachel D.",
    service: "Buzz Cut",
    rating: 5,
    text: "Quick, easy, and my son actually enjoyed it. The Nintendo Switch was a game changer — he was so focused on playing that Carla finished before he even noticed. Best $20 we've ever spent.",
    date: "January 2026",
    childAge: "6",
  },
  {
    name: "Christina L.",
    service: "Sensory-Friendly Haircut",
    rating: 5,
    text: "What I love most is the no-charge policy if your child can't complete the haircut. It takes all the pressure off. We've been twice now and both times were successful, but knowing that safety net is there lets us relax. Carla truly puts kids first.",
    date: "February 2026",
    childAge: "3",
  },
  {
    name: "David & Maria P.",
    service: "Kids Haircut",
    rating: 5,
    text: "We drove 30 minutes from Summerlin because nothing in our area compares. The secured building, the private suite, the one-family-at-a-time approach — it's exactly what our anxious son needed. Worth every mile.",
    date: "January 2026",
    childAge: "8",
  },
  {
    name: "Taylor W.",
    service: "Sensory-Friendly Haircut",
    rating: 5,
    text: "As a mom of a nonverbal autistic child, I've had so many bad haircut experiences. Carla didn't rush us, she didn't force anything, and she let my son move at his own pace. He even let her use the clippers for the first time ever. I can't recommend Little Roots enough.",
    date: "February 2026",
    childAge: "5",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const avgRating = (
    REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length
  ).toFixed(1);

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
              <Star className="w-4 h-4 mr-2 fill-current" />
              Parent Reviews
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              What <span className="gradient-text">Families Say</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Real experiences from real families. Every child is different, and every story matters.
            </p>

            {/* Rating summary */}
            <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-3 shadow-sm border border-sage/10">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="font-bold text-brown text-lg">{avgRating} out of 5</p>
                <p className="text-brown/60 text-sm">{REVIEWS.length} reviews</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {REVIEWS.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-sage/10 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <StarRating rating={review.rating} />
                    <p className="text-xs text-gray-400 mt-1">{review.date}</p>
                  </div>
                  <Quote className="w-8 h-8 text-sage/20" />
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <p className="font-semibold text-brown text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">Child age: {review.childAge}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs border-sage/20 text-sage"
                  >
                    {review.service}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Experience */}
      <section className="py-12 px-4 bg-cream">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-brown mb-3">
            Share Your Experience
          </h2>
          <p className="text-brown/70 mb-6">
            Your story helps other families find the right fit for their child.
            We&apos;d love to hear about your visit.
          </p>
          <a
            href="https://g.page/r/littleroots-studio/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-sage hover:bg-sage-dark text-white rounded-full px-8">
              <Star className="w-4 h-4 mr-2" />
              Leave a Google Review
            </Button>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-hero rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Experience It Yourself?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your child&apos;s appointment and see why families love Little Roots Studio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-white text-[#5B8A8A] hover:bg-white/90 rounded-full px-8"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:+17029172350">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#5B8A8A] rounded-full px-8"
                >
                  Text or Call — (702) 917-2350
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
