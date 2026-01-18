"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Star,
  Calendar,
  Phone,
  CheckCircle2,
  Car,
  Scissors,
  Baby,
  Shield,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function KidsHaircutsHendersonPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#9B5DE5]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <Badge className="bg-[#9B5DE5]/10 text-[#9B5DE5] border-[#9B5DE5]/20">
                <MapPin className="w-4 h-4 mr-2" />
                Henderson, Nevada
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Kids Haircuts in{" "}
                <span className="gradient-text">Henderson, NV</span>
              </h1>
              <p className="text-xl text-gray-600">
                Henderson&apos;s most fun kids hair salon! Slayer Kid Cuts makes
                haircuts an adventure with themed chairs, entertainment, and
                expert stylists who specialize in children.
              </p>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="font-semibold">4.9</span>
                  <span className="text-gray-500">(247 reviews)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/book">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-[#FF6B9D] via-[#9B5DE5] to-[#00BBF9] text-white border-0 rounded-full px-8 py-6 text-lg shadow-xl"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Now
                  </Button>
                </Link>
                <a href="tel:+17025551234">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto rounded-full px-8 py-6 text-lg border-2 border-[#9B5DE5] text-[#9B5DE5]"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    (702) 555-1234
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=600&fit=crop"
                alt="Sensory-friendly kids haircuts in Henderson NV"
                width={600}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Kids Haircut Services in{" "}
              <span className="gradient-text">Henderson</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From babies to teens, we offer expert haircuts designed to make
              kids smile.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Scissors,
                title: "Kids Haircuts",
                price: "From $25",
                desc: "Expert cuts with entertainment",
              },
              {
                icon: Baby,
                title: "First Haircuts",
                price: "$35",
                desc: "Certificate & keepsake included",
              },
              {
                icon: Car,
                title: "Mobile Service",
                price: "From $40",
                desc: "We come to your Henderson home",
              },
              {
                icon: Shield,
                title: "Sensory-Friendly",
                price: "$30",
                desc: "For children with special needs",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#9B5DE5]/10 mx-auto mb-4 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-[#9B5DE5]" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                    <p className="text-[#9B5DE5] font-semibold mb-2">
                      {service.price}
                    </p>
                    <p className="text-sm text-gray-600">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Henderson Parents Choose{" "}
              <span className="gradient-text">Slayer Kid Cuts</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              "TVs and tablets at every station",
              "Themed styling chairs kids love",
              "Patient stylists trained for children",
              "Sensory-friendly accommodations",
              "Mobile service across Henderson",
              "First haircut packages with keepsakes",
              "No appointment rushed - ever",
              "Fun atmosphere that reduces anxiety",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
              >
                <CheckCircle2 className="w-6 h-6 text-[#00F5D4] flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103073.28897988795!2d-115.07382!3d36.0397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d0f9c2f5f5f5%3A0x0!2sHenderson%2C%20NV!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold">
                Visit Our Henderson{" "}
                <span className="gradient-text">Location</span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#9B5DE5] mt-1" />
                  <div>
                    <p className="font-bold">Address</p>
                    <p className="text-gray-600">1234 Fun Street, Suite 100</p>
                    <p className="text-gray-600">Henderson, NV 89014</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#9B5DE5] mt-1" />
                  <div>
                    <p className="font-bold">Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                    <p className="text-gray-600">Saturday: 9am - 5pm</p>
                    <p className="text-gray-600">Sunday: 10am - 4pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#9B5DE5] mt-1" />
                  <div>
                    <p className="font-bold">Contact</p>
                    <a
                      href="tel:+17025551234"
                      className="text-[#9B5DE5] hover:underline"
                    >
                      (702) 555-1234
                    </a>
                  </div>
                </div>
              </div>

              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#FF6B9D] via-[#9B5DE5] to-[#00BBF9] text-white rounded-full px-8 shadow-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Appointment
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "What ages do you serve?",
                a: "We cut hair for children of all ages, from babies having their first haircut to teenagers. Our expertise is making haircuts fun for kids who may be nervous or have had bad experiences at other salons.",
              },
              {
                q: "Do you offer mobile haircuts in Henderson?",
                a: "Yes! Our mobile service covers all of Henderson and the Las Vegas valley. We bring all our professional equipment to your home - perfect for kids who are more comfortable in their own environment.",
              },
              {
                q: "Are you trained for special needs children?",
                a: "Absolutely. Slayer is certified in sensory-friendly haircut techniques and has extensive experience working with children who have autism, ADHD, sensory processing differences, and anxiety.",
              },
              {
                q: "Do I need an appointment?",
                a: "While we accept walk-ins when possible, appointments are strongly recommended to ensure we have time dedicated just for your child without rushing.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
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
              Ready for a Fun Haircut in Henderson?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of happy Henderson families who&apos;ve discovered
              the Slayer Kid Cuts difference!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-white text-[#9B5DE5] hover:bg-white/90 rounded-full px-8"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:+17025551234">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#9B5DE5] rounded-full px-8"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
