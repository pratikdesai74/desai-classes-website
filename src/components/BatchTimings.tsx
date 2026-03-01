"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

type Tab = "science" | "commerce";

const scienceBatches = {
  "11th PCM": [
    { label: "Afternoon Batch", time: "2:00 – 4:30 pm", days: "Mon – Sat" },
    { label: "Evening Batch", time: "7:00 – 9:15 pm", days: "Mon – Sat" },
    { label: "Biology", time: "6:00 – 7:00 pm", days: "Mon, Wed, Fri" },
  ],
  "12th PCM": [
    { label: "Morning Batch", time: "7:00 – 9:15 am", days: "Mon – Sat" },
    { label: "Afternoon Batch", time: "4:30 – 7:00 pm", days: "Mon – Sat" },
    { label: "Biology", time: "7:00 – 8:00 pm", days: "Mon, Wed, Fri" },
    { label: "CET Lectures", time: "7:00 – 8:00 pm", days: "Thu, Fri, Sat" },
  ],
};

const commerceBatches = {
  "11th Commerce (AC, ECO, OC, SP)": [
    { label: "Morning Batch", time: "7:00 – 9:00 am", days: "Mon – Sat" },
    { label: "Afternoon Batch", time: "4:00 – 6:00 pm", days: "Mon – Sat" },
  ],
  "12th Commerce (AC, ECO, OC, SP)": [
    { label: "Morning Batch", time: "7:00 – 9:00 am", days: "Mon – Sat" },
    { label: "Afternoon Batch", time: "5:00 – 7:00 pm", days: "Mon – Sat" },
  ],
  "Mathematics (11th & 12th)": [
    { label: "Morning Slot", time: "9:00 – 10:00 am", days: "Mon – Sat" },
    { label: "Evening Slot", time: "7:00 – 8:00 pm", days: "Mon – Sat" },
  ],
};

const common = [
  { icon: "📝", label: "Weekly Tests", value: "Every Sunday Morning" },
  { icon: "🏢", label: "Office Hours", value: "Mon – Sat: 7:00 am – 9:00 pm" },
  { icon: "📅", label: "Sunday", value: "Available by appointment" },
];

export default function BatchTimings() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [tab, setTab] = useState<Tab>("science");

  const batches = tab === "science" ? scienceBatches : commerceBatches;

  return (
    <section id="batches" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block text-[#F97316] font-bold text-xs uppercase tracking-[0.2em] mb-3">
            Batch Schedule
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1829]">
            Class <span className="gradient-text-orange">Timings</span>
          </h2>
          <p className="mt-4 text-[#6B7280] text-lg">
            Multiple batches to fit every student&apos;s schedule — morning, afternoon &amp; evening.
          </p>
        </motion.div>

        {/* Tab Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-[#EEF4FF] rounded-2xl p-1.5 gap-1">
            {(["science", "commerce"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  tab === t
                    ? "bg-[#0B1829] text-white shadow-lg"
                    : "text-[#6B7280] hover:text-[#0B1829]"
                }`}
              >
                {t === "science" ? "🔬 Science" : "📈 Commerce"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Batch Cards */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-6 mb-10"
        >
          {Object.entries(batches).map(([grade, slots], i) => (
            <motion.div
              key={grade}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="bg-[#EEF4FF] rounded-3xl overflow-hidden border border-[#1D3F74]/8"
            >
              {/* Card header */}
              <div className="bg-[#0B1829] px-6 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F97316] flex items-center justify-center text-sm">
                  {tab === "science" ? "🔬" : "📈"}
                </div>
                <h3 className="text-white font-extrabold text-base">{grade}</h3>
              </div>

              {/* Slots */}
              <div className="divide-y divide-[#1D3F74]/8">
                {slots.map((slot) => (
                  <div
                    key={slot.label}
                    className="flex items-center justify-between px-6 py-4 hover:bg-white/60 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                      <div>
                        <div className="font-bold text-[#0B1829] text-sm">{slot.label}</div>
                        <div className="text-[#6B7280] text-xs mt-0.5">{slot.days}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-[#1D3F74] text-sm whitespace-nowrap">{slot.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Common Info Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-[#0B1829] via-[#162B50] to-[#1D3F74] rounded-3xl p-6 sm:p-8"
        >
          <div className="grid sm:grid-cols-3 gap-5">
            {common.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-start gap-4 ${i < common.length - 1 ? "sm:border-r sm:border-white/10 sm:pr-5" : ""}`}
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-white/60 text-xs font-semibold uppercase tracking-wide mb-0.5">{item.label}</div>
                  <div className="text-white font-bold text-sm">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              Seats are limited per batch. Early registration recommended.
            </p>
            <a
              href="#contact"
              className="flex-shrink-0 px-6 py-3 bg-[#F97316] hover:bg-[#EA6810] text-white font-bold rounded-xl text-sm shadow-lg transition-all hover:-translate-y-0.5 whitespace-nowrap"
            >
              Reserve Your Seat →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
