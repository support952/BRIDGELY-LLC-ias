"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AntiGravityText from "./AntiGravityText";
import ContactForm from "./ContactForm";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const copiedRef = useRef<HTMLParagraphElement>(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("support@immigrationadviceservice.org");
    if (!copiedRef.current) return;
    copiedRef.current.textContent = "Email copied";
    window.setTimeout(() => {
      if (copiedRef.current) copiedRef.current.textContent = "";
    }, 1800);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 lg:py-40 bg-dark-card relative overflow-hidden scroll-mt-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 50% 50%, rgba(128,128,128,0.015) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 text-center relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-accent mb-3 sm:mb-4">
            Start Your Journey
          </p>
          <div className="mb-4 sm:mb-6">
            <AntiGravityText
              as="h2"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1]"
            >
              Ready to Begin
            </AntiGravityText>
            <AntiGravityText
              as="h2"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-light text-heading/70 leading-[1.1]"
              delay={0.3}
            >
              Your American Chapter?
            </AntiGravityText>
          </div>
          <div className="flex justify-center mb-5 sm:mb-8">
            <div className="w-12 sm:w-16 h-px bg-accent/30" />
          </div>
          <p className="text-body leading-[1.8] tracking-wide text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
            Every great venture begins with a conversation. Let&apos;s discuss
            your goals and chart the right visa pathway for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
            <a
              href="mailto:support@immigrationadviceservice.org"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent text-white text-[12px] sm:text-[13px] uppercase tracking-[0.2em] px-8 sm:px-10 py-3.5 sm:py-4 font-medium hover:bg-accent-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 transition-colors duration-300"
            >
              Schedule a Call
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
            <button
              onClick={handleCopy}
              className="text-[12px] sm:text-[13px] uppercase tracking-[0.2em] text-body border-b border-dark-border pb-1 hover:text-heading hover:border-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 transition-all duration-300 cursor-pointer"
              title="Click to copy email address"
            >
              support@immigrationadviceservice.org
            </button>
          </div>
          <p ref={copiedRef} className="text-[11px] tracking-wide text-body min-h-4" aria-live="polite" />
        </motion.div>

        <ContactForm />
      </div>
    </section>
  );
}
