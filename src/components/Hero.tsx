"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full border border-white/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -left-20 w-60 h-60 rounded-full border border-[#d4a843]/10"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-1/4 w-4 h-4 rounded-full bg-[#d4a843]/20"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-white/10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#d4a843]/20 border border-[#d4a843]/30 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#d4a843] animate-pulse" />
              <span className="text-[#e8c36a] text-sm font-medium">
                Admissions Open for 2026-27
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Shaping{" "}
              <span className="text-[#d4a843]">Bright Futures</span>
              <br />
              Since 1990
            </h1>

            <p className="mt-6 text-lg text-white/70 max-w-lg leading-relaxed">
              Pune&apos;s most trusted coaching institute for 11th &amp; 12th Science &amp;
              Commerce. 35+ years of academic excellence with expert faculty,
              modern facilities, and a proven track record of success.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-[#d4a843] hover:bg-[#e8c36a] text-[#1a3a5c] font-bold rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-[#d4a843]/25"
              >
                Enroll Now
              </a>
              <a
                href="#courses"
                className="px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-xl text-lg transition-all hover:bg-white/5"
              >
                Explore Courses
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { num: "35+", label: "Years of Excellence" },
                { num: "10,000+", label: "Students Mentored" },
                { num: "4.8/5", label: "Google Rating" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="text-3xl font-bold text-[#d4a843]">{stat.num}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - decorative card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "🎓", title: "Expert Faculty", desc: "Experienced & dedicated teachers" },
                    { icon: "📊", title: "Smart Boards", desc: "Modern teaching methods" },
                    { icon: "📚", title: "Study Material", desc: "Well-organized resources" },
                    { icon: "🏆", title: "Proven Results", desc: "Consistent top scores" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-[#d4a843]/30 transition-all"
                    >
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                      <p className="text-white/50 text-xs mt-1">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-[#d4a843] text-[#1a3a5c] rounded-2xl px-6 py-3 font-bold shadow-xl"
              >
                <div className="text-2xl">Est. 1990</div>
                <div className="text-xs font-medium opacity-80">Trusted for 35+ years</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,64 C480,120 960,0 1440,64 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
