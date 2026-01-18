"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-space", label: "Our Space" },
  { href: "/sensory-friendly", label: "Sensory-Friendly", highlight: true },
  { href: "/services", label: "Services" },
  { href: "/prepare", label: "Prepare" },
  { href: "/faq", label: "FAQ" },
  { href: "/coming-soon", label: "Coming Soon", highlight: true },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-12 h-12 rounded-full overflow-hidden"
            >
              <Image
                src="/images/little-roots-logo.webp"
                alt="Little Roots Studio"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-[#5B8A8A]">
                Little Roots Studio
              </h1>
              <p className="text-xs text-[#8B7B6F]">
                Sensory-Friendly Kids Hair
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full transition-all font-medium ${
                  link.highlight
                    ? "bg-[#D4E5E5] text-[#4A7272] border border-[#5B8A8A]/30 hover:bg-[#5B8A8A] hover:text-white"
                    : "text-[#6B5B4F] hover:text-[#5B8A8A] hover:bg-[#F8F6F3]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/coming-soon">
              <Button className="bg-[#5B8A8A] hover:bg-[#4A7272] text-white border-0 rounded-full px-6 shadow-lg hover:shadow-xl transition-all">
                <Calendar className="w-4 h-4 mr-2" />
                Join Waitlist
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FDFCFA] border-t border-[#E8E4DF]"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-[#6B5B4F] hover:text-[#5B8A8A] hover:bg-[#D4E5E5] transition-all font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/coming-soon" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-[#5B8A8A] hover:bg-[#4A7272] text-white border-0 rounded-xl py-6 shadow-lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Join Waitlist
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
