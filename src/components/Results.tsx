"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const timer = setInterval(() => {
      start += target / (1800 / 16);
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { number: 35,    suffix: "+", label: "Years of Excellence",   icon: "🏛️" },
  { number: 10000, suffix: "+", label: "Students Mentored",     icon: "🎓" },
  { number: 30,    suffix: "+", label: "IIT / NIT Selections",  icon: "🏆" },
  { number: 210,   suffix: "+", label: "5-Star Google Reviews", icon: "⭐" },
];

const featured = [
  {
    name: "Bharat Charan",    photo: "/images/topper-bharat-charan.jpg",
    exam: "JEE Advanced",     score: "99.9 Percentile", sub: "AIR 155",
    badge: "🥇 National Topper",
    badgeBg: "bg-[#E8C547] text-[#13115A]",
    ring: "ring-[#E8C547]",
    imgPos: "object-center",
  },
  {
    name: "Pallavi Bharane",  photo: "/images/topper-pallavi-bharne.jpg",
    exam: "MHT-CET",          score: "99.9 Percentile", sub: "Top Scorer",
    badge: "🥈 CET Topper",
    badgeBg: "bg-white/20 text-white border border-white/30",
    ring: "ring-white/60",
    imgPos: "object-center",
  },
  {
    name: "Vaishnavi Digole", photo: "/images/topper-vaishnavi-digole.jpg",
    exam: "NEET",              score: "603 Marks",       sub: "Medical",
    badge: "🥉 NEET Star",
    badgeBg: "bg-[#2D2BB5] text-white",
    ring: "ring-[#4644CE]",
    imgPos: "object-center",
  },
];

const iitSelections = [
  { name: "Hanumant Malkapure", college: "IIT Madras",    photo: "/images/topper-hanumant-malkapure.jpg", badge: "IIT" },
  { name: "Umesh Mali",         college: "IIT Indore",    photo: "/images/topper-umesh-mali.jpg",         badge: "IIT" },
  { name: "Sonali Pawar",       college: "Young Scientist · ISSRF 2025", photo: "/images/topper-sonali-pawar.jpg", badge: "🏅" },
];

const scienceToppers = [
  { name: "Ganesh More",      photo: "/images/topper-ganesh-more.jpg",      scores: "NEET: 587",              imgPos: "object-center" },
  { name: "Kunal More",       photo: "/images/topper-kunal-mare.jpg",       scores: "MHT-CET: 99.28%",        imgPos: "object-center" },
  { name: "Dhruva Kakade",    photo: null,                                   scores: "MHT-CET: 99.09%",        imgPos: "object-center" },
  { name: "Sakshi Kadu",      photo: "/images/topper-sakshi-kadu.jpg",      scores: "Phy 99 · Chem 98 · Bio 97", imgPos: "object-center" },
  { name: "Trupti Chaudhari", photo: "/images/topper-trupti-chaudhari.jpg", scores: "PCM: 97.61%",            imgPos: "object-[center_70%]" },
  { name: "Pranali Dongale",  photo: "/images/topper-pranali-dongale.jpg",  scores: "Maths 98 · Chem 94",     imgPos: "object-[center_20%]" },
  { name: "Kaveri Kande",     photo: "/images/topper-kaveri-kande.jpg",     scores: "Maths 98 · Bio 98",      imgPos: "object-center" },
  { name: "Pravin Kandade",   photo: "/images/topper-pravin-kandade.jpg",   scores: "Phy 99 · Maths 99",      imgPos: "object-center" },
];

