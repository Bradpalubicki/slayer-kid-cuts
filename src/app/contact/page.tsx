"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (would normally send to backend/Slack)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Badge className="bg-[#A69080]/10 text-[#A69080] border-[#A69080]/20 mb-4">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            We&apos;d Love to{" "}
            <span className="gradient-text">Hear From You</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question? Need to reschedule? Just want to say hi? We&apos;re
            here for you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#6B5B4F]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#6B5B4F]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Text or Call</h3>
                      <a
                        href="tel:+17029172350"
                        className="text-gray-600 hover:text-[#5B8A8A] transition-colors"
                      >
                        (702) 917-2350
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Text preferred — please allow time for responses during business hours, as I remain fully present with each child in my care.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#5B8A8A]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#5B8A8A]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email Us</h3>
                      <a
                        href="mailto:littlerootscuts333@gmail.com"
                        className="text-gray-600 hover:text-[#5B8A8A] transition-colors"
                      >
                        littlerootscuts333@gmail.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Please allow time for responses during business hours, as I remain fully present with each child in my care.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#A69080]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#A69080]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                      <p className="text-gray-600">
                        Sunset Suites
                        <br />
                        2895 N Green Valley Pkwy #G
                        <br />
                        Henderson, NV 89014
                      </p>
                      <a
                        href="https://maps.google.com/?q=2895+N+Green+Valley+Pkwy+Henderson+NV+89014"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#5B8A8A] hover:underline mt-2 inline-block"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#7BA3A3]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#7BA3A3]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Hours</h3>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>Tuesday – Saturday: 10am – 6pm</p>
                        <p>Closed daily 1pm – 2pm</p>
                        <p>Sunday & Monday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="hover:shadow-lg transition-shadow border-[#5B8A8A]/20 bg-[#5B8A8A]/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#5B8A8A]/10 flex items-center justify-center flex-shrink-0">
                      <ClipboardList className="w-6 h-6 text-[#5B8A8A]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Intake Questionnaire</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Already booked? Complete the intake form so Carla can prepare the space for your child.
                      </p>
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSetWpeKLI6A_HaWhivbO3BuWvgoVwqDgtrJzz7jqU-GLdP5EQ/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#5B8A8A] font-semibold hover:underline inline-block"
                      >
                        Complete Intake Form &rarr;
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full gradient-hero mx-auto mb-6 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out! We&apos;ll get back to you
                      within 24 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      variant="outline"
                      className="rounded-full"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Jane Smith"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="jane@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(702) 555-1234"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                          required
                        >
                          <option value="">Select a topic...</option>
                          <option value="booking">Booking Question</option>
                          <option value="reschedule">
                            Reschedule Appointment
                          </option>
                          <option value="pricing">Pricing & Services</option>
                          <option value="sensory">Sensory Accommodations</option>
                          <option value="intake">Intake Form Question</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="How can we help you?"
                        rows={5}
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4">
                      <p className="text-sm text-gray-500">
                        We typically respond within a few hours during business
                        hours.
                      </p>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto bg-gradient-to-r from-[#6B5B4F] via-[#5B8A8A] to-[#A69080] text-white rounded-full px-8"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin mr-2">⏳</span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.5!2d-115.0628!3d36.0825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2895+N+Green+Valley+Pkwy+Henderson+NV+89014!5e0!3m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* FAQ Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { q: "How do I book?", a: "Text or call (702) 917-2350 to schedule an appointment." },
              {
                q: "Do you do walk-ins?",
                a: "By appointment only. One family at a time.",
              },
              {
                q: "What if my child can't finish?",
                a: "If your child is unable to complete the haircut, you will not be charged.",
              },
              { q: "How do I enter?", a: "Text when you arrive. You'll receive the building entry code when your suite is ready." },
            ].map((faq) => (
              <Card key={faq.q} className="text-left">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm mb-1">{faq.q}</h3>
                  <p className="text-sm text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
