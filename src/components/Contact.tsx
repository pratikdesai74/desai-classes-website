"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = [
      `*New Enquiry from Website*`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : "",
      `*Course:* ${form.course}`,
      form.message ? `*Message:* ${form.message}` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/919822598294?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="label-light">Get In Touch</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F0E3D]">
            Start Your <span className="text-indigo-gradient">Journey</span> Today
          </h2>
          <p className="mt-4 text-[#6B69A0] text-lg">
            Visit us for a free demo class or send an enquiry. We&apos;d love to help you reach your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Left — Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            {/* Dark info card */}
            <div className="dark-bg rounded-3xl p-7 mb-5">
              <h3 className="text-white font-extrabold text-xl mb-6">Visit Us</h3>
              <div className="space-y-5">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8C547]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#E8C547]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm mb-0.5">Address</div>
                    <div className="text-white/50 text-sm leading-relaxed">
                      Kakade Plaza, 2nd Floor, NDA Road,<br />
                      Opposite Kakade City, Karve Nagar,<br />
                      Pune — 411052
                    </div>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8C547]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#E8C547]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm mb-0.5">Office Timings</div>
                    <div className="text-white/50 text-sm">Mon – Sat: 7:00 am – 9:00 pm</div>
                    <div className="text-white/50 text-sm">Sunday: By appointment</div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/8" />

                {/* Call */}
                <a href="tel:+919822598294" className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#4644CE]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4644CE]/50 transition-colors">
                    <svg className="w-5 h-5 text-[#A8A6FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm mb-0.5">Call Us</div>
                    <div className="text-[#A8A6FF] font-bold text-base group-hover:text-white transition-colors">+91 98225 98294</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919822598294?text=Hi%2C%20I%20am%20interested%20in%20joining%20Desai%20Classes.%20Please%20share%20more%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/30 transition-colors">
                    <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm mb-0.5">WhatsApp</div>
                    <div className="text-[#25D366] font-semibold text-sm group-hover:text-[#1fb958] transition-colors">Tap to chat instantly →</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[200px] border border-[#1E1B6B]/12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8!2d73.8126759!3d18.4868648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI5JzEyLjciTiA3M8KwNDgnNDUuNiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Desai Classes Location"
              />
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 border border-[#1E1B6B]/10 shadow-sm">
              <div className="mb-7">
                <h3 className="text-2xl font-extrabold text-[#0F0E3D]">Send an Enquiry</h3>
                <p className="text-[#6B69A0] text-sm mt-1">Fill the form and we&apos;ll reach out via WhatsApp instantly.</p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-14"
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-extrabold text-[#0F0E3D]">Enquiry Sent!</h4>
                  <p className="text-[#6B69A0] mt-2 text-sm">Your enquiry has been sent via WhatsApp. We&apos;ll respond shortly.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", course: "", message: "" }); }}
                    className="mt-6 text-[#1E1B6B] font-bold underline underline-offset-4 text-sm hover:text-[#E8C547] transition-colors"
                  >
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-[#0F0E3D] mb-1.5 uppercase tracking-wide">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text" id="name" name="name" required
                        value={form.name} onChange={handleChange}
                        placeholder="Student / Parent name"
                        className="w-full px-4 py-3 rounded-xl border border-[#1E1B6B]/15 bg-[#F0EFFF]/50 focus:border-[#1E1B6B] focus:ring-2 focus:ring-[#1E1B6B]/10 outline-none transition-all text-[#0F0E3D] text-sm placeholder:text-[#6B69A0]/60"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-[#0F0E3D] mb-1.5 uppercase tracking-wide">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel" id="phone" name="phone" required
                        value={form.phone} onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-[#1E1B6B]/15 bg-[#F0EFFF]/50 focus:border-[#1E1B6B] focus:ring-2 focus:ring-[#1E1B6B]/10 outline-none transition-all text-[#0F0E3D] text-sm placeholder:text-[#6B69A0]/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#0F0E3D] mb-1.5 uppercase tracking-wide">
                      Email <span className="text-[#6B69A0] font-normal normal-case">(optional)</span>
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={form.email} onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#1E1B6B]/15 bg-[#F0EFFF]/50 focus:border-[#1E1B6B] focus:ring-2 focus:ring-[#1E1B6B]/10 outline-none transition-all text-[#0F0E3D] text-sm placeholder:text-[#6B69A0]/60"
                    />
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-xs font-bold text-[#0F0E3D] mb-1.5 uppercase tracking-wide">
                      Course Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="course" name="course" required
                      value={form.course} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#1E1B6B]/15 bg-[#F0EFFF]/50 focus:border-[#1E1B6B] focus:ring-2 focus:ring-[#1E1B6B]/10 outline-none transition-all text-[#0F0E3D] text-sm"
                    >
                      <option value="">Select a course</option>
                      <option value="11th Science">11th Science</option>
                      <option value="12th Science">12th Science</option>
                      <option value="11th Commerce">11th Commerce</option>
                      <option value="12th Commerce">12th Commerce</option>
                      <option value="MHT-CET Preparation">MHT-CET Preparation</option>
                      <option value="JEE Coaching">JEE Coaching</option>
                      <option value="NEET Coaching">NEET Coaching</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#0F0E3D] mb-1.5 uppercase tracking-wide">
                      Message <span className="text-[#6B69A0] font-normal normal-case">(optional)</span>
                    </label>
                    <textarea
                      id="message" name="message" rows={3}
                      value={form.message} onChange={handleChange}
                      placeholder="Any questions or specific requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-[#1E1B6B]/15 bg-[#F0EFFF]/50 focus:border-[#1E1B6B] focus:ring-2 focus:ring-[#1E1B6B]/10 outline-none transition-all text-[#0F0E3D] text-sm placeholder:text-[#6B69A0]/60 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold rounded-2xl text-base transition-all flex items-center justify-center gap-3 shadow-xl shadow-green-500/20 hover:shadow-green-500/30 hover:-translate-y-0.5"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Send via WhatsApp
                  </button>

                  <p className="text-center text-[#6B69A0] text-xs">
                    Or call us at{" "}
                    <a href="tel:+919822598294" className="text-[#1E1B6B] font-bold hover:text-[#E8C547] transition-colors">
                      +91 98225 98294
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
