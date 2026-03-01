"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features = [
  { icon: "🎓", title: "Expert Faculty",         desc: "Experienced teachers with subject mastery and proven track records of producing toppers." },
  { icon: "🏆", title: "Consistent Results",     desc: "JEE AIR 155, NEET 603, CET 99.9% — our results speak for themselves." },
  { icon: "📺", title: "Smart Classrooms",       desc: "Air-conditioned rooms with interactive smartboards for visual, engaging learning." },
  { icon: "📊", title: "Regular Assessments",    desc: "Weekly tests and monthly evaluations to track every student's progress." },
  { icon: "👨‍👩‍👦", title: "Parent Involvement",  desc: "Regular PTMs and progress reports to keep families informed and engaged." },
  { icon: "💳", title: "Flexible Fee Structure", desc: "Interest-free EMI available. Cash, UPI, Net Banking, Cheque accepted." },
];

const milestones = [
  { year: "1990", event: "Founded with a vision to make quality education accessible to all" },
  { year: "2000", event: "Expanded to both Commerce & Science streams" },
  { year: "2010", event: "Upgraded to smart classrooms with AC facilities" },
  { year: "2020", event: "Crossed 10,000+ successful alumni milestone" },
  { year: "2025", event: "4.8/5 Google rating · 210+ five-star reviews" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-16 lg:py-24 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Story + Classroom Photo ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <span className="label-light">Our Story</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0F0E3D] leading-tight">
              35+ Years of
              <br />
              <span className="text-[#1E1B6B]">Academic Excellence</span>
            </h2>
            <p className="mt-5 text-[#3D3B6E] leading-relaxed text-lg">
              Established in 1990, Desai Classes has been a cornerstone of quality
              education in Karve Nagar, Pune. We have nurtured thousands of students,
              helping them achieve their dreams of excelling in 11th &amp; 12th board
              exams and competitive tests like CET, JEE, and NEET.
            </p>
            <p className="mt-4 text-[#3D3B6E] leading-relaxed text-lg">
              Our commitment to personalized attention, experienced faculty, and modern
              teaching methodologies has made us one of Pune&apos;s most trusted
              coaching institutes.
            </p>

            {/* Highlight pills */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {["35+ Years Trust", "10,000+ Alumni", "IIT Rankers", "NEET/CET Toppers", "4.8★ Google Rated"].map(chip => (
                <span
                  key={chip}
                  className="text-sm font-semibold text-[#1E1B6B] bg-[#F0EFFF] border border-[#1E1B6B]/15 px-4 py-1.5 rounded-full"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — classroom photo */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/classroom-main.jpg"
                alt="Inside Desai Classes classroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B47]/70 via-[#0D0B47]/15 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6">
                <div className="text-white font-extrabold text-lg">Modern Classrooms</div>
                <div className="text-white/60 text-sm mt-0.5">AC · Smartboards · Designed for focused learning</div>
              </div>
              <div className="absolute top-5 right-5 bg-[#E8C547] text-[#13115A] rounded-xl px-4 py-2 text-sm font-extrabold shadow-lg">
                Est. 1990
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Feature Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="mb-16 lg:mb-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F0E3D]">
              Why Students &amp; Parents <span className="text-[#1E1B6B]">Trust Us</span>
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.07 }}
                className="flex gap-4 p-5 bg-[#F0EFFF]/60 border border-[#1E1B6B]/8 rounded-2xl hover:border-[#E8C547]/50 hover:bg-white card-lift group"
              >
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                  {f.icon}
                </div>
                <div>
                  <div className="font-extrabold text-[#0F0E3D] text-sm mb-0.5">{f.title}</div>
                  <div className="text-[#6B69A0] text-sm leading-relaxed">{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Timeline ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F0E3D]">
              Our <span className="text-[#1E1B6B]">Journey</span>
            </h3>
          </div>

          <div className="relative max-w-2xl mx-auto pl-10 sm:pl-12">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#1E1B6B] via-[#E8C547] to-[#E8C547]/30" />

            <div className="space-y-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="relative flex items-start gap-5"
                >
                  {/* Dot */}
                  <div className="absolute -left-[26px] sm:-left-[28px] top-1 w-4 h-4 rounded-full bg-[#E8C547] border-4 border-white shadow-sm flex-shrink-0" />
                  {/* Year chip */}
                  <span className="flex-shrink-0 text-xs font-extrabold text-[#E8C547] bg-[#1E1B6B] px-3 py-1.5 rounded-lg">
                    {m.year}
                  </span>
                  <div className="bg-white border border-[#1E1B6B]/10 rounded-xl p-4 flex-1 hover:border-[#E8C547]/40 hover:shadow-md transition-all">
                    <p className="text-[#3D3B6E] font-medium text-sm">{m.event}</p>
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
