"use client";

import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AntiGravityText from "./AntiGravityText";

const stats = [
  { value: 500, suffix: "+", label: "Clients Served", description: "Across all visa categories" },
  { value: 98, suffix: "%", label: "Success Rate", description: "Approval outcomes" },
  { value: 15, suffix: "+", label: "Years of Experience", description: "U.S. immigration expertise" },
  { value: 2, prefix: "$", suffix: "B+", label: "Total Investments", description: "Client investment volume" },
];

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  isInView,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  isInView: boolean;
}) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 50, damping: 30, mass: 1 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.round(latest).toLocaleString());
    });
    return unsubscribe;
  }, [spring]);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative text-center p-6 sm:p-8"
    >
      <div className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-accent mb-3 sm:mb-4 leading-none">
        <AnimatedNumber
          value={stat.value}
          prefix={stat.prefix}
          suffix={stat.suffix}
          isInView={isInView}
        />
      </div>
      <p className="text-heading text-sm sm:text-[15px] tracking-wide mb-1">
        {stat.label}
      </p>
      <p className="text-body text-xs sm:text-sm tracking-wide">
        {stat.description}
      </p>
    </motion.div>
  );
}

export default function StatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-dark relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, var(--color-accent-subtle) 0%, transparent 60%)",
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
            By the Numbers
          </p>
          <AntiGravityText
            as="h2"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1]"
          >
            Results That
          </AntiGravityText>
          <AntiGravityText
            as="h2"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-light text-heading/70 leading-[1.1]"
            delay={0.3}
          >
            Speak for Themselves
          </AntiGravityText>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
