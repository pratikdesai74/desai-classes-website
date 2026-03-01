"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#070E1B] text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-2 ring-[#F59E0B]/40">
                <Image src="/images/logo.jpg" alt="Desai Classes Logo" fill className="object-cover" sizes="48px" />
              </div>
              <div>
                <span className="block text-xl font-extrabold text-white">Desai Classes</span>
                <span className="block text-[11px] tracking-[0.2em] uppercase text-[#F59E0B] font-semibold">Since 1990 · Karve Nagar, Pune</span>
              </div>
            </div>
            <p className="text-white/45 max-w-sm leading-relaxed text-sm">
              Pune&apos;s most trusted coaching institute for 11th &amp; 12th Science &amp; Commerce.
              Building toppers and shaping futures with 35+ years of academic excellence.
            </p>

            {/* Badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 bg-white/8 rounded-full px-3 py-1.5 text-xs font-semibold">
                <svg className="w-3.5 h-3.5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                4.8/5 Google Rating
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/8 rounded-full px-3 py-1.5 text-xs font-semibold">
                🎓 210+ Reviews
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/8 rounded-full px-3 py-1.5 text-xs font-semibold">
                🏆 JEE AIR 155
              </span>
            </div>

            {/* Contact info */}
            <div className="mt-6 space-y-2">
              <a href="tel:+919822598294" className="flex items-center gap-2 text-white/60 hover:text-[#F97316] transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +91 98225 98294
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-extrabold text-[#F59E0B] mb-4 text-xs uppercase tracking-[0.15em]">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "About Us", href: "#about" },
                { name: "Courses", href: "#courses" },
                { name: "Batch Timings", href: "#batches" },
                { name: "Hall of Champions", href: "#results" },
                { name: "Gallery", href: "#gallery" },
                { name: "Reviews", href: "#testimonials" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/45 hover:text-white transition-colors text-sm flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-[#F97316]/50 group-hover:bg-[#F97316] transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-extrabold text-[#F59E0B] mb-4 text-xs uppercase tracking-[0.15em]">
              Our Courses
            </h3>
            <ul className="space-y-2.5">
              {["11th Science", "12th Science", "11th Commerce", "12th Commerce", "MHT-CET Prep", "JEE Coaching", "NEET Coaching"].map((course) => (
                <li key={course}>
                  <a href="#courses" className="text-white/45 hover:text-white transition-colors text-sm flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-[#F97316]/50 group-hover:bg-[#F97316] transition-colors" />
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Desai Classes, Pune. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Kakade Plaza, 2nd Floor, NDA Road, Karve Nagar, Pune — 411052
          </p>
        </div>
      </div>
    </footer>
  );
}
