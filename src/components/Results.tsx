"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { number: 35, suffix: "+", label: "Years of Excellence", icon: "🏛️" },
  { number: 10000, suffix: "+", label: "Students Mentored", icon: "🎓" },
  { number: 95, suffix: "%", label: "Pass Rate", icon: "📊" },
  { number: 210, suffix: "+", label: "5-Star Reviews", icon: "⭐" },
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="results"
      className="py-20 lg:py-28 hero-gradient relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#d4a843]/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#d4a843] font-semibold text-sm uppercase tracking-widest">
            Our Track Record
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Results That <span className="text-[#d4a843]">Speak</span>
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            Numbers that reflect our dedication to student success over three
            decades.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center text-4xl border border-white/10">
                {stat.icon}
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-[#d4a843] mb-2">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-white/60 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
        >
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            &ldquo;Our students consistently secure top ranks in HSC Board exams,
            MHT-CET, JEE, and NEET. We believe every student has the
            potential to succeed &mdash; they just need the right guidance.&rdquo;
          </p>
          <p className="mt-4 text-[#d4a843] font-semibold">
            &mdash; Desai Classes Faculty
          </p>
        </motion.div>
      </div>
    </section>
  );
}
