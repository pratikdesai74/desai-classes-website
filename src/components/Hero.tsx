"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-bg dot-grid overflow-hidden">

      {/* Ambient light orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#E8C547]/6 blur-[80px]" />
        <div className="absolute bottom-0 -left-16 w-72 h-72 rounded-full bg-[#1E1B6B]/60 blur-[60px]" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-[#E8C547]/5 blur-[60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            {/* Admission badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#E8C547]/12 border border-[#E8C547]/30 rounded-full px-5 py-2 mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-[#E8C547] anim-gold-pulse" />
              <span className="text-[#F5E088] text-sm font-bold tracking-wide">
                Admissions Open for 2026–27
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
              Where Students
              <br />
              <span className="text-gold-gradient">Become Toppers</span>
            </h1>

            <p className="mt-5 text-white/85 text-base sm:text-lg leading-relaxed max-w-[520px]">
              Pune&apos;s most trusted coaching institute for 11th &amp; 12th Science &amp;
              Commerce. <span className="text-white/90 font-semibold">35+ years</span> of
              shaping top rankers — JEE AIR&nbsp;155, NEET&nbsp;603, CET&nbsp;99.9&nbsp;percentile.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href="#contact"
                className="px-8 py-3.5 btn-gold text-base rounded-xl"
              >
                Get Free Demo Class
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href="#results"
                className="px-8 py-3.5 btn-outline-white text-base rounded-xl"
              >
                See Our Results →
              </motion.a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { num: "35+",     label: "Years of\nExcellence" },
                { num: "10,000+", label: "Students\nMentored" },
                { num: "4.8 ★",   label: "Google\nRating" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-white/6 border border-white/10 rounded-2xl p-3 sm:p-4 text-center hover:bg-white/10 transition-all"
                >
                  <div className="text-[#E8C547] text-2xl sm:text-3xl font-extrabold leading-none">{s.num}</div>
                  <div className="text-white/75 text-[10px] sm:text-xs font-medium mt-1.5 whitespace-pre-line leading-tight">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main image — tall portrait crop */}
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/images/class-3.jpg"
                  alt="Desai Classes Institute"
                  fill
                  priority
                  className="object-cover"
                  sizes="45vw"
                />
                {/* Dark gradient from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B47]/75 via-transparent to-transparent" />
                {/* Address label at bottom */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3">
                  <div className="text-white font-bold text-sm">Desai Classes, Karve Nagar</div>
                  <div className="text-white/55 text-xs mt-0.5">Kakade Plaza, 2nd Floor, NDA Road, Pune</div>
                </div>
              </div>

              {/* Floating: JEE topper badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-5 top-10 bg-[#E8C547] rounded-2xl px-4 py-3 shadow-xl shadow-yellow-500/30"
              >
                <div className="text-[#13115A] font-extrabold text-lg leading-none">JEE AIR 155</div>
                <div className="text-[#13115A]/70 text-xs mt-0.5 font-semibold">Bharat Charan</div>
              </motion.div>

              {/* Floating: NEET badge */}
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute -left-5 top-1/3 bg-[#1E1B6B] border border-[#E8C547]/40 rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="text-[#E8C547] font-extrabold text-base leading-none">NEET 603</div>
                <div className="text-white/60 text-xs mt-0.5 font-semibold">Vaishnavi Digole</div>
              </motion.div>

              {/* Floating: CET badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-3 bottom-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="text-white font-extrabold text-base leading-none">CET 99.9%</div>
                <div className="text-white/55 text-xs mt-0.5 font-semibold">Pallavi Bharane</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,36 C360,80 1080,0 1440,44 L1440,72 L0,72 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
