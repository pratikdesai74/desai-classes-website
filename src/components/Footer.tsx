"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0f2440] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#d4a843] flex items-center justify-center text-[#1a3a5c] font-bold text-lg">
                DC
              </div>
              <div>
                <span className="text-xl font-bold">Desai Classes</span>
                <span className="block text-[10px] tracking-widest uppercase text-[#d4a843]">
                  Since 1990
                </span>
              </div>
            </div>
            <p className="text-white/50 max-w-md leading-relaxed">
              Pune&apos;s most trusted coaching institute for 11th &amp; 12th Science
              &amp; Commerce since 1990. Building careers, shaping futures with 35+
              years of academic excellence.
            </p>
            <div className="mt-6 flex gap-3">
              <span className="inline-flex items-center gap-1 bg-white/10 rounded-full px-3 py-1 text-xs">
                <svg className="w-4 h-4 text-[#d4a843]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4.8/5 Rating
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 rounded-full px-3 py-1 text-xs">
                210+ Reviews
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-[#d4a843] mb-4 text-sm uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["About Us", "Courses", "Facilities", "Results", "Testimonials", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "")}`}
                      className="text-white/50 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-bold text-[#d4a843] mb-4 text-sm uppercase tracking-widest">
              Courses
            </h3>
            <ul className="space-y-3">
              {[
                "11th Science",
                "12th Science",
                "11th Commerce",
                "12th Commerce",
                "MHT-CET Prep",
                "JEE / NEET",
              ].map((course) => (
                <li key={course}>
                  <a href="#courses" className="text-white/50 hover:text-white transition-colors text-sm">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Desai Classes, Pune. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Kakade Plaza, 2nd Floor, NDA Road, Karve Nagar, Pune - 411052
          </p>
        </div>
      </div>
    </footer>
  );
}
