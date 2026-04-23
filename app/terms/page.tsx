import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Kalocode terms of service — the terms governing use of our website and services.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#6C47FF] uppercase block mb-3">
          Legal
        </span>
        <h1 className="font-mono text-4xl sm:text-5xl font-bold mb-12">
          Terms of <span className="text-[#888888]">Service</span>
        </h1>

        <div className="space-y-8 text-sm text-[#888888] leading-relaxed">
          <p className="text-xs text-[#888888]/60">Last updated: January 1, 2026</p>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#F5F5F5] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Kalocode website ("Site"), you agree to be bound by these Terms of
              Service. If you do not agree to these terms, do not use this Site.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#F5F5F5] mb-3">2. Services</h2>
            <p>
              Kalocode provides custom software development services specializing in artificial intelligence,
              robotics, VR/AR/XR, web applications, mobile applications, and cloud infrastructure. Project
              scope, deliverables, timelines, and pricing are defined in individual project agreements
              between Kalocode and the client.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#F5F5F5] mb-3">3. Intellectual Property</h2>
            <p>
              All content on this Site — including text, graphics, logos, code, and design — is the property
              of Kalocode and is protected by applicable intellectual property laws. You may not reproduce,
              distribute, or create derivative works from this content without written permission.
            </p>
            <p className="mt-3">
              Intellectual property rights for client projects are governed by individual project agreements.
              Unless otherwise specified, clients receive full ownership of custom code upon final payment.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#F5F5F5] mb-3">4. Use of the Site</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Use automated tools to scrape or access the Site in a manner that degrades performance</li>
              <li>Attempt to gain unauthorized access to any part of the Site or its systems</li>
              <li>Submit false, misleading, or spam content through the contact form</li>
              <li>Use the Site for any unlawful purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#F5F5F5] mb-3">5. Limitation of Liability</h2>
            <p>
              The Site and its content are provided &quot;as is&quot; without warranty of any kind. Kalocode shall
              not be liable for any indirect, incidental, or consequential damages arising from your use of
              the Site. Our total liability for any claim related to the Site shall not exceed the amount
              paid by you, if any, for accessing the Site.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#F5F5F5] mb-3">6. External Links</h2>
            <p>
              This Site may contain links to third-party websites. We are not responsible for the content,
              privacy practices, or availability of those sites. Linking does not imply endorsement.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#F5F5F5] mb-3">7. Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes take effect immediately upon
              posting. Your continued use of the Site constitutes acceptance of modified terms.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#F5F5F5] mb-3">8. Governing Law</h2>
            <p>
              These terms are governed by the laws of the jurisdiction in which Kalocode operates. Any
              disputes will be resolved through binding arbitration in that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#F5F5F5] mb-3">9. Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a href="mailto:contact@kalocode.com" className="text-[#00FF94] hover:text-[#00FF94]/80 transition-colors">
                contact@kalocode.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
