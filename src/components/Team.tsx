"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import AntiGravityText from "./AntiGravityText";

type Member = {
  image: string;
  name: string;
  role: string;
  languages: string;
  description: string;
  expertise: string[];
};

// NOTE: profile photos below are Unsplash placeholders chosen to roughly
// match each person's name. Replace each `image` URL with a real headshot
// when available — no other code changes needed.
const team: Member[] = [
  {
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=85&fm=webp&auto=format&fit=crop&crop=faces&h=750",
    name: "Mark Cross",
    role: "Head of the Finance Department",
    languages: "English, Italian, Spanish, French, Portuguese",
    description:
      "Leads the Finance Department and specializes in international financial coordination and multilingual client communication. His professional, organized approach helps clients navigate financial processes smoothly and confidently.",
    expertise: [
      "International financial coordination",
      "Payment planning and account management",
      "Multilingual client support",
      "European and international clientele",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=600&q=85&fm=webp&auto=format&fit=crop&crop=faces&h=750",
    name: "Scott Evans",
    role: "Head of Immigration Process Department",
    languages: "English",
    description:
      "Oversees the firm's immigration process operations and ensures that client cases are managed with professionalism, structure, and attention to detail.",
    expertise: [
      "Immigration process management",
      "Case supervision and coordination",
      "Advanced immigration guidance",
      "Professional case strategy",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=85&fm=webp&auto=format&fit=crop&crop=faces&h=750",
    name: "Mark Anderson",
    role: "Senior Liaison Specialist & Head of the Business Department",
    languages: "English",
    description:
      "Specialized in Non-Immigrant Processes (E-2 & Work Permits). Known for his patient, supportive, and client-focused communication style.",
    expertise: [
      "E-2 Investor Visas",
      "Work Permit Applications",
      "Non-Immigrant Visa Processes",
      "Personalized client support",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=85&fm=webp&auto=format&fit=crop&crop=faces&h=750",
    name: "Zack Robbins",
    role: "Senior Liaison Specialist",
    languages: "English",
    description:
      "Specialized in Non-Immigrant Processes (E-2 & Work Permits). Recognized for his calm, patient, and attentive approach to client communication.",
    expertise: [
      "E-2 Investor Visas",
      "Work Permit Applications",
      "Non-Immigrant Visa Processes",
      "International client support",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=85&fm=webp&auto=format&fit=crop&crop=faces&h=750",
    name: "Nikki Smith",
    role: "Senior Consultant",
    languages: "English",
    description:
      "A fast-paced, highly efficient consultant who specializes in helping serious and motivated clients move through the immigration process quickly and effectively.",
    expertise: [
      "Fast-paced case progression",
      "Professional consultation services",
      "Client coordination and communication",
      "Efficient workflow management",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=85&fm=webp&auto=format&fit=crop&crop=faces&h=750",
    name: "Christine Williames",
    role: "Senior Consultant & Head of the Middle East Department",
    languages: "English",
    description:
      "Leads the Middle East Department and works closely with clients across the region — bringing department-level oversight and personalized guidance to every case.",
    expertise: [
      "Middle Eastern clientele",
      "International immigration consulting",
      "Department leadership",
      "Personalized immigration guidance",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=85&fm=webp&auto=format&fit=crop&crop=faces&h=750",
    name: "Emily Daren",
    role: "Senior Consultant — Business Department",
    languages: "English, Russian",
    description:
      "Specializes in business immigration support and works extensively with clients from Eastern Europe. Fluent communication in English and Russian throughout the case.",
    expertise: [
      "Eastern European clientele",
      "Business immigration support",
      "Russian-speaking clients",
      "Efficient case management",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=85&fm=webp&auto=format&fit=crop&crop=faces&h=750",
    name: "Stacy Wells",
    role: "Senior Consultant",
    languages: "English",
    description:
      "Provides professional immigration consulting and dedicated client support — focused, organized, and reliably responsive throughout every stage of the case.",
    expertise: [
      "Immigration consulting",
      "Personalized client support",
      "Case coordination",
      "Professional communication",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=85&fm=webp&auto=format&fit=crop&crop=faces&h=750",
    name: "Caroline Hansen",
    role: "Consultant — Western Europe & North America Department",
    languages: "English",
    description:
      "Works closely with clients from Western Europe and North America, providing thoughtful immigration consulting and clear international case coordination.",
    expertise: [
      "Western European clientele",
      "North American clientele",
      "Immigration consulting",
      "International case coordination",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=85&fm=webp&auto=format&fit=crop&crop=faces&h=750",
    name: "Luna Bordovsky",
    role: "Consultant — Eastern Europe Department",
    languages: "English, Russian",
    description:
      "Specializes in assisting clients from Eastern Europe and Russian-speaking communities — combining cultural understanding with attentive case support.",
    expertise: [
      "Eastern European clientele",
      "Russian-speaking clients",
      "Immigration consulting",
      "Client support and communication",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=85&fm=webp&auto=format&fit=crop&crop=faces&h=750",
    name: "Richard Basil",
    role: "Consultant — Middle East Department",
    languages: "English, Arabic",
    description:
      "Works closely with clients from the Middle East and provides professional immigration guidance tailored to each client's goals — in both English and Arabic.",
    expertise: [
      "Middle Eastern clientele",
      "Arabic-speaking clients",
      "Immigration consulting",
      "Personalized case coordination",
    ],
  },
];

const whyChoose = [
  "Multilingual international support",
  "Personalized client matching",
  "Dedicated immigration professionals",
  "Strong legal and business expertise",
  "Efficient and responsive communication",
  "Professional case management",
  "Global client experience",
];

function TeamCard({
  member,
  index,
}: {
  member: Member;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: (index % 4) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col p-5 sm:p-6 rounded-xl
        glass-bg backdrop-blur-md
        border border-dark-border
        hover:border-accent/20
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
        {/* Profile photo */}
        <div className="relative mb-4 self-start w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border border-accent/20 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 80px, 96px"
            className="object-cover"
          />
        </div>

        {/* Name */}
        <h3 className="font-serif text-lg sm:text-xl text-heading leading-tight mb-2">
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-[10px] uppercase tracking-[0.18em] text-accent mb-4 leading-relaxed">
          {member.role}
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

        {/* Description */}
        <p className="text-body text-[13px] leading-[1.7] mb-5">
          {member.description}
        </p>

        {/* Expertise */}
        <div className="mt-auto pt-4 border-t border-dark-border">
          <p className="text-[10px] uppercase tracking-[0.2em] text-body/70 mb-2">
            Areas of Expertise
          </p>
          <ul className="space-y-1.5">
            {member.expertise.map((e) => (
              <li
                key={e}
                className="flex items-start gap-2 text-[12px] text-body leading-snug"
              >
                <span className="text-accent shrink-0 mt-[3px] text-[11px]">
                  ✓
                </span>
                <span>{e}</span>
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
          <p className="text-sm sm:text-base md:text-lg uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium text-accent mb-5 sm:mb-6">
            Meet Our Team
          </p>
          <AntiGravityText
            as="h2"
            className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] leading-[1.05] text-heading"
          >
            Specialists Across
          </AntiGravityText>
          <AntiGravityText
            as="h2"
            className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] italic font-light leading-[1.05] text-heading/70"
            delay={0.3}
          >
            Every Department
          </AntiGravityText>
          <p className="text-body leading-[1.8] tracking-wide text-sm sm:text-[15px] mt-5 sm:mt-7 max-w-2xl">
            Our international team is committed to delivering professional,
            personalized, and results-driven immigration support to clients
            worldwide. With specialists across legal, finance, business, and
            regional immigration departments, we provide tailored guidance
            designed to match each client&apos;s unique goals and background.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
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
