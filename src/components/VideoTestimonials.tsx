"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const videos = [
  { src: "/videos/testimonial-1.mp4", label: "Student Testimonial" },
  { src: "/videos/testimonial-2.mp4", label: "Student Testimonial" },
];

export default function VideoTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-[#EEF4FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <span className="inline-block bg-[#1D3F74]/10 text-[#1D3F74] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Video Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1829] leading-tight">
            Hear It From Our <span className="text-[#F97316]">Students</span>
          </h2>
          <p className="mt-3 text-[#0B1829]/60 text-base max-w-xl mx-auto">
            Real students sharing their journey and success at Desai Classes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-[#1D3F74]/10 bg-[#0B1829]"
            >
              <video
                controls
                preload="none"
                className="w-full aspect-video object-cover"
                aria-label={v.label}
              >
                <source src={v.src} type="video/mp4" />
              </video>
              <div className="px-4 py-3 bg-[#0B1829] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                <span className="text-white/80 text-sm font-semibold">{v.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
