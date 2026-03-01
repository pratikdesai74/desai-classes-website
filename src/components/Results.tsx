"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const step = target / (duration / 16);
    let start = 0;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Data ─── */
const stats = [
  { number: 35, suffix: "+", label: "Years of Excellence", icon: "🏛️" },
  { number: 10000, suffix: "+", label: "Students Mentored", icon: "🎓" },
  { number: 30, suffix: "+", label: "IIT / NIT Selections", icon: "🏆" },
  { number: 210, suffix: "+", label: "5-Star Google Reviews", icon: "⭐" },
];

const featuredToppers = [
  {
    name: "Bharat Charan",
    photo: "/images/topper-bharat-charan.jpg",
    exam: "JEE Advanced",
    score: "99.9 Percentile",
    sub: "AIR 155",
    college: "IIT Aspirant",
    stream: "Science",
    badge: "🥇 National Topper",
    badgeColor: "bg-gradient-to-r from-amber-400 to-yellow-300 text-amber-900",
    ring: "ring-amber-400",
  },
  {
    name: "Pallavi Bharane",
    photo: "/images/topper-pallavi-bharne.jpg",
    exam: "MHT-CET",
    score: "99.9 Percentile",
    sub: "Top Scorer",
    college: "Engineering",
    stream: "Science",
    badge: "🥈 CET Topper",
    badgeColor: "bg-gradient-to-r from-slate-300 to-gray-200 text-slate-800",
    ring: "ring-slate-300",
  },
  {
    name: "Vaishnavi Digole",
    photo: "/images/topper-vaishnavi-digole.jpg",
    exam: "NEET",
    score: "603 Marks",
    sub: "Top Rank",
    college: "Medical",
    stream: "Science",
    badge: "🥉 NEET Star",
    badgeColor: "bg-gradient-to-r from-amber-600 to-orange-400 text-white",
    ring: "ring-amber-500",
  },
];

const scienceToppers = [
  {
    name: "Ganesh More",
    photo: "/images/topper-ganesh-more.jpg",
    scores: "NEET: 587",
    stream: "Science",
  },
  {
    name: "Kunal More",
    photo: "/images/topper-kunal-mare.jpg",
    scores: "MHT-CET: 99.28%",
    stream: "Science",
  },
  {
    name: "Trupti Chaudhari",
    photo: "/images/topper-trupti-chaudhari.jpg",
    scores: "PCM: 97.61%",
    stream: "Science",
  },
  {
    name: "Pranali Dongale",
    photo: "/images/topper-pranali-dongale.jpg",
    scores: "Maths 98 · Chem 94",
    stream: "Science",
  },
  {
    name: "Kaveri Kande",
    photo: "/images/topper-kaveri-kande.jpg",
    scores: "Maths 98 · Bio 98 · Chem 93",
    stream: "Science",
  },
  {
    name: "Pravin Kandade",
    photo: "/images/topper-pravin-kandade.jpg",
    scores: "Phy 99 · Maths 99 · Chem 95",
    stream: "Science",
  },
];

const commerceToppers = [
  {
    name: "Sejal Pawar",
    photo: "/images/topper-sejal-pawar.jpg",
    scores: "Accounts 99 · Eco 94 · OC 95 · Maths 91",
    stream: "Commerce",
  },
  {
    name: "Janhavi Ghag",
    photo: "/images/topper-janhavi-ghag.jpg",
    scores: "Accounts 94 · Eco 92 · OC 95 · SP 96",
    stream: "Commerce",
  },
];

const iitSelections = [
  { name: "Hanumant Malkapure", college: "IIT Madras", photo: "/images/topper-hanumant-malkapure.jpg" },
  { name: "Umesh Mali", college: "IIT Indore", photo: "/images/topper-umesh-mali.jpg" },
];

