"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/sensory-friendly", label: "Sensory-Friendly" },
  { href: "/book", label: "Book Now" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 20 }}
              className="w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center shadow-lg"
            >
              <Scissors className="w-7 h-7 text-white" />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Slayer Kid Cuts</h1>
              <p className="text-xs text-gray-500">Where Haircuts Are Fun!</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-gray-700 hover:text-[#9B5DE5] hover:bg-purple-50 transition-all font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+17025551234" className="flex items-center gap-2 text-gray-600 hover:text-[#9B5DE5] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(702) 555-1234</span>
            </a>
            <Link href="/book">
              <Button className="bg-gradient-to-r from-[#FF6B9D] via-[#9B5DE5] to-[#00BBF9] text-white border-0 rounded-full px-6 shadow-lg hover:shadow-xl transition-shadow animate-gradient-x">
                <Calendar className="w-4 h-4 mr-2" />
                Book Now
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
            className="lg:hidden bg-white border-t"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-gray-700 hover:text-[#9B5DE5] hover:bg-purple-50 transition-all font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+17025551234"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 text-gray-700"
                >
                  <Phone className="w-5 h-5 text-[#9B5DE5]" />
                  <span className="font-medium">(702) 555-1234</span>
                </a>
                <Link href="/book" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-[#FF6B9D] via-[#9B5DE5] to-[#00BBF9] text-white border-0 rounded-xl py-6 shadow-lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Your Appointment
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
