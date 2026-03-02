"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="dark-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <div className="relative h-14 w-[240px] overflow-hidden rounded-xl bg-white shadow-md">
                <Image src="/images/logo.png" alt="Desai Classes" fill className="object-cover object-left" sizes="240px" />
              </div>
            </div>
            <p className="text-white/75 max-w-sm leading-relaxed text-sm">
              Pune&apos;s most trusted coaching institute for 11th &amp; 12th Science &amp; Commerce.
              35+ years of academic excellence — building toppers, shaping futures.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["⭐ 4.8/5 Rating", "🎓 210+ Reviews", "🏆 JEE AIR 155"].map(b => (
                <span key={b} className="text-xs font-semibold text-white/85 bg-white/12 border border-white/20 rounded-full px-3 py-1.5">{b}</span>
              ))}
            </div>
            <a href="tel:+919822598294" className="mt-5 flex items-center gap-2 text-white/80 hover:text-[#E8C547] transition-colors text-sm w-fit">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +91 98225 98294
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[#E8C547] font-extrabold text-xs uppercase tracking-[0.18em] mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { name: "About Us",           href: "#about" },
                { name: "Courses",            href: "#courses" },
                { name: "Batch Timings",      href: "#batches" },
                { name: "Hall of Champions",  href: "#results" },
                { name: "Gallery",            href: "#gallery" },
                { name: "Reviews",            href: "#testimonials" },
                { name: "Contact",            href: "#contact" },
              ].map(l => (
                <li key={l.name}>
                  <a href={l.href} className="text-white/75 hover:text-[#E8C547] transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#E8C547]/40 group-hover:bg-[#E8C547] transition-colors" />
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-[#E8C547] font-extrabold text-xs uppercase tracking-[0.18em] mb-5">Courses</h3>
            <ul className="space-y-2.5">
              {["11th Science", "12th Science", "11th Commerce", "12th Commerce", "MHT-CET Prep", "JEE Coaching", "NEET Coaching"].map(c => (
                <li key={c}>
                  <a href="#courses" className="text-white/75 hover:text-[#E8C547] transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#E8C547]/40 group-hover:bg-[#E8C547] transition-colors" />
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/65 text-xs">&copy; {new Date().getFullYear()} Desai Classes, Pune. All rights reserved.</p>
          <p className="text-white/65 text-xs">2nd Floor, Kakade Plaza, Warje Malwadi Rd, Warje Jakat Naka, Karvenagar, Pune — 411052</p>
        </div>
      </div>
    </footer>
  );
}