/* ─── Component ─── */
export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="results" className="py-20 lg:py-28 dark-section grid-pattern overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block text-[#F59E0B] font-bold text-xs uppercase tracking-[0.25em] mb-3">
            Our Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Hall of{" "}
            <span className="gradient-text-gold">Champions</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            Real students, real results. Our toppers speak louder than any advertisement.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/8 rounded-2xl p-5 text-center hover:bg-white/10 hover:border-[#F59E0B]/20 transition-all group"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#F59E0B]">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-white/50 text-xs font-medium mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* ── IIT Selections Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="mb-14 bg-gradient-to-r from-[#F59E0B]/15 via-[#F59E0B]/8 to-[#F59E0B]/15 border border-[#F59E0B]/25 rounded-3xl p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="text-center sm:text-left flex-shrink-0">
              <div className="text-[#F59E0B] font-black text-4xl sm:text-5xl">30+</div>
              <div className="text-white/70 text-sm font-medium">Students in IITs / NITs</div>
            </div>
            <div className="w-px h-16 bg-[#F59E0B]/20 hidden sm:block" />
            <div className="flex-1">
              <div className="font-bold text-white text-lg mb-3">IIT Selections</div>
              <div className="flex flex-wrap gap-4">
                {iitSelections.map((s) => (
                  <div key={s.name} className="flex items-center gap-3 bg-white/8 rounded-2xl px-4 py-2.5">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#F59E0B]/50 flex-shrink-0">
                      <Image
                        src={s.photo}
                        alt={s.name}
                        fill
                        className="object-cover object-top"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{s.name}</div>
                      <div className="text-[#F59E0B] text-xs font-semibold">{s.college}</div>
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-3 bg-white/8 rounded-2xl px-4 py-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] font-black text-lg">+</div>
                  <div>
                    <div className="text-white font-bold text-sm">30+ More</div>
                    <div className="text-white/50 text-xs">NITs, COEP &amp; Govt Colleges</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Featured Top 3 ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-5"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#F59E0B]/30" />
            <span className="text-[#F59E0B] font-black text-sm uppercase tracking-widest px-4">Featured Achievers</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#F59E0B]/30" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredToppers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.12 }}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-[#F59E0B]/30 transition-all group overflow-hidden"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shimmer pointer-events-none" />

              {/* Badge */}
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${t.badgeColor}`}>
                {t.badge}
              </span>

              {/* Photo + Info */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`relative w-20 h-20 rounded-2xl overflow-hidden ring-3 ring-offset-2 ring-offset-[#0B1829] flex-shrink-0 ${t.ring}`}>
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    className="object-cover object-top"
                    sizes="80px"
                  />
                </div>
                <div>
                  <div className="text-white font-extrabold text-lg leading-tight">{t.name}</div>
                  <div className="text-white/50 text-sm mt-0.5">{t.stream} Stream</div>
                </div>
              </div>

              {/* Scores */}
              <div className="bg-white/8 rounded-2xl p-4 border border-white/8">
                <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">{t.exam}</div>
                <div className="text-[#F59E0B] font-black text-2xl">{t.score}</div>
                {t.sub && <div className="text-white/70 text-sm font-bold mt-1">{t.sub}</div>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Science Toppers Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/30" />
            <span className="text-blue-400 font-black text-sm uppercase tracking-widest px-4">Science Toppers</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/30" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {scienceToppers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.55 + i * 0.07 }}
                className="bg-white/5 border border-white/8 rounded-2xl p-4 text-center hover:bg-white/10 hover:border-blue-400/30 transition-all group"
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden mx-auto mb-3 ring-2 ring-blue-400/30 group-hover:ring-blue-400/60 transition-all">
                  <Image src={t.photo} alt={t.name} fill className="object-cover object-top" sizes="64px" />
                </div>
                <div className="text-white font-bold text-xs mb-1 leading-tight">{t.name}</div>
                <div className="text-blue-300 text-[11px] font-semibold leading-tight">{t.scores}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Commerce Toppers ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-emerald-500/30" />
            <span className="text-emerald-400 font-black text-sm uppercase tracking-widest px-4">Commerce Toppers</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-emerald-500/30" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl">
            {commerceToppers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex items-center gap-4 bg-white/5 border border-white/8 rounded-2xl p-4 hover:bg-white/10 hover:border-emerald-400/30 transition-all group"
              >
                <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-emerald-400/30 group-hover:ring-emerald-400/60 transition-all">
                  <Image src={t.photo} alt={t.name} fill className="object-cover object-top" sizes="56px" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{t.name}</div>
                  <div className="text-emerald-300 text-xs mt-0.5 font-semibold">{t.scores}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="bg-white/5 border border-[#F59E0B]/15 rounded-3xl p-8 text-center"
        >
          <div className="text-[#F59E0B] text-4xl mb-4">&ldquo;</div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed italic">
            Our students consistently secure top ranks in HSC Board exams, MHT-CET, JEE,
            and NEET. We believe every student has the potential to succeed — they just
            need the right guidance.
          </p>
          <p className="mt-5 text-[#F59E0B] font-bold tracking-wide">— Desai Classes Faculty</p>
        </motion.div>

      </div>
    </section>
  );
}
