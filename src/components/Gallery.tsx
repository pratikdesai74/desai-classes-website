"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const images = [
  {
    src: "/images/class-3.jpg",
    alt: "Desai Classes signboard - XI XII Science coaching since 1990",
    caption: "Our Institute - Established 1990",
    span: "lg:col-span-2",
  },
  {
    src: "/images/class-4.jpg",
    alt: "Spacious classroom at Desai Classes Pune with blackboard and seating",
    caption: "Spacious Classrooms",
    span: "",
  },
  {
    src: "/images/class-5.jpg",
    alt: "AC classroom at Desai Classes with modern facilities",
    caption: "Air-Conditioned Classrooms",
    span: "",
  },
  {
    src: "/images/class-1.jpg",
    alt: "Well-furnished classroom with desks at Desai Classes Karve Nagar",
    caption: "Comfortable Study Environment",
    span: "lg:col-span-2",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="py-20 lg:py-28 bg-[#f8f9fc]" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-[#d4a843] font-semibold text-sm uppercase tracking-widest">
              Our Campus
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3a5c]">
              Inside <span className="text-[#d4a843]">Desai Classes</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Take a look at our well-equipped classrooms and learning
              environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${img.span}`}
                onClick={() => setLightbox(i)}
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5c]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-5">
                    <p className="text-white font-semibold text-lg">
                      {img.caption}
                    </p>
                  </div>
                </div>
                {/* Zoom icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
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
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev / Next */}
          {lightbox > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(lightbox - 1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {lightbox < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(lightbox + 1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <motion.div
            key={lightbox}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl w-full max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              width={1200}
              height={750}
              className="rounded-xl object-contain w-full max-h-[80vh]"
            />
            <p className="text-white text-center mt-4 font-medium text-lg">
              {images[lightbox].caption}
            </p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
