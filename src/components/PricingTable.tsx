"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AntiGravityText from "./AntiGravityText";

const plans = [
  {
    name: "Essential",
    price: 2500,
    description: "For entrepreneurs starting their E-2 journey",
    features: [
      "Visa Eligibility Assessment (E-2 / EB-2)",
      "Basic Business Plan Framework",
      "Investment Structure Guidance",
      "Document Checklist & Review",
      "Email Support (30 Days)",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: 4500,
    description: "Our most popular comprehensive package",
    features: [
      "Full Visa Application Strategy",
      "Custom Business Plan Development",
      "Financial Projections & Analysis",
      "Document Preparation & Review",
      "Consulate / USCIS Interview Coaching",
      "Post-Approval Settlement Guidance",
      "Priority Support (60 Days)",
    ],
    cta: "Choose Professional",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: 8500,
    description: "End-to-end concierge service for complex cases",
    features: [
      "Everything in Professional",
      "Multi-Entity Business Structuring",
      "EB-2 NIW Petition Support",
      "Dedicated Case Manager",
      "Legal Coordination Support",
      "Ongoing Compliance Monitoring",
      "Unlimited Support (12 Months)",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof plans)[0];
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
      className={`group relative flex flex-col rounded-xl p-6 sm:p-8 md:p-10
        glass-bg backdrop-blur-xl
        border transition-all duration-500
        ${
          plan.highlighted
            ? "border-accent/30 shadow-[0_0_40px_var(--color-accent-subtle)]"
            : "border-dark-border hover:border-accent/10"
        }`}
    >
      {plan.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-accent text-white text-[10px] uppercase tracking-[0.2em] font-medium px-4 py-1.5 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-accent-subtle) 0%, transparent 70%)",
        }}
      />

      <div className="relative flex-1">
        <h3 className="font-serif text-xl sm:text-2xl text-heading mb-2">
          {plan.name}
        </h3>
        <p className="text-body text-sm tracking-wide mb-6">
          {plan.description}
        </p>

        <div className="mb-8">
          <span className="font-serif text-4xl sm:text-5xl text-heading">
            ${plan.price.toLocaleString()}
          </span>
          <span className="text-body text-sm ml-2">one-time</span>
        </div>

        <div className="w-full h-px bg-dark-border mb-6" />

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <svg
                className="w-4 h-4 text-accent mt-0.5 shrink-0"
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
              <span className="text-body text-sm sm:text-[15px] tracking-wide">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={`/checkout?service=${plan.name.toLowerCase()}&price=${plan.price}`}
        className={`relative block w-full text-center text-[12px] sm:text-[13px] uppercase tracking-[0.2em] font-medium py-3.5 sm:py-4 rounded-lg transition-colors duration-300
          ${
            plan.highlighted
              ? "bg-accent text-white hover:bg-accent-muted"
              : "glass-btn-secondary text-heading border border-dark-border"
          }`}
      >
        {plan.cta}
      </a>
    </motion.div>
  );
}

export default function PricingTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="pricing"
      className="py-16 sm:py-24 md:py-32 lg:py-40 bg-dark relative overflow-hidden"
    >
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
          className="mb-10 sm:mb-16 md:mb-20 text-center"
        >
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-accent mb-3 sm:mb-4">
            Investment Options
          </p>
          <AntiGravityText
            as="h2"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1]"
          >
            Choose Your
          </AntiGravityText>
          <AntiGravityText
            as="h2"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-light text-heading/70 leading-[1.1]"
            delay={0.3}
          >
            Path Forward
          </AntiGravityText>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-start">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
