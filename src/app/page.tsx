import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GridLines from "@/components/GridLines";
import SectionDivider from "@/components/SectionDivider";

// Dynamic imports for below-fold sections — reduces initial JS bundle
const About = dynamic(() => import("@/components/About"), { loading: () => <SectionSkeleton /> });
const Services = dynamic(() => import("@/components/Services"), { loading: () => <SectionSkeleton /> });
const StatsCounter = dynamic(() => import("@/components/StatsCounter"), { loading: () => <SectionSkeleton /> });
const Process = dynamic(() => import("@/components/Process"), { loading: () => <SectionSkeleton /> });
const PathSection = dynamic(() => import("@/components/PathSection"), { loading: () => <SectionSkeleton /> });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { loading: () => <SectionSkeleton /> });
const FAQ = dynamic(() => import("@/components/FAQ"), { loading: () => <SectionSkeleton /> });
const CTA = dynamic(() => import("@/components/CTA"), { loading: () => <SectionSkeleton /> });
const Footer = dynamic(() => import("@/components/Footer"), { loading: () => <SectionSkeleton compact /> });

function SectionSkeleton({ compact = false }: { compact?: boolean }) {
  return (
    <section aria-hidden className={compact ? "py-10 bg-dark-card" : "py-24 bg-dark-card"}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="h-7 w-56 bg-black/[0.05] rounded mb-6 animate-pulse" />
        <div className="h-4 w-full max-w-3xl bg-black/[0.04] rounded animate-pulse" />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative">
      <GridLines />
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <StatsCounter />
      <SectionDivider />
      <Process />
      <SectionDivider />
      <PathSection />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <CTA />
      <Footer />
    </main>
  );
}
