"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const topperHighlights = [
  { photo: "/images/topper-bharat-charan.jpg",    name: "Bharat Charan",    exam: "JEE Advanced",  score: "AIR 155",       pct: "99.9 Percentile", ring: "ring-[#E8C547]",   badge: "🥇 National Rank", imgPos: "object-center" },
  { photo: "/images/topper-vaishnavi-digole.jpg", name: "Vaishnavi Digole", exam: "NEET",          score: "603 Marks",     pct: "Medical Topper",  ring: "ring-white/40",    badge: "🏥 NEET Star",     imgPos: "object-center" },
  { photo: "/images/topper-pallavi-bharne.jpg",   name: "Pallavi Bharane",  exam: "MHT-CET",       score: "99.9%ile",      pct: "Top Scorer",      ring: "ring-[#E8C547]/60", badge: "🎯 CET Topper",   imgPos: "object-center" },
];

const reviews = [
  { text: "Highly specialized courses with knowledgeable teachers providing crystal-clear explanations. Personalized attention genuinely boosts confidence.", author: "Siddharth Nimbore", role: "Parent · Google Review" },
  { text: "Teachers are knowledgeable and multiple instructors provide diverse perspectives. My son went from average to topping his class within months.", author: "Grishma Pathak",    role: "Parent · Google Review" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-16 lg:py-24 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Story + Classroom Photo ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <span className="label-light">Our Story</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0F0E3D] leading-tight">
              35+ Years of
              <br />
              <span className="text-[#1E1B6B]">Academic Excellence</span>
            </h2>
            <p className="mt-5 text-[#3D3B6E] leading-relaxed text-lg">
              Established in 1990, Desai Classes has been a cornerstone of quality
              education in Karve Nagar, Pune. We have nurtured thousands of students,
              helping them achieve their dreams of excelling in 11th &amp; 12th board
              exams and competitive tests like CET, JEE, and NEET.
            </p>
            <p className="mt-4 text-[#3D3B6E] leading-relaxed text-lg">
              Our commitment to personalized attention, experienced faculty, and modern
              teaching methodologies has made us one of Pune&apos;s most trusted
              coaching institutes.
            </p>

            {/* Highlight pills */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {["35+ Years Trust", "10,000+ Alumni", "IIT Rankers", "NEET/CET Toppers", "4.8★ Google Rated"].map(chip => (
                <span
                  key={chip}
                  className="text-sm font-semibold text-[#1E1B6B] bg-[#F0EFFF] border border-[#1E1B6B]/15 px-4 py-1.5 rounded-full"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — classroom photo */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/students-batch.jpg"
                alt="Desai Classes students batch photo"
                fill
                className="object-cover object-[center_30%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0740]/80 via-[#0D0740]/10 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6">
                <div className="text-white font-extrabold text-lg">10,000+ Students Mentored</div>
                <div className="text-white/60 text-sm mt-0.5">A legacy of trust built over 35+ years</div>
              </div>
              <div className="absolute top-5 right-5 bg-[#E8C547] text-[#130952] rounded-xl px-4 py-2 text-sm font-extrabold shadow-lg">
                Est. 1990
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Topper Showcase ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="mb-14"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F0E3D]">
              Our Students&apos; <span className="text-[#190B62]">Real Results</span>
            </h3>
            <p className="mt-2 text-[#6B69A0] text-sm">Not promises — actual scores from our classrooms.</p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto mb-6">
            {topperHighlights.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.32 + i * 0.1 }}
                className={`relative rounded-2xl overflow-hidden ring-2 ${t.ring} shadow-xl group`}
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image src={t.photo} alt={t.name} fill
                    className={`object-cover ${t.imgPos} transition-transform duration-500 group-hover:scale-105`}
                    sizes="(max-width: 640px) 33vw, 220px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0740] via-[#0D0740]/20 to-transparent" />
                  <span className="absolute top-2 left-2 text-[9px] sm:text-[10px] font-extrabold bg-[#E8C547] text-[#130952] px-2 py-0.5 rounded-full">
                    {t.badge}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3">
                    <div className="text-white font-extrabold text-xs sm:text-sm leading-tight">{t.name}</div>
                    <div className="text-[#E8C547] font-bold text-xs mt-0.5">{t.score}</div>
                    <div className="text-white/60 text-[9px] sm:text-[10px] mt-0.5">{t.exam}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a href="#results" className="inline-flex items-center gap-2 text-[#190B62] font-extrabold text-sm border-b-2 border-[#E8C547] pb-0.5 hover:text-[#E8C547] transition-colors">
              See all 30+ toppers →
            </a>
          </div>
        </motion.div>

        {/* ── Google Reviews Snippet ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45 }}
          className="bg-[#F0EFFF] rounded-3xl p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-extrabold text-[#0F0E3D]">What Parents Say</h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-[#E8C547] text-sm">★</span>)}
                </div>
                <span className="text-[#190B62] font-extrabold text-sm">4.8</span>
                <span className="text-[#6B69A0] text-xs">· 210+ Google Reviews</span>
              </div>
            </div>
            <a href="#testimonials" className="text-xs font-extrabold text-[#190B62] border border-[#190B62]/20 bg-white rounded-full px-4 py-1.5 hover:bg-[#190B62] hover:text-white transition-all whitespace-nowrap">
              Read All Reviews →
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {reviews.map((r, i) => (
              <motion.div
                key={r.author}
                initial={{ opacity: 0, x: i === 0 ? -16 : 16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.52 + i * 0.1 }}
                className="bg-white rounded-2xl p-4 shadow-sm border border-[#190B62]/8"
              >
                <div className="flex gap-0.5 mb-2">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-[#E8C547] text-xs">★</span>)}
                </div>
                <p className="text-[#3D3B6E] text-sm leading-relaxed italic">&ldquo;{r.text}&rdquo;</p>
                <div className="mt-3 text-xs font-bold text-[#190B62]">{r.author}</div>
                <div className="text-[10px] text-[#6B69A0]">{r.role}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
