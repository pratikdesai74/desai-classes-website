"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/images/class-3.jpg",       alt: "Desai Classes Institute — Established 1990",              caption: "Our Institute — Est. 1990",        span: "lg:col-span-2 lg:row-span-2" },
  { src: "/images/classroom-main.jpg",alt: "Desai Classes main classroom",                             caption: "Modern Classrooms",               span: "" },
  { src: "/images/class-4.jpg",       alt: "Spacious classroom at Desai Classes",                      caption: "Spacious Learning Spaces",         span: "" },
  { src: "/images/class-5.jpg",       alt: "Air-conditioned classroom at Desai Classes",               caption: "AC-Equipped Rooms",               span: "" },
  { src: "/images/class-1.jpg",       alt: "Well-furnished classroom with student desks",              caption: "Comfortable Environment",         span: "" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="py-16 lg:py-24 dark-bg dot-grid overflow-hidden" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-xl mx-auto mb-12"
          >
            <span className="label-dark">Our Campus</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Inside <span className="text-gold-gradient">Desai Classes</span>
            </h2>
            <p className="mt-3 text-white/50 text-lg">
              Modern, air-conditioned classrooms built for focused learning and top performance.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-3">
            {images.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.09 }}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/3] ${img.span}`}
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={img.src} alt={img.alt} fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B47]/85 via-[#0D0B47]/25 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-350" />
                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-sm">{img.caption}</p>
                </div>
                {/* Gold ring on hover */}
                <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-[#E8C547]/60 transition-all duration-300" />
                {/* Zoom icon */}
                <div className="absolute top-3 right-3 w-9 h-9 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button onClick={() => setLightbox(null)} className="absolute top-5 right-5 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors" aria-label="Close">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          {lightbox > 0 && (
            <button onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors" aria-label="Previous">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
            </button>
          )}
          {lightbox < images.length - 1 && (
            <button onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors" aria-label="Next">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          )}
          <motion.div key={lightbox} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.2 }} className="relative max-w-5xl w-full max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <Image src={images[lightbox].src} alt={images[lightbox].alt} width={1200} height={800} className="rounded-2xl object-contain w-full max-h-[85vh]"/>
            <p className="text-white/70 text-center mt-3 font-semibold text-sm">{images[lightbox].caption}</p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
