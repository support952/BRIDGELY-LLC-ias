import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Refund Policy | Immigration Advice Service — Bridgely LLC",
  description:
    "Refund and cancellation policy for consulting services provided by Immigration Advice Service.",
  alternates: { canonical: "/refund-policy" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "July 13, 2026";
const CONTACT_EMAIL = "support@immigrationadviceservice.org";

export default function RefundPolicyPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Navbar />

      <article className="pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 md:px-8">
          <header className="mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-accent mb-4">
              Legal
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-heading leading-[1.05] mb-5">
              Refund Policy
            </h1>
            <p className="text-body text-sm">
              Effective date:{" "}
              <span className="text-heading font-medium">{EFFECTIVE_DATE}</span>
            </p>
          </header>

          <div className="space-y-10 text-body text-[15px] leading-[1.8]">
            <Section title="1. Overview">
              <p>
                This Refund Policy explains the terms under which{" "}
                <strong>Bridgely LLC</strong> (&ldquo;<strong>we</strong>
                &rdquo;, &ldquo;<strong>us</strong>&rdquo;, or &ldquo;
                <strong>our</strong>&rdquo;) offers refunds for consulting and
                advisory services purchased through Immigration Advice
                Service. By purchasing our services, you agree to this policy.
                This policy should be read together with our{" "}
                <a href="/terms" className="text-accent hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </Section>

            <Section title="2. Nature of Our Services">
              <p>
                We provide immigration consulting and advisory services. We
                are not a law firm and do not provide legal representation or
                legal advice. Our fees are charged for professional time,
                guidance, and consultation — not for any specific immigration
                outcome. All immigration decisions are made solely by the
                relevant government authorities, including U.S. Citizenship
                and Immigration Services (USCIS) and the U.S. Department of
                State. We do not and cannot guarantee the approval of any
                visa, petition, or application. A denial, delay, or refusal
                by any government authority does not entitle you to a refund.
              </p>
            </Section>

            <Section title="3. Consultation Calls">
              <p>
                Consultation calls scheduled through our online booking
                system are provided free of charge unless otherwise agreed in
                writing. Because no payment is collected to schedule a call,
                no refund applies to booked consultations.
              </p>
            </Section>

            <Section title="4. Cancellation and Cooling-Off Period">
              <p>
                If you have purchased a paid service package, you may cancel
                and request a full refund within fourteen (14) calendar days
                of payment, provided that we have not yet begun substantive
                work on your matter. &ldquo;Substantive work&rdquo; includes
                case assessment, document review, preparation of any
                deliverable, or written guidance prepared on your behalf.
              </p>
            </Section>

            <Section title="5. Refunds After Work Has Begun">
              <p>
                Once substantive work has begun, refunds are calculated on a
                pro-rata basis reflecting the portion of services already
                performed. Upon request, we will provide a written summary of
                the work completed and the corresponding refundable amount,
                if any.
              </p>
            </Section>

            <Section title="6. Non-Refundable Items">
              <p>The following are non-refundable under all circumstances:</p>
              <ul className="mt-3 space-y-2 list-disc pl-6">
                <li>
                  Government filing fees, biometric fees, and any third-party
                  costs paid on your behalf.
                </li>
                <li>Services that have been fully performed and delivered.</li>
                <li>
                  Fees for expedited or rush services once the work has
                  commenced.
                </li>
                <li>
                  Any payment for which a chargeback or payment dispute has
                  been filed (see Section 9).
                </li>
              </ul>
            </Section>

            <Section title="7. How to Request a Refund">
              <p>
                To request a refund, contact us in writing at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-accent hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                with your name, the service purchased, the date of purchase,
                and the reason for your request. We aim to acknowledge all
                refund requests within five (5) business days.
              </p>
            </Section>

            <Section title="8. Processing of Approved Refunds">
              <p>
                Approved refunds are issued to the original method of payment
                within ten (10) business days of approval. Depending on your
                payment provider, additional time may be required for the
                refund to appear on your statement. Any non-refundable
                transaction fees charged by third-party payment providers may
                be deducted from the refunded amount.
              </p>
            </Section>

            <Section title="9. Chargebacks and Disputes">
              <p>
                We encourage you to contact us before initiating a chargeback
                or payment dispute, as most concerns can be resolved
                directly. Filing a chargeback without first contacting us may
                result in suspension of services and forfeiture of any refund
                that would otherwise be due.
              </p>
            </Section>

            <Section title="10. Changes to This Policy">
              <p>
                We may update this Refund Policy from time to time. The
                version in effect at the time of your purchase governs your
                transaction. Material changes will be posted on this page
                with an updated effective date.
              </p>
            </Section>

            <Section title="11. Contact Us">
              <div className="mt-4 p-5 sm:p-6 rounded-lg border border-dark-border glass-bg">
                <p className="text-heading font-medium mb-2">Bridgely LLC</p>
                <p className="text-body text-sm mt-3">
                  18705 NE 59th Ct, Redmond, WA 98052
                </p>
                <p className="text-body text-sm mt-1">
                  Email:{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-accent hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            </Section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif text-2xl sm:text-3xl text-heading leading-tight mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
