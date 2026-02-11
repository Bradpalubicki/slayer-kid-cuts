"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Heart,
  Clock,
  Volume2,
  Eye,
  Hand,
  CheckCircle2,
  Calendar,
  Phone,
  Star,
  Headphones,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const accommodations = [
  {
    icon: Clock,
    title: "Nothing Is Rushed or Forced",
    description:
      "We take time to connect. I gently introduce myself and my tools at your child's pace. Nothing is rushed and nothing is forced.",
    color: "#6B5B4F",
  },
  {
    icon: Volume2,
    title: "Low-Noise Environment",
    description:
      "The space remains quiet and light-controlled. Your child's favorite show, song, or sound can already be playing when they arrive.",
    color: "#5B8A8A",
  },
  {
    icon: Eye,
    title: "Intake Questionnaire",
    description:
      "After booking, you receive a short questionnaire about your child's past experiences, sensitivities, dislikes, comforts, and favorites — so the space is prepared specifically for them.",
    color: "#A69080",
  },
  {
    icon: Hand,
    title: "No Restraining, No Forcing",
    description:
      "There is no restraining and no forcing a child to hold still. Only patience, flexibility, and gentle supportive positioning when needed.",
    color: "#7BA3A3",
  },
  {
    icon: Sun,
    title: "Flexible Seating",
    description:
      "If your child does not want to sit in the barber chair, that is completely okay. Haircuts can be done on a parent's lap, being held, on the floor, or wherever your child feels safest.",
    color: "#D4E5E5",
  },
  {
    icon: Headphones,
    title: "No Charge If Unable to Complete",
    description:
      "If your child is unable to complete the haircut, you will not be charged. Comfort and trust always come first.",
    color: "#F15BB5",
  },
];

const tips = [
  "After booking, complete the intake questionnaire so Carla can prepare the space for your child",
  "Bring a favorite comfort item or toy from home",
  "Let your child know their favorite show, song, or sound can be playing when they arrive",
  "Text (702) 917-2350 when you arrive — you'll receive the entry code when the suite is ready",
  "Let us know specific triggers to avoid in the intake questionnaire",
  "Remember: if your child is unable to complete the haircut, you will not be charged",
];

