"use client";

import { memo } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import FloatingParticles from "./FloatingParticles";
import AntiGravityText from "./AntiGravityText";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Hero = memo(function Hero() {
  const headlineParallax = useMouseParallax(0.4);
  const subtitleParallax = useMouseParallax(0.7);
  const ctaParallax = useMouseParallax(1);
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-dark">
      {/* Bright daylight skyline */}
      <Image
        src="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1920&q=80&fm=webp"
        alt="Bright Manhattan skyline in daylight"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        quality={80}
      />
      {/* Light cream wash — image stays clearly visible */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(250, 250, 249, 0.55)" }}
      />
      {/* Soft white spotlight behind the text for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 50% 50%, rgba(255, 255, 255, 0.55) 0%, transparent 75%)",
        }}
      />
      {/* Warm amber accent — top-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 82% 15%, rgba(180, 83, 9, 0.10) 0%, transparent 65%)",
        }}
      />
      {/* Bottom fade into the page background */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-dark pointer-events-none" />

      <div className="hidden md:block">
        <FloatingParticles />
      </div>

      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-0 w-px h-20 md:h-32 bg-black/[0.08] origin-top"
        style={{ willChange: "transform" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 md:px-12 text-center py-20 sm:py-28 md:py-32">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ x: subtitleParallax.x, y: subtitleParallax.y, willChange: "transform, opacity" }}
          className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-accent mb-5 sm:mb-8"
        >
          Premium U.S. Immigration
        </motion.p>

        <motion.div
          style={{ x: headlineParallax.x, y: headlineParallax.y, willChange: "transform" }}
          className="mb-5 sm:mb-8"
        >
          <AntiGravityText
            as="h1"
            className="font-serif text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-heading"
            delay={0.2}
          >
            Your American
          </AntiGravityText>
          <AntiGravityText
            as="span"
            className="block font-serif text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] italic font-light text-heading/70"
            delay={0.6}
          >
            Future, Secured
          </AntiGravityText>
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex justify-center mb-5 sm:mb-8"
        >
          <div className="w-12 sm:w-16 h-px bg-accent/30" />
        </motion.div>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ x: subtitleParallax.x, y: subtitleParallax.y, willChange: "transform, opacity" }}
          className="text-base sm:text-lg md:text-xl text-body leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12 tracking-wide px-2"
        >
          We guide visionary entrepreneurs and skilled professionals through
          E-2, EB-2, and EB-2 NIW visa pathways — with precision, discretion,
          and an unwavering commitment to your success.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ x: ctaParallax.x, y: ctaParallax.y, willChange: "transform, opacity" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent text-white text-[12px] sm:text-[13px] uppercase tracking-[0.2em] px-8 sm:px-10 py-3.5 sm:py-4 font-medium hover:bg-accent-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 transition-colors duration-300 shadow-[0_10px_30px_-12px_rgba(180,83,9,0.35)]"
          >
            Book a Consultation
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="#visas"
            className="inline-flex items-center justify-center gap-3 text-[12px] sm:text-[13px] uppercase tracking-[0.2em] text-heading border border-heading/25 px-8 sm:px-10 py-3.5 sm:py-4 hover:bg-heading/[0.04] hover:border-heading/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 transition-all duration-300"
          >
            Explore Visa Options
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 bottom-0 w-px h-16 md:h-24 bg-black/[0.08] origin-bottom"
        style={{ willChange: "transform" }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: reduceMotion ? 0 : [0, 8, 0] }}
          transition={{ duration: 2, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" }}
          className="w-px h-6 sm:h-8 bg-accent/15"
          style={{ willChange: "transform" }}
        />
      </motion.div>
    </section>
  );
});

export default Hero;
