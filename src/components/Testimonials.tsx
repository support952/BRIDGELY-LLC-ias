"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AntiGravityText from "./AntiGravityText";

const testimonials = [
  {
    quote:
      "The IAS team transformed our E-2 visa journey from overwhelming to seamless. Their strategic approach and attention to detail gave us the confidence to make the leap to the United States.",
    name: "David Cohen",
    role: "CEO, TechBridge Solutions",
  },
  {
    quote:
      "The business plan they crafted wasn't just for the visa — it became our actual roadmap. Within 18 months we exceeded every projection they helped us build.",
    name: "Sarah Mitchell",
    role: "Founder, Bloom Hospitality",
  },
  {
    quote:
      "What sets them apart is genuine care for your success beyond the visa. They stayed involved through our launch, hiring, and first year of operations in the U.S.",
    name: "Michael Torres",
    role: "Managing Director, Atlas Ventures",
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 300, damping: 25 },
      }}
      className="group relative flex flex-col p-6 sm:p-8 md:p-10 rounded-xl
        glass-bg backdrop-blur-xl
        border border-dark-border
        hover:border-accent/10
        transition-all duration-500"
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-accent-subtle) 0%, transparent 70%)",
          boxShadow:
            "0 0 40px var(--color-accent-subtle), 0 25px 60px -15px rgba(0, 0, 0, 0.15)",
        }}
      />

      <div className="relative flex-1">
        <svg
          className="w-8 h-8 text-accent/40 mb-4 sm:mb-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
        </svg>

        <p className="text-body leading-[1.8] tracking-wide text-sm sm:text-[15px] mb-6 sm:mb-8 group-hover:text-heading/70 transition-colors duration-500">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="relative">
        <div className="w-8 h-px bg-accent/30 mb-4" />
        <p className="text-heading text-sm sm:text-[15px] font-medium tracking-wide">
          {testimonial.name}
        </p>
        <p className="text-body text-xs sm:text-sm tracking-wide mt-1">
          {testimonial.role}
        </p>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-dark-card relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 40%, rgba(128,128,128,0.015) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-16 md:mb-20"
        >
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-accent mb-3 sm:mb-4">
            Client Stories
          </p>
          <AntiGravityText
            as="h2"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1]"
          >
            What Our Clients
          </AntiGravityText>
          <AntiGravityText
            as="h2"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-light text-heading/70 leading-[1.1]"
            delay={0.3}
          >
            Say About Us
          </AntiGravityText>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
