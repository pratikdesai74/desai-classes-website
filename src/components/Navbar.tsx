"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Batches", href: "#batches" },
  { name: "Results", href: "#results" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-xl shadow-[0_2px_24px_rgba(11,24,41,0.1)] border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-[#F59E0B]/40">
              <Image
                src="/images/logo.jpg"
                alt="Desai Classes Logo"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="leading-tight">
              <span className={`block text-lg font-extrabold tracking-tight transition-colors ${
                scrolled ? "text-[#0B1829]" : "text-white"
              }`}>
                Desai Classes
              </span>
              <span className={`block text-[10px] tracking-[0.2em] uppercase font-semibold transition-colors ${
                scrolled ? "text-[#F97316]" : "text-[#FCD34D]"
              }`}>
                Since 1990 · Karve Nagar, Pune
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  scrolled
                    ? "text-[#374151] hover:text-[#0B1829] hover:bg-[#EEF4FF]"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 px-5 py-2.5 bg-[#F97316] hover:bg-[#EA6810] text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                    scrolled ? "bg-[#0B1829]" : "bg-white"
                  } ${
                    i === 0 && mobileOpen ? "rotate-45 translate-y-2" :
                    i === 1 && mobileOpen ? "opacity-0 scale-x-0" :
                    i === 2 && mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-3 rounded-xl text-[#0B1829] hover:bg-[#EEF4FF] hover:text-[#1D3F74] font-medium transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center mt-3 px-5 py-3.5 bg-[#F97316] text-white font-bold rounded-xl shadow-lg"
              >
                Enroll Now — Free Demo Class
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
