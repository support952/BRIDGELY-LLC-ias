"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AntiGravityText from "./AntiGravityText";

type Member = {
  initials: string;
  name: string;
  tagline: string;
  description: string;
  languages: string;
  bestFor: string;
  match?: string[];
  expertise?: string[];
  location?: string;
  highlights: string[];
};

const team: Member[] = [
  {
    initials: "MA",
    name: "Mark Anderson",
    tagline: "Patient, Supportive & Client-Focused",
    description:
      "Calm and reassuring communicator. Takes the time to explain every stage clearly so clients feel confident and supported from start to finish.",
    languages: "English",
    bestFor:
      "Clients who value patience, personal guidance, and a comfortable communication experience.",
    match: ["United Kingdom", "Germany", "Denmark", "Poland", "Ukraine", "Iceland"],
    highlights: [
      "Patient and understanding communication",
      "Personalized attention",
      "Clear step-by-step explanations",
      "Supportive and solution-oriented",
    ],
  },
  {
    initials: "MC",
    name: "Mark Cross",
    tagline: "Multilingual Communication Specialist",
    description:
      "Combines strong multilingual skills with a patient, professional approach. Creates a smooth, culturally sensitive experience for international clients.",
    languages: "English, Italian, Spanish, French, Portuguese",
    bestFor:
      "International clients who prefer communication in their native language.",
    match: [
      "France",
      "Romania",
      "Spanish-speaking",
      "Italian-speaking",
      "Portuguese-speaking",
    ],
    highlights: [
      "Multilingual communication",
      "Patient and professional guidance",
      "Organized case management",
      "Strong cultural understanding",
    ],
  },
  {
    initials: "NS",
    name: "Nikki Smith",
    tagline: "Fast-Paced, Efficient & Results-Driven",
    description:
      "Highly efficient and organized. Keeps cases moving forward with momentum — a strong match for clients who are proactive and goal-oriented.",
    languages: "English",
    bestFor:
      "Motivated clients who are responsive and ready to move forward quickly.",
    match: ["Canada", "Norway", "Netherlands", "Australia"],
    highlights: [
      "Fast response times",
      "Efficient case progression",
      "Highly organized workflow",
      "Clear and practical communication",
    ],
  },
  {
    initials: "ED",
    name: "Emily Daren",
    tagline: "Efficient, Focused & Multilingual",
    description:
      "Responsive and organized. Fluent in English and Russian, helping clients feel fully informed and comfortable at every stage of their case.",
    languages: "English, Russian",
    bestFor:
      "Russian-speaking clients and those who value efficient, goal-oriented service.",
    match: [
      "Russian-speaking communities",
      "Eastern Europe",
      "Central Asia",
      "Turkmenistan",
    ],
    highlights: [
      "Fast and responsive communication",
      "Efficient case management",
      "Strong organizational skills",
      "Native-level Russian support",
    ],
  },
  {
    initials: "SE",
    name: "Scott Evans",
    tagline: "Legal Strategy & Advanced Cases",
    description:
      "Prepares professionally structured cases with exceptional attention to detail. Analytical approach ensures every aspect is carefully reviewed.",
    languages: "English, Written Russian",
    bestFor:
      "Clients with professional, business, or advanced immigration cases requiring strong legal preparation.",
    expertise: [
      "EB-2 NIW Cases",
      "Complex Immigration Filings",
      "Legal Documentation Review",
      "Immigration Department Communications",
    ],
    highlights: [
      "Thorough legal preparation",
      "Strategic guidance",
      "Attention to detail",
      "Professional case analysis",
    ],
  },
  {
    initials: "BC",
    name: "Benjamin Christiansen",
    tagline: "Account Management & Coordination",
    description:
      "Professional and organized account manager. Provides clear updates and efficient support with reliable, business-oriented communication.",
    languages: "English",
    bestFor:
      "Clients seeking structured account support and professional coordination.",
    location: "The Woodlands, Texas, USA",
    highlights: [
      "Professional communication",
      "Reliable account support",
      "Organized coordination",
      "Prompt assistance",
    ],
  },
  {
    initials: "JM",
    name: "James Miller",
    tagline: "Client Support & Onboarding",
    description:
      "Creates a smooth, stress-free onboarding experience. Assists with document uploads, technical guidance, and general client support.",
    languages: "English",
    bestFor: "New clients, onboarding support, and operational assistance.",
    highlights: [
      "Friendly communication",
      "Quick assistance",
      "Smooth onboarding experience",
      "Helpful technical support",
    ],
  },
  {
    initials: "Z",
    name: "Zack",
    tagline: "Patient, Attentive & Client-Oriented",
    description:
      "Patient and attentive in every interaction. Takes the time to understand each client's situation and creates a comfortable, supportive experience.",
    languages: "English",
    bestFor:
      "Clients who value patience, careful communication, and personalized support.",
    highlights: [
      "Patient communication",
      "Supportive attitude",
      "Personalized assistance",
      "Calm and professional guidance",
    ],
  },
];

