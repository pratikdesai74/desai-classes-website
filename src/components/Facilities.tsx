"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const facilities = [
  {
    icon: "❄️",
    title: "AC Classrooms",
    desc: "Comfortable air-conditioned classrooms for focused learning in all seasons.",
  },
  {
    icon: "📺",
    title: "Smart Boards",
    desc: "Interactive smartboards for visual learning and better concept understanding.",
  },
  {
    icon: "📚",
    title: "Library & Study Room",
    desc: "Well-stocked library and quiet study rooms for self-paced preparation.",
  },
  {
    icon: "💻",
    title: "Computer Lab",
    desc: "Computer facilities for digital learning resources and online test practice.",
  },
  {
    icon: "📝",
    title: "Regular Tests",
    desc: "Weekly and monthly assessments to track progress and identify improvement areas.",
  },
  {
    icon: "🧹",
    title: "Hygienic Environment",
    desc: "Sanitized classrooms, clean washrooms, and a safe learning environment.",
  },
  {
    icon: "👨‍👩‍👦",
    title: "Parent-Teacher Meetings",
    desc: "Regular interactions to keep parents informed about student progress.",
  },
  {
    icon: "💳",
    title: "Flexible Payments",
    desc: "Interest-free EMI options with Cash, Cheque, Net Banking, and UPI accepted.",
  },
];

export default function Facilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#d4a843] font-semibold text-sm uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3a5c]">
            World-Class <span className="text-[#d4a843]">Facilities</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Modern infrastructure and student-friendly amenities for the best
            learning experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="bg-[#f8f9fc] rounded-2xl p-6 border border-gray-100 card-hover text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:shadow-md transition-shadow">
                {f.icon}
              </div>
              <h3 className="text-[#1a3a5c] font-bold text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