export default function SensoryFriendlyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#7BA3A3]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <Badge className="bg-[#7BA3A3]/10 text-[#7BA3A3] border-[#7BA3A3]/20">
                <Shield className="w-4 h-4 mr-2" />
                Sensory-Friendly Care
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Every Child <span className="gradient-text">Deserves</span> a
                Great Haircut
              </h1>
              <p className="text-xl text-gray-600">
                As the first sensory-friendly children&apos;s salon suite of its kind in the Las Vegas Valley, Little Roots Studio was created to serve autistic and neurodivergent children, children who experience difficulties with haircuts, and to provide a fun, private experience for kids who love the process. Because care should never be rushed.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">
                    Certified Sensory-Friendly
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/book">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-[#7BA3A3] to-[#5B8A8A] text-white border-0 rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-shadow"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Sensory-Friendly Cut
                  </Button>
                </Link>
                <a href="tel:+17029172350">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto rounded-full px-8 py-6 text-lg border-2 border-[#7BA3A3] text-[#7BA3A3] hover:bg-[#7BA3A3] hover:text-white"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call to Discuss Needs
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7BA3A3]/20 to-[#5B8A8A]/20 rounded-3xl rotate-3" />
              <Image
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=700&fit=crop"
                alt="Gentle, patient mother-child moment representing trauma-informed care"
                width={600}
                height={700}
                className="relative rounded-3xl shadow-2xl"
              />
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#7BA3A3]/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-[#7BA3A3]" />
                  </div>
                  <div>
                    <p className="font-bold">100% Success Rate</p>
                    <p className="text-sm text-gray-500">
                      With sensory-friendly clients
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Carla's Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why This Matters to <span className="gradient-text">Carla</span>
            </h2>
            <div className="bg-gray-50 rounded-3xl p-8 text-left">
              <p className="text-lg text-gray-600 mb-4">
                &quot;Little Roots Studio was created to slow things down. After years of working in rushed environments where children were treated like numbers, I chose to build a space rooted in patience, safety, and care.&quot;
              </p>
              <p className="text-lg text-gray-600 mb-4">
                &quot;Providing safety and comfort for children is deeply important to me because it&apos;s something I didn&apos;t always get to experience growing up. I know how much it matters to feel seen, respected, and allowed to move at your own pace. That understanding guides everything I do.&quot;
              </p>
              <p className="text-lg text-gray-600">
                &quot;My goal is simple: to offer children a space where they feel comfortable, supported, and never rushed. Little Roots Studio is more than a haircut — it&apos;s a safe place.&quot;
              </p>
              <p className="text-right text-[#5B8A8A] font-bold mt-4">
                - Carla
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-[#5B8A8A]/10 text-[#5B8A8A] border-[#5B8A8A]/20 mb-4">
              Our Approach
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Accommodations We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every adjustment we make is designed to help your child feel safe
              and comfortable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div
                      className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <item.icon
                        className="w-8 h-8"
                        style={{ color: item.color }}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Arrival & Entry Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#7BA3A3] to-[#5B8A8A] rounded-3xl p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-white space-y-6"
              >
                <Badge className="bg-white/20 text-white border-white/30">
                  Arrival & Entry
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  A Calm, Private Arrival
                </h2>
                <p className="text-xl text-white/90">
                  Little Roots Studio is located inside a secured building
                  with no waiting room — maintaining a quiet, private,
                  low-stimulation environment for every child.
                </p>
                <ul className="space-y-3">
                  {[
                    "Text (702) 917-2350 when you arrive",
                    "Receive the building entry code when your suite is ready",
                    "No waiting room — no overwhelm",
                    "Your child's space is already prepared",
                    "One family at a time — always",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="tel:+17029172350">
                  <Button
                    size="lg"
                    className="bg-white text-[#5B8A8A] hover:bg-white/90 rounded-full px-8 shadow-lg"
                  >
                    Text or Call to Book
                  </Button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-white space-y-6"
              >
                <h3 className="text-2xl font-bold">The Studio Environment</h3>
                <ul className="space-y-3">
                  {[
                    "Earth-toned, calming decor",
                    "Light-controlled and low-noise",
                    "One-family-at-a-time scheduling",
                    "TV with favorite shows or videos",
                    "Nintendo Switch gaming option",
                    "Sensory toys and regulation tools",
                    "Weighted capes available",
                    "Flexible seating options",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Parents */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tips for a <span className="gradient-text">Successful Visit</span>
            </h2>
            <p className="text-xl text-gray-600">
              Here are some things that have helped other families:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <motion.div
                key={tip}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-[#7BA3A3]/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#7BA3A3]" />
                </div>
                <p className="text-gray-700">{tip}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              From <span className="gradient-text">Our Families</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                text: "My son has autism and hadn't had a haircut in over a year because of traumatic salon experiences. Carla changed everything. She let him explore the tools first, used the quietest clippers, and let him take breaks. He now asks when his next appointment is!",
                name: "Amanda R.",
                child: "Mom of Owen, 6 (ASD)",
              },
              {
                text: "The mobile visit option was a game-changer for us. My daughter with SPD was able to sit in her favorite spot, hold her comfort stuffie, and watch her favorite show. Carla was incredibly patient and followed all our cues. First successful haircut in 3 years!",
                name: "Michael T.",
                child: "Dad of Lily, 8 (SPD)",
              },
            ].map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">
                      &quot;{review.text}&quot;
                    </p>
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.child}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#7BA3A3] to-[#5B8A8A] rounded-3xl p-12 text-center text-white"
          >
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let&apos;s Talk About Your Child
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Every child is different. I&apos;d love to hear about your
              child&apos;s specific needs before the appointment so I can
              prepare the perfect experience.
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
                  <Phone className="w-5 h-5 mr-2" />
                  Call to Chat First
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
