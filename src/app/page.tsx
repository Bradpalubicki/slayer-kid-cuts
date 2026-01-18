"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Countdown Timer Component
function CountdownTimer() {
  // Store target date in state so it's stable across renders
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 60);
    return date;
  });

  // Calculate time left helper function
  const calculateTimeLeft = (target: Date) => {
    const now = new Date().getTime();
    const distance = target.getTime() - now;
    if (distance > 0) {
      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  // Initialize with calculated values immediately
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div
      className="flex justify-center gap-2 sm:gap-3"
      role="timer"
      aria-label="Countdown to opening"
    >
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Min" },
        { value: timeLeft.seconds, label: "Sec" },
      ].map((item) => (
        <div key={item.label} className="text-center">
          <div className="bg-sage/10 rounded-xl p-2 sm:p-3 min-w-[55px] sm:min-w-[70px] border border-sage/20">
            <span
              className="text-xl sm:text-2xl font-bold text-sage"
              aria-label={`${item.value} ${item.label}`}
            >
              {item.value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs text-brown/60 mt-1 block font-medium">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

// Giveaway Registration Form
function GiveawayForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Giveaway entry:", { name, email, phone });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="bg-sage/20 border-2 border-sage rounded-2xl p-6 text-center"
        role="alert"
      >
        <div className="text-4xl mb-3">🎉</div>
        <p className="text-sage-dark font-bold text-xl">You&apos;re Entered!</p>
        <p className="text-brown/70 text-sm mt-2">
          Come back next week for another chance to win!
        </p>
        <p className="text-sage font-medium text-sm mt-3">
          Drawing every Friday 🍀
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3"
      aria-label="Giveaway entry form"
    >
      <div>
        <label htmlFor="giveaway-name" className="sr-only">
          Your name
        </label>
        <input
          id="giveaway-name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-sage/30 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none text-brown placeholder-brown/50 bg-white/90"
        />
      </div>
      <div>
        <label htmlFor="giveaway-email" className="sr-only">
          Your email
        </label>
        <input
          id="giveaway-email"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-sage/30 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none text-brown placeholder-brown/50 bg-white/90"
        />
      </div>
      <div>
        <label htmlFor="giveaway-phone" className="sr-only">
          Phone number (optional)
        </label>
        <input
          id="giveaway-phone"
          type="tel"
          placeholder="Phone (optional - for winner notification)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-sage/30 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none text-brown placeholder-brown/50 bg-white/90"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-sage hover:bg-sage-dark text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
      >
        🎁 Enter to Win + Join Waitlist
      </button>
      <p className="text-xs text-brown/60 text-center">
        Enter once per week. Drawing every Friday!
      </p>
    </form>
  );
}

// Waitlist Form
function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist signup:", { name, email });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="bg-sage/20 rounded-2xl p-6 text-center border border-sage/30"
        role="alert"
      >
        <p className="text-sage-dark font-bold text-lg">🌱 You&apos;re on the list!</p>
        <p className="text-brown/70 text-sm mt-2">We&apos;ll email you when booking opens.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Urgency text */}
      <p className="text-sage-dark font-medium text-sm">
        🌿 Join 50+ families already on our waitlist
      </p>

      {/* Incentive */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2 text-sm">
        <span className="text-amber-700 font-medium">✨ Waitlist members get early booking + 15% off first visit</span>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
        aria-label="Waitlist signup form"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <label htmlFor="waitlist-name" className="sr-only">
            Name
          </label>
          <input
            id="waitlist-name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-xl border-2 border-sage/20 text-brown placeholder-brown/50 bg-white focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all"
          />
          <label htmlFor="waitlist-email" className="sr-only">
            Email
          </label>
          <input
            id="waitlist-email"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-xl border-2 border-sage/20 text-brown placeholder-brown/50 bg-white focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-sage hover:bg-sage-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
        >
          🌱 Join the Waitlist
        </button>
      </form>

      {/* Trust line */}
      <p className="text-brown/50 text-xs text-center">
        🔒 We respect your privacy. Unsubscribe anytime.
      </p>
    </div>
  );
}

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
        "Little Roots Studio is located in Henderson, Nevada, serving families throughout the Las Vegas valley including Paradise, Boulder City, and surrounding areas. We're opening Spring 2026. Join our waitlist to be notified of our exact location and opening date.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "Online booking will be available when we open in Spring 2026. For now, join our waitlist at littleroots.studio to get first access to appointments and be notified as soon as booking opens.",
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
          {/* Badge with Amber Gradient */}
          <div className="text-center mb-5">
            <span className="inline-block bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-md animate-pulse border border-amber-300">
              ✨ OPENING SPRING 2026 ✨
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
          <div className="flex flex-wrap justify-center gap-2 mb-5">
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

          {/* Countdown */}
          <div className="mb-5">
            <p className="text-brown/70 text-xs mb-2 font-medium text-center">
              🗓️ Opening in:
            </p>
            <CountdownTimer />
          </div>

          {/* Waitlist */}
          <div className="mt-4">
            <WaitlistForm />
          </div>
        </div>

        {/* Message from Carla - Outside the card */}
        <div className="relative z-10 mt-6 bg-white/25 backdrop-blur-sm rounded-2xl p-5 max-w-lg mx-auto border border-white/30">
          <p className="text-white italic text-sm leading-relaxed text-center drop-shadow-md">
            &ldquo;After 13 years working with children — including specialized autism training — I&apos;m finally creating the sanctuary every anxious, sensitive child deserves. A place where haircuts become confidence-building experiences.&rdquo;
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

      {/* ========== GIVEAWAY SECTION ========== */}
      <section
        className="py-16 px-4 bg-gradient-to-br from-seafoam/50 to-sage/20"
        aria-labelledby="giveaway-heading"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Prizes */}
            <div className="text-center md:text-left">
              <span className="bg-sage text-white text-xs font-bold px-4 py-1.5 rounded-full">
                🎉 WEEKLY GIVEAWAY
              </span>
              <h2
                id="giveaway-heading"
                className="text-3xl sm:text-4xl font-bold text-brown mt-4 mb-4"
              >
                Win Free Prizes Every Week!
              </h2>
              <p className="text-brown/70 mb-6">
                Enter once a week for a chance to win sensory tools, free
                haircuts, and more! Winners announced every Friday.
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-semibold text-brown mb-4">
                  🏆 This Week&apos;s Prizes:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">
                      🥇
                    </span>
                    <span className="text-brown/80">
                      <strong>FREE First Haircut</strong> ($45 value)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">
                      🥈
                    </span>
                    <span className="text-brown/80">
                      <strong>Weighted Lap Pad</strong> ($40 value)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">
                      🥉
                    </span>
                    <span className="text-brown/80">
                      <strong>Sensory Fidget Kit</strong> ($25 value)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Entry Form */}
            <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-xl border border-sage/20">
              <h3 className="text-lg sm:text-xl font-bold text-brown mb-2 text-center">
                🍀 Enter to Win!
              </h3>
              <p className="text-brown/60 text-xs sm:text-sm mb-4 sm:mb-6 text-center">
                Plus get first access when we open
              </p>
              <GiveawayForm />
            </div>
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
            <p className="text-brown/60 text-sm">
              * Pricing subject to change at opening
            </p>
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
                      First Haircut Experience
                    </p>
                    <p className="text-sm text-brown/60">
                      Certificate + photo included
                    </p>
                  </div>
                  <span className="text-sage font-bold text-lg">$45</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-sage/10">
                  <div>
                    <p className="font-medium text-brown">Kids Haircut</p>
                    <p className="text-sm text-brown/60">Ages 0-12</p>
                  </div>
                  <span className="text-sage font-bold text-lg">$35</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-sage/10">
                  <div>
                    <p className="font-medium text-brown">
                      Sensory-Adapted Cut
                    </p>
                    <p className="text-sm text-brown/60">
                      Extended time, extra patience
                    </p>
                  </div>
                  <span className="text-sage font-bold text-lg">$50</span>
                </li>
                <li className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium text-brown">Teen Haircut</p>
                    <p className="text-sm text-brown/60">Ages 13-17</p>
                  </div>
                  <span className="text-sage font-bold text-lg">$40</span>
                </li>
              </ul>
            </div>

            {/* Add-Ons */}
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
                    Add-Ons & Extras
                  </h3>
                  <p className="text-sage text-xs sm:text-sm font-medium">
                    Make It Special
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex justify-between items-center py-3 border-b border-sage/10">
                  <div>
                    <p className="font-medium text-brown">Fun Color Streak</p>
                    <p className="text-sm text-brown/60">
                      Temporary, wash-out color
                    </p>
                  </div>
                  <span className="text-sage font-bold text-lg">$10</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-sage/10">
                  <div>
                    <p className="font-medium text-brown">Glitter & Gems</p>
                    <p className="text-sm text-brown/60">Hair-safe sparkle</p>
                  </div>
                  <span className="text-sage font-bold text-lg">$8</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-sage/10">
                  <div>
                    <p className="font-medium text-brown">Braids & Styling</p>
                    <p className="text-sm text-brown/60">Simple styles</p>
                  </div>
                  <span className="text-sage font-bold text-lg">$15+</span>
                </li>
                <li className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium text-brown">Buzz Cut</p>
                    <p className="text-sm text-brown/60">Quick & easy</p>
                  </div>
                  <span className="text-sage font-bold text-lg">$25</span>
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
                desc: "Avoid the waiting room entirely. We text when we&apos;re ready for you.",
              },
              {
                emoji: "🚪",
                title: "Private Entrance",
                desc: "Skip the main entrance. Walk directly into your private suite.",
              },
              {
                emoji: "💡",
                title: "Dimmable Lighting",
                desc: "Adjust brightness to your child&apos;s comfort level.",
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

      {/* ========== COMING SOON FEATURES ========== */}
      <section className="py-16 px-4 bg-cream" aria-labelledby="coming-heading">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sage font-medium text-sm tracking-wider uppercase">
            Stay Tuned
          </span>
          <h2
            id="coming-heading"
            className="text-2xl sm:text-3xl font-bold text-brown mt-3 mb-8"
          >
            Coming Soon
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white/80 rounded-2xl p-6 border-2 border-dashed border-sage/30">
              <span className="text-4xl" aria-hidden="true">
                🎥
              </span>
              <p className="font-bold text-brown mt-3">Virtual Studio Tour</p>
              <p className="text-sm text-brown/50 mt-1">Video coming soon</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 border-2 border-dashed border-sage/30">
              <span className="text-4xl" aria-hidden="true">
                📅
              </span>
              <p className="font-bold text-brown mt-3">Online Booking</p>
              <p className="text-sm text-brown/50 mt-1">Available at opening</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 border-2 border-dashed border-sage/30">
              <span className="text-4xl" aria-hidden="true">
                📖
              </span>
              <p className="font-bold text-brown mt-3">Prep Resources</p>
              <p className="text-sm text-brown/50 mt-1">
                Social stories & guides
              </p>
            </div>
          </div>
          <p className="text-brown/60 text-sm mt-8">
            ✨ Check back weekly for updates — and don&apos;t forget to enter
            our giveaway!
          </p>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-12 sm:py-20 px-4 bg-sage" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="cta-heading"
            className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4"
          >
            Don&apos;t Miss Out!
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 px-2">
            Join our waitlist for opening day access + enter to win this
            week&apos;s prizes!
          </p>

          <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-2xl">
            <GiveawayForm />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-white/80 text-sm">
            <span>📍 Henderson, NV</span>
            <span className="hidden sm:inline" aria-hidden="true">
              •
            </span>
            <span>🌱 Spring 2026</span>
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
