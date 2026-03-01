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
  { number: 35,    suffix: "+", label: "Years of Excellence",     icon: "🏛️" },
  { number: 10000, suffix: "+", label: "Students Mentored",       icon: "🎓" },
  { number: 30,    suffix: "+", label: "IIT / NIT Selections",    icon: "🏆" },
  { number: 210,   suffix: "+", label: "5-Star Google Reviews",   icon: "⭐" },
];

const featured = [
  {
    name: "Bharat Charan",   photo: "/images/topper-bharat-charan.jpg",
    exam: "JEE Advanced",    score: "99.9 Percentile", sub: "AIR 155",
    badge: "🥇 National Topper",
    badgeBg: "bg-[#E8C547] text-[#13115A]",
    ring: "ring-[#E8C547]",
  },
  {
    name: "Pallavi Bharane", photo: "/images/topper-pallavi-bharne.jpg",
    exam: "MHT-CET",         score: "99.9 Percentile", sub: "Top Scorer",
    badge: "🥈 CET Topper",
    badgeBg: "bg-white/15 text-white border border-white/20",
    ring: "ring-white/50",
  },
  {
    name: "Vaishnavi Digole",photo: "/images/topper-vaishnavi-digole.jpg",
    exam: "NEET",             score: "603 Marks",       sub: "Medical",
    badge: "🥉 NEET Star",
    badgeBg: "bg-[#2D2BB5] text-white",
    ring: "ring-[#4644CE]",
  },
];

const scienceToppers = [
  { name: "Ganesh More",      photo: "/images/topper-ganesh-more.jpg",      scores: "NEET: 587"              },
  { name: "Kunal More",       photo: "/images/topper-kunal-mare.jpg",       scores: "MHT-CET: 99.28%"        },
  { name: "Trupti Chaudhari", photo: "/images/topper-trupti-chaudhari.jpg", scores: "PCM: 97.61%"            },
  { name: "Pranali Dongale",  photo: "/images/topper-pranali-dongale.jpg",  scores: "Maths 98 · Chem 94"     },
  { name: "Kaveri Kande",     photo: "/images/topper-kaveri-kande.jpg",     scores: "Maths 98 · Bio 98"      },
  { name: "Pravin Kandade",   photo: "/images/topper-pravin-kandade.jpg",   scores: "Phy 99 · Maths 99"      },
];

const commerceToppers = [
  { name: "Sejal Pawar",   photo: "/images/topper-sejal-pawar.jpg",   scores: "Accounts 99 · Eco 94 · OC 95 · Maths 91" },
  { name: "Janhavi Ghag",  photo: "/images/topper-janhavi-ghag.jpg",  scores: "Accounts 94 · Eco 92 · OC 95 · SP 96"    },
];

