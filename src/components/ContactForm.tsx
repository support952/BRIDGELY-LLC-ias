"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Valid email is required";
    if (phone && !/^[\d\s\-+()]{7,}$/.test(phone))
      errs.phone = "Valid phone number is required";
    if (!message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setSubmitError(null);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitError(data?.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-lg mx-auto mt-10 sm:mt-14"
    >
      <form
        onSubmit={handleSubmit}
        className="rounded-xl p-6 sm:p-8 md:p-10
          glass-bg backdrop-blur-xl
          border border-dark-border
          shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)]"
      >
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-heading text-lg mb-2">
              Thank you, {name}!
            </p>
            <p className="text-body text-sm">
              We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[11px] uppercase tracking-[0.2em] text-body mb-2"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  aria-invalid={Boolean(errors.name)}
                  className={`w-full glass-input-bg border rounded-lg px-4 py-3 text-heading placeholder:text-body/60 focus:outline-none focus:border-accent/25 focus-visible:ring-2 focus-visible:ring-accent/40 transition-colors duration-300 text-[15px] ${
                    errors.name ? "border-red-500/50" : "border-dark-border"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[11px] uppercase tracking-[0.2em] text-body mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@company.com"
                  aria-invalid={Boolean(errors.email)}
                  className={`w-full glass-input-bg border rounded-lg px-4 py-3 text-heading placeholder:text-body/60 focus:outline-none focus:border-accent/25 focus-visible:ring-2 focus-visible:ring-accent/40 transition-colors duration-300 text-[15px] ${
                    errors.email ? "border-red-500/50" : "border-dark-border"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mb-4 sm:mb-5">
              <label
                htmlFor="contact-phone"
                className="block text-[11px] uppercase tracking-[0.2em] text-body mb-2"
              >
                Phone
                <span className="text-body/60 normal-case tracking-normal ml-1">
                  (optional)
                </span>
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                aria-invalid={Boolean(errors.phone)}
                className={`w-full glass-input-bg border rounded-lg px-4 py-3 text-heading placeholder:text-body/60 focus:outline-none focus:border-accent/25 focus-visible:ring-2 focus-visible:ring-accent/40 transition-colors duration-300 text-[15px] ${
                  errors.phone ? "border-red-500/50" : "border-dark-border"
                }`}
              />
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="mb-6 sm:mb-8">
              <label
                htmlFor="contact-message"
                className="block text-[11px] uppercase tracking-[0.2em] text-body mb-2"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your goals..."
                aria-invalid={Boolean(errors.message)}
                className={`w-full glass-input-bg border rounded-lg px-4 py-3 text-heading placeholder:text-body/60 focus:outline-none focus:border-accent/25 focus-visible:ring-2 focus-visible:ring-accent/40 transition-colors duration-300 text-[15px] resize-none ${
                  errors.message ? "border-red-500/50" : "border-dark-border"
                }`}
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {submitError && (
              <p className="text-red-500 text-[13px] mb-3 text-center" role="alert">
                {submitError}
              </p>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="relative w-full bg-accent text-white text-[13px] uppercase tracking-[0.2em] font-medium py-3.5 sm:py-4 rounded-lg hover:bg-accent-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 transition-colors duration-300 disabled:opacity-70"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="inline-block w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full"
                  />
                  Sending...
                </span>
              ) : (
                "Send Message \u2192"
              )}
            </motion.button>
          </>
        )}
      </form>
    </motion.div>
  );
}
