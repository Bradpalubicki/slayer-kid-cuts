"use client";

import {
  DoorOpen,
  Lightbulb,
  VolumeX,
  Armchair,
  Tv,
  Brain,
  Timer,
  Shield,
  Phone,
} from "lucide-react";

export default function OurSpacePage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream">
      {/* Hero */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sage font-medium text-sm tracking-wider uppercase">
            Our Private Suite
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-brown mt-3 mb-4">
            Your Own Sensory Sanctuary
          </h1>
          <p className="text-brown/70 text-lg">
            A private suite in Henderson, NV — not a busy salon. Just you, your child, and Carla
            in a calm, controlled space designed for sensitive children.
          </p>
        </div>
      </section>

      {/* What Makes Us Different - 4 quick cards */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: "🚗",
              title: "Wait in Your Car",
              desc: "We text you when we're ready. No waiting room.",
            },
            {
              icon: "👨‍👩‍👧",
              title: "One Family at a Time",
              desc: "The entire space is yours. No other families.",
            },
            {
              icon: "🤫",
              title: "No Background Noise",
              desc: "No music, no other clippers, no distractions.",
            },
            {
              icon: "⏰",
              title: "No Rushing",
              desc: "Take breaks anytime. Your child sets the pace.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-5 shadow-sm border border-sage/10"
            >
              <span className="text-3xl mb-2 block" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="font-bold text-brown mb-1">{item.title}</h3>
              <p className="text-brown/60 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sensory Features - clean grid */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-brown mb-8 text-center">
            Suite Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: DoorOpen, title: "Private Entrance", desc: "Walk straight from your car" },
              { icon: Lightbulb, title: "Dimmable Lighting", desc: "Adjust to your child's comfort" },
              { icon: VolumeX, title: "Quiet Environment", desc: "Soundproofed, no background noise" },
              { icon: Brain, title: "Sensory Tools", desc: "Weighted pads, fidgets, headphones" },
              { icon: Armchair, title: "Calm Corner", desc: "Cozy break space with soft seating" },
              { icon: Tv, title: "Entertainment", desc: "Tablet with shows or bring your own" },
              { icon: Timer, title: "Visual Supports", desc: "Schedules and timers for predictability" },
              { icon: Shield, title: "Break Anytime", desc: "Pause or exit whenever needed" },
              { icon: Phone, title: "Text Updates", desc: "We text when the suite is ready" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 p-4 bg-cream rounded-xl border border-sage/10"
              >
                <item.icon className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-brown text-sm">{item.title}</h3>
                  <p className="text-brown/60 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-brown mb-3">
            Ready to Visit?
          </h2>
          <p className="text-brown/70 mb-6">
            Text or call to book your appointment. Carla is happy to answer any questions about your child&apos;s needs.
          </p>
          <a
            href="tel:+17029172350"
            className="inline-block bg-sage hover:bg-sage-dark text-white font-bold px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg"
          >
            Text or Call — (702) 917-2350
          </a>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-brown/60 text-sm">
            <span>Tue–Sat 10am–6pm</span>
            <span>Henderson, NV</span>
            <span>One Family at a Time</span>
          </div>
        </div>
      </section>
    </div>
  );
}
