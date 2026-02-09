"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
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
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919822598294?text=${encoded}`, "_blank");
    setSubmitted(true);
  }

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
            Visit us for a free demo class or send an enquiry below. We&apos;d
            love to help you achieve your academic goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
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
              <a
                href="tel:+919822598294"
                className="flex items-start gap-4 p-5 bg-[#f8f9fc] rounded-xl border border-gray-100 hover:border-[#d4a843]/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#1a3a5c] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1a3a5c]">Call Us</h3>
                  <p className="text-gray-600 mt-1 text-lg font-semibold group-hover:text-[#1a3a5c] transition-colors">
                    +91 98225 98294
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919822598294?text=Hi%2C%20I%20am%20interested%20in%20joining%20Desai%20Classes.%20Please%20share%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-[#25D366]/5 rounded-xl border border-[#25D366]/20 hover:border-[#25D366]/40 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1a3a5c]">WhatsApp Us</h3>
                  <p className="text-gray-600 mt-1">
                    +91 98225 98294
                    <br />
                    <span className="text-sm text-[#25D366] font-medium">
                      Tap to chat instantly
                    </span>
                  </p>
                </div>
              </a>
            </div>

            {/* Map */}
            <div className="mt-6 rounded-2xl overflow-hidden shadow-lg h-[250px] border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8!2d73.8126759!3d18.4868648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI5JzEyLjciTiA3M8KwNDgnNDUuNiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Desai Classes Location - Karve Nagar, Pune"
              />
            </div>
          </motion.div>

          {/* Right - Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-[#f8f9fc] rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1a3a5c] mb-2">
                Send an Enquiry
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Fill in the form below and we&apos;ll get back to you via
                WhatsApp.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-[#1a3a5c]">
                    Enquiry Sent!
                  </h4>
                  <p className="text-gray-500 mt-2">
                    Your enquiry has been sent via WhatsApp. We&apos;ll respond
                    shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", phone: "", email: "", course: "", message: "" });
                    }}
                    className="mt-6 text-[#1a3a5c] font-semibold underline underline-offset-4 hover:text-[#d4a843] transition-colors"
                  >
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1a3a5c] mb-1">
                      Student / Parent Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#1a3a5c] focus:ring-2 focus:ring-[#1a3a5c]/10 outline-none transition-all text-gray-800"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#1a3a5c] mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#1a3a5c] focus:ring-2 focus:ring-[#1a3a5c]/10 outline-none transition-all text-gray-800"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1a3a5c] mb-1">
                      Email <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#1a3a5c] focus:ring-2 focus:ring-[#1a3a5c]/10 outline-none transition-all text-gray-800"
                    />
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-[#1a3a5c] mb-1">
                      Course Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="course"
                      name="course"
                      required
                      value={form.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#1a3a5c] focus:ring-2 focus:ring-[#1a3a5c]/10 outline-none transition-all text-gray-800"
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
                    <label htmlFor="message" className="block text-sm font-medium text-[#1a3a5c] mb-1">
                      Message <span className="text-gray-400">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Any specific questions or requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#1a3a5c] focus:ring-2 focus:ring-[#1a3a5c]/10 outline-none transition-all text-gray-800 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl text-lg transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send Enquiry via WhatsApp
                  </button>

                  <p className="text-center text-gray-400 text-xs mt-3">
                    Or call us directly at{" "}
                    <a href="tel:+919822598294" className="text-[#1a3a5c] font-semibold hover:underline">
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