const iitSelections = [
  { name: "Hanumant Malkapure", college: "IIT Madras",  photo: "/images/topper-hanumant-malkapure.jpg" },
  { name: "Umesh Mali",         college: "IIT Indore",  photo: "/images/topper-umesh-mali.jpg" },
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="results" className="py-16 lg:py-24 dark-bg dot-grid overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center max-w-2xl mx-auto mb-12">
          <span className="label-dark">Our Track Record</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Hall of <span className="text-gold-gradient">Champions</span>
          </h2>
          <p className="mt-3 text-white/50 text-lg">Real students. Real results. Our toppers speak louder than any advertisement.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09 }}
              className="bg-white/6 border border-white/8 rounded-2xl p-5 text-center hover:bg-white/10 hover:border-[#E8C547]/25 transition-all"
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#E8C547]">
                <AnimatedCounter target={s.number} suffix={s.suffix} />
              </div>
              <div className="text-white/50 text-xs font-semibold mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* IIT Banner */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="mb-12 bg-[#E8C547]/10 border border-[#E8C547]/25 rounded-3xl p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="text-center sm:text-left flex-shrink-0">
              <div className="text-[#E8C547] font-extrabold text-5xl">30+</div>
              <div className="text-white/60 text-sm font-semibold">Students in IITs / NITs</div>
            </div>
            <div className="w-px h-14 bg-[#E8C547]/20 hidden sm:block" />
            <div className="flex-1">
              <div className="text-white font-extrabold text-base mb-3">IIT Selections</div>
              <div className="flex flex-wrap gap-3">
                {iitSelections.map(s => (
                  <div key={s.name} className="flex items-center gap-3 bg-white/8 border border-white/10 rounded-2xl px-4 py-2.5">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#E8C547]/60 flex-shrink-0">
                      <Image src={s.photo} alt={s.name} fill className="object-cover object-top" sizes="40px" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{s.name}</div>
                      <div className="text-[#E8C547] text-xs font-bold">{s.college}</div>
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-3 bg-white/8 border border-white/10 rounded-2xl px-4 py-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#E8C547]/20 flex items-center justify-center text-[#E8C547] font-extrabold text-lg">+</div>
                  <div>
                    <div className="text-white font-bold text-sm">Many More</div>
                    <div className="text-white/45 text-xs">NITs · COEP · Govt Colleges</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Toppers */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#E8C547]/30" />
          <span className="text-[#E8C547] font-extrabold text-xs uppercase tracking-[0.2em] px-4">Featured Achievers</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#E8C547]/30" />
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {featured.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.22 + i * 0.12 }}
              className="relative bg-white/6 border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-[#E8C547]/30 transition-all overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 shimmer-over pointer-events-none" />
              <span className={`inline-block text-xs font-extrabold px-3 py-1 rounded-full mb-4 ${t.badgeBg}`}>{t.badge}</span>
              <div className="flex items-center gap-4 mb-5">
                <div className={`relative w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-offset-2 ring-offset-[#13115A] flex-shrink-0 ${t.ring}`}>
                  <Image src={t.photo} alt={t.name} fill className="object-cover object-top" sizes="80px" />
                </div>
                <div>
                  <div className="text-white font-extrabold text-lg leading-tight">{t.name}</div>
                  <div className="text-white/50 text-sm">{t.exam}</div>
                </div>
              </div>
              <div className="bg-white/8 border border-white/8 rounded-2xl p-4">
                <div className="text-[#E8C547] font-extrabold text-2xl">{t.score}</div>
                <div className="text-white/60 text-sm font-semibold mt-0.5">{t.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Science Toppers */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-400/30" />
          <span className="text-blue-300 font-extrabold text-xs uppercase tracking-[0.2em] px-4">Science Toppers</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-400/30" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {scienceToppers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.52 + i * 0.07 }}
              className="bg-white/5 border border-white/8 rounded-2xl p-4 text-center hover:bg-white/10 hover:border-blue-400/30 transition-all group"
            >
              <div className="relative w-14 h-14 rounded-xl overflow-hidden mx-auto mb-3 ring-2 ring-blue-400/25 group-hover:ring-blue-400/55 transition-all">
                <Image src={t.photo} alt={t.name} fill className="object-cover object-top" sizes="56px" />
              </div>
              <div className="text-white font-bold text-xs mb-1 leading-tight">{t.name}</div>
              <div className="text-blue-300 text-[10px] font-semibold leading-tight">{t.scores}</div>
            </motion.div>
          ))}
        </div>

        {/* Commerce Toppers */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-emerald-400/30" />
          <span className="text-emerald-300 font-extrabold text-xs uppercase tracking-[0.2em] px-4">Commerce Toppers</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-emerald-400/30" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4 max-w-lg mb-10">
          {commerceToppers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.68 + i * 0.1 }}
              className="flex items-center gap-4 bg-white/5 border border-white/8 rounded-2xl p-4 hover:bg-white/10 hover:border-emerald-400/30 transition-all group"
            >
              <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-emerald-400/25 group-hover:ring-emerald-400/55 transition-all">
                <Image src={t.photo} alt={t.name} fill className="object-cover object-top" sizes="56px" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">{t.name}</div>
                <div className="text-emerald-300 text-xs font-semibold mt-0.5">{t.scores}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="bg-white/5 border border-[#E8C547]/15 rounded-3xl p-8 text-center"
        >
          <div className="text-[#E8C547] text-5xl font-serif mb-3">&ldquo;</div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed italic">
            Our students consistently secure top ranks in HSC Board exams, MHT-CET, JEE, and NEET.
            Every student has the potential to succeed — they just need the right guidance.
          </p>
          <p className="mt-5 text-[#E8C547] font-bold">— Desai Classes Faculty</p>
        </motion.div>

      </div>
    </section>
  );
}
