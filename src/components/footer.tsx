import Link from "next/link";
import { Scissors, Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center">
                <Scissors className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Slayer Kid Cuts</h3>
                <p className="text-xs text-gray-400">Where Haircuts Are Fun!</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Making haircuts an adventure for kids in Henderson, NV! Whether at our fun salon or in the comfort of your home, we create smiles one snip at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#9B5DE5] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF6B9D] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00BBF9] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/services", label: "Our Services" },
                { href: "/book", label: "Book Appointment" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9B5DE5]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Kids Haircuts",
                "First Haircut Package",
                "Mobile Home Visits",
                "Special Needs Friendly",
                "Birthday Parties",
                "Hair Tinsel & Fun Styles",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B9D]" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00BBF9] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  1234 Fun Street, Suite 100<br />
                  Henderson, NV 89014
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#9B5DE5] flex-shrink-0" />
                <a href="tel:+17025551234" className="text-gray-400 hover:text-white transition-colors">
                  (702) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF6B9D] flex-shrink-0" />
                <a href="mailto:hello@slayerkidcuts.com" className="text-gray-400 hover:text-white transition-colors">
                  hello@slayerkidcuts.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#00F5D4] mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>Mon-Fri: 9am - 6pm</p>
                  <p>Saturday: 9am - 5pm</p>
                  <p>Sunday: 10am - 4pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Slayer Kid Cuts. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
