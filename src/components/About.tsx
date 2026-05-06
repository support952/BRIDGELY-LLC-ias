"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import AntiGravityText from "./AntiGravityText";

const highlights = [
  "E-2 Investor Visas",
  "EB-2 Advanced Degree Professionals",
  "EB-2 NIW (National Interest Waiver)",
  "Business Plan & Financial Strategy",
  "Full Application Management",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const headlineParallax = useMouseParallax(0.5);
  const listParallax = useMouseParallax(0.8);

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 lg:py-40 bg-dark relative overflow-hidden scroll-mt-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 30% 50%, rgba(128,128,128,0.02) 0%, transparent 70%)",
        }}
      />

      <div className="hidden md:block">
        <FloatingAccent
          className="top-16 right-[10%] w-20 h-20 rounded-full border border-dark-border"
          intensity={1.5} drift={12} duration={10} delay={0}
        />
        <FloatingAccent
          className="bottom-24 left-[5%] w-1.5 h-1.5 rounded-full bg-accent/20"
          intensity={2} drift={8} duration={7} delay={1}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-24 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-accent mb-3 sm:mb-4">
              Who We Are
            </p>
            <motion.div style={{ x: headlineParallax.x, y: headlineParallax.y }} className="mb-5 sm:mb-8">
              <AntiGravityText
                as="h2"
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1]"
              >
                Immigration Expertise
              </AntiGravityText>
              <AntiGravityText
                as="h2"
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-light text-heading/70 leading-[1.1]"
                delay={0.4}
              >
                You Can Trust
              </AntiGravityText>
            </motion.div>
            <motion.p
              style={{ x: listParallax.x, y: listParallax.y }}
              className="text-body leading-[1.8] tracking-wide text-sm sm:text-[15px] max-w-lg"
            >
              Immigration Advice Service, a division of Bridgely LLC, partners
              with ambitious entrepreneurs and skilled professionals seeking
              premium pathways to live and work in the United States.
            </motion.p>
            <div className="mt-6 sm:mt-8 p-5 sm:p-6 rounded-lg border border-dark-border glass-bg">
              <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-3">Company Details</p>
              <div className="space-y-1.5 text-body text-[13px] sm:text-[14px] tracking-wide">
                <p><span className="text-heading font-medium">Bridgely LLC</span> — Florida Limited Liability Company</p>
                <p>Document No. L25000250876 &middot; EIN 39-2587593</p>
                <p>Established May 28, 2015 &middot; Status: <span className="text-green-700 font-medium">Active</span></p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ x: listParallax.x, y: listParallax.y }}
            className="lg:pt-16"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center gap-3 sm:gap-4 py-4 sm:py-5 border-b border-dark-border"
              >
                <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                <span className="text-body text-[15px] sm:text-[16px] tracking-wide">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingAccent({
  className, intensity, drift, duration, delay,
}: {
  className: string; intensity: number; drift: number; duration: number; delay: number;
}) {
  const { x, y } = useMouseParallax(intensity);
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ x: reduceMotion ? 0 : x, y: reduceMotion ? 0 : y }}
      animate={{
        y: reduceMotion ? 0 : [0, -drift, 0, drift * 0.5, 0],
        x: reduceMotion ? 0 : [0, drift * 0.3, 0, -drift * 0.2, 0],
      }}
      transition={{
        y: { duration, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut", delay },
        x: { duration: duration * 1.2, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut", delay },
      }}
    />
  );
}