const whyChoose = [
  "Personalized matching",
  "Multilingual communication",
  "International experience",
  "Professional guidance",
  "Responsive support",
  "Dedicated case management",
  "Clear and transparent",
];

function TeamCard({ member, index }: { member: Member; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: (index % 4) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col p-5 sm:p-6 rounded-xl
        glass-bg backdrop-blur-md
        border border-dark-border
        hover:border-accent/15
        transition-colors duration-500"
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, var(--color-accent-subtle) 0%, transparent 70%)",
          boxShadow: "0 25px 60px -20px rgba(0, 0, 0, 0.15)",
        }}
      />

      <div className="relative flex flex-col flex-1">
        {/* Avatar + Name */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-serif text-accent text-base border border-accent/25"
            style={{ backgroundColor: "var(--color-accent-subtle)" }}
            aria-hidden
          >
            {member.initials}
          </div>
          <h3 className="font-serif text-lg sm:text-xl text-heading leading-tight">
            {member.name}
          </h3>
        </div>

        {/* Tagline */}
        <p className="text-[10px] uppercase tracking-[0.22em] text-accent mb-4 leading-relaxed">
          {member.tagline}
        </p>

        {/* Description */}
        <p className="text-body text-[13px] leading-[1.7] mb-5">
          {member.description}
        </p>

        {/* Languages */}
        <div className="mb-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-body/70 mb-1">
            Languages
          </p>
          <p className="text-heading text-[13px] tracking-wide">
            {member.languages}
          </p>
        </div>

        {/* Best For */}
        <div className="mb-5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-body/70 mb-1">
            Best For
          </p>
          <p className="text-body text-[12.5px] leading-[1.65] italic">
            {member.bestFor}
          </p>
        </div>

        {/* Match / Expertise / Location */}
        {member.match && (
          <div className="mb-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-body/70 mb-2">
              Ideal Client Match
            </p>
            <div className="flex flex-wrap gap-1.5">
              {member.match.map((country) => (
                <span
                  key={country}
                  className="text-[11px] px-2.5 py-1 rounded-full border border-dark-border text-body bg-black/[0.02]"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
        )}

        {member.expertise && (
          <div className="mb-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-body/70 mb-2">
              Areas of Expertise
            </p>
            <ul className="space-y-1">
              {member.expertise.map((e) => (
                <li
                  key={e}
                  className="text-[12px] text-body leading-snug pl-3 relative"
                >
                  <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-accent/50" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        )}

        {member.location && (
          <div className="mb-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-body/70 mb-1">
              Based In
            </p>
            <p className="text-heading text-[13px] tracking-wide">
              {member.location}
            </p>
          </div>
        )}

        {/* Highlights */}
        <div className="mt-auto pt-4 border-t border-dark-border">
          <ul className="space-y-1.5">
            {member.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-[12px] text-body leading-snug"
              >
                <span className="text-accent shrink-0 mt-[3px] text-[11px]">
                  ✓
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="team"
      className="py-16 sm:py-24 md:py-32 lg:py-40 bg-dark relative overflow-hidden scroll-mt-28"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 30%, rgba(128,128,128,0.02) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-14 md:mb-16 max-w-3xl"
        >
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-accent mb-3 sm:mb-4">
            Meet Our Team
          </p>
          <AntiGravityText
            as="h2"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-heading"
          >
            Expert Advisors
          </AntiGravityText>
          <AntiGravityText
            as="h2"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-light leading-[1.1] text-heading/70"
            delay={0.3}
          >
            Matched to You
          </AntiGravityText>
          <p className="text-body leading-[1.8] tracking-wide text-sm sm:text-[15px] mt-5 sm:mt-7 max-w-2xl">
            Each representative brings unique strengths, communication styles,
            and international experience — so every client is matched with the
            right person for their needs and background.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 sm:mt-16 md:mt-20 pt-10 sm:pt-12 border-t border-dark-border"
        >
          <p className="text-center text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-accent mb-6 sm:mb-8">
            Why Clients Choose Our Team
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {whyChoose.map((item) => (
              <span
                key={item}
                className="text-[12px] sm:text-[13px] text-body tracking-wide px-4 py-2 rounded-full border border-dark-border bg-black/[0.02]"
              >
                <span className="text-accent mr-1.5">✓</span>
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
