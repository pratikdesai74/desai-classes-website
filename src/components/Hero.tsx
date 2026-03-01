"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient grid-pattern overflow-hidden">

      {/* Decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#F97316]/8 blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-[#1D3F74]/40 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-[#F59E0B]/6 blur-3xl" />
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-[#F59E0B]/60"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-[#F97316]/50"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-2/3 right-1/5 w-2 h-2 rounded-full bg-white/20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-32 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#F97316]/15 border border-[#F97316]/30 rounded-full px-5 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#F97316] orange-pulse" />
              <span className="text-[#FB923C] text-sm font-semibold tracking-wide">
                Admissions Open for 2026–27
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              Where Students
              <br />
              <span className="gradient-text-orange">Become Toppers</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/65 max-w-lg leading-relaxed">
              Pune&apos;s most trusted coaching institute for 11th &amp; 12th Science &amp;
              Commerce. <span className="text-white/85 font-medium">35+ years</span> of
              shaping top rankers — JEE AIR 155, NEET 603, CET 99.9 percentile.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="px-8 py-4 bg-[#F97316] hover:bg-[#EA6810] text-white font-bold rounded-2xl text-base shadow-xl shadow-orange-600/30 transition-all"
              >
                Get Free Demo Class
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#results"
                className="px-8 py-4 border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold rounded-2xl text-base transition-all"
              >
                See Our Results →
              </motion.a>
            </div>

            {/* Trust Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { num: "35+", label: "Years of Excellence" },
                { num: "10,000+", label: "Students Mentored" },
                { num: "4.8★", label: "Google Rating" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.12 }}
                  className="bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl p-3 sm:p-4 text-center hover:bg-white/10 transition-all"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#F59E0B] leading-none">{stat.num}</div>
                  <div className="text-[10px] sm:text-xs text-white/50 mt-1 font-medium leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Photo Collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative h-[500px]">

              {/* Main large image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute inset-x-0 top-0 bottom-16 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10"
              >
                <Image
                  src="/images/class-3.jpg"
                  alt="Desai Classes institute signboard"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1280px) 50vw, 560px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070E1B]/60 via-transparent to-transparent" />
              </motion.div>

              {/* Overlay bottom label */}
              <div className="absolute bottom-20 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold text-sm">Desai Classes, Karve Nagar</div>
                    <div className="text-white/50 text-xs mt-0.5">Kakade Plaza, 2nd Floor, NDA Road</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-[#F59E0B]/50">
                    <Image src="/images/logo.jpg" alt="Logo" width={40} height={40} className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Bottom overlapping classroom image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-0 left-6 w-48 h-36 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-[#070E1B]"
              >
                <Image
                  src="/images/classroom-main.jpg"
                  alt="Inside classroom at Desai Classes"
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </motion.div>

              {/* Top right small image */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute top-4 right-4 w-36 h-28 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-[#070E1B]"
              >
                <Image
                  src="/images/class-4.jpg"
                  alt="Spacious classroom"
                  fill
                  className="object-cover"
                  sizes="144px"
                />
              </motion.div>

              {/* Floating achievement badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 bottom-24 bg-gradient-to-br from-[#F59E0B] to-[#D97706] text-white rounded-2xl px-5 py-3 shadow-xl shadow-amber-600/40"
              >
                <div className="text-lg font-extrabold leading-none">JEE AIR 155</div>
                <div className="text-xs font-medium opacity-85 mt-0.5">Bharat Charan · 2024</div>
              </motion.div>

              {/* NEET badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 top-1/3 bg-[#1D3F74] border border-[#F97316]/40 text-white rounded-2xl px-4 py-2.5 shadow-xl"
              >
                <div className="text-base font-extrabold leading-none text-[#FB923C]">NEET 603</div>
                <div className="text-[11px] opacity-70 mt-0.5">Vaishnavi Digole</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,90 1080,0 1440,50 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
