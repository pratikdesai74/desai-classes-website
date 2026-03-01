"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features = [
  { icon: "🎓", title: "Expert Faculty", desc: "Experienced teachers with subject mastery and proven track records" },
  { icon: "🏆", title: "Top Results", desc: "Consistent toppers in JEE, NEET, MHT-CET and HSC boards" },
  { icon: "📺", title: "Smart Classrooms", desc: "Air-conditioned rooms with smartboards for visual learning" },
  { icon: "📊", title: "Regular Assessments", desc: "Weekly tests and monthly evaluations to track progress" },
  { icon: "👨‍👩‍👦", title: "Parent Connect", desc: "Regular PTMs to keep families informed and involved" },
  { icon: "💳", title: "Flexible Fees", desc: "Interest-free EMI options; Cash, UPI, Net Banking accepted" },
];

const milestones = [
  { year: "1990", event: "Founded with a vision to make quality education accessible" },
  { year: "2000", event: "Expanded to both Commerce & Science streams" },
  { year: "2010", event: "Upgraded to smart classrooms with AC facilities" },
  { year: "2020", event: "Crossed 10,000+ successful alumni milestone" },
  { year: "2025", event: "4.8/5 Google rating · 210+ five-star reviews" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top: Story + Classroom Photo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[#F97316] font-bold text-xs uppercase tracking-[0.2em] mb-3">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1829] leading-tight">
              35+ Years of
              <br />
              <span className="gradient-text-orange">Academic Excellence</span>
            </h2>
            <p className="mt-5 text-[#374151] leading-relaxed text-lg">
              Established in 1990, Desai Classes has been a cornerstone of quality
              education in Karve Nagar, Pune. We have nurtured thousands of students,
              helping them achieve their dreams of excelling in 11th &amp; 12th board
              exams and competitive tests like CET, JEE, and NEET.
            </p>
            <p className="mt-4 text-[#374151] leading-relaxed text-lg">
              Our commitment to personalized attention, experienced faculty, and modern
              teaching methodologies has made us one of Pune&apos;s most trusted
              coaching institutes. Every student receives the guidance they need to
              unlock their full potential.
            </p>

            {/* Highlight chips */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["35+ Years Trust", "10,000+ Alumni", "IIT Rankers", "NEET/CET Toppers", "4.8★ Rated"].map(chip => (
                <span key={chip} className="inline-flex items-center gap-1.5 bg-[#EEF4FF] text-[#1D3F74] font-semibold text-sm px-4 py-2 rounded-full border border-[#1D3F74]/10">
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Classroom Photo + Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/classroom-main.jpg"
                alt="Inside Desai Classes classroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1829]/70 via-[#0B1829]/20 to-transparent" />
              {/* Overlay text */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white font-bold text-xl">Our Classrooms</div>
                <div className="text-white/70 text-sm mt-1">AC · Smartboard · Comfortable seating for focused learning</div>
              </div>
              {/* Corner badge */}
              <div className="absolute top-5 right-5 bg-[#F97316] text-white rounded-xl px-4 py-2 text-sm font-bold shadow-lg">
                Est. 1990
              </div>
            </div>
          </motion.div>
        </div>

        {/* Middle: Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1829]">
              Why Students &amp; Parents <span className="gradient-text-orange">Trust Us</span>
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.08 }}
                className="flex gap-4 p-5 bg-[#EEF4FF]/60 rounded-2xl border border-[#1D3F74]/8 hover:border-[#F97316]/30 hover:bg-white card-hover group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                  {f.icon}
                </div>
                <div>
                  <div className="font-bold text-[#0B1829] text-sm">{f.title}</div>
                  <div className="text-[#6B7280] text-sm mt-0.5 leading-relaxed">{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom: Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1829]">
              Our <span className="gradient-text-orange">Journey</span>
            </h3>
          </div>
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-[22px] sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1D3F74] via-[#F97316] to-[#F59E0B]" />

            <div className="space-y-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={`flex items-start gap-5 sm:gap-0 relative ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Year bubble */}
                  <div className={`relative z-10 flex-shrink-0 sm:w-1/2 flex ${
                    i % 2 === 0 ? "sm:justify-end sm:pr-8" : "sm:justify-start sm:pl-8"
                  } items-center`}>
                    <div className="hidden sm:flex w-14 h-14 rounded-full bg-[#0B1829] items-center justify-center text-white font-black text-sm shadow-xl border-4 border-white">
                      {m.year.slice(2)}
                    </div>
                    {/* Mobile dot */}
                    <div className="sm:hidden w-11 h-11 rounded-full bg-[#0B1829] flex items-center justify-center text-white font-black text-[11px] shadow-xl border-3 border-white flex-shrink-0">
                      {m.year}
                    </div>
                  </div>

                  {/* Connector dot (desktop) */}
                  <div className="hidden sm:block absolute left-1/2 top-1/2 w-3 h-3 rounded-full bg-[#F97316] -translate-x-1/2 -translate-y-1/2 z-20 ring-4 ring-white" />

                  {/* Content card */}
                  <div className={`flex-1 sm:w-1/2 ${
                    i % 2 === 0 ? "sm:pl-8" : "sm:pr-8"
                  }`}>
                    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:border-[#F97316]/30 hover:shadow-md transition-all">
                      <div className="text-xs font-bold text-[#F97316] mb-1">{m.year}</div>
                      <p className="text-[#374151] font-medium text-sm">{m.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
