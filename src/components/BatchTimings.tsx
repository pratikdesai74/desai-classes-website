"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

type Tab = "science" | "commerce";

const scienceBatches: Record<string, { label: string; time: string; days: string }[]> = {
  "11th Science (PCM)": [
    { label: "Afternoon Batch", time: "2:00 – 4:30 pm",  days: "Mon – Sat" },
    { label: "Evening Batch",   time: "7:00 – 9:15 pm",  days: "Mon – Sat" },
    { label: "Biology",         time: "6:00 – 7:00 pm",  days: "Mon, Wed, Fri" },
  ],
  "12th Science (PCM)": [
    { label: "Morning Batch",   time: "7:00 – 9:15 am",  days: "Mon – Sat" },
    { label: "Afternoon Batch", time: "4:30 – 7:00 pm",  days: "Mon – Sat" },
    { label: "Biology",         time: "7:00 – 8:00 pm",  days: "Mon, Wed, Fri" },
    { label: "CET Lectures",    time: "7:00 – 8:00 pm",  days: "Thu, Fri, Sat" },
  ],
};

const commerceBatches: Record<string, { label: string; time: string; days: string }[]> = {
  "11th Commerce (AC, ECO, OC, SP)": [
    { label: "Morning Batch",   time: "7:00 – 9:00 am", days: "Mon – Sat" },
    { label: "Afternoon Batch", time: "4:00 – 6:00 pm", days: "Mon – Sat" },
  ],
  "12th Commerce (AC, ECO, OC, SP)": [
    { label: "Morning Batch",   time: "7:00 – 9:00 am", days: "Mon – Sat" },
    { label: "Afternoon Batch", time: "5:00 – 7:00 pm", days: "Mon – Sat" },
  ],
  "Mathematics (11th & 12th)": [
    { label: "Morning Slot",    time: "9:00 – 10:00 am", days: "Mon – Sat" },
    { label: "Evening Slot",    time: "7:00 – 8:00 pm",  days: "Mon – Sat" },
  ],
};

const common = [
  { icon: "📝", label: "Weekly Tests",  value: "Every Sunday Morning" },
  { icon: "🏢", label: "Office Hours",  value: "Mon – Sat: 7:00 am – 9:00 pm" },
  { icon: "📅", label: "Sunday",        value: "Available by appointment" },
];

export default function BatchTimings() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [tab, setTab] = useState<Tab>("science");

  const batches = tab === "science" ? scienceBatches : commerceBatches;

  return (
    <section id="batches" className="py-16 lg:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="label-light">Batch Schedule</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F0E3D]">
            Class <span className="text-[#1E1B6B]">Timings</span>
          </h2>
          <p className="mt-3 text-[#6B69A0] text-lg">
            Multiple batches to fit every student&apos;s schedule — morning, afternoon &amp; evening.
          </p>
        </motion.div>

        {/* Tab switch */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-[#F0EFFF] rounded-2xl p-1.5 gap-1">
            {(["science", "commerce"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2.5 rounded-xl font-extrabold text-sm transition-all ${
                  tab === t
                    ? "bg-[#1E1B6B] text-white shadow-lg"
                    : "text-[#6B69A0] hover:text-[#1E1B6B]"
                }`}
              >
                {t === "science" ? "🔬  Science" : "📈  Commerce"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Batch cards */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28 }}
          className="grid md:grid-cols-2 gap-5 mb-8"
        >
          {Object.entries(batches).map(([grade, slots], i) => (
            <motion.div
              key={grade}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 + i * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#1E1B6B]/12 shadow-sm"
            >
              {/* Header */}
              <div className="bg-[#1E1B6B] px-5 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E8C547] flex items-center justify-center font-extrabold text-[#13115A] text-xs">
                  {tab === "science" ? "Sci" : "Com"}
                </div>
                <h3 className="text-white font-extrabold text-sm">{grade}</h3>
              </div>

              {/* Slots */}
              <div className="divide-y divide-[#1E1B6B]/6">
                {slots.map((slot) => (
                  <div
                    key={slot.label}
                    className="flex items-center justify-between px-5 py-3.5 hover:bg-[#F0EFFF]/50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E8C547]" />
                      <div>
                        <div className="font-bold text-[#0F0E3D] text-sm">{slot.label}</div>
                        <div className="text-[#6B69A0] text-xs mt-0.5">{slot.days}</div>
                      </div>
                    </div>
                    <div className="text-[#1E1B6B] font-extrabold text-sm whitespace-nowrap">{slot.time}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Common info */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.38 }}
          className="hero-bg dot-grid rounded-3xl p-6 sm:p-8"
        >
          <div className="grid sm:grid-cols-3 gap-5 mb-6">
            {common.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-start gap-4 ${i < 2 ? "sm:border-r sm:border-white/10 sm:pr-5" : ""}`}
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="text-white/55 text-xs font-bold uppercase tracking-wider mb-0.5">{item.label}</div>
                  <div className="text-white font-bold text-sm">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-white/8">
            <p className="text-white/50 text-sm">Seats are limited per batch — early registration recommended.</p>
            <a href="#contact" className="flex-shrink-0 px-6 py-3 btn-gold text-sm rounded-xl whitespace-nowrap">
              Reserve Your Seat →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
