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

        {/* Phone-frame cards */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.18 }}
              className="flex flex-col items-center"
            >
              {/* Phone frame */}
              <div className="relative bg-[#0B1829] rounded-[2.5rem] p-2.5 shadow-2xl border-4 border-[#1D3F74] w-64 sm:w-72"
                style={{ boxShadow: "0 0 0 2px #0B1829, 0 25px 60px rgba(11,24,41,0.5)" }}
              >
                {/* Top notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#1D3F74] rounded-full z-10" />

                {/* Video */}
                <div className="rounded-[2rem] overflow-hidden aspect-[9/16] bg-black">
                  <video
                    src={v.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    aria-label={v.label}
                  />
                </div>

                {/* Bottom home bar */}
                <div className="flex justify-center mt-2 mb-0.5">
                  <div className="w-20 h-1 bg-[#1D3F74] rounded-full" />
                </div>
              </div>

              {/* Label below phone */}
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                <span className="text-[#0B1829]/70 text-sm font-semibold">{v.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
