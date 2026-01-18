"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const heroOptions = [
  {
    id: 1,
    name: "Modern Salon Interior",
    description: "Bright modern salon with natural light, clean minimalist aesthetic",
    url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    name: "Cozy Salon with Plants",
    description: "Warm salon interior with greenery, earth tones and natural elements",
    url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 3,
    name: "Soft Natural Light Studio",
    description: "Soft diffused natural lighting, clean white/cream tones, spa-like",
    url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 4,
    name: "Warm Inviting Space",
    description: "Warm, inviting salon with soft lighting and earthy colors",
    url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 5,
    name: "Minimalist Calm Interior",
    description: "Minimalist modern design with neutral calming tones",
    url: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1920&q=80",
  },
];

export default function HeroPreview() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-cream p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-brown mb-2 text-center">
          Hero Background Options
        </h1>
        <p className="text-brown/70 text-center mb-8">
          Click on any option to see it full-size. Pick your favorite!
        </p>

        {/* Grid of options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {heroOptions.map((option) => (
            <div
              key={option.id}
              className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                selectedId === option.id
                  ? "ring-4 ring-sage scale-105 shadow-2xl"
                  : "hover:scale-102 hover:shadow-xl"
              }`}
              onClick={() => setSelectedId(option.id)}
            >
              {/* Image */}
              <div className="relative h-64">
                <Image
                  src={option.url}
                  alt={option.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-br from-sage/50 via-cream/30 to-seafoam/40"></div>

                {/* Option number badge */}
                <div className="absolute top-3 left-3 bg-sage text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {option.id}
                </div>

                {/* Selected checkmark */}
                {selectedId === option.id && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="bg-white p-4">
                <h3 className="font-semibold text-brown mb-1">{option.name}</h3>
                <p className="text-sm text-brown/60">{option.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-size preview */}
        {selectedId && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-brown mb-4 text-center">
              Full-Size Preview: Option {selectedId}
            </h2>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={heroOptions.find((o) => o.id === selectedId)?.url || ""}
                alt="Full size preview"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-br from-sage/50 via-cream/30 to-seafoam/40"></div>

              {/* Sample content overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide border border-white/30 mb-6">
                  ✨ OPENING SPRING 2026 • HENDERSON, NV ✨
                </span>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 mb-4">
                  <p className="text-sage font-bold text-2xl">Little Roots Studio</p>
                </div>
                <h1 className="text-2xl sm:text-4xl text-white font-bold drop-shadow-lg mb-4">
                  Sensory-Friendly Kids Hair Salon
                </h1>
                <p className="text-white/90 text-lg max-w-xl">
                  Where every child is met with patience, privacy, and care.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Selection info */}
        <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
          {selectedId ? (
            <>
              <p className="text-brown mb-4">
                You selected: <strong>Option {selectedId} - {heroOptions.find((o) => o.id === selectedId)?.name}</strong>
              </p>
              <p className="text-brown/60 text-sm">
                Tell me which option number you want, and I&apos;ll update the homepage!
              </p>
            </>
          ) : (
            <p className="text-brown/60">
              Click on any option above to see a full-size preview
            </p>
          )}
        </div>

        {/* Back to home link */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-block bg-sage text-white px-6 py-3 rounded-full font-semibold hover:bg-sage-dark transition-colors"
          >
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