const commerceToppers = [
  { name: "Sejal Pawar",        photo: "/images/topper-sejal-pawar.jpg",         scores: "Accounts 99 · Eco 94 · OC 95 · Maths 91" },
  { name: "Janhavi Ghag",       photo: "/images/topper-janhavi-ghag.jpg",        scores: "Accounts 94 · Eco 92 · OC 95 · SP 96"    },
  { name: "Yugandhara Halkare", photo: "/images/topper-yugandhara-halkare.jpg",  scores: "Eco 90 · Accounts 82 · SP 87"            },
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="results" className="py-16 lg:py-24 dark-bg overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center max-w-2xl mx-auto mb-12">
          <span className="label-dark">Our Track Record</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Hall of <span className="text-gold-gradient">Champions</span>
          </h2>
          <p className="mt-3 text-white/80 text-lg">Real students. Real results. Our toppers speak louder than any advertisement.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09 }}
              className="bg-white/10 border border-white/15 rounded-2xl p-5 text-center hover:bg-white/15 hover:border-[#E8C547]/40 transition-all"
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#E8C547]">
                <AnimatedCounter target={s.number} suffix={s.suffix} />
              </div>
              <div className="text-white/80 text-xs font-semibold mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* ═══ FEATURED ACHIEVERS ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-7">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#E8C547]/40" />
            <span className="text-[#E8C547] font-extrabold text-sm uppercase tracking-[0.2em] px-4">⭐ Featured Achievers</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#E8C547]/40" />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {featured.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.18 + i * 0.12 }}
                className={`relative rounded-3xl overflow-hidden border-2 shadow-2xl group ${t.ring}`}
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image src={t.photo} alt={t.name} fill className={`object-cover ${t.imgPos} transition-transform duration-500 group-hover:scale-105`} sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B47] via-[#0D0B47]/30 to-transparent" />
                  <span className={`absolute top-4 left-4 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg ${t.badgeBg}`}>{t.badge}</span>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="text-white font-extrabold text-xl leading-tight">{t.name}</div>
                    <div className="text-white/75 text-sm mt-0.5">{t.exam}</div>
                    <div className="mt-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl p-3">
                      <div className="text-[#E8C547] font-extrabold text-2xl">{t.score}</div>
                      <div className="text-white/85 text-sm font-semibold mt-0.5">{t.sub}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ═══ IIT SELECTIONS — HIGHLIGHTED ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-14"
        >
          {/* Section header */}
          <div className="flex items-center gap-3 mb-7">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#E8C547]/40" />
            <span className="text-[#E8C547] font-extrabold text-sm uppercase tracking-[0.2em] px-4">🏆 IIT Selections</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#E8C547]/40" />
          </div>

          {/* Gold banner headline */}
          <div className="text-center mb-8 bg-[#E8C547]/10 border border-[#E8C547]/30 rounded-2xl py-5 px-6">
            <div className="text-[#E8C547] font-extrabold text-5xl sm:text-6xl leading-none">30+</div>
            <div className="text-white font-bold text-lg mt-1">Students Placed in IITs &amp; NITs</div>
            <div className="text-white/65 text-sm mt-1">Including IIT Madras · IIT Indore · Various NITs · COEP Pune</div>
          </div>

          {/* Large portrait cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {iitSelections.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.12 }}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#E8C547]/50 shadow-2xl shadow-yellow-900/30 group hover:border-[#E8C547] transition-all"
              >
                <div className="relative w-full aspect-[3/4] sm:aspect-[3/4] overflow-hidden">
                  <Image src={s.photo} alt={s.name} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B47] via-[#0D0B47]/30 to-transparent" />
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-[#E8C547] text-[#13115A] text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">{s.badge}</div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <div className="text-white font-extrabold text-sm sm:text-base lg:text-lg leading-tight">{s.name}</div>
                    <div className="text-[#E8C547] font-bold text-xs sm:text-sm mt-0.5 sm:mt-1 leading-snug">{s.college}</div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* "Many More" card */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.59 }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#E8C547]/30 group hover:border-[#E8C547]/60 transition-all"
            >
              <div className="relative w-full aspect-[3/4] bg-gradient-to-b from-[#1E1B6B] to-[#0D0B47] flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#E8C547]/20 border-2 border-[#E8C547]/50 flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-[#E8C547] font-extrabold text-xl sm:text-2xl">+</span>
                </div>
                <div className="text-white font-extrabold text-base sm:text-xl mb-1 sm:mb-2">Many More</div>
                <div className="text-white/70 text-xs sm:text-sm leading-relaxed">NITs · COEP<br />Govt. Engineering<br />&amp; Medical Colleges</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ═══ SCIENCE TOPPERS ═══ */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-400/35" />
          <span className="text-blue-300 font-extrabold text-xs uppercase tracking-[0.2em] px-4">Science Toppers</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-400/35" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-3 sm:gap-4 mb-12">
          {scienceToppers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.52 + i * 0.07 }}
              className="bg-white/8 border border-white/12 rounded-2xl overflow-hidden hover:bg-white/14 hover:border-blue-400/40 transition-all group"
            >
              <div className="relative w-full aspect-square overflow-hidden">
                {t.photo ? (
                  <Image
                    src={t.photo} alt={t.name} fill
                    className={`object-cover ${t.imgPos} transition-transform duration-500 group-hover:scale-105`}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 13vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1D3F74] to-[#0B1829] flex items-center justify-center">
                    <span className="text-white/60 font-extrabold text-3xl">{t.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="p-2.5 sm:p-3 text-center">
                <div className="text-white font-bold text-xs mb-0.5 sm:mb-1 leading-tight">{t.name}</div>
                <div className="text-blue-300 text-[9px] sm:text-[10px] font-semibold leading-tight">{t.scores}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ═══ COMMERCE TOPPERS ═══ */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-emerald-400/35" />
          <span className="text-emerald-300 font-extrabold text-xs uppercase tracking-[0.2em] px-4">Commerce Toppers</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-emerald-400/35" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 max-w-2xl mb-10">
          {commerceToppers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.68 + i * 0.1 }}
              className="bg-white/8 border border-white/12 rounded-2xl overflow-hidden hover:bg-white/14 hover:border-emerald-400/40 transition-all group"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src={t.photo} alt={t.name} fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B47]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white font-bold text-base">{t.name}</div>
                  <div className="text-emerald-300 text-xs font-semibold mt-1 leading-relaxed">{t.scores}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85 }}
          className="bg-white/8 border border-[#E8C547]/20 rounded-3xl p-8 text-center"
        >
          <div className="text-[#E8C547] text-5xl font-serif mb-3">&ldquo;</div>
          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed italic">
            Our students consistently secure top ranks in HSC Board exams, MHT-CET, JEE, and NEET.
            Every student has the potential to succeed — they just need the right guidance.
          </p>
          <p className="mt-5 text-[#E8C547] font-bold">— Desai Classes Faculty</p>
        </motion.div>

      </div>
    </section>
  );
}
