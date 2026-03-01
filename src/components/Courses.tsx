"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const courses = [
  {
    title: "11th Science",
    icon: "🔬",
    badge: "Foundation Year",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    description: "Build rock-solid foundations with conceptual clarity and rigorous problem-solving for board and competitive exams.",
    highlight: "CET · JEE · NEET Ready",
    gradientFrom: "#1D3F74",
    gradientTo: "#2563EB",
    accentColor: "text-blue-400",
    badgeBg: "bg-blue-500/20 text-blue-300",
  },
  {
    title: "12th Science",
    icon: "⚛️",
    badge: "Most Popular",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    description: "Master advanced concepts, ace HSC boards, and crack MHT-CET, JEE & NEET with our board + entrance combo.",
    highlight: "Board + Entrance Combo",
    gradientFrom: "#7C3AED",
    gradientTo: "#C026D3",
    accentColor: "text-purple-400",
    badgeBg: "bg-purple-500/20 text-purple-300",
  },
  {
    title: "11th Commerce",
    icon: "📈",
    badge: "CA · CS Prep",
    subjects: ["Accountancy", "Economics", "OC/SP", "Maths/Stats"],
    description: "Develop strong fundamentals in Commerce with practical problem-solving and conceptual depth.",
    highlight: "CA · CS Foundation",
    gradientFrom: "#D97706",
    gradientTo: "#F97316",
    accentColor: "text-amber-400",
    badgeBg: "bg-amber-500/20 text-amber-300",
  },
  {
    title: "12th Commerce",
    icon: "💼",
    badge: "Board Focused",
    subjects: ["Accountancy", "Economics", "OC/SP", "Maths/Stats"],
    description: "Excel in board exams with comprehensive preparation and professional course entrance guidance.",
    highlight: "Board + Professional Prep",
    gradientFrom: "#059669",
    gradientTo: "#10B981",
    accentColor: "text-emerald-400",
    badgeBg: "bg-emerald-500/20 text-emerald-300",
  },
  {
    title: "MHT-CET Prep",
    icon: "🎯",
    badge: "Maharashtra Focused",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology"],
    description: "Focused year-long programs and crash courses for Maharashtra CET with previous year paper practice.",
    highlight: "99.9 Percentile Track",
    gradientFrom: "#DC2626",
    gradientTo: "#F97316",
    accentColor: "text-rose-400",
    badgeBg: "bg-rose-500/20 text-rose-300",
  },
  {
    title: "JEE / NEET",
    icon: "🏆",
    badge: "National Level",
    subjects: ["Advanced Physics", "Advanced Chemistry", "Advanced Math/Bio"],
    description: "Intensive national-level coaching by expert mentors with IIT/NIT-focused study material and mock tests.",
    highlight: "AIR 155 Track Record",
    gradientFrom: "#0E7490",
    gradientTo: "#6366F1",
    accentColor: "text-cyan-400",
    badgeBg: "bg-cyan-500/20 text-cyan-300",
  },
];

export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="courses" className="py-20 lg:py-28 bg-[#EEF4FF]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-[#F97316] font-bold text-xs uppercase tracking-[0.2em] mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1829]">
            Courses That <span className="gradient-text-orange">Build Toppers</span>
          </h2>
          <p className="mt-4 text-[#6B7280] text-lg">
            Comprehensive programs designed for board excellence and competitive exam success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-white card-hover group"
            >
              {/* Gradient header */}
              <div
                className="h-2 w-full"
                style={{ background: `linear-gradient(90deg, ${course.gradientFrom}, ${course.gradientTo})` }}
              />

              <div className="p-7">
                {/* Icon + Title row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm"
                      style={{ background: `linear-gradient(135deg, ${course.gradientFrom}20, ${course.gradientTo}30)` }}
                    >
                      {course.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-[#0B1829]">{course.title}</h3>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${course.badgeBg}`}>
                    {course.badge}
                  </span>
                </div>

                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{course.description}</p>

                {/* Subjects */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {course.subjects.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-[#EEF4FF] text-[#1D3F74] px-3 py-1.5 rounded-lg font-semibold border border-[#1D3F74]/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#F97316]">{course.highlight}</span>
                  <a
                    href="#contact"
                    className="text-xs font-bold text-[#1D3F74] hover:text-[#F97316] transition-colors flex items-center gap-1 group-hover:text-[#F97316]"
                  >
                    Enquire Now →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0B1829] hover:bg-[#162B50] text-white font-bold rounded-2xl text-base shadow-xl transition-all hover:-translate-y-1"
          >
            Book a Free Demo Class
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
