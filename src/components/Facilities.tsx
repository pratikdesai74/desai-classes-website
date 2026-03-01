"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const facilities = [
  { icon: "❄️", title: "AC Classrooms",           desc: "Comfortable air-conditioned classrooms for focused, distraction-free learning.",          color: "bg-sky-50    border-sky-200"     },
  { icon: "📺", title: "Smart Boards",             desc: "Interactive smartboards for visual learning and better concept visualisation.",             color: "bg-violet-50 border-violet-200"  },
  { icon: "📚", title: "Library & Study Room",     desc: "Well-stocked library and quiet study rooms for self-paced preparation.",                   color: "bg-emerald-50 border-emerald-200" },
  { icon: "📝", title: "Regular Tests",            desc: "Weekly and monthly assessments to track progress and identify areas for improvement.",      color: "bg-amber-50  border-amber-200"   },
  { icon: "👨‍👩‍👦", title: "Parent–Teacher Meetings", desc: "Regular PTMs and progress reports to keep parents fully informed.",                       color: "bg-rose-50   border-rose-200"    },
  { icon: "💻", title: "Digital Learning",         desc: "Computer facilities for online test practice and digital learning resources.",              color: "bg-blue-50   border-blue-200"    },
  { icon: "🧹", title: "Hygienic Environment",     desc: "Sanitized classrooms, clean washrooms, and a safe, welcoming learning space.",             color: "bg-green-50  border-green-200"   },
  { icon: "💳", title: "Flexible Payments",        desc: "Interest-free EMI with Cash, Cheque, Net Banking and UPI options.",                        color: "bg-indigo-50 border-indigo-200"  },
];

export default function Facilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="facilities" className="py-16 lg:py-24 bg-[#F0EFFF]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="label-light">Why Choose Us</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F0E3D]">
            World-Class <span className="text-[#1E1B6B]">Facilities</span>
          </h2>
          <p className="mt-3 text-[#6B69A0] text-lg">
            Modern infrastructure and student-friendly amenities for the best learning experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 }}
              className={`bg-white rounded-2xl p-6 border card-lift group text-center ${f.color}`}
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center text-2xl border group-hover:scale-110 transition-transform duration-300 ${f.color}`}>
                {f.icon}
              </div>
              <h3 className="text-[#0F0E3D] font-extrabold text-sm mb-2">{f.title}</h3>
              <p className="text-[#6B69A0] text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 hero-bg dot-grid rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div>
            <h3 className="text-white font-extrabold text-xl sm:text-2xl">Experience it yourself — Free Demo Class</h3>
            <p className="text-white/55 mt-1.5 text-sm">Visit our Karve Nagar campus and see why 10,000+ students chose Desai Classes.</p>
          </div>
          <a href="#contact" className="flex-shrink-0 px-7 py-3.5 btn-gold text-sm rounded-xl whitespace-nowrap">
            Book Demo Class →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
