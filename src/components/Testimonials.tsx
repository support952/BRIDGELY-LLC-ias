"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AntiGravityText from "./AntiGravityText";

const testimonials = [
  {
    quote:
      "The IAS team transformed our E-2 visa journey from overwhelming to seamless. Their strategic approach and attention to detail gave us the confidence to make the leap to the United States.",
    name: "David Cohen",
    role: "Tech Entrepreneur",
  },
  {
    quote:
      "The business plan they crafted wasn't just for the visa — it became our actual roadmap. Within 18 months we exceeded every projection they helped us build.",
    name: "Sarah Mitchell",
    role: "Boutique Hotel Owner",
  },
  {
    quote:
      "What sets them apart is genuine care for your success beyond the visa. They stayed involved through our launch, hiring, and first year of operations in the U.S.",
    name: "Michael Torres",
    role: "Real Estate Investor",
  },
  {
    quote:
      "I expected the EB-2 NIW process to be a maze of paperwork. Instead I got a team that knew exactly which evidence mattered and walked me through every step. The petition felt like mine — just sharper than I could have written.",
    name: "Daniel Levy",
    role: "Software Engineer",
  },
  {
    quote:
      "We had been planning the move for two years and didn't know where to start. IAS turned a vague dream into a real plan — financials, lease, vendor contracts, even consulate prep. Six months later we opened our doors in Miami.",
    name: "Elena Rossi",
    role: "Restaurant Owner",
  },
  {
    quote:
      "Patient, honest, and incredibly thorough. They asked questions I hadn't thought of, and that's what made the difference at the consulate. I never felt rushed or like just another file on a desk.",
    name: "Amir Khan",
    role: "Postdoctoral Researcher",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div
      className="group relative shrink-0 flex flex-col
        w-[280px] sm:w-[360px] md:w-[420px]
        p-6 sm:p-8 md:p-10 rounded-xl
        glass-bg backdrop-blur-xl
        border border-dark-border
        hover:border-accent/15
        transition-colors duration-500"
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
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const looped = [...testimonials, ...testimonials];

  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-dark-card relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 40%, rgba(128,128,128,0.015) 0%, transparent 60%)",
        }}
      />

      <div className="relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 mb-10 sm:mb-16 md:mb-20"
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

        <div className="marquee-pause-on-hover relative">
          <div className="marquee-track flex gap-4 sm:gap-6 w-max">
            {looped.map((testimonial, i) => (
              <TestimonialCard
                key={`${testimonial.name}-${i}`}
                testimonial={testimonial}
              />
            ))}
          </div>

          <div
            className="absolute inset-y-0 left-0 w-12 sm:w-24 md:w-40 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to right, var(--color-dark-card) 0%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-y-0 right-0 w-12 sm:w-24 md:w-40 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to left, var(--color-dark-card) 0%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
