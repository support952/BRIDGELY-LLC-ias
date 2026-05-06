"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import AntiGravityText from "./AntiGravityText";

const phases = [
  {
    number: "01",
    title: "Assessment & Strategy",
    description:
      "We evaluate your eligibility across E-2, EB-2, and NIW pathways, identify the strongest visa category for your profile, and build a tailored roadmap to maximize your chances of approval.",
  },
  {
    number: "02",
    title: "Documentation & Filing",
    description:
      "Our team prepares every element of your application — business plans, financial projections, evidence packages, and supporting documents — all built to meet USCIS and consular standards.",
  },
  {
    number: "03",
    title: "Approval & Settlement",
    description:
      "From interview preparation to post-approval guidance, we stay with you through every stage — ensuring a smooth transition to your new life and business in the United States.",
  },
];

function PhaseCard({ phase, index }: { phase: (typeof phases)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const cardParallax = useMouseParallax(0.6 + index * 0.25);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ x: cardParallax.x, y: cardParallax.y }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 200, damping: 20 } }}
      className="relative p-6 sm:p-8 md:p-10 group rounded-lg
        glass-bg backdrop-blur-md
        border border-dark-border
        hover:border-accent/10
        transition-all duration-500"
    >
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, var(--color-accent-subtle) 0%, transparent 70%)",
          boxShadow: "inset 0 1px 0 var(--color-accent-subtle), 0 30px 70px -20px rgba(0, 0, 0, 0.2)",
        }}
      />
      <div className="relative">
        <span className="text-accent text-[10px] sm:text-[11px] tracking-[0.3em] font-medium">
          {phase.number}
        </span>
        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-6 mb-3 sm:mb-4 leading-tight text-heading">
          {phase.title}
        </h3>
        <p className="text-body leading-[1.8] tracking-wide text-sm sm:text-[15px] group-hover:text-heading/70 transition-colors duration-500">
          {phase.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const headlineParallax = useMouseParallax(0.4);
  const decorCircle2 = useMouseParallax(2.2);
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-dark-elevated relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 60% 45%, rgba(128,128,128,0.015) 0%, transparent 65%)",
        }}
      />

      <div className="hidden md:block">
        <motion.div
          className="absolute bottom-32 right-[8%] w-2 h-2 rounded-full bg-accent/12 pointer-events-none"
          style={{ x: reduceMotion ? 0 : decorCircle2.x, y: reduceMotion ? 0 : decorCircle2.y }}
          animate={{ y: reduceMotion ? 0 : [0, -10, 0] }}
          transition={{ duration: 8, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-16 md:mb-20"
        >
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-accent mb-3 sm:mb-4">
            How We Work
          </p>
          <motion.div style={{ x: headlineParallax.x, y: headlineParallax.y }}>
            <AntiGravityText
              as="h2"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-heading"
            >
              Three Phases to
            </AntiGravityText>
            <AntiGravityText
              as="h2"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-light leading-[1.1] text-heading/70"
              delay={0.3}
            >
              Your New Beginning
            </AntiGravityText>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {phases.map((phase, i) => (
            <PhaseCard key={phase.number} phase={phase} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
