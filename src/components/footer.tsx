import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#6B5B4F] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1">
                <Image
                  src="/images/little-roots-logo.webp"
                  alt="Little Roots Studio"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Little Roots Studio</h3>
                <p className="text-xs text-[#D4E5E5]">
                  Sensory-Friendly Kids Hair
                </p>
              </div>
            </Link>
            <p className="text-[#D4E5E5] text-sm leading-relaxed">
              Las Vegas&apos;s first sensory-friendly, judgment-free hair studio
              designed specifically for children who need a little more
              patience, privacy, and care.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5B8A8A] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5B8A8A] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/our-space", label: "Our Space" },
                { href: "/sensory-friendly", label: "Sensory-Friendly" },
                { href: "/services", label: "Services" },
                { href: "/prepare", label: "Prepare for Visit" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#D4E5E5] hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B8A8A]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Offer */}
          <div>
            <h4 className="font-bold text-lg mb-6">What We Offer</h4>
            <ul className="space-y-3">
              {[
                "Private Suite Experience",
                "Sensory-Friendly Environment",
                "Never Rushed Appointments",
                "Autism-Trained Stylist",
                "Judgment-Free Zone",
                "One Family at a Time",
              ].map((service) => (
                <li key={service}>
                  <span className="text-[#D4E5E5] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A69080]" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#7BA3A3] flex-shrink-0" />
                <a
                  href="tel:+17029172350"
                  className="text-[#D4E5E5] hover:text-white transition-colors"
                >
                  (702) 917-2350
                  <span className="text-xs block text-[#A69080]">Text or Call</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#7BA3A3] mt-0.5 flex-shrink-0" />
                <span className="text-[#D4E5E5]">
                  Sunset Suites
                  <br />
                  2895 N Green Valley Pkwy #G
                  <br />
                  Henderson, NV 89014
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#7BA3A3] flex-shrink-0" />
                <a
                  href="mailto:littlerootscuts333@gmail.com"
                  className="text-[#D4E5E5] hover:text-white transition-colors"
                >
                  littlerootscuts333@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#7BA3A3] mt-0.5 flex-shrink-0" />
                <div className="text-[#D4E5E5] text-sm">
                  <p>Tue – Sat: 10am – 6pm</p>
                  <p>Closed daily 1pm – 2pm</p>
                  <p className="text-xs mt-1">By appointment only</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Powered by NuStack */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs text-[#D4E5E5]/60">Powered by</span>
            <a
              href="https://nustackdigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/images/nustack-logo.png"
                alt="NuStack Digital Ventures"
                width={100}
                height={28}
                className="h-6 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#D4E5E5]">
            <p>
              &copy; {new Date().getFullYear()} Little Roots Studio. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
