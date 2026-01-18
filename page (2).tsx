'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Hero images - calming photos of female stylists with children (happy, calm, no spiked hair)
const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=2000&q=80",
    alt: "Female hair stylist giving gentle haircut to happy child"
  },
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=2000&q=80",
    alt: "Happy smiling child with beautiful hair"
  },
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=2000&q=80",
    alt: "Joyful child laughing - positive haircut experience"
  }
];

// Rotating Hero Background Component
function RotatingHeroBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {heroImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            unoptimized
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-sage/40 via-sage/30 to-brown/50"></div>
    </>
  );
}

// Countdown Timer Component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Calculate 60 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 60);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-2 sm:gap-4" role="timer" aria-label="Countdown to opening">
      {[
        { value: timeLeft.days, label: 'Days' },
        { value: timeLeft.hours, label: 'Hours' },
        { value: timeLeft.minutes, label: 'Min' },
        { value: timeLeft.seconds, label: 'Sec' },
      ].map((item) => (
        <div key={item.label} className="text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-2 sm:p-4 shadow-lg min-w-[55px] sm:min-w-[75px]">
            <span className="text-xl sm:text-3xl font-bold text-sage" aria-label={`${item.value} ${item.label}`}>
              {item.value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs text-white/90 mt-1 block font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

// Giveaway Registration Form
function GiveawayForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Giveaway entry:', { name, email, phone });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-sage/20 border-2 border-sage rounded-2xl p-6 text-center" role="alert">
        <div className="text-4xl mb-3">🎉</div>
        <p className="text-sage-dark font-bold text-xl">You&apos;re Entered!</p>
        <p className="text-brown/70 text-sm mt-2">Come back next week for another chance to win!</p>
        <p className="text-sage font-medium text-sm mt-3">Drawing every Friday 🍀</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" aria-label="Giveaway entry form">
      <div>
        <label htmlFor="giveaway-name" className="sr-only">Your name</label>
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
        <label htmlFor="giveaway-email" className="sr-only">Your email</label>
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
        <label htmlFor="giveaway-phone" className="sr-only">Phone number (optional)</label>
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
      <p className="text-xs text-brown/60 text-center">Enter once per week. Drawing every Friday!</p>
    </form>
  );
}

// Waitlist Form
function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist signup:', { name, email });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center" role="alert">
        <p className="text-white font-semibold">🌱 You&apos;re on the list!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2" aria-label="Waitlist signup form">
      <label htmlFor="waitlist-name" className="sr-only">Name</label>
      <input
        id="waitlist-name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="flex-1 px-4 py-3 rounded-xl border-0 text-brown placeholder-brown/50 bg-white/95"
      />
      <label htmlFor="waitlist-email" className="sr-only">Email</label>
      <input
        id="waitlist-email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 px-4 py-3 rounded-xl border-0 text-brown placeholder-brown/50 bg-white/95"
      />
      <button
        type="submit"
        className="bg-brown hover:bg-brown-light text-white font-semibold px-6 py-3 rounded-xl transition-all"
      >
        Notify Me
      </button>
    </form>
  );
}

// FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is a sensory-friendly haircut?",
      answer: "A sensory-friendly haircut is designed for children who may be sensitive to sounds, lights, textures, or touch. We offer dimmed lighting, noise-canceling headphones, weighted lap pads, fidget toys, and a calm environment. We never rush and allow breaks as needed."
    },
    {
      question: "Do you specialize in haircuts for autistic children?",
      answer: "Yes! Our stylist Carla has 13+ years of experience working with children and specialized training in autism-friendly haircutting. We understand sensory sensitivities and adapt our approach to each child's needs."
    },
    {
      question: "What ages do you serve?",
      answer: "We serve children from infants (first haircuts) through teens (ages 0-17). We specialize in making haircuts a positive experience for children of all ages and abilities."
    },
    {
      question: "Is it really one family at a time?",
      answer: "Yes! Your family will have the entire private suite to yourselves. No other families, no waiting room overwhelm. We also offer a wait-in-car option where we text you when we're ready."
    },
    {
      question: "What if my child has had bad haircut experiences before?",
      answer: "We specialize in helping children rebuild trust around haircuts. We go at your child's pace, offer choices, and never force anything. Many families come to us after traumatic experiences elsewhere."
    },
    {
      question: "Where is Little Roots Studio located?",
      answer: "Little Roots Studio is located in Henderson, Nevada, serving families throughout the Las Vegas valley including Paradise, Boulder City, and surrounding areas. We're opening Spring 2025. Join our waitlist to be notified of our exact location and opening date."
    },
    {
      question: "How do I book an appointment?",
      answer: "Online booking will be available when we open in Spring 2025. For now, join our waitlist at littleroots.studio to get first access to appointments and be notified as soon as booking opens."
    },
    {
      question: "What sensory tools do you have available?",
      answer: "We offer noise-canceling headphones, weighted lap pads, fidget toys, visual timers, dimmable lighting, TV/tablet with favorite shows, and a calm corner for breaks. We also have a treasure chest of rewards!"
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-sm border border-sage/10 overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-sage/5 transition-colors"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-semibold text-brown pr-4">{faq.question}</span>
            <span className={`text-sage text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          <div
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
          >
            <p className="px-6 pb-5 text-brown/70 leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Breadcrumb Component
function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/70">
      <ol className="flex items-center gap-2" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <a href="https://littleroots.studio" itemProp="item" className="hover:text-white transition-colors">
            <span itemProp="name">Home</span>
          </a>
          <meta itemProp="position" content="1" />
        </li>
      </ol>
    </nav>
  );
}

export default function Home() {
  return (
    <main className="bg-cream">
      {/* ========== COMING SOON TOP BANNER ========== */}
      <div className="bg-gradient-to-r from-sage via-sage-dark to-sage text-white py-3 px-4 text-center relative overflow-hidden" role="banner">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M0 0h20v20H0z%22 fill=%22none%22/%3E%3Ccircle cx=%2210%22 cy=%2210%22 r=%221%22 fill=%22white%22 fill-opacity=%220.1%22/%3E%3C/svg%3E')]"></div>
        <div className="relative z-10 flex items-center justify-center gap-3 flex-wrap">
          <span className="text-xl" aria-hidden="true">🚀</span>
          <span className="font-bold tracking-wide">COMING SOON</span>
          <span className="hidden sm:inline" aria-hidden="true">—</span>
          <span className="text-white/90">Henderson&apos;s First Sensory-Friendly Kids Hair Studio</span>
          <span className="text-xl" aria-hidden="true">🌱</span>
        </div>
      </div>

      {/* ========== HERO SECTION ========== */}
      <section className="min-h-screen relative flex flex-col justify-center px-4 py-12" aria-labelledby="hero-heading">
        <RotatingHeroBackground />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs />
          </div>

          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide border border-white/30 animate-pulse">
              ✨ OPENING SPRING 2025 • HENDERSON, NV ✨
            </span>
          </div>

          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/images/little-roots-logo.png"
              alt="Little Roots Studio - Sensory-Friendly Kids Hair Salon"
              width={350}
              height={175}
              className="mx-auto drop-shadow-2xl"
              priority
              unoptimized
            />
          </div>

          {/* H1 - Primary Heading */}
          <h1 id="hero-heading" className="text-2xl sm:text-4xl text-white mb-4 font-bold drop-shadow-lg">
            Sensory-Friendly Kids Hair Salon in Henderson, NV
          </h1>

          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Where every child is met with <strong>patience</strong>, <strong>privacy</strong>, and <strong>care</strong>. 
            One family at a time. Always.
          </p>

          {/* Countdown */}
          <div className="mb-8">
            <p className="text-white/80 text-sm mb-3 font-medium">🗓️ Opening in:</p>
            <CountdownTimer />
          </div>

          {/* Waitlist */}
          <div className="max-w-xl mx-auto">
            <p className="text-white/70 text-sm mb-3">Be first to book when we open:</p>
            <WaitlistForm />
          </div>

          {/* Message from Carla */}
          <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto border border-white/20">
            <p className="text-white/90 italic text-sm leading-relaxed">
              &ldquo;After 13 years of working with children, I&apos;m finally creating the space I&apos;ve always dreamed of — 
              where no child is rushed, no parent is judged, and every haircut is a positive experience.&rdquo;
            </p>
            <p className="text-white font-medium mt-3 text-sm">— Carla, Owner & Stylist 💚</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10" aria-hidden="true">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-2 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* ========== GIVEAWAY SECTION ========== */}
      <section className="py-16 px-4 bg-gradient-to-br from-seafoam/50 to-sage/20" aria-labelledby="giveaway-heading">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Prizes */}
            <div className="text-center md:text-left">
              <span className="bg-sage text-white text-xs font-bold px-4 py-1.5 rounded-full">🎉 WEEKLY GIVEAWAY</span>
              <h2 id="giveaway-heading" className="text-3xl sm:text-4xl font-bold text-brown mt-4 mb-4">
                Win Free Prizes Every Week!
              </h2>
              <p className="text-brown/70 mb-6">
                Enter once a week for a chance to win sensory tools, free haircuts, and more! 
                Winners announced every Friday.
              </p>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-semibold text-brown mb-4">🏆 This Week&apos;s Prizes:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">🥇</span>
                    <span className="text-brown/80"><strong>FREE First Haircut</strong> ($45 value)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">🥈</span>
                    <span className="text-brown/80"><strong>Weighted Lap Pad</strong> ($40 value)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">🥉</span>
                    <span className="text-brown/80"><strong>Sensory Fidget Kit</strong> ($25 value)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Entry Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-sage/20">
              <h3 className="text-xl font-bold text-brown mb-2 text-center">🍀 Enter to Win!</h3>
              <p className="text-brown/60 text-sm mb-6 text-center">Plus get first access when we open</p>
              <GiveawayForm />
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY LITTLE ROOTS ========== */}
      <section className="py-20 px-4 bg-white" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">Why Choose Us</span>
            <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold text-brown mt-3 mb-4">
              Haircuts Should Be Happy
            </h2>
            <p className="text-brown/70 max-w-2xl mx-auto">
              We believe every child deserves a calm, positive haircut experience — no matter their needs.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <article className="rounded-3xl overflow-hidden shadow-lg border border-sage/10 bg-white hover:shadow-xl transition-shadow">
              <div className="h-52 relative">
                <Image
                  src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&w=600&q=80"
                  alt="Happy child smiling during haircut"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <span className="text-3xl mb-3 block" aria-hidden="true">⏰</span>
                <h3 className="font-bold text-brown text-lg mb-2">Never Rushed</h3>
                <p className="text-brown/60 text-sm">Time for breaks, regulation, and trust-building. Your child sets the pace.</p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="rounded-3xl overflow-hidden shadow-lg border border-sage/10 bg-white hover:shadow-xl transition-shadow">
              <div className="h-52 relative">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80"
                  alt="Calm and peaceful salon interior with natural tones"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <span className="text-3xl mb-3 block" aria-hidden="true">🌿</span>
                <h3 className="font-bold text-brown text-lg mb-2">Calm & Private</h3>
                <p className="text-brown/60 text-sm">Earth-toned, sensory-friendly space. One family at a time, always.</p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="rounded-3xl overflow-hidden shadow-lg border border-sage/10 bg-white hover:shadow-xl transition-shadow">
              <div className="h-52 relative">
                <Image
                  src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=600&q=80"
                  alt="Colorful sensory toys for children"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <span className="text-3xl mb-3 block" aria-hidden="true">🧸</span>
                <h3 className="font-bold text-brown text-lg mb-2">Sensory Tools</h3>
                <p className="text-brown/60 text-sm">Fidgets, weighted lap pads, noise-canceling headphones — whatever helps.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section className="py-20 px-4 bg-cream" aria-labelledby="services-heading" id="services">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">Our Services</span>
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-brown mt-3 mb-4">
              Kids Haircut Services in Henderson, NV
            </h2>
            <p className="text-brown/60 text-sm">* Pricing subject to change at opening</p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Haircut Services */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-sage/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-sage/20 rounded-2xl flex items-center justify-center" aria-hidden="true">
                  <span className="text-3xl">✂️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brown">Haircut Services</h3>
                  <p className="text-sage text-sm font-medium">Sensory-Friendly</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                <li className="flex justify-between items-center py-3 border-b border-sage/10">
                  <div>
                    <p className="font-medium text-brown">First Haircut Experience</p>
                    <p className="text-sm text-brown/60">Certificate + photo included</p>
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
                    <p className="font-medium text-brown">Sensory-Adapted Cut</p>
                    <p className="text-sm text-brown/60">Extended time, extra patience</p>
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
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-sage/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-seafoam rounded-2xl flex items-center justify-center" aria-hidden="true">
                  <span className="text-3xl">🌟</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brown">Add-Ons & Extras</h3>
                  <p className="text-sage text-sm font-medium">Make It Special</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                <li className="flex justify-between items-center py-3 border-b border-sage/10">
                  <div>
                    <p className="font-medium text-brown">Fun Color Streak</p>
                    <p className="text-sm text-brown/60">Temporary, wash-out color</p>
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

      {/* ========== OUR SPACE - VISUAL FLOOR PLAN ========== */}
      <section className="py-20 px-4 bg-white" aria-labelledby="space-heading" id="our-space">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">Our Studio Space</span>
            <h2 id="space-heading" className="text-3xl sm:text-4xl font-bold text-brown mt-3 mb-4">
              Designed for Calm
            </h2>
            <p className="text-brown/70 max-w-xl mx-auto">
              Private suite • Separate entrance • Wait-in-car option
            </p>
          </header>

          {/* Visual Floor Plan */}
          <div className="bg-cream rounded-3xl p-6 sm:p-8 shadow-inner" role="img" aria-label="Studio floor plan showing private sensory suite and main salon areas with separate entrances from parking">
            <svg viewBox="0 0 800 450" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              <title>Little Roots Studio Floor Plan</title>
              <desc>Floor plan showing parking area at top, private sensory suite on left with calm features, and main salon on right with fun features</desc>
              
              {/* Background */}
              <rect x="0" y="0" width="800" height="450" fill="#F8F6F3"/>
              
              {/* Parking */}
              <rect x="50" y="20" width="700" height="80" rx="10" fill="#E8E8E8" stroke="#CCCCCC" strokeWidth="2"/>
              <text x="400" y="50" textAnchor="middle" fill="#666" fontWeight="bold" fontSize="14">🚗 PARKING</text>
              <text x="400" y="75" textAnchor="middle" fill="#888" fontSize="12">Wait in your car — we&apos;ll text when ready!</text>
              
              {/* Entrances */}
              <path d="M200 100 L200 145" stroke="#5B8A8A" strokeWidth="4" fill="none"/>
              <polygon points="200,155 193,140 207,140" fill="#5B8A8A"/>
              <text x="200" y="120" textAnchor="middle" fill="#5B8A8A" fontWeight="bold" fontSize="11">PRIVATE</text>
              
              <path d="M600 100 L600 145" stroke="#8B7355" strokeWidth="4" fill="none"/>
              <polygon points="600,155 593,140 607,140" fill="#8B7355"/>
              <text x="600" y="120" textAnchor="middle" fill="#8B7355" fontWeight="bold" fontSize="11">MAIN</text>
              
              {/* Private Suite */}
              <rect x="50" y="160" width="340" height="240" rx="15" fill="#D4E5E5" stroke="#5B8A8A" strokeWidth="4"/>
              <text x="220" y="195" textAnchor="middle" fill="#4A7373" fontWeight="bold" fontSize="16">🌙 PRIVATE SENSORY SUITE</text>
              
              <rect x="80" y="220" width="90" height="70" rx="10" fill="#5B8A8A" opacity="0.25"/>
              <text x="125" y="255" textAnchor="middle" fill="#4A7373" fontSize="12" fontWeight="600">💇 Chair</text>
              
              <rect x="190" y="220" width="70" height="55" rx="10" fill="#5B8A8A" opacity="0.2"/>
              <text x="225" y="252" textAnchor="middle" fill="#4A7373" fontSize="11">📺 TV</text>
              
              <rect x="280" y="220" width="90" height="70" rx="10" fill="#5B8A8A" opacity="0.25"/>
              <text x="325" y="250" textAnchor="middle" fill="#4A7373" fontSize="11" fontWeight="600">🧘 Calm</text>
              <text x="325" y="268" textAnchor="middle" fill="#4A7373" fontSize="11" fontWeight="600">Corner</text>
              
              <text x="120" y="320" textAnchor="middle" fill="#4A7373" fontSize="11">💡 Dim lights</text>
              <text x="220" y="320" textAnchor="middle" fill="#4A7373" fontSize="11">🎧 Headphones</text>
              <text x="320" y="320" textAnchor="middle" fill="#4A7373" fontSize="11">🧸 Sensory toys</text>
              <text x="170" y="350" textAnchor="middle" fill="#4A7373" fontSize="11">🪨 Weighted items</text>
              <text x="280" y="350" textAnchor="middle" fill="#4A7373" fontSize="11">🤫 Quiet & calm</text>
              
              {/* Dividing Wall */}
              <rect x="400" y="160" width="20" height="240" fill="#888"/>
              
              {/* Main Salon */}
              <rect x="430" y="160" width="320" height="240" rx="15" fill="#FEF7E7" stroke="#8B7355" strokeWidth="4"/>
              <text x="590" y="195" textAnchor="middle" fill="#6B5B4F" fontWeight="bold" fontSize="16">🎨 MAIN SALON</text>
              
              <rect x="460" y="220" width="80" height="55" rx="10" fill="#8B7355" opacity="0.2"/>
              <text x="500" y="252" textAnchor="middle" fill="#6B5B4F" fontSize="11">🛋️ Welcome</text>
              
              <rect x="555" y="220" width="90" height="70" rx="10" fill="#8B7355" opacity="0.25"/>
              <text x="600" y="255" textAnchor="middle" fill="#6B5B4F" fontSize="12" fontWeight="600">💇 Chair</text>
              
              <rect x="660" y="220" width="70" height="55" rx="10" fill="#8B7355" opacity="0.2"/>
              <text x="695" y="252" textAnchor="middle" fill="#6B5B4F" fontSize="11">🎮 Games</text>
              
              <text x="500" y="320" textAnchor="middle" fill="#6B5B4F" fontSize="11">🎵 Fun music</text>
              <text x="595" y="320" textAnchor="middle" fill="#6B5B4F" fontSize="11">📺 Shows & movies</text>
              <text x="695" y="320" textAnchor="middle" fill="#6B5B4F" fontSize="11">🎁 Prizes!</text>
              <text x="545" y="350" textAnchor="middle" fill="#6B5B4F" fontSize="11">⚡ Energetic vibe</text>
              <text x="660" y="350" textAnchor="middle" fill="#6B5B4F" fontSize="11">🎉 Fun & social</text>
              
              {/* Legend */}
              <rect x="50" y="415" width="24" height="24" rx="6" fill="#D4E5E5" stroke="#5B8A8A" strokeWidth="2"/>
              <text x="82" y="432" fill="#4A7373" fontSize="12" fontWeight="500">Sensory Suite — quiet, calm, private entrance</text>
              
              <rect x="430" y="415" width="24" height="24" rx="6" fill="#FEF7E7" stroke="#8B7355" strokeWidth="2"/>
              <text x="462" y="432" fill="#6B5B4F" fontSize="12" fontWeight="500">Main Salon — fun, energetic, social</text>
            </svg>
          </div>

          {/* Quick Info */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-sage/10 rounded-2xl p-5 text-center hover:bg-sage/20 transition-colors">
              <span className="text-4xl" aria-hidden="true">🚗</span>
              <p className="font-bold text-brown mt-2">Wait in Car</p>
              <p className="text-sm text-brown/60">We text when ready</p>
            </div>
            <div className="bg-sage/10 rounded-2xl p-5 text-center hover:bg-sage/20 transition-colors">
              <span className="text-4xl" aria-hidden="true">🚪</span>
              <p className="font-bold text-brown mt-2">Private Entrance</p>
              <p className="text-sm text-brown/60">Skip the lobby</p>
            </div>
            <div className="bg-sage/10 rounded-2xl p-5 text-center hover:bg-sage/20 transition-colors">
              <span className="text-4xl" aria-hidden="true">👨‍👩‍👧</span>
              <p className="font-bold text-brown mt-2">One Family</p>
              <p className="text-sm text-brown/60">Your space, your time</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHO IT'S FOR ========== */}
      <section className="py-20 px-4 bg-cream" aria-labelledby="for-heading">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">Who We Serve</span>
            <h2 id="for-heading" className="text-3xl sm:text-4xl font-bold text-brown mt-3">
              Every Child Deserves a Calm Haircut
            </h2>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '🧩', title: 'Autistic Children', desc: 'Specialized training & sensory-aware care' },
              { emoji: '⚡', title: 'ADHD & Energetic Kids', desc: 'Movement breaks, engaging distractions' },
              { emoji: '😰', title: 'Anxious Children', desc: 'Slow introductions, no pressure' },
              { emoji: '👶', title: 'First Haircuts', desc: 'Make their first memory a happy one' },
              { emoji: '🎧', title: 'Sensory Sensitive', desc: 'Sound, light & touch accommodations' },
              { emoji: '💔', title: 'Past Trauma', desc: 'We help rebuild trust around haircuts' },
            ].map((item) => (
              <article key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-sage/10 hover:shadow-lg hover:border-sage/30 transition-all">
                <span className="text-4xl mb-3 block" aria-hidden="true">{item.emoji}</span>
                <h3 className="font-bold text-brown mb-2">{item.title}</h3>
                <p className="text-brown/60 text-sm">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== MEET CARLA ========== */}
      <section className="py-20 px-4 bg-white" aria-labelledby="about-heading" id="about">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80"
                  alt="Carla, professional female hair stylist and owner of Little Roots Studio"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-sage text-white px-6 py-3 rounded-2xl shadow-lg">
                <span className="font-bold text-lg">13+ Years</span>
                <span className="text-white/80 text-sm block">with kids</span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <span className="text-sage font-medium text-sm tracking-wider uppercase">Meet Your Stylist</span>
              <h2 id="about-heading" className="text-3xl font-bold text-brown mt-2 mb-6">Hi, I&apos;m Carla! 👋</h2>
              
              <div className="space-y-4 text-brown/80">
                <p>
                  For over <strong>13 years</strong>, I&apos;ve worked with children of all kinds — including specialized 
                  training in <strong className="text-sage">autism-friendly haircutting</strong>.
                </p>
                <p>
                  I&apos;ve seen the panic when clippers are too loud. The meltdowns when there&apos;s no time 
                  for a break. The shame parents feel when their child &ldquo;can&apos;t handle&rdquo; a haircut.
                </p>
                <p className="text-sage-dark font-medium">
                  But I&apos;ve also seen the magic when a child is given time, choice, and understanding.
                </p>
                <p>
                  That&apos;s why I&apos;m building <strong>Little Roots Studio</strong> — where every haircut is a 
                  <strong> positive experience</strong>, no matter what your child needs.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {['Autism-Trained', 'Sensory-Aware', 'Trauma-Informed', 'Endlessly Patient'].map((badge) => (
                  <span key={badge} className="bg-sage/15 text-sage-dark px-4 py-1.5 rounded-full text-sm font-medium">
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
          <span className="text-sage font-medium text-sm tracking-wider uppercase">Serving</span>
          <h2 id="areas-heading" className="text-2xl sm:text-3xl font-bold text-brown mt-3 mb-6">
            Sensory-Friendly Kids Haircuts in the Las Vegas Valley
          </h2>
          <p className="text-brown/70 mb-8">
            Located in Henderson, NV — proudly serving families throughout Southern Nevada
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Henderson, NV',
              'Las Vegas, NV', 
              'Paradise, NV',
              'Boulder City, NV',
              'Green Valley',
              'Summerlin',
              'North Las Vegas',
              'Enterprise',
              'Spring Valley',
              'Whitney'
            ].map((area) => (
              <span key={area} className="bg-white px-4 py-2 rounded-full text-brown/80 text-sm shadow-sm border border-sage/10">
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-20 px-4 bg-white" aria-labelledby="faq-heading" id="faq">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-12">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">Questions?</span>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-brown mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-brown/70">
              Everything you need to know about sensory-friendly haircuts at Little Roots Studio
            </p>
          </header>

          <FAQAccordion />
        </div>
      </section>

      {/* ========== COMING SOON FEATURES ========== */}
      <section className="py-16 px-4 bg-cream" aria-labelledby="coming-heading">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sage font-medium text-sm tracking-wider uppercase">Stay Tuned</span>
          <h2 id="coming-heading" className="text-2xl sm:text-3xl font-bold text-brown mt-3 mb-8">
            Coming Soon
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white/80 rounded-2xl p-6 border-2 border-dashed border-sage/30">
              <span className="text-4xl" aria-hidden="true">🎥</span>
              <p className="font-bold text-brown mt-3">Virtual Studio Tour</p>
              <p className="text-sm text-brown/50 mt-1">Video coming soon</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 border-2 border-dashed border-sage/30">
              <span className="text-4xl" aria-hidden="true">📅</span>
              <p className="font-bold text-brown mt-3">Online Booking</p>
              <p className="text-sm text-brown/50 mt-1">Available at opening</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 border-2 border-dashed border-sage/30">
              <span className="text-4xl" aria-hidden="true">📖</span>
              <p className="font-bold text-brown mt-3">Prep Resources</p>
              <p className="text-sm text-brown/50 mt-1">Social stories & guides</p>
            </div>
          </div>
          <p className="text-brown/60 text-sm mt-8">
            ✨ Check back weekly for updates — and don&apos;t forget to enter our giveaway!
          </p>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-20 px-4 bg-sage" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Don&apos;t Miss Out!
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join our waitlist for opening day access + enter to win this week&apos;s prizes!
          </p>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <GiveawayForm />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-white/80 text-sm">
            <span>📍 Henderson, NV</span>
            <span className="hidden sm:inline" aria-hidden="true">•</span>
            <span>🌱 Spring 2025</span>
            <span className="hidden sm:inline" aria-hidden="true">•</span>
            <span>💚 One Family at a Time</span>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-brown text-white/80 py-12 px-4" role="contentinfo">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Description */}
            <div>
              <Image
                src="/images/little-roots-logo.png"
                alt="Little Roots Studio"
                width={160}
                height={80}
                className="brightness-0 invert opacity-80"
                unoptimized
              />
              <p className="text-white/60 text-sm mt-3">
                Henderson&apos;s first sensory-friendly kids hair studio. Where every child is met with patience, privacy, and care.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-white mb-4">Quick Links</h3>
              <nav aria-label="Footer navigation">
                <ul className="space-y-2 text-sm">
                  <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                  <li><a href="#our-space" className="hover:text-white transition-colors">Our Space</a></li>
                  <li><a href="#about" className="hover:text-white transition-colors">About Carla</a></li>
                  <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-white mb-4">Contact</h3>
              <address className="not-italic text-sm space-y-2">
                <p>
                  <a href="mailto:hello@littleroots.studio" className="hover:text-white transition-colors">
                    hello@littleroots.studio
                  </a>
                </p>
                <p className="text-white/60">Henderson, NV</p>
                <p className="text-white/40 text-xs mt-4">Opening Spring 2025</p>
              </address>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>© {new Date().getFullYear()} Little Roots Studio. All rights reserved.</p>
            <p className="mt-1">Made with 💚 for every child who needs a little extra care.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
