"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const facilities = [
  {
    icon: "❄️",
    title: "AC Classrooms",
    desc: "Comfortable air-conditioned classrooms for focused, distraction-free learning in all seasons.",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "hover:border-blue-400/30",
  },
  {
    icon: "📺",
    title: "Smart Boards",
    desc: "Interactive smartboards for visual learning, better concept visualisation and engagement.",
    color: "from-violet-500/20 to-purple-500/20",
    border: "hover:border-violet-400/30",
  },
  {
    icon: "📚",
    title: "Library & Study Room",
    desc: "Well-stocked library and quiet study rooms for self-paced preparation.",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "hover:border-emerald-400/30",
  },
  {
    icon: "📝",
    title: "Regular Tests",
    desc: "Weekly and monthly assessments to track progress and identify areas for improvement.",
    color: "from-amber-500/20 to-orange-500/20",
    border: "hover:border-amber-400/30",
  },
  {
    icon: "👨‍👩‍👦",
    title: "Parent–Teacher Meetings",
    desc: "Regular PTMs and progress reports to keep parents fully informed.",
    color: "from-rose-500/20 to-pink-500/20",
    border: "hover:border-rose-400/30",
  },
  {
    icon: "💻",
    title: "Digital Learning",
    desc: "Computer facilities for online test practice and digital learning resources.",
    color: "from-sky-500/20 to-blue-500/20",
    border: "hover:border-sky-400/30",
  },
  {
    icon: "🧹",
    title: "Hygienic Environment",
    desc: "Sanitized classrooms, clean washrooms, and a safe, welcoming environment.",
    color: "from-green-500/20 to-emerald-500/20",
    border: "hover:border-green-400/30",
  },
  {
    icon: "💳",
    title: "Flexible Payments",
    desc: "Interest-free EMI with Cash, Cheque, Net Banking and UPI options.",
    color: "from-indigo-500/20 to-violet-500/20",
    border: "hover:border-indigo-400/30",
  },
];

export default function Facilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-[#F97316] font-bold text-xs uppercase tracking-[0.2em] mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1829]">
            World-Class <span className="gradient-text-orange">Facilities</span>
          </h2>
          <p className="mt-4 text-[#6B7280] text-lg">
            Modern infrastructure and student-friendly amenities for the best learning experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 }}
              className={`bg-white rounded-2xl p-6 border border-gray-100 ${f.border} card-hover text-center group transition-all`}
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${f.color} rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>
              <h3 className="text-[#0B1829] font-extrabold text-base mb-2">{f.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65 }}
          className="mt-14 bg-gradient-to-r from-[#0B1829] via-[#162B50] to-[#1D3F74] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-white font-extrabold text-xl sm:text-2xl">
              Experience it yourself — Free Demo Class
            </h3>
            <p className="text-white/60 mt-1 text-sm">
              Visit our Karve Nagar campus and see why 10,000+ students chose Desai Classes.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-7 py-3.5 bg-[#F97316] hover:bg-[#EA6810] text-white font-bold rounded-2xl text-sm shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            Book Demo Class →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
