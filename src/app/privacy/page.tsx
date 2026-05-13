import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Immigration Advice Service — Bridgely LLC",
  description:
    "How Immigration Advice Service (Bridgely LLC) collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "May 13, 2026";
const CONTACT_EMAIL = "support@immigrationadviceservice.org";

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-body text-sm">
              Effective date:{" "}
              <span className="text-heading font-medium">{EFFECTIVE_DATE}</span>
            </p>
          </header>

          <div className="space-y-10 text-body text-[15px] leading-[1.8]">
            <section>
              <p>
                This website (also referred to as &ldquo;<strong>we</strong>
                &rdquo;, &ldquo;<strong>us</strong>&rdquo;, &ldquo;
                <strong>our</strong>&rdquo;, or &ldquo;
                <strong>Immigration Advice Service</strong>&rdquo;) is operated
                by <strong>Bridgely LLC</strong>, a Florida Limited Liability
                Company. This Privacy Policy (&ldquo;
                <strong>Privacy Policy</strong>&rdquo;) describes how we
                collect and use information pertaining to each of our
                unregistered visitors and clients (each, a &ldquo;
                <strong>Visitor</strong>&rdquo; or &ldquo;<strong>Client</strong>
                &rdquo;, or &ldquo;<strong>you</strong>&rdquo;), in connection
                with their access to and use of our website (the &ldquo;
                <strong>Site</strong>&rdquo;) and the consulting services we
                provide (&ldquo;<strong>Services</strong>&rdquo;).
              </p>
              <p className="mt-4">
                The purpose of this Privacy Policy is to provide you with a
                clear explanation of when, why and how we collect and use your
                personal information, as well as an explanation of your
                statutory rights. This Privacy Policy is not intended to
                override any rights you might have under applicable data
                privacy laws.
              </p>
              <p className="mt-4">
                Please read this Privacy Policy and make sure you fully
                understand our practices in relation to your personal
                information, before you access or use any of our Services. If
                you have any questions or concerns regarding this policy,
                please contact us at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-accent hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>

            <Section title="1. Information We Collect">
              <p>We collect two types of information regarding our Visitors and Clients:</p>
              <ul className="mt-3 space-y-3 list-disc pl-6">
                <li>
                  <strong>Non-personal Information.</strong> Un-identified and
                  non-identifiable information that may be made available to
                  us, or collected automatically via your use of the Services.
                  Such Non-personal Information does not enable us to identify
                  you. It mainly consists of demographic information and
                  technical and aggregated usage information, such as your
                  browsing activity on the Site, your device, operating
                  system, internet browser, screen resolution, language and
                  keyboard settings, internet service provider, referring/exit
                  pages, and date/time stamps.
                </li>
                <li>
                  <strong>Personal Information.</strong> Individually
                  identifiable information that identifies an individual or
                  may with reasonable efforts cause the identification of an
                  individual, or may be of private or sensitive nature. The
                  Personal Information collected by us mainly consists of:
                  personal details (e.g., name, e-mail address, phone number);
                  billing details (name, physical billing address, payment
                  method, credit card number and transaction details); details
                  regarding a browsing or usage session (IP address,
                  geo-location and/or device unique identifier); and any other
                  Personal Information provided to us by Visitors and Clients
                  through their access to or use of the Services. Any
                  Non-personal Information that is connected or linked to
                  Personal Information is deemed and treated as Personal
                  Information as long as such connection exists.
                </li>
              </ul>
            </Section>

            <Section title="2. How Do We Collect Such Information?">
              <p>There are two main methods we use:</p>
              <ul className="mt-3 space-y-3 list-disc pl-6">
                <li>
                  <strong>Through your use of the Services.</strong> When you
                  visit or use our Services — including when you browse the
                  Site, submit a contact form, or initiate a checkout — we
                  may gather, collect and record such uses, sessions and
                  related information, either independently or with the help
                  of third-party services as detailed in Section 4, including
                  through the use of cookies and other tracking technologies
                  (Section 9).
                </li>
                <li>
                  <strong>Information you provide voluntarily.</strong> We
                  collect the Personal Information you provide when you
                  contact us through any communication channel, submit
                  documents related to your case, or make a payment for our
                  Services.
                </li>
              </ul>
            </Section>

            <Section title="3. How and Why We Use Such Information">
              <h3 className="font-serif text-xl text-heading mt-1 mb-3">
                Legal Bases for Collecting and Using Information
              </h3>
              <p>
                For those in the European Union, our legal grounds for
                processing your Personal Information under EU data protection
                laws (the GDPR) are that:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-6">
                <li>
                  The use is necessary in order to fulfill our commitments to
                  you under our Terms of Service or other agreements with you,
                  or to administer your engagement;
                </li>
                <li>The use is necessary for compliance with a legal obligation;</li>
                <li>
                  The use is necessary in order to protect your vital interests
                  or those of another person;
                </li>
                <li>
                  We have a legitimate interest in using your Personal
                  Information — for example, to provide and improve our
                  Services, safeguard our Services, communicate with you, and
                  monitor and prevent any problems with our Services; or
                </li>
                <li>You have given us your consent.</li>
              </ul>

              <h3 className="font-serif text-xl text-heading mt-6 mb-3">
                Purposes for Using Information
              </h3>
              <p>We use information about you for the purposes listed below:</p>
              <ul className="mt-3 space-y-2 list-disc pl-6">
                <li>To provide you the Services;</li>
                <li>To further develop and improve our Services;</li>
                <li>To respond to inquiries and provide client support;</li>
                <li>
                  To monitor and analyze trends and better understand how
                  visitors interact with our Services;
                </li>
                <li>To communicate with you regarding your engagement;</li>
                <li>
                  To process e-commerce transactions and any other matters you
                  initiate;
                </li>
                <li>To enhance our data security and fraud prevention capabilities;</li>
                <li>To comply with any applicable laws and regulations.</li>
              </ul>

              <h3 className="font-serif text-xl text-heading mt-6 mb-3">
                Where Do We Store Your Information?
              </h3>
              <p>
                Your Personal Information may be maintained, processed and
                stored by us and our authorized affiliates and service
                providers in the United States, the European Union, and in
                other jurisdictions as necessary for the proper delivery of
                our Services or as required by law. Our service providers are
                contractually committed to keep your information protected
                and secured in accordance with industry standards.
              </p>
            </Section>

            <Section title="4. Sharing Personal Information">
              <p>
                <strong>We do not sell your Personal Information.</strong> We
                share Personal Information about you only in the limited
                circumstances spelled out below:
              </p>
              <ul className="mt-3 space-y-3 list-disc pl-6">
                <li>
                  <strong>Employees and Independent Contractors.</strong> We
                  may disclose your Personal Information to our employees and
                  independent contractors who need access to it in order to
                  help us provide the Services or to process it on our behalf.
                  All such personnel are required to follow this Privacy
                  Policy.
                </li>
                <li>
                  <strong>Third Party Service Providers.</strong> We engage
                  certain trusted third parties to perform functions and
                  provide services to us — including, without limitation,
                  hosting and maintenance, email delivery, payment processing,
                  and analytics. We share your Personal Information with these
                  parties only to the extent necessary to perform these
                  functions and only pursuant to binding contractual
                  obligations requiring such third parties to maintain the
                  privacy and security of your Personal Information.
                </li>
                <li>
                  <strong>Law Enforcement, Legal Requests and Duties.</strong>{" "}
                  Where permitted by applicable law, we may disclose your
                  Personal Information pursuant to a legal request, such as a
                  subpoena, court order, or in compliance with applicable
                  laws, if we have a good faith belief that the law requires
                  us to do so, with or without notice to you.
                </li>
                <li>
                  <strong>To Protect Rights, Property, and Others.</strong> We
                  may disclose your Personal Information when we believe in
                  good faith that disclosure is reasonably necessary to
                  protect the property or rights of Bridgely LLC, third
                  parties, or the public at large.
                </li>
                <li>
                  <strong>Business Transfers.</strong> In connection with any
                  merger, sale of company assets, or acquisition of all or a
                  portion of our business, Client information would likely be
                  one of the assets transferred or acquired. If such an event
                  were to occur, this Privacy Policy would continue to apply
                  to your information.
                </li>
              </ul>

              <h3 className="font-serif text-xl text-heading mt-6 mb-3">
                International Transfers
              </h3>
              <p>
                Because our Services are offered worldwide, the information
                about you that we process may be transferred to, stored, and
                accessed by individuals operating outside your country of
                residence. When transferring information from the European
                Economic Area (&ldquo;EEA&rdquo;) to the United States or
                other countries outside the EEA, we rely on appropriate
                safeguards, such as European Commission approved standard
                contractual clauses.
              </p>
            </Section>

            <Section title="5. How Long We Keep Information">
              <p>
                We generally discard such Personal Information about you when
                we no longer need the information for the purposes for which
                we collected and used it, and we are not legally required to
                continue to keep it.
              </p>
              <p className="mt-4">
                We may continue to retain such Personal Information even after
                you cease to use any particular Services, as reasonably
                necessary to comply with our legal obligations, resolve
                disputes, prevent fraud and abuse, enforce our agreements,
                and/or protect our legitimate interests.
              </p>
            </Section>

            <Section title="6. Security">
              <p>
                While no online service is 100% secure, we work very hard to
                protect your Personal Information against unauthorized access,
                use, alteration, or destruction, and take reasonable measures
                to do so, such as monitoring our Services for potential
                vulnerabilities and attacks.
              </p>
              <p className="mt-4">
                We encourage you to set strong passwords for any accounts you
                hold with our service providers, and to avoid providing us or
                anyone with any sensitive information whose disclosure could
                cause you substantial or irreparable harm.
              </p>
              <p className="mt-4">
                If you have any questions regarding the security of our
                Services, you are welcome to contact us at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-accent hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </Section>

            <Section title="7. Your Rights (GDPR)">
              <p>
                If you are located in a country covered by the European
                General Data Protection Regulation (&ldquo;GDPR&rdquo;), data
                protection laws give you rights with respect to your Personal
                Information, subject to any exemptions provided by the law,
                including the rights to:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-6">
                <li>Request access to your Personal Information;</li>
                <li>Request correction or deletion of your Personal Information;</li>
                <li>Object to our use and processing of your Personal Information;</li>
                <li>
                  Request that we limit our use and processing of your
                  Personal Information;
                </li>
                <li>Request portability of your Personal Information.</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-accent hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                . EU individuals also have the right to lodge a complaint with
                a government supervisory authority.
              </p>
            </Section>

            <Section title="8. Your Rights (California — CCPA / CPRA)">
              <p>
                If you are a California resident, the California Consumer
                Privacy Act (as amended by the California Privacy Rights Act)
                provides you with additional rights regarding your Personal
                Information, including the right to:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-6">
                <li>
                  Know what Personal Information is collected, used, shared,
                  or sold;
                </li>
                <li>Access the specific pieces of Personal Information we hold about you;</li>
                <li>Request deletion of your Personal Information;</li>
                <li>Request correction of inaccurate Personal Information;</li>
                <li>
                  Opt out of the sale or sharing of Personal Information — we
                  do not sell or share Personal Information as defined under
                  the CCPA;
                </li>
                <li>Be free from discrimination for exercising these rights.</li>
              </ul>
              <p className="mt-4">
                To submit a request, please email{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-accent hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                . We may need to verify your identity before responding.
              </p>
            </Section>

            <Section title="9. Cookies and Other Tracking Technologies">
              <p>
                We, together with our partners, use certain monitoring and
                tracking technologies (such as cookies, beacons, pixels, tags
                and scripts). These technologies are used in order to
                maintain, provide and improve our Services on an ongoing
                basis, and to provide visitors and clients with a better
                experience. For example, these technologies allow us to keep
                track of preferences and authenticated sessions, secure our
                Services, identify technical issues, and monitor performance.
              </p>
              <p className="mt-4">
                Third party services placing cookies or utilizing other
                tracking technologies through our Services may have their own
                policies regarding how they collect and store information.
                Such practices are not covered by our Privacy Policy and we
                do not have any control over them.
              </p>
              <p className="mt-4">
                If you want to delete or block any cookies, please refer to
                the help and support area on your internet browser for
                instructions. Note that deleting our cookies or disabling
                future cookies may prevent you from accessing certain areas
                or features of our Services.
              </p>
            </Section>

            <Section title="10. Children's Privacy">
              <p>
                The Site is not directed to persons under 18. We do not
                knowingly collect Personal Information from children under 13.
                If a parent or guardian becomes aware that a child has
                provided us with Personal Information without their consent,
                they should contact us at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-accent hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                . If we become aware that a child under 13 has provided us
                with Personal Information, we will delete such information
                from our files.
              </p>
            </Section>

            <Section title="11. Privacy Policy Changes">
              <p>
                We may update this Privacy Policy from time to time as
                required by applicable law, and to reflect changes to our
                information collection, usage and storage practices. If we
                make any changes that we deem to be material (in our sole
                good faith discretion), we will notify you (as set forth in
                our Terms of Service) prior to the change becoming effective.
                We encourage you to periodically check this page for the
                latest information on our privacy practices.
              </p>
              <p className="mt-4">
                You are responsible for reviewing the Privacy Policy so you
                are aware of any changes or updates. Continued use of the
                Services after any such changes shall constitute your
                consent to such changes.
              </p>
            </Section>

            <Section title="12. Contacting Us">
              <p>
                If you have any questions about this Privacy Policy or wish
                to exercise any of your rights described above, please
                contact us at:
              </p>
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
