"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const courses = [
  {
    icon: "🔬", title: "11th Science",
    badge: "Foundation Year", badgeClass: "bg-blue-100 text-blue-800",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    desc: "Build rock-solid foundations with conceptual clarity and rigorous problem-solving for board and competitive exams.",
    highlight: "CET · JEE · NEET Ready",
    barColor: "#1E1B6B",
  },
  {
    icon: "⚛️", title: "12th Science",
    badge: "Most Popular", badgeClass: "bg-[#1E1B6B] text-white",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    desc: "Master advanced concepts, ace HSC boards, and crack MHT-CET, JEE & NEET with our board + entrance combo.",
    highlight: "Board + Entrance Combo",
    barColor: "#E8C547",
  },
  {
    icon: "📈", title: "11th Commerce",
    badge: "CA · CS Prep", badgeClass: "bg-amber-100 text-amber-800",
    subjects: ["Accountancy", "Economics", "OC / SP", "Maths / Stats"],
    desc: "Develop strong fundamentals in Commerce with practical problem-solving and conceptual depth.",
    highlight: "CA · CS Foundation",
    barColor: "#2D2BB5",
  },
  {
    icon: "💼", title: "12th Commerce",
    badge: "Board Focused", badgeClass: "bg-green-100 text-green-800",
    subjects: ["Accountancy", "Economics", "OC / SP", "Maths / Stats"],
    desc: "Excel in board exams with comprehensive preparation and professional course entrance guidance.",
    highlight: "Board + Professional Prep",
    barColor: "#059669",
  },
  {
    icon: "🎯", title: "MHT-CET Prep",
    badge: "Maharashtra Focus", badgeClass: "bg-red-100 text-red-800",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology"],
    desc: "Focused year-long programs and crash courses for Maharashtra CET with past paper practice.",
    highlight: "99.9 Percentile Track",
    barColor: "#DC2626",
  },
  {
    icon: "🏆", title: "JEE / NEET",
    badge: "National Level", badgeClass: "bg-purple-100 text-purple-800",
    subjects: ["Advanced Physics", "Advanced Chemistry", "Advanced Maths / Bio"],
    desc: "Intensive national-level coaching by expert mentors. AIR 155 track record.",
    highlight: "AIR 155 · NEET 603",
    barColor: "#7C3AED",
  },
];

export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="courses" className="py-16 lg:py-24 bg-[#F0EFFF]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="label-light">What We Offer</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F0E3D]">
            Courses That <span className="text-[#1E1B6B]">Build Toppers</span>
          </h2>
          <p className="mt-3 text-[#6B69A0] text-lg">
            Comprehensive programs designed for board excellence and competitive exam success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#1E1B6B]/8 card-lift group"
            >
              {/* Color bar */}
              <div className="h-1.5 w-full" style={{ background: c.barColor }} />

              <div className="p-6">
                {/* Icon + title */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ background: `${c.barColor}14` }}
                    >
                      {c.icon}
                    </div>
                    <h3 className="text-lg font-extrabold text-[#0F0E3D]">{c.title}</h3>
                  </div>
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full whitespace-nowrap ${c.badgeClass}`}>
                    {c.badge}
                  </span>
                </div>

                <p className="text-[#6B69A0] text-sm leading-relaxed mb-4">{c.desc}</p>

                {/* Subjects */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {c.subjects.map(s => (
                    <span key={s} className="text-xs font-semibold text-[#1E1B6B] bg-[#F0EFFF] px-3 py-1 rounded-lg border border-[#1E1B6B]/10">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#1E1B6B]/6">
                  <span className="text-xs font-extrabold text-[#E8C547] bg-[#1E1B6B] px-3 py-1 rounded-lg">
                    {c.highlight}
                  </span>
                  <a href="#contact" className="text-xs font-bold text-[#1E1B6B] hover:text-[#E8C547] hover:underline transition-colors">
                    Enquire →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65 }}
          className="text-center mt-10"
        >
          <a href="#contact" className="inline-flex items-center gap-2.5 px-8 py-4 btn-indigo text-base rounded-xl">
            Book a Free Demo Class
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
