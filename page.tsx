'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Countdown Timer Component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-03-15T10:00:00');

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
    <div className="flex justify-center gap-2 sm:gap-4">
      {[
        { value: timeLeft.days, label: 'Days' },
        { value: timeLeft.hours, label: 'Hours' },
        { value: timeLeft.minutes, label: 'Min' },
        { value: timeLeft.seconds, label: 'Sec' },
      ].map((item) => (
        <div key={item.label} className="text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-2 sm:p-4 shadow-lg min-w-[60px] sm:min-w-[80px]">
            <span className="text-2xl sm:text-4xl font-bold text-sage">{item.value.toString().padStart(2, '0')}</span>
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
      <div className="bg-sage/20 border-2 border-sage rounded-2xl p-6 text-center">
        <div className="text-4xl mb-3">🎉</div>
        <p className="text-sage-dark font-bold text-xl">You&apos;re Entered!</p>
        <p className="text-brown/70 text-sm mt-2">Come back next week for another chance to win!</p>
        <p className="text-sage font-medium text-sm mt-3">Drawing every Friday 🍀</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-xl border-2 border-sage/30 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none text-brown placeholder-brown/50 bg-white/90"
      />
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-xl border-2 border-sage/30 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none text-brown placeholder-brown/50 bg-white/90"
      />
      <input
        type="tel"
        placeholder="Phone (optional - for winner notification)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border-2 border-sage/30 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none text-brown placeholder-brown/50 bg-white/90"
      />
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

// Simple Waitlist Form
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
      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
        <p className="text-white font-semibold">🌱 You&apos;re on the list!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="flex-1 px-4 py-3 rounded-xl border-0 text-brown placeholder-brown/50 bg-white/95"
      />
      <input
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

export default function Home() {
  return (
    <main className="bg-cream">
      {/* ========== HERO SECTION WITH BACKGROUND IMAGE ========== */}
      <section className="min-h-screen relative flex flex-col justify-center px-4 py-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=2000&q=80"
            alt="Child getting a gentle haircut"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sage/80 via-sage/70 to-brown/80"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Coming Soon Badge */}
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide border border-white/30">
              🌱 OPENING SPRING 2025 • HENDERSON, NV
            </span>
          </div>

          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/images/little-roots-logo.png"
              alt="Little Roots Studio"
              width={350}
              height={175}
              className="mx-auto drop-shadow-lg"
              priority
              unoptimized
            />
          </div>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-white mb-6 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
            Henderson&apos;s First <strong>Sensory-Friendly</strong> Kids Hair Studio
          </p>

          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Where every child is met with patience, privacy, and care. 
            One family at a time. Always.
          </p>

          {/* Countdown */}
          <div className="mb-8">
            <p className="text-white/80 text-sm mb-3">Opening in:</p>
            <CountdownTimer />
          </div>

          {/* Quick Waitlist */}
          <div className="max-w-xl mx-auto">
            <WaitlistForm />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-2 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* ========== GIVEAWAY SECTION ========== */}
      <section className="py-16 px-4 bg-gradient-to-br from-seafoam/50 to-sage/20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Prizes */}
            <div className="text-center md:text-left">
              <span className="bg-sage text-white text-xs font-bold px-3 py-1 rounded-full">WEEKLY GIVEAWAY</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brown mt-4 mb-4">
                🎁 Win Free Prizes!
              </h2>
              <p className="text-brown/70 mb-6">
                Enter once a week for a chance to win sensory tools, free haircuts, and more! 
                Winners announced every Friday.
              </p>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-semibold text-brown mb-4">This Week&apos;s Prizes:</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🥇</span>
                    <span className="text-brown/80">FREE First Haircut (Value $45)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🥈</span>
                    <span className="text-brown/80">Weighted Lap Pad ($40 value)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🥉</span>
                    <span className="text-brown/80">Sensory Fidget Kit ($25 value)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Entry Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-sage/20">
              <h3 className="text-xl font-bold text-brown mb-2 text-center">Enter to Win!</h3>
              <p className="text-brown/60 text-sm mb-6 text-center">Plus get first access when we open</p>
              <GiveawayForm />
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT MAKES US DIFFERENT (with photos) ========== */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">Why Little Roots?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mt-3 mb-4">
              Haircuts Should Be Happy
            </h2>
            <p className="text-brown/70 max-w-2xl mx-auto">
              We believe every child deserves a calm, positive haircut experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-sage/10 bg-white">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80"
                  alt="Happy child smiling"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <div className="text-3xl mb-3">😊</div>
                <h3 className="font-bold text-brown mb-2">Never Rushed</h3>
                <p className="text-brown/60 text-sm">Time for breaks, regulation, and trust-building. Your child sets the pace.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-sage/10 bg-white">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80"
                  alt="Calm salon environment"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <div className="text-3xl mb-3">🌿</div>
                <h3 className="font-bold text-brown mb-2">Calm & Private</h3>
                <p className="text-brown/60 text-sm">Earth-toned, sensory-friendly space. One family at a time, always.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-sage/10 bg-white">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1587616211892-f743fcca64f9?auto=format&fit=crop&w=600&q=80"
                  alt="Child playing with sensory toys"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <div className="text-3xl mb-3">🧸</div>
                <h3 className="font-bold text-brown mb-2">Sensory Tools</h3>
                <p className="text-brown/60 text-sm">Fidgets, weighted lap pads, noise-canceling headphones — whatever helps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mt-3 mb-4">
              What We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Haircut Services */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-sage/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-sage/20 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">✂️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brown">Haircut Services</h3>
                  <p className="text-sage text-sm font-medium">Sensory-Friendly</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-sage/10">
                  <div>
                    <p className="font-medium text-brown">First Haircut Experience</p>
                    <p className="text-sm text-brown/60">Certificate + photo included</p>
                  </div>
                  <span className="text-sage font-bold">$45</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-sage/10">
                  <div>
                    <p className="font-medium text-brown">Kids Haircut</p>
                    <p className="text-sm text-brown/60">Ages 0-12</p>
                  </div>
                  <span className="text-sage font-bold">$35</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-sage/10">
                  <div>
                    <p className="font-medium text-brown">Sensory-Adapted Cut</p>
                    <p className="text-sm text-brown/60">Extended time, extra patience</p>
                  </div>
                  <span className="text-sage font-bold">$50</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium text-brown">Teen Haircut</p>
                    <p className="text-sm text-brown/60">Ages 13-17</p>
                  </div>
                  <span className="text-sage font-bold">$40</span>
                </div>
              </div>
            </div>

            {/* Add-Ons & Extras */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-sage/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-seafoam rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🌟</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brown">Add-Ons & Extras</h3>
                  <p className="text-sage text-sm font-medium">Make It Special</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-sage/10">
                  <div>
                    <p className="font-medium text-brown">Fun Color Streak</p>
                    <p className="text-sm text-brown/60">Temporary, wash-out color</p>
                  </div>
                  <span className="text-sage font-bold">$10</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-sage/10">
                  <div>
                    <p className="font-medium text-brown">Glitter & Gems</p>
                    <p className="text-sm text-brown/60">Hair-safe sparkle</p>
                  </div>
                  <span className="text-sage font-bold">$8</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-sage/10">
                  <div>
                    <p className="font-medium text-brown">Braids & Styling</p>
                    <p className="text-sm text-brown/60">Simple styles</p>
                  </div>
                  <span className="text-sage font-bold">$15+</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium text-brown">Buzz Cut</p>
                    <p className="text-sm text-brown/60">Quick & easy</p>
                  </div>
                  <span className="text-sage font-bold">$25</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-brown/60 text-sm mt-8">
            * Prices are estimates and may vary. Final pricing available at opening.
          </p>
        </div>
      </section>

      {/* ========== OUR SPACE - VISUAL FLOOR PLAN ========== */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">Our Space</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mt-3 mb-4">
              Designed for Calm
            </h2>
            <p className="text-brown/70 max-w-xl mx-auto">
              Private suite, separate entrance, wait-in-car option
            </p>
          </div>

          {/* Visual Floor Plan */}
          <div className="bg-cream rounded-3xl p-8 shadow-inner">
            <svg viewBox="0 0 800 450" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Background */}
              <rect x="0" y="0" width="800" height="450" fill="#F8F6F3"/>
              
              {/* Parking Area */}
              <rect x="50" y="20" width="700" height="80" rx="10" fill="#E5E5E5" stroke="#CCCCCC" strokeWidth="2"/>
              <text x="400" y="55" textAnchor="middle" className="text-sm" fill="#666" fontWeight="600">🚗 PARKING</text>
              <text x="400" y="80" textAnchor="middle" className="text-xs" fill="#888">Wait in your car — we&apos;ll text when ready!</text>
              
              {/* Private Entrance Arrow */}
              <path d="M200 100 L200 140" stroke="#5B8A8A" strokeWidth="3" markerEnd="url(#arrowhead)"/>
              <text x="200" y="125" textAnchor="middle" className="text-xs" fill="#5B8A8A" fontWeight="600">PRIVATE</text>
              
              {/* Main Entrance Arrow */}
              <path d="M600 100 L600 140" stroke="#8B7355" strokeWidth="3" markerEnd="url(#arrowhead2)"/>
              <text x="600" y="125" textAnchor="middle" className="text-xs" fill="#8B7355" fontWeight="600">MAIN</text>
              
              {/* Arrow markers */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#5B8A8A"/>
                </marker>
                <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#8B7355"/>
                </marker>
              </defs>
              
              {/* Private Sensory Suite */}
              <rect x="50" y="150" width="320" height="250" rx="15" fill="#D4E5E5" stroke="#5B8A8A" strokeWidth="3"/>
              <text x="210" y="185" textAnchor="middle" fill="#4A7373" fontWeight="bold" fontSize="16">🌙 PRIVATE SENSORY SUITE</text>
              
              {/* Suite Interior */}
              <rect x="80" y="210" width="80" height="60" rx="8" fill="#5B8A8A" opacity="0.3"/>
              <text x="120" y="245" textAnchor="middle" fill="#4A7373" fontSize="11">Styling</text>
              <text x="120" y="258" textAnchor="middle" fill="#4A7373" fontSize="11">Chair</text>
              
              <rect x="180" y="210" width="60" height="50" rx="8" fill="#5B8A8A" opacity="0.2"/>
              <text x="210" y="240" textAnchor="middle" fill="#4A7373" fontSize="10">📺 TV</text>
              
              <rect x="260" y="210" width="80" height="60" rx="8" fill="#5B8A8A" opacity="0.3"/>
              <text x="300" y="238" textAnchor="middle" fill="#4A7373" fontSize="10">Calm</text>
              <text x="300" y="252" textAnchor="middle" fill="#4A7373" fontSize="10">Corner</text>
              
              {/* Suite Features */}
              <text x="210" y="300" textAnchor="middle" fill="#4A7373" fontSize="12">✓ Dimmable lights</text>
              <text x="210" y="320" textAnchor="middle" fill="#4A7373" fontSize="12">✓ Weighted blankets</text>
              <text x="210" y="340" textAnchor="middle" fill="#4A7373" fontSize="12">✓ Noise-canceling headphones</text>
              <text x="210" y="360" textAnchor="middle" fill="#4A7373" fontSize="12">✓ Sensory toys available</text>
              
              {/* Dividing Wall */}
              <rect x="385" y="150" width="30" height="250" fill="#999"/>
              <text x="400" y="280" textAnchor="middle" fill="#fff" fontSize="10" transform="rotate(-90 400 280)">WALL</text>
              
              {/* Main Salon Area */}
              <rect x="430" y="150" width="320" height="250" rx="15" fill="#FDF6E3" stroke="#8B7355" strokeWidth="3"/>
              <text x="590" y="185" textAnchor="middle" fill="#6B5B4F" fontWeight="bold" fontSize="16">🎨 MAIN SALON</text>
              
              {/* Main Interior */}
              <rect x="460" y="210" width="80" height="60" rx="8" fill="#8B7355" opacity="0.2"/>
              <text x="500" y="238" textAnchor="middle" fill="#6B5B4F" fontSize="10">Welcome</text>
              <text x="500" y="252" textAnchor="middle" fill="#6B5B4F" fontSize="10">Area</text>
              
              <rect x="560" y="210" width="80" height="60" rx="8" fill="#8B7355" opacity="0.3"/>
              <text x="600" y="245" textAnchor="middle" fill="#6B5B4F" fontSize="11">Styling</text>
              <text x="600" y="258" textAnchor="middle" fill="#6B5B4F" fontSize="11">Chair</text>
              
              <rect x="660" y="210" width="60" height="50" rx="8" fill="#8B7355" opacity="0.2"/>
              <text x="690" y="240" textAnchor="middle" fill="#6B5B4F" fontSize="10">🎮 Games</text>
              
              {/* Main Features */}
              <text x="590" y="300" textAnchor="middle" fill="#6B5B4F" fontSize="12">✓ Fun music & TV</text>
              <text x="590" y="320" textAnchor="middle" fill="#6B5B4F" fontSize="12">✓ Treasure chest rewards</text>
              <text x="590" y="340" textAnchor="middle" fill="#6B5B4F" fontSize="12">✓ Video games available</text>
              <text x="590" y="360" textAnchor="middle" fill="#6B5B4F" fontSize="12">✓ Energetic & fun vibe</text>
              
              {/* Legend */}
              <rect x="50" y="415" width="20" height="20" rx="4" fill="#D4E5E5" stroke="#5B8A8A" strokeWidth="2"/>
              <text x="80" y="430" fill="#4A7373" fontSize="12">Sensory Suite — quiet, calm, private entrance</text>
              
              <rect x="430" y="415" width="20" height="20" rx="4" fill="#FDF6E3" stroke="#8B7355" strokeWidth="2"/>
              <text x="460" y="430" fill="#6B5B4F" fontSize="12">Main Salon — fun, energetic, social</text>
            </svg>
          </div>

          {/* Quick Info Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-sage/10 rounded-2xl p-5 text-center">
              <span className="text-3xl">🚗</span>
              <p className="font-semibold text-brown mt-2">Wait in Car</p>
              <p className="text-sm text-brown/60">We text when ready</p>
            </div>
            <div className="bg-sage/10 rounded-2xl p-5 text-center">
              <span className="text-3xl">🚪</span>
              <p className="font-semibold text-brown mt-2">Private Entrance</p>
              <p className="text-sm text-brown/60">Skip the lobby</p>
            </div>
            <div className="bg-sage/10 rounded-2xl p-5 text-center">
              <span className="text-3xl">👨‍👩‍👧</span>
              <p className="font-semibold text-brown mt-2">One Family</p>
              <p className="text-sm text-brown/60">Your space, your time</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHO IT'S FOR ========== */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sage font-medium text-sm tracking-wider uppercase">Perfect For</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mt-3">
              Every Child Deserves This
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '🧩', title: 'Autistic Kids', desc: 'Specialized training & sensory-aware care' },
              { emoji: '⚡', title: 'ADHD & Energetic', desc: 'Movement breaks, engaging distractions' },
              { emoji: '😰', title: 'Anxious Children', desc: 'Slow introductions, no pressure' },
              { emoji: '👶', title: 'First Haircuts', desc: 'Make their first memory a happy one' },
              { emoji: '🎧', title: 'Sensory Sensitive', desc: 'Sound, light & touch accommodations' },
              { emoji: '💔', title: 'Bad Past Experiences', desc: 'We help rebuild trust' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-sage/10 hover:shadow-md hover:border-sage/30 transition-all">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-semibold text-brown mb-2">{item.title}</h3>
                <p className="text-brown/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== MEET CARLA ========== */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=80"
                  alt="Carla - Little Roots Studio owner"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-sage text-white px-6 py-3 rounded-2xl shadow-lg">
                <span className="font-bold">13+ Years</span>
                <span className="text-white/80 text-sm block">with kids</span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <span className="text-sage font-medium text-sm tracking-wider uppercase">Meet Your Stylist</span>
              <h2 className="text-3xl font-bold text-brown mt-2 mb-6">Hi, I&apos;m Carla! 👋</h2>
              
              <div className="space-y-4 text-brown/80">
                <p>
                  For over 13 years, I&apos;ve worked with children of all kinds — including specialized 
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
                  That&apos;s why I&apos;m building Little Roots — where every haircut is a 
                  <strong> positive experience</strong>, no matter what your child needs.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {['Autism-Trained', 'Sensory-Aware', 'Trauma-Informed', 'Endlessly Patient'].map((badge) => (
                  <span key={badge} className="bg-sage/15 text-sage-dark px-3 py-1 rounded-full text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== COMING SOON FEATURES ========== */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-brown mb-8">🚧 Coming Soon</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white/50 rounded-2xl p-6 border-2 border-dashed border-sage/30">
              <span className="text-3xl">🎥</span>
              <p className="font-medium text-brown mt-3">Virtual Studio Tour</p>
              <p className="text-sm text-brown/50 mt-1">Video coming soon</p>
            </div>
            <div className="bg-white/50 rounded-2xl p-6 border-2 border-dashed border-sage/30">
              <span className="text-3xl">📅</span>
              <p className="font-medium text-brown mt-3">Online Booking</p>
              <p className="text-sm text-brown/50 mt-1">Available at opening</p>
            </div>
            <div className="bg-white/50 rounded-2xl p-6 border-2 border-dashed border-sage/30">
              <span className="text-3xl">📖</span>
              <p className="font-medium text-brown mt-3">Prep Resources</p>
              <p className="text-sm text-brown/50 mt-1">Social stories & guides</p>
            </div>
          </div>
          <p className="text-brown/60 text-sm mt-6">
            ✨ Check back weekly for updates — and don&apos;t forget to enter our giveaway!
          </p>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-20 px-4 bg-sage">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Be the First to Know
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join our waitlist for opening day access + enter our weekly giveaway!
          </p>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <GiveawayForm />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <span>📍 Henderson, NV</span>
            <span>•</span>
            <span>🌱 Spring 2025</span>
            <span>•</span>
            <span>💚 One Family at a Time</span>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-brown text-white/80 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <Image
                src="/images/little-roots-logo.png"
                alt="Little Roots Studio"
                width={160}
                height={80}
                className="mx-auto md:mx-0 brightness-0 invert opacity-80"
                unoptimized
              />
              <p className="text-white/60 text-sm mt-3">
                Henderson&apos;s first sensory-friendly kids&apos; hair studio
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2 text-sm">
              <a href="mailto:hello@littleroots.studio" className="hover:text-white transition-colors">
                hello@littleroots.studio
              </a>
              <p className="text-white/60">Henderson, NV</p>
              <p className="text-white/40 text-xs mt-2">Opening Spring 2025</p>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
            <p>© {new Date().getFullYear()} Little Roots Studio. All rights reserved.</p>
            <p className="mt-1">Made with 💚 for every child who needs a little extra care.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
