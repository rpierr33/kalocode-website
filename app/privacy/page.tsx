import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Kalocode privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#6C47FF] uppercase block mb-3">
          Legal
        </span>
        <h1 className="font-mono text-4xl sm:text-5xl font-bold mb-12">
          Privacy <span className="text-[#888888]">Policy</span>
        </h1>

        <div className="space-y-8 text-sm text-[#888888] leading-relaxed">
          <p className="text-xs text-[#888888]/60">Last updated: January 1, 2026</p>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#F5F5F5] mb-3">1. Information We Collect</h2>
            <p>
              When you use our contact form, we collect the information you provide: your name, email address,
              company name (optional), project type, and message content. We also collect basic technical data
              such as your IP address for rate limiting and spam prevention purposes.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#F5F5F5] mb-3">2. How We Use Your Information</h2>
            <p>
              We use the information you provide solely to respond to your inquiry and discuss potential project
              collaboration. We do not sell, rent, or share your personal information with third parties for
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#F5F5F5] mb-3">3. Data Storage & Security</h2>
            <p>
              Your contact submissions are stored securely in our database hosted on Neon (PostgreSQL). We use
              industry-standard encryption for data in transit (TLS/SSL). We retain contact submissions for
              up to 24 months, after which they are permanently deleted.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#F5F5F5] mb-3">4. Cookies & Analytics</h2>
            <p>
              We use Vercel Analytics to understand how visitors interact with our site. This service collects
              anonymous usage data and does not use cookies for tracking. No personally identifiable information
              is collected through analytics.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#F5F5F5] mb-3">5. Third-Party Services</h2>
            <p>
              We may use Resend for transactional email delivery. When you submit a contact form, your name
              and email may be processed by this service solely to deliver a notification to our team. We do
              not share your data with any other third-party services.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#F5F5F5] mb-3">6. Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal data at
              any time. To exercise these rights, contact us at{" "}
              <a href="mailto:contact@kalocode.com" className="text-[#00FF94] hover:text-[#00FF94]/80 transition-colors">
                contact@kalocode.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#F5F5F5] mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will be posted on this page with
              an updated revision date. Your continued use of our site after changes constitutes acceptance
              of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#F5F5F5] mb-3">8. Contact</h2>
            <p>
              If you have questions about this privacy policy, contact us at{" "}
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
