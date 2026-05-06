"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import AntiGravityText from "./AntiGravityText";

const faqs = [
  {
    question: "What is an E-2 Investor Visa and who qualifies?",
    answer:
      "The E-2 visa is a non-immigrant visa that allows citizens of treaty countries to enter the U.S. to develop and manage a business they have invested in. Applicants must make a substantial investment in a bona fide enterprise and demonstrate the business will generate income beyond just supporting the investor's family.",
  },
  {
    question: "What is an EB-2 NIW and how does it differ from a standard EB-2?",
    answer:
      "The EB-2 National Interest Waiver (NIW) is an immigration petition for professionals with advanced degrees or exceptional ability. Unlike the standard EB-2 which requires employer sponsorship and a labor certification (PERM), the NIW allows self-petitioning by demonstrating that your work is in the national interest of the United States.",
  },
  {
    question: "How much investment is required for an E-2 visa?",
    answer:
      "There is no fixed minimum investment amount set by USCIS. However, the investment must be 'substantial' relative to the total cost of the business. In practice, successful applications typically involve investments starting from $100,000, though franchise models and certain industries may require more or less depending on the business type.",
  },
  {
    question: "Which visa pathway is right for me — E-2, EB-2, or NIW?",
    answer:
      "The right pathway depends on your professional background, nationality, investment capacity, and long-term goals. E-2 visas are ideal for investors from treaty countries wanting to run a U.S. business. EB-2 suits professionals with advanced degrees and employer sponsorship. EB-2 NIW is best for those whose work serves the U.S. national interest. We assess your profile during our initial consultation to recommend the strongest path.",
  },
  {
    question: "How long does the visa process take?",
    answer:
      "Timelines vary by visa type. E-2 applications typically take 3 to 6 months including business plan development and document preparation. EB-2 NIW petitions can take 6 to 12 months for USCIS processing, though premium processing may be available. Our streamlined approach ensures no time is wasted at any stage.",
  },
  {
    question: "Can my family accompany me to the United States?",
    answer:
      "Yes. Both E-2 and EB-2 visa holders can bring their spouse and unmarried children under 21 to the United States. Spouses are eligible to apply for work authorization (EAD), allowing them to work for any U.S. employer. Children can attend school at all levels.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="border-b border-dark-border"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
        id={`faq-trigger-${index}`}
        className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left cursor-pointer group"
      >
        <span
          className={`font-serif text-lg sm:text-xl md:text-2xl transition-colors duration-300 ${
            isOpen ? "text-heading" : "text-heading/70 group-hover:text-heading"
          }`}
        >
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-accent text-2xl leading-none shrink-0 w-8 h-8 flex items-center justify-center"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${index}`}
            role="region"
            aria-labelledby={`faq-trigger-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-body leading-[1.8] tracking-wide text-sm sm:text-[15px] pb-5 sm:pb-6 pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-dark relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 40% at 50% 50%, rgba(128,128,128,0.015) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-16 md:mb-20 text-center"
        >
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-accent mb-3 sm:mb-4">
            Common Questions
          </p>
          <AntiGravityText
            as="h2"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1]"
          >
            Frequently Asked
          </AntiGravityText>
          <AntiGravityText
            as="h2"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-light text-heading/70 leading-[1.1]"
            delay={0.3}
          >
            Questions
          </AntiGravityText>
        </motion.div>

        <div className="border-t border-dark-border">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
