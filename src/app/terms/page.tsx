import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Immigration Advice Service — Bridgely LLC",
  description:
    "Terms governing your use of Immigration Advice Service (Bridgely LLC) and our consulting services.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "May 13, 2026";
const CONTACT_EMAIL = "support@immigrationadviceservice.org";

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-body text-sm">
              Effective date:{" "}
              <span className="text-heading font-medium">{EFFECTIVE_DATE}</span>
            </p>
          </header>

          <div
            className="mb-10 p-5 sm:p-6 rounded-lg border border-accent/25"
            style={{ backgroundColor: "var(--color-accent-subtle)" }}
            role="note"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-2 font-medium">
              Important Notice
            </p>
            <p className="text-heading text-[14px] leading-[1.7]">
              <strong>
                Bridgely LLC is not a law firm and does not provide legal
                advice or legal representation.
              </strong>{" "}
              We provide consulting and administrative support for U.S.
              immigration matters. Use of our Services does not create an
              attorney-client relationship. Outcomes of any visa application
              are determined solely by U.S. government authorities and cannot
              be guaranteed.
            </p>
          </div>

          <div className="space-y-10 text-body text-[15px] leading-[1.8]">
            <section>
              <p>
                These Terms of Service (&ldquo;<strong>Terms</strong>&rdquo;)
                govern your access to and use of the website operated by{" "}
                <strong>Bridgely LLC</strong>, a Florida Limited Liability
                Company doing business as &ldquo;
                <strong>Immigration Advice Service</strong>&rdquo;
                (collectively, &ldquo;<strong>we</strong>&rdquo;, &ldquo;
                <strong>us</strong>&rdquo;, &ldquo;<strong>our</strong>
                &rdquo;, or &ldquo;<strong>IAS</strong>&rdquo;), and the
                consulting services we provide (the &ldquo;
                <strong>Services</strong>&rdquo;).
              </p>
              <p className="mt-4">
                By accessing, browsing, or otherwise using our Site or
                Services, you (&ldquo;<strong>you</strong>&rdquo; or &ldquo;
                <strong>Client</strong>&rdquo;) agree to be bound by these
                Terms and by our{" "}
                <a href="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </a>
                . If you do not agree, please do not use our Site or
                Services.
              </p>
            </section>

            <Section title="1. Eligibility">
              <p>
                The Site and Services are offered and available to users who
                are 18 years of age or older. By using this Site, you
                represent and warrant that you are at least 18 years old and
                of legal age to form a binding contract. If you do not meet
                these requirements, you must not access or use the Site or
                Services.
              </p>
            </Section>

            <Section title="2. Nature of Our Services — No Legal Advice">
              <p>
                IAS provides consulting, advisory, and administrative support
                related to U.S. immigration pathways, including (but not
                limited to) E-2 investor visas, EB-2 visas, and EB-2 National
                Interest Waiver (NIW) petitions. Our Services may include
                eligibility assessments, business plan and financial
                documentation preparation, evidence package compilation,
                strategic guidance, and interview preparation coaching.
              </p>
              <p className="mt-4">
                <strong>
                  IAS is not a law firm. Our advisors are not licensed
                  attorneys (unless expressly identified as such in writing),
                  and we do not practice law or provide legal advice.
                </strong>{" "}
                Nothing on our Site, in our communications, or in our
                deliverables constitutes legal advice, and no
                attorney-client relationship is created by your use of our
                Services. For legal advice specific to your circumstances,
                you should consult a licensed immigration attorney.
              </p>
              <p className="mt-4">
                <strong>No outcome is guaranteed.</strong> Visa applications
                are adjudicated solely by U.S. Citizenship and Immigration
                Services (USCIS), the U.S. Department of State, and other
                U.S. government authorities. We cannot guarantee approval of
                any application or any specific outcome. Government fees,
                processing times, and policy changes are outside our control.
              </p>
            </Section>

            <Section title="3. Fees, Billing, and Payment">
              <p>
                Fees for our Services are listed on the relevant product or
                service pages of the Site. Fees currently range from
                approximately $200 to $25,000 per engagement, depending on
                the scope, complexity, and deliverables.
              </p>
              <p className="mt-4">
                <strong>Our fees do not include government filing fees</strong>{" "}
                (e.g., USCIS, consular, or state fees), translation fees,
                courier fees, third-party expert costs, or any other official
                or governmental charges. Such fees, if imposed, are paid
                solely by you and at your responsibility.
              </p>
              <p className="mt-4">
                Payment is due at the time of engagement unless otherwise
                expressly agreed in writing. All amounts are in U.S. dollars
                and are exclusive of any applicable taxes, which you are
                responsible for paying.
              </p>
              <p className="mt-4">
                We may use third-party payment processors to handle payments.
                By submitting payment information, you authorize us and our
                payment processors to charge the applicable amount to your
                chosen payment method.
              </p>
            </Section>

            <Section title="4. Refunds and Cancellation">
              <p>
                Because our Services involve professional work product
                tailored to your individual case, refund requests are
                considered on a case-by-case basis. The following general
                principles apply:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-6">
                <li>
                  A refund request must be submitted in writing to{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-accent hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>{" "}
                  and will be reviewed by our Finance Department at its sole
                  discretion.
                </li>
                <li>
                  Any approved refund will not exceed the amount actually
                  paid by you for the relevant Service.
                </li>
                <li>
                  Approved refunds are typically processed within
                  thirty-one (31) business days, depending on your card
                  issuer&apos;s settlement timing.
                </li>
                <li>
                  <strong>No refund</strong> will be considered after an
                  application or petition has been submitted to a government
                  authority on your behalf, or after substantial work product
                  (such as a finalized business plan, financial model, or
                  NIW evidence package) has been delivered to you.
                </li>
                <li>
                  <strong>No refund</strong> will be paid if we suspect, at
                  our sole discretion, that you are in breach of these
                  Terms, including without limitation engagement in
                  fraudulent, immoral, or illegal activities; misuse of our
                  Services; or material misrepresentation in the information
                  provided to us.
                </li>
                <li>
                  Government filing fees and any third-party costs that have
                  been paid on your behalf are non-refundable.
                </li>
              </ul>
              <p className="mt-4">
                By engaging our Services, you acknowledge that you have read
                and understood this refund and cancellation policy.
              </p>
            </Section>

            <Section title="5. Your Obligations as a Client">
              <p>You agree to:</p>
              <ul className="mt-3 space-y-2 list-disc pl-6">
                <li>
                  Provide accurate, complete, and current information in
                  connection with our engagement;
                </li>
                <li>
                  Promptly respond to requests for documents, signatures, and
                  clarifications;
                </li>
                <li>
                  Disclose any prior immigration history, criminal history,
                  or material facts that may affect your case;
                </li>
                <li>
                  Refrain from misrepresenting facts to us, to any government
                  authority, or to any third party;
                </li>
                <li>
                  Pay all fees when due, and refrain from initiating
                  chargebacks for work that has been performed.
                </li>
              </ul>
              <p className="mt-4">
                Failure to meet these obligations may delay or prevent the
                completion of your engagement, and may result in termination
                of Services without refund.
              </p>
            </Section>

            <Section title="6. Confidentiality">
              <p>
                We treat information you share with us in confidence and use
                it only to provide the Services to you and as otherwise
                described in our{" "}
                <a href="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </a>
                . We may share your information with our team, contractors,
                and authorized service providers who are bound by
                confidentiality obligations, and as required by law.
              </p>
            </Section>

            <Section title="7. Intellectual Property">
              <p>
                The Site and Services, including all text, graphics, logos,
                product names, software, and other materials, are the
                exclusive property of Bridgely LLC and are protected by
                applicable intellectual property laws. You are granted a
                limited, non-transferable license to access and use the Site
                for personal, non-commercial purposes in connection with your
                engagement.
              </p>
              <p className="mt-4">
                Deliverables we prepare for you (such as business plans,
                financial models, evidence packages, and other work product)
                are licensed to you for use in connection with the specific
                immigration matter for which they were prepared. You may not
                redistribute, resell, sublicense, or use our templates and
                proprietary methodologies outside the scope of your
                engagement without our prior written consent.
              </p>
              <p className="mt-4">
                Any content you provide to us (documents, business
                information, personal data) remains your property. By
                providing such content to us, you grant us a limited license
                to use it solely for the purpose of providing the Services to
                you.
              </p>
            </Section>

            <Section title="8. Permitted Use; Prohibited Conduct">
              <p>You may not, in connection with the Site or Services:</p>
              <ul className="mt-3 space-y-2 list-disc pl-6">
                <li>Violate any applicable law, rule, or regulation;</li>
                <li>
                  Provide false, misleading, or fraudulent information to us
                  or to any government authority;
                </li>
                <li>
                  Misrepresent your identity, credentials, or qualifications;
                </li>
                <li>
                  Attempt to interfere with, compromise, or disrupt the
                  Site, its servers, or our Services;
                </li>
                <li>
                  Use any automated means (bots, scrapers, etc.) to access or
                  collect content from the Site;
                </li>
                <li>
                  Infringe any intellectual property right of IAS or any
                  third party;
                </li>
                <li>
                  Use the Site or Services for any illegal, harmful, or
                  abusive purpose.
                </li>
              </ul>
              <p className="mt-4">
                Violation of these provisions may result in immediate
                termination of your engagement without refund and may be
                referred to appropriate authorities.
              </p>
            </Section>

            <Section title="9. Disclaimers; No Warranties">
              <p className="uppercase text-[13px] tracking-wide">
                The Services, the Site, and all content provided through
                them are made available on an &ldquo;as is&rdquo; and
                &ldquo;as available&rdquo; basis. To the fullest extent
                permitted by law, Bridgely LLC hereby expressly disclaims
                all representations and warranties of any kind, whether
                express or implied, including but not limited to warranties
                of merchantability, fitness for a particular purpose, and
                non-infringement.
              </p>
              <p className="mt-4 uppercase text-[13px] tracking-wide">
                Without limiting the foregoing, IAS does not warrant that
                the Services or the Site will be uninterrupted, timely,
                secure, or error-free; that any information provided will be
                accurate or reliable; or that any specific outcome from a
                visa application or other immigration matter will be
                achieved.
              </p>
            </Section>

            <Section title="10. Limitation of Liability">
              <p className="uppercase text-[13px] tracking-wide">
                To the fullest extent permitted by law, in no event will
                Bridgely LLC, its affiliates, or its and their respective
                directors, officers, employees, agents, contractors,
                successors, and assigns be liable for any indirect,
                consequential, exemplary, incidental, special, or punitive
                damages — including but not limited to damages for lost
                profits, goodwill, use, data, or other intangible losses —
                arising from or related to (i) your use of or inability to
                use the Services; (ii) any decision or outcome of any
                government authority regarding your visa application; (iii)
                unauthorized access to or alteration of your transmissions
                or data; or (iv) any other matter relating to the Services.
              </p>
              <p className="mt-4 uppercase text-[13px] tracking-wide">
                Notwithstanding anything to the contrary, in no event will
                Bridgely LLC&apos;s aggregate liability to you exceed the
                amount actually paid by you to Bridgely LLC for the specific
                Service giving rise to the claim during the six (6) months
                preceding the event giving rise to the liability.
              </p>
            </Section>

            <Section title="11. Indemnification">
              <p>
                You agree to defend, indemnify, and hold harmless Bridgely
                LLC, its affiliates, and its and their respective officers,
                directors, employees, agents, contractors, licensors, and
                service providers from and against any and all claims,
                demands, costs, liabilities, judgments, losses, expenses,
                and damages (including reasonable attorneys&apos; fees)
                resulting from, or alleged to result from: (i) your use of
                the Services; (ii) your breach of these Terms; (iii) any
                content or information you provide to us; or (iv) any
                violation of applicable law by you.
              </p>
            </Section>

            <Section title="12. Term and Termination">
              <p>
                We reserve the right to suspend or terminate your access to
                the Services, in our sole discretion and at any time, for
                any reason — including, without limitation, if we believe
                you have violated these Terms.
              </p>
              <p className="mt-4">
                You may terminate your engagement with us at any time by
                providing written notice to{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-accent hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                , subject to the refund and cancellation provisions in
                Section 4.
              </p>
              <p className="mt-4">
                Sections that by their nature should survive termination —
                including, without limitation, intellectual property,
                disclaimers, limitation of liability, indemnification, and
                governing law — will survive termination of these Terms.
              </p>
            </Section>

            <Section title="13. Governing Law and Jurisdiction">
              <p>
                These Terms and any dispute between you and Bridgely LLC
                will be governed by and construed in accordance with the
                laws of the <strong>State of Florida</strong>, without
                regard to its conflict-of-laws principles. You and Bridgely
                LLC agree to submit to the exclusive jurisdiction of the
                state and federal courts located in Florida with respect to
                any dispute, except that either party may seek injunctive
                relief in any competent jurisdiction with respect to a
                violation of intellectual property rights or confidentiality
                obligations.
              </p>
            </Section>

            <Section title="14. Severability; Entire Agreement">
              <p>
                If any provision of these Terms is found to be unenforceable
                or invalid, that provision will be limited or eliminated to
                the minimum extent necessary so that these Terms will
                otherwise remain in full force and effect and enforceable.
              </p>
              <p className="mt-4">
                These Terms, together with our Privacy Policy and any
                written engagement agreement you sign with us, constitute
                the entire agreement between you and Bridgely LLC with
                respect to the Services and supersede all prior or
                contemporaneous communications and proposals.
              </p>
            </Section>

            <Section title="15. Changes to These Terms">
              <p>
                We reserve the right to update and change these Terms from
                time to time, at our sole discretion. We will post the
                updated Terms on this page with a new &ldquo;Effective
                date&rdquo; at the top. You are responsible for reviewing
                these Terms periodically. Continued use of the Services
                after any such changes constitutes your consent to such
                changes.
              </p>
            </Section>

            <Section title="16. Contact">
              <p>If you have any questions about these Terms, please contact us at:</p>
              <div className="mt-4 p-5 sm:p-6 rounded-lg border border-dark-border glass-bg">
                <p className="text-heading font-medium mb-2">Bridgely LLC</p>
                <p className="text-body text-sm">
                  d/b/a Immigration Advice Service
                </p>
                <p className="text-body text-sm mt-3">
                  18705 NE 59th Ct, Redmond, WA 98052, USA
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

            <div className="pt-6 mt-10 border-t border-dark-border">
              <p className="text-[12px] text-body/80 italic">
                These Terms have been drafted as a starting template tailored
                to Bridgely LLC&apos;s consulting business. Before relying on
                them for live commercial use — especially with paid
                transactions in the $200–$25,000 range — they should be
                reviewed and finalized by a licensed attorney familiar with
                immigration consulting and U.S. consumer law.
              </p>
            </div>
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
