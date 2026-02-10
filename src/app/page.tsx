"use client";

import { useState } from "react";
import Image from "next/image";

// FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is a sensory-friendly haircut?",
      answer:
        "A sensory-friendly haircut is designed for children who may be sensitive to sounds, lights, textures, or touch. We offer dimmed lighting, noise-canceling headphones, weighted lap pads, fidget toys, and a calm environment. We never rush and allow breaks as needed.",
    },
    {
      question: "Do you specialize in haircuts for autistic children?",
      answer:
        "Yes! Our stylist Carla has 13+ years of experience working with children and specialized training in autism-friendly haircutting. We understand sensory sensitivities and adapt our approach to each child's needs.",
    },
    {
      question: "What ages do you serve?",
      answer:
        "We serve children from infants (first haircuts) through teens (ages 0-17). We specialize in making haircuts a positive experience for children of all ages and abilities.",
    },
    {
      question: "Is it really one family at a time?",
      answer:
        "Yes! Your family will have the entire private suite to yourselves. No other families, no waiting room overwhelm. We also offer a wait-in-car option where we text you when we're ready.",
    },
    {
      question: "What if my child has had bad haircut experiences before?",
      answer:
        "We specialize in helping children rebuild trust around haircuts. We go at your child's pace, offer choices, and never force anything. Many families come to us after traumatic experiences elsewhere.",
    },
    {
      question: "Where is Little Roots Studio located?",
      answer:
        "Little Roots Studio is located at Sunset Suites, 2895 N Green Valley Pkwy #G, Henderson, NV 89014. We serve families throughout the Las Vegas valley including Paradise, Boulder City, Green Valley, Summerlin, and surrounding areas.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "Text or call us at (702) 917-2350 to book your appointment. We'll find a time that works for your family.",
    },
    {
      question: "What sensory tools do you have available?",
      answer:
        "We offer noise-canceling headphones, weighted lap pads, fidget toys, visual timers, dimmable lighting, TV/tablet with favorite shows, and a calm corner for breaks. We also have a treasure chest of rewards!",
    },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm border border-sage/10 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-sage/5 transition-colors"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-semibold text-brown pr-4">
              {faq.question}
            </span>
            <span
              className={`text-sage text-2xl transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}
            >
              +
            </span>
          </button>
          <div
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}
          >
            <p className="px-6 pb-5 text-brown/70 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-cream">
      {/* ========== HERO SECTION ========== */}
      <section
        className="min-h-screen relative flex flex-col justify-center items-center px-4 py-8 pt-24 sm:py-12 sm:pt-32"
        aria-labelledby="hero-heading"
      >
        {/* Background Image - Serene Nature Scene */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80"
            alt="Serene forest path with soft sunlight filtering through trees, representing calm and safety"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sage/60 via-brown/30 to-sage/50"></div>
        </div>

        {/* Frosted Card Container */}
        <div
          className="relative z-10 w-full max-w-[640px] mx-auto rounded-3xl p-6 sm:p-10"
          style={{
            background: "rgba(255, 253, 250, 0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          }}
        >
          {/* Badge */}
          <div className="text-center mb-5">
            <span className="inline-block bg-sage text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-md">
              NOW OPEN IN HENDERSON, NV
            </span>
          </div>

          {/* Logo */}
          <div className="mb-5 text-center">
            <Image
              src="/images/little-roots-logo.webp"
              alt="Little Roots Studio - Henderson's First Autism-Trained Sensory-Friendly Kids Hair Salon"
              width={350}
              height={175}
              className="mx-auto w-[200px] sm:w-[280px] h-auto"
              priority
              unoptimized
            />
          </div>

          {/* H1 - Emotional Hero Copy */}
          <h1
            id="hero-heading"
            className="text-xl sm:text-2xl md:text-3xl text-brown mb-4 font-bold text-center leading-tight"
          >
            Your Child Deserves to Feel Safe
          </h1>

          <p className="text-brown/80 text-sm sm:text-base mb-4 text-center leading-relaxed">
            <strong className="text-sage-dark">Autism-friendly</strong>, <strong className="text-sage-dark">trauma-informed</strong>, <strong className="text-sage-dark">sensory-safe</strong> haircuts for anxious, neurodivergent, and sensitive children in Henderson, NV.
          </p>

          <p className="text-brown/70 text-sm mb-5 text-center">
            No rushing. No judgment. No sensory overload.<br />
            <span className="font-medium text-sage-dark">Just calm, care, and a haircut that matters.</span>
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="bg-sage/15 text-sage-dark px-3 py-1 rounded-full text-xs font-medium">
              🧩 Autism-Trained
            </span>
            <span className="bg-sage/15 text-sage-dark px-3 py-1 rounded-full text-xs font-medium">
              💚 13+ Years Experience
            </span>
            <span className="bg-sage/15 text-sage-dark px-3 py-1 rounded-full text-xs font-medium">
              🔇 One Family at a Time
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <a
              href="tel:+17029172350"
              className="block w-full bg-sage hover:bg-sage-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg text-center"
            >
              Text or Call to Book — (702) 917-2350
            </a>
            <div className="flex gap-3">
              <a
                href="/services"
                className="flex-1 bg-white border-2 border-sage/30 hover:border-sage text-sage-dark font-semibold px-4 py-3 rounded-xl transition-all text-center text-sm"
              >
                View Services
              </a>
              <a
                href="/contact"
                className="flex-1 bg-white border-2 border-sage/30 hover:border-sage text-sage-dark font-semibold px-4 py-3 rounded-xl transition-all text-center text-sm"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Message from Carla - Outside the card */}
        <div className="relative z-10 mt-6 bg-white/25 backdrop-blur-sm rounded-2xl p-5 max-w-lg mx-auto border border-white/30">
          <p className="text-white italic text-sm leading-relaxed text-center drop-shadow-md">
            &ldquo;After 13 years working with children — including specialized autism training — I&apos;ve finally created the sanctuary every anxious, sensitive child deserves. A place where haircuts become confidence-building experiences.&rdquo;
          </p>
          <p className="text-white font-semibold mt-3 text-sm text-center drop-shadow-md">
            — Carla, Autism-Trained Specialist & Owner 💚
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10"
          aria-hidden="true"
        >
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-2 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* ========== WHY LITTLE ROOTS ========== */}
      <section className="py-20 px-4 bg-white" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">
              Why Choose Us
            </span>
            <h2
              id="why-heading"
              className="text-3xl sm:text-4xl font-bold text-brown mt-3 mb-4"
            >
              Not Just Another Kids Salon
            </h2>
            <p className="text-brown/70 max-w-2xl mx-auto">
              We&apos;re not a &ldquo;fun&rdquo; kids salon with car chairs and flashy distractions.
              We&apos;re a <strong className="text-sage-dark">sanctuary</strong> — designed specifically for children
              who need calm, patience, and understanding.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <article className="rounded-3xl overflow-hidden shadow-lg border border-sage/10 bg-white hover:shadow-xl transition-shadow">
              <div className="h-52 relative">
                <Image
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80"
                  alt="Mother gently comforting child, representing trauma-informed care"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <span className="text-3xl mb-3 block" aria-hidden="true">
                  💚
                </span>
                <h3 className="font-bold text-brown text-lg mb-2">
                  Trauma-Informed Care
                </h3>
                <p className="text-brown/60 text-sm">
                  If past haircuts ended in tears, we specialize in rebuilding
                  trust — one gentle experience at a time.
                </p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="rounded-3xl overflow-hidden shadow-lg border border-sage/10 bg-white hover:shadow-xl transition-shadow">
              <div className="h-52 relative">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                  alt="Peaceful, private room with soft natural lighting representing calm sanctuary"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <span className="text-3xl mb-3 block" aria-hidden="true">
                  🔇
                </span>
                <h3 className="font-bold text-brown text-lg mb-2">
                  True Privacy
                </h3>
                <p className="text-brown/60 text-sm">
                  No other families. No waiting room chaos. Just you, your child,
                  and Carla in a calm, private space.
                </p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="rounded-3xl overflow-hidden shadow-lg border border-sage/10 bg-white hover:shadow-xl transition-shadow">
              <div className="h-52 relative">
                <Image
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80"
                  alt="Young child feeling calm and safe, representing autism-trained specialist care"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <span className="text-3xl mb-3 block" aria-hidden="true">
                  🧩
                </span>
                <h3 className="font-bold text-brown text-lg mb-2">
                  Autism-Trained Specialist
                </h3>
                <p className="text-brown/60 text-sm">
                  Carla has 13+ years working with neurodivergent children — not just accommodating,
                  but truly understanding.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section
        className="py-20 px-4 bg-cream"
        aria-labelledby="services-heading"
        id="services"
      >
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">
              Our Services
            </span>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl font-bold text-brown mt-3 mb-4"
            >
              Kids Haircut Services in Henderson, NV
            </h2>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Haircut Services */}
            <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-lg border border-sage/20">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-sage/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-2xl sm:text-3xl">✂️</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-brown">
                    Haircut Services
                  </h3>
                  <p className="text-sage text-xs sm:text-sm font-medium">
                    Sensory-Friendly
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex justify-between items-center py-3 border-b border-sage/10">
                  <div>
                    <p className="font-medium text-brown">
                      Sensory-Friendly Haircut
                    </p>
                    <p className="text-sm text-brown/60">
                      Extended time, extra patience (60 min)
                    </p>
                  </div>
                  <span className="text-sage font-bold text-lg">$45</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-sage/10">
                  <div>
                    <p className="font-medium text-brown">Kids Haircut</p>
                    <p className="text-sm text-brown/60">Standard cut (30 min)</p>
                  </div>
                  <span className="text-sage font-bold text-lg">$30</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-sage/10">
                  <div>
                    <p className="font-medium text-brown">
                      Buzz Cut / Ends Trimmed
                    </p>
                    <p className="text-sm text-brown/60">
                      Quick & easy (15-20 min)
                    </p>
                  </div>
                  <span className="text-sage font-bold text-lg">$20</span>
                </li>
                <li className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium text-brown">Bang Trim</p>
                    <p className="text-sm text-brown/60">Quick touch-up (10-15 min)</p>
                  </div>
                  <span className="text-sage font-bold text-lg">$15</span>
                </li>
              </ul>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-lg border border-sage/20">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-seafoam rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-2xl sm:text-3xl">🌟</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-brown">
                    Every Visit Includes
                  </h3>
                  <p className="text-sage text-xs sm:text-sm font-medium">
                    No Extra Charge
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 py-3 border-b border-sage/10">
                  <span className="text-sage mt-0.5 text-lg">✓</span>
                  <div>
                    <p className="font-medium text-brown">Private Suite</p>
                    <p className="text-sm text-brown/60">One family at a time — the entire space is yours</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 py-3 border-b border-sage/10">
                  <span className="text-sage mt-0.5 text-lg">✓</span>
                  <div>
                    <p className="font-medium text-brown">Sensory Tools</p>
                    <p className="text-sm text-brown/60">Headphones, weighted pads, fidgets, visual timers</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 py-3 border-b border-sage/10">
                  <span className="text-sage mt-0.5 text-lg">✓</span>
                  <div>
                    <p className="font-medium text-brown">Patience & Flexibility</p>
                    <p className="text-sm text-brown/60">Breaks as needed, no rushing, child-led pace</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 py-3">
                  <span className="text-sage mt-0.5 text-lg">✓</span>
                  <div>
                    <p className="font-medium text-brown">Treasure Chest Reward</p>
                    <p className="text-sm text-brown/60">Every child picks a prize after their haircut</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUR SPACE - SENSORY SUITE ========== */}
      <section
        className="py-20 px-4 bg-white"
        aria-labelledby="space-heading"
        id="our-space"
      >
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">
              Our Private Suite
            </span>
            <h2
              id="space-heading"
              className="text-3xl sm:text-4xl font-bold text-brown mt-3 mb-4"
            >
              Your Own Sensory Sanctuary
            </h2>
            <p className="text-brown/70 max-w-xl mx-auto">
              A private suite designed from the ground up for sensitive children.
              No shared spaces. No sensory overload. Just calm.
            </p>
          </header>

          {/* Sensory Suite Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                emoji: "🚗",
                title: "Wait-in-Car Option",
                desc: "Avoid the waiting room entirely. We text when we're ready for you.",
              },
              {
                emoji: "🚪",
                title: "Private Entrance",
                desc: "Skip the main entrance. Walk directly into your private suite.",
              },
              {
                emoji: "💡",
                title: "Dimmable Lighting",
                desc: "Adjust brightness to your child's comfort level.",
              },
              {
                emoji: "🎧",
                title: "Noise-Canceling Headphones",
                desc: "Block out clipper sounds and unexpected noises.",
              },
              {
                emoji: "🪨",
                title: "Weighted Lap Pads",
                desc: "Calming deep pressure for anxious moments.",
              },
              {
                emoji: "🧘",
                title: "Calm Corner",
                desc: "A cozy space for breaks whenever your child needs one.",
              },
              {
                emoji: "📺",
                title: "Favorite Shows/Tablet",
                desc: "Bring their comfort show or use ours.",
              },
              {
                emoji: "🧸",
                title: "Fidget Tools",
                desc: "A variety of sensory tools to help with regulation.",
              },
              {
                emoji: "⏰",
                title: "Visual Timers",
                desc: "Help children understand how much time is left.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-cream rounded-2xl p-5 border border-sage/10 hover:border-sage/30 transition-colors"
              >
                <span className="text-3xl mb-2 block" aria-hidden="true">
                  {item.emoji}
                </span>
                <h3 className="font-bold text-brown mb-1">{item.title}</h3>
                <p className="text-brown/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-sage/10 rounded-2xl p-5 text-center hover:bg-sage/20 transition-colors">
              <span className="text-4xl" aria-hidden="true">
                👨‍👩‍👧
              </span>
              <p className="font-bold text-brown mt-2">One Family at a Time</p>
              <p className="text-sm text-brown/60">The entire space is yours</p>
            </div>
            <div className="bg-sage/10 rounded-2xl p-5 text-center hover:bg-sage/20 transition-colors">
              <span className="text-4xl" aria-hidden="true">
                🤫
              </span>
              <p className="font-bold text-brown mt-2">No Other Children</p>
              <p className="text-sm text-brown/60">No distractions or triggers</p>
            </div>
            <div className="bg-sage/10 rounded-2xl p-5 text-center hover:bg-sage/20 transition-colors">
              <span className="text-4xl" aria-hidden="true">
                💚
              </span>
              <p className="font-bold text-brown mt-2">Just You & Carla</p>
              <p className="text-sm text-brown/60">Consistent, trusted care</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHO IT'S FOR ========== */}
      <section className="py-20 px-4 bg-cream" aria-labelledby="for-heading">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">
              Who We Serve
            </span>
            <h2
              id="for-heading"
              className="text-3xl sm:text-4xl font-bold text-brown mt-3"
            >
              Every Child Deserves a Calm Haircut
            </h2>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                emoji: "🧩",
                title: "Autistic Children",
                desc: "Specialized training & sensory-aware care",
              },
              {
                emoji: "⚡",
                title: "ADHD & Energetic Kids",
                desc: "Movement breaks, engaging distractions",
              },
              {
                emoji: "😰",
                title: "Anxious Children",
                desc: "Slow introductions, no pressure",
              },
              {
                emoji: "👶",
                title: "First Haircuts",
                desc: "Make their first memory a happy one",
              },
              {
                emoji: "🎧",
                title: "Sensory Sensitive",
                desc: "Sound, light & touch accommodations",
              },
              {
                emoji: "💔",
                title: "Past Trauma",
                desc: "We help rebuild trust around haircuts",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-sage/10 hover:shadow-lg hover:border-sage/30 transition-all"
              >
                <span className="text-4xl mb-3 block" aria-hidden="true">
                  {item.emoji}
                </span>
                <h3 className="font-bold text-brown mb-2">{item.title}</h3>
                <p className="text-brown/60 text-sm">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== MEET CARLA ========== */}
      <section
        className="py-20 px-4 bg-white"
        aria-labelledby="about-heading"
        id="about"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative px-2 sm:px-0">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=80"
                  alt="Carla, autism-trained kids hair stylist and owner of Little Roots Studio Henderson NV"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-2 right-2 sm:-bottom-4 sm:-right-4 bg-sage text-white px-4 py-2 sm:px-6 sm:py-3 rounded-2xl shadow-lg">
                <span className="font-bold text-base sm:text-lg">13+ Years</span>
                <span className="text-white/80 text-xs sm:text-sm block">with kids</span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <span className="text-sage font-medium text-sm tracking-wider uppercase">
                Meet Your Stylist
              </span>
              <h2
                id="about-heading"
                className="text-3xl font-bold text-brown mt-2 mb-6"
              >
                Hi, I&apos;m Carla 💚
              </h2>

              <div className="space-y-4 text-brown/80">
                <p>
                  For over <strong>13 years</strong>, I&apos;ve dedicated my career to
                  working with children — especially those who need a little extra
                  patience, understanding, and care.
                </p>
                <p>
                  I&apos;ve held the hands of kids who trembled at the sight of scissors.
                  I&apos;ve waited through meltdowns without judgment. I&apos;ve seen parents
                  cry with relief when their child — for the first time ever — sat through
                  an entire haircut.
                </p>
                <p className="text-sage-dark font-medium">
                  Every child deserves someone who understands them. That&apos;s why I built
                  Little Roots Studio.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-6 p-4 bg-sage/10 rounded-2xl">
                <p className="font-bold text-brown mb-3 text-sm">Training & Credentials:</p>
                <ul className="space-y-2 text-sm text-brown/80">
                  <li className="flex items-start gap-2">
                    <span className="text-sage mt-0.5">✓</span>
                    <span>Licensed Cosmetologist — State of Nevada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage mt-0.5">✓</span>
                    <span>Autism-Friendly Haircutting Certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage mt-0.5">✓</span>
                    <span>Trauma-Informed Care Training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage mt-0.5">✓</span>
                    <span>Sensory Processing Disorder Awareness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage mt-0.5">✓</span>
                    <span>13+ Years Experience with Children of All Abilities</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  "🧩 Autism-Trained",
                  "💚 Trauma-Informed",
                  "🎧 Sensory-Aware",
                  "⏰ Endlessly Patient",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="bg-sage/15 text-sage-dark px-4 py-1.5 rounded-full text-sm font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICE AREAS (Local SEO) ========== */}
      <section className="py-16 px-4 bg-cream" aria-labelledby="areas-heading">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sage font-medium text-sm tracking-wider uppercase">
            Serving
          </span>
          <h2
            id="areas-heading"
            className="text-2xl sm:text-3xl font-bold text-brown mt-3 mb-6"
          >
            Sensory-Friendly Kids Haircuts in the Las Vegas Valley
          </h2>
          <p className="text-brown/70 mb-8">
            Located in Henderson, NV — proudly serving families throughout
            Southern Nevada
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Henderson, NV",
              "Las Vegas, NV",
              "Paradise, NV",
              "Boulder City, NV",
              "Green Valley",
              "Summerlin",
              "North Las Vegas",
              "Enterprise",
              "Spring Valley",
              "Whitney",
            ].map((area) => (
              <span
                key={area}
                className="bg-white px-4 py-2 rounded-full text-brown/80 text-sm shadow-sm border border-sage/10"
              >
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section
        className="py-20 px-4 bg-white"
        aria-labelledby="faq-heading"
        id="faq"
      >
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-12">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">
              Questions?
            </span>
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-bold text-brown mt-3 mb-4"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-brown/70">
              Everything you need to know about sensory-friendly haircuts at
              Little Roots Studio
            </p>
          </header>

          <FAQAccordion />
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-12 sm:py-20 px-4 bg-sage" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="cta-heading"
            className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4"
          >
            Ready to Book?
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 px-2">
            Give your child the calm, patient haircut experience they deserve.
          </p>

          <a
            href="tel:+17029172350"
            className="inline-block bg-white text-sage-dark font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-xl hover:-translate-y-0.5 transition-all text-xl"
          >
            Text or Call — (702) 917-2350
          </a>

          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-white/80 text-sm">
            <span>📍 Henderson, NV</span>
            <span className="hidden sm:inline" aria-hidden="true">
              •
            </span>
            <span>🕐 Tue–Sat 10am–6pm</span>
            <span className="hidden sm:inline" aria-hidden="true">
              •
            </span>
            <span>💚 One Family at a Time</span>
          </div>
        </div>
      </section>
    </main>
  );
}
