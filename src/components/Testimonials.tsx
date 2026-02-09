"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Siddharth Nimbore",
    date: "Jan 2026",
    rating: 5,
    text: "Highly specialized courses with knowledgeable teachers providing clear explanations. Study materials are well-organized and personalized attention boosts confidence. Highly recommend Desai Classes!",
    initials: "SN",
  },
  {
    name: "Deepali Bhagwate",
    date: "Dec 2025",
    rating: 5,
    text: "Exceptional for Class XI/XII. Personal instructor attention aids understanding. Reasonably priced with hygienic facilities. My daughter's performance improved significantly after joining.",
    initials: "DB",
  },
  {
    name: "Shweta Jare",
    date: "Nov 2025",
    rating: 5,
    text: "Quality competitive exam courses with expert faculty providing personal attention. Smartboards enhance learning experience. Interest-free EMI option makes it affordable. Best coaching in Karve Nagar!",
    initials: "SJ",
  },
  {
    name: "Anushka Padwal",
    date: "Oct 2025",
    rating: 5,
    text: "Teachers are knowledgeable and multiple instructors provide diverse perspectives. Regular assessments track progress effectively. Course materials are comprehensive and well-structured.",
    initials: "AP",
  },
  {
    name: "Grishma Pathak",
    date: "Jan 2026",
    rating: 5,
    text: "Friendly teachers with easy teaching methods. The positive environment leads to notable student improvement. My son went from average to topping his class within just a few months!",
    initials: "GP",
  },
  {
    name: "Rahul Kulkarni",
    date: "Sep 2025",
    rating: 5,
    text: "Been with Desai Classes since 11th and now in 12th. The faculty genuinely cares about student progress. Regular tests and doubt-solving sessions helped me score 90%+ in boards.",
    initials: "RK",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-[#d4a843]" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#f8f9fc]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#d4a843] font-semibold text-sm uppercase tracking-widest">
            Student Reviews
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3a5c]">
            What Our <span className="text-[#d4a843]">Students Say</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Real reviews from real students and parents. Rated 4.8/5 on Google
            with 210+ reviews.
          </p>

          {/* Google rating badge */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
            <div className="flex items-center gap-1">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-2xl font-bold text-[#1a3a5c]">4.8</span>
            </div>
            <Stars count={5} />
            <span className="text-gray-500 text-sm">210+ reviews</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 card-hover"
            >
              <Stars count={t.rating} />
              <p className="mt-4 text-gray-600 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#1a3a5c] flex items-center justify-center text-white font-semibold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-[#1a3a5c]">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 border-2 border-[#1a3a5c] text-[#1a3a5c] font-semibold rounded-xl hover:bg-[#1a3a5c] hover:text-white transition-all"
            >
              View More Reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
