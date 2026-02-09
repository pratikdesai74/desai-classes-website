"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const courses = [
  {
    title: "11th Science",
    icon: "🔬",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    description:
      "Build a strong foundation in Science with conceptual clarity and rigorous problem-solving practice.",
    highlight: "CET / JEE / NEET Foundation",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "12th Science",
    icon: "⚛️",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    description:
      "Master advanced concepts and ace board exams with targeted preparation for competitive entrances.",
    highlight: "Board + Entrance Combo",
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "11th Commerce",
    icon: "📈",
    subjects: ["Accountancy", "Economics", "OC/SP", "Maths/Stats"],
    description:
      "Develop strong fundamentals in Commerce with practical problem-solving and conceptual understanding.",
    highlight: "CA / CS Foundation",
    color: "from-amber-500 to-orange-400",
  },
  {
    title: "12th Commerce",
    icon: "💼",
    subjects: ["Accountancy", "Economics", "OC/SP", "Maths/Stats"],
    description:
      "Excel in board exams with comprehensive preparation and guidance for professional course entrances.",
    highlight: "Board + Professional Prep",
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "MHT-CET Preparation",
    icon: "🎯",
    subjects: ["Physics", "Chemistry", "Mathematics/Biology"],
    description:
      "Focused crash courses and year-long programs for Maharashtra Common Entrance Test preparation.",
    highlight: "Proven Results",
    color: "from-red-500 to-rose-400",
  },
  {
    title: "JEE / NEET Coaching",
    icon: "🏆",
    subjects: ["Advanced Physics", "Advanced Chemistry", "Advanced Math/Bio"],
    description:
      "Intensive coaching for national-level competitive exams with expert mentors and study material.",
    highlight: "National Level Prep",
    color: "from-indigo-500 to-violet-400",
  },
];

export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="py-20 lg:py-28 bg-[#f8f9fc]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#d4a843] font-semibold text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3a5c]">
            Our <span className="text-[#d4a843]">Courses</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Comprehensive coaching programs designed to help students excel in
            board exams and competitive entrance tests.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover group"
            >
              <div className={`h-2 bg-gradient-to-r ${course.color}`} />
              <div className="p-7">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{course.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a3a5c]">
                      {course.title}
                    </h3>
                    <span className="text-xs font-semibold text-[#d4a843] bg-[#d4a843]/10 px-2 py-0.5 rounded-full">
                      {course.highlight}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {course.subjects.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-[#f8f9fc] text-[#1a3a5c] px-3 py-1.5 rounded-lg font-medium border border-gray-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a3a5c] hover:bg-[#0f2440] text-white font-semibold rounded-xl text-lg transition-all"
          >
            Get Free Demo Class
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
