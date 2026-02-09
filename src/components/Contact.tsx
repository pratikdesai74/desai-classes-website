"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#d4a843] font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3a5c]">
            Start Your <span className="text-[#d4a843]">Journey</span> Today
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Visit us for a free demo class. We&apos;d love to help you achieve
            your academic goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 p-5 bg-[#f8f9fc] rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-[#1a3a5c] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1a3a5c]">Visit Us</h3>
                  <p className="text-gray-600 mt-1">
                    Kakade Plaza, 2nd Floor, NDA Road,
                    <br />
                    Opposite Kakade City, Karve Nagar,
                    <br />
                    Pune - 411052
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4 p-5 bg-[#f8f9fc] rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-[#1a3a5c] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1a3a5c]">Timings</h3>
                  <p className="text-gray-600 mt-1">
                    Mon - Sat: 7:00 AM - 10:00 PM
                    <br />
                    Sunday: 7:00 AM - 9:00 PM
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-5 bg-[#f8f9fc] rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-[#1a3a5c] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1a3a5c]">Call Us</h3>
                  <p className="text-gray-600 mt-1">
                    Contact us for admissions and inquiries
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="mt-8 bg-gradient-to-r from-[#1a3a5c] to-[#0f2440] rounded-2xl p-6 text-center">
              <h3 className="text-white text-xl font-bold">Free Demo Class Available!</h3>
              <p className="text-white/70 mt-2">
                Experience our teaching methodology before you enroll.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 bg-[#d4a843] text-[#1a3a5c] font-bold px-6 py-3 rounded-xl">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Book Your Demo Today
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[500px] border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8!2d73.8126759!3d18.4868648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI5JzEyLjciTiA3M8KwNDgnNDUuNiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Desai Classes Location - Karve Nagar, Pune"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
