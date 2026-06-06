import type { Metadata } from "next";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Privacy Policy — IgniteKit",
  description:
    "Privacy Policy for the IgniteKit mobile application, published for Apple App Store and Google Play developer account requirements.",
};

const APP_NAME = "IgniteKit";
const DEVELOPER = "Shiv Shankar Tiwari";
const CONTACT_EMAIL = "pythonsst@gmail.com";
const EFFECTIVE_DATE = "June 6, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-background pt-28 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <header className="mb-10 border-b border-border pb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-3 text-muted-foreground">
              Application: <span className="font-medium text-foreground">{APP_NAME}</span>
            </p>
            <p className="text-muted-foreground">
              Developer: <span className="font-medium text-foreground">{DEVELOPER}</span>
            </p>
            <p className="text-muted-foreground">
              Effective date: <span className="font-medium text-foreground">{EFFECTIVE_DATE}</span>
            </p>
          </header>

          <div className="space-y-8 text-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Overview</h2>
              <p className="text-muted-foreground">
                {APP_NAME} is a demonstration mobile application built to showcase a continuous
                integration and continuous delivery (CI/CD) pipeline for React Native. The app is
                designed to function without collecting personal information. This Privacy Policy
                explains what information the app does and does not handle, and your rights as a
                user.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Information We Do Not Collect</h2>
              <p className="text-muted-foreground">
                We do <strong className="text-foreground">not</strong> collect, store, sell, or
                share any of the following:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground">
                <li>Personally identifiable information (name, email, phone number, address)</li>
                <li>Account credentials — the app does not require sign-up or login</li>
                <li>Precise or coarse location data</li>
                <li>Contacts, calendar, photos, or other on-device user content</li>
                <li>Advertising identifiers (IDFA / AAID) — the app contains no advertising</li>
                <li>Payment or financial information</li>
                <li>Health, biometric, or other sensitive categories of data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Diagnostic & Crash Data</h2>
              <p className="text-muted-foreground">
                The app may use the platform-provided crash reporting and diagnostics services
                built into Apple App Store and Google Play (for example, App Store Connect crash
                logs and Google Play&apos;s Android Vitals). These services may collect anonymous
                diagnostic information such as device model, operating system version, app version,
                and stack traces when the app crashes. This data is collected and processed by
                Apple or Google under their respective privacy policies and is used only to improve
                application stability. It is not linked to your identity by us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Permissions</h2>
              <p className="text-muted-foreground">
                {APP_NAME} does not request access to sensitive device capabilities such as the
                camera, microphone, location, contacts, or storage. If a future release requires
                any such permission, this policy will be updated and the app store listing will
                disclose the change before the update is published.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Third-Party Services</h2>
              <p className="text-muted-foreground">
                The app does not integrate any third-party advertising networks, marketing SDKs, or
                cross-site tracking technologies. The only third parties involved are the platform
                operators themselves (Apple and Google) for app distribution and platform-level
                crash reporting, as described in Section 3.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Children&apos;s Privacy</h2>
              <p className="text-muted-foreground">
                {APP_NAME} is not directed to children under the age of 13 (or the equivalent
                minimum age in your jurisdiction). We do not knowingly collect personal information
                from children. Because the app does not collect personal information from any user,
                no such data concerning children is processed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Data Retention</h2>
              <p className="text-muted-foreground">
                Because we do not collect personal information, we have no personal data to retain
                or delete on our servers. Anonymous platform diagnostics handled by Apple and
                Google are retained according to those platforms&apos; own policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Your Rights</h2>
              <p className="text-muted-foreground">
                Depending on your jurisdiction (including the GDPR in the European Economic Area
                and the CCPA in California), you may have rights to access, correct, or delete
                personal data held about you. Because {APP_NAME} does not collect personal data,
                there is no user record for us to access, correct, or delete. You may still contact
                us with any privacy question using the details below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Security</h2>
              <p className="text-muted-foreground">
                We take a privacy-by-design approach: the safest data is the data we never collect.
                The app ships through the official Apple App Store and Google Play distribution
                channels, which provide signing, integrity verification, and secure delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">10. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. When we do, we will revise the
                &quot;Effective date&quot; at the top of this page. If a change materially affects
                how user information is handled, we will highlight the change in the app store
                listing and, where appropriate, within the app itself.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">11. Contact</h2>
              <p className="text-muted-foreground">
                Questions or requests regarding this Privacy Policy can be sent to{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-accent hover:underline font-medium"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>
          </div>

          <footer className="mt-12 pt-6 border-t border-border text-sm text-muted-foreground">
            This Privacy Policy is published to satisfy the developer-account requirements of the
            Apple App Store and Google Play.
          </footer>
        </article>
      </main>
    </>
  );
}
