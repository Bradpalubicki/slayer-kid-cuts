"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Award,
  Users,
  Sparkles,
  CheckCircle2,
  Calendar,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#5B8A8A]/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <Badge className="bg-[#6B5B4F]/10 text-[#6B5B4F] border-[#6B5B4F]/20">
                <Heart className="w-4 h-4 mr-2" />
                Our Story
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Meet <span className="gradient-text">Carla</span>
              </h1>
              <p className="text-xl text-gray-600">
                Hi! I&apos;m Carla, and I started this salon because I believe
                every kid deserves to love getting their haircut. No tears, no
                fears - just fun!
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <p className="text-3xl font-bold gradient-text">13+</p>
                  <p className="text-sm text-gray-500">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold gradient-text">2000+</p>
                  <p className="text-sm text-gray-500">Happy Kids</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold gradient-text">4.9</p>
                  <p className="text-sm text-gray-500">Star Rating</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute inset-0 gradient-hero rounded-3xl rotate-3 opacity-20" />
              <Image
                src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=700&fit=crop"
                alt="Carla - Autism-trained kids hair stylist at Little Roots Studio"
                width={600}
                height={700}
                className="relative rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-[#5B8A8A]/10 text-[#5B8A8A] border-[#5B8A8A]/20 mb-6">
              Our Mission
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Every Child Deserves to Feel Like a Superstar
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              After years of cutting hair at traditional salons, I noticed
              something: kids were often scared, parents were stressed, and
              haircuts felt like a chore. I knew there had to be a better way.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              That&apos;s why I created Little Roots Studio - a place where kids
              actually WANT to come. With themed chairs, entertainment at every
              station, and endless patience, we&apos;ve turned haircuts from
              something kids dread into something they ask for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Patience First",
                description:
                  "Every child moves at their own pace. We never rush and always listen.",
                color: "#6B5B4F",
              },
              {
                icon: Sparkles,
                title: "Fun Always",
                description:
                  "From themed chairs to games and treats, we make every visit a celebration.",
                color: "#5B8A8A",
              },
              {
                icon: Users,
                title: "Inclusive Care",
                description:
                  "Special needs, sensory sensitivities, or just shy? We welcome all kids.",
                color: "#A69080",
              },
              {
                icon: Award,
                title: "Quality Results",
                description:
                  "Fun doesn't mean compromise. Every cut is professional and stylish.",
                color: "#7BA3A3",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div
                      className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                      style={{ backgroundColor: `${value.color}15` }}
                    >
                      <value.icon
                        className="w-8 h-8"
                        style={{ color: value.color }}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Carla */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=500&fit=crop"
                alt="Calm, happy child in sensory-friendly environment"
                width={600}
                height={500}
                className="rounded-3xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold">
                Meet <span className="gradient-text">Carla</span>
              </h2>
              <p className="text-gray-600">
                With over a decade of experience in children&apos;s hair
                styling, I&apos;ve had the joy of giving thousands of kids their
                perfect cuts. But what I love most isn&apos;t the cutting -
                it&apos;s the connections.
              </p>
              <p className="text-gray-600">
                I remember every kid who came in terrified and left beaming. I
                remember the parents who cried happy tears when their special
                needs child sat still for the first time. Those moments are why
                I do this.
              </p>

              <div className="space-y-4 pt-4">
                <h3 className="font-bold text-lg">Certifications & Training</h3>
                {[
                  "Licensed Cosmetologist - State of Nevada",
                  "Certified in Special Needs Hair Services",
                  "Sensory-Friendly Environment Training",
                  "Pediatric First Aid Certified",
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#7BA3A3]" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-[#5B8A8A]/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Parents <span className="gradient-text">Love Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                text: "Carla has a gift. My daughter has autism and has never let anyone touch her hair. After one visit, she now asks when she can go back. Truly magical.",
                name: "Amanda R.",
                child: "Mom of Emma, 6",
              },
              {
                text: "We've tried every kids salon in Vegas. Nothing compares. The private suite experience is incredible — my twins felt so safe and comfortable the whole time!",
                name: "David M.",
                child: "Dad of twins, 4",
              },
            ].map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
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
            className="gradient-hero rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to See the Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book an appointment and experience why families across Las Vegas
              love Little Roots Studio.
            </p>
            <Link href="/book">
              <Button
                size="lg"
                className="bg-white text-[#5B8A8A] hover:bg-white/90 rounded-full px-8"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your First Visit
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
