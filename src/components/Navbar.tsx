"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "About",    href: "#about" },
  { name: "Courses",  href: "#courses" },
  { name: "Batches",  href: "#batches" },
  { name: "Results",  href: "#results" },
  { name: "Gallery",  href: "#gallery" },
  { name: "Reviews",  href: "#testimonials" },
  { name: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_2px_20px_rgba(30,27,107,0.10)] border-b border-[#1E1B6B]/8"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-0 flex-shrink-0">
            <div className="relative h-14 w-[240px] overflow-hidden rounded-xl bg-white shadow-md">
              <Image
                src="/images/logo.png"
                alt="Desai Classes — Since 1990"
                fill
                className="object-cover object-left"
                sizes="240px"
                priority
              />
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-[13px] font-semibold transition-all ${
                  scrolled
                    ? "text-[#2D2B5E] hover:text-[#1E1B6B] hover:bg-[#F0EFFF]"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 px-5 py-2.5 btn-gold text-sm rounded-xl"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-6 h-0.5 rounded-full transition-all duration-300 mb-1.5 last:mb-0 ${
                  scrolled ? "bg-[#1E1B6B]" : "bg-white"
                } ${i === 0 && mobileOpen ? "rotate-45 translate-y-2" : ""}
                  ${i === 1 && mobileOpen ? "opacity-0" : ""}
                  ${i === 2 && mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#1E1B6B]/8 shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-3 rounded-xl text-[#2D2B5E] hover:bg-[#F0EFFF] hover:text-[#1E1B6B] font-semibold text-sm transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center mt-2 px-5 py-3.5 btn-gold text-sm rounded-xl"
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
