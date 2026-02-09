"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { year: "1990", event: "Founded with a vision to provide quality education" },
  { year: "2000", event: "Expanded to Commerce & Science streams" },
  { year: "2010", event: "Modernized with smart classrooms & AC facilities" },
  { year: "2020", event: "Crossed 10,000+ successful students" },
  { year: "2025", event: "4.8/5 Google rating with 210+ reviews" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#d4a843] font-semibold text-sm uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3a5c]">
              35+ Years of
              <br />
              <span className="text-[#d4a843]">Academic Excellence</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Established in 1990, Desai Classes has been a cornerstone of
              quality education in Karve Nagar, Pune. We have nurtured
              thousands of students, helping them achieve their dreams of
              excelling in 11th &amp; 12th board exams and competitive
              entrance tests like CET, JEE, and NEET.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed text-lg">
              Our commitment to personalized attention, experienced faculty,
              and modern teaching methodologies has made us one of the most
              trusted coaching institutes in Pune. Every student receives the
              guidance they need to unlock their full potential.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { icon: "👨‍🏫", text: "Expert Faculty" },
                { icon: "📖", text: "Personalized Attention" },
                { icon: "🖥️", text: "Smart Classrooms" },
                { icon: "📝", text: "Regular Assessments" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-[#1a3a5c] font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1a3a5c] to-[#d4a843]" />

              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="flex items-start gap-6 relative"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#1a3a5c] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 z-10 border-4 border-white shadow-lg">
                      {m.year}
                    </div>
                    <div className="bg-[#f8f9fc] rounded-xl p-5 flex-1 border border-gray-100 hover:border-[#d4a843]/30 transition-colors">
                      <p className="text-[#1a3a5c] font-medium">{m.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
