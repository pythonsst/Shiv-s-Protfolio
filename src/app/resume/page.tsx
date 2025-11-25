"use client";

import HeroHeader from "@/components/HeroHeader";
import ExperienceItem from "@/components/ExperienceItem";
import SkillSection from "@/components/SkillSection";
import Navigation from "@/components/Navigation";
import { experiences } from "@/data/experiences";
import skills from "@/data/skillsData";
import { contacts } from "@/data/contact";

export default function ResumePage() {
  return (
    <>
      <style jsx global>{`
        /* Fonts */
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Source+Serif+Pro:wght@600;700&display=swap");

        :root {
          --bg: #fbfcfe;
          --page-bg: #ffffff;
          --text: #0b1220;
          --muted: #6b7280;
          --accent: #2f6fe6;
          --divider: rgba(11, 17, 32, 0.06);
          --max-width: 980px;
          --print-page-margin: 8mm;
        }

        * {
          box-sizing: border-box;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          height: 100%;
          background: var(--bg);
          color: var(--text);
          font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto,
            "Helvetica Neue", Arial;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Outer wrap */
        .wrap {
          display: flex;
          justify-content: center;
          padding: 64px 18px 48px;
        }
        /* Card */
        .card {
          width: 100%;
          max-width: var(--max-width);
          background: var(--page-bg);
          padding: 22px 28px;
          border-radius: 6px;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
        }

        /* Header area spacing for nav */
        .no-print {
          margin-bottom: 6px;
        }

        /* Body grid 65/35 */
        .body {
          display: grid;
          grid-template-columns: 65% 35%;
          gap: 20px;
          margin-top: 12px;
          position: relative;
          align-items: start;
        }
        .body::before {
          content: "";
          position: absolute;
          left: calc(65% + 8px);
          top: 0;
          bottom: 0;
          width: 1px;
          background: var(--divider);
          pointer-events: none;
        }

        .section-title {
          font-weight: 700;
          font-size: 16px;
          margin: 0 0 12px 0;
          position: relative;
        }
        .section-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 46px;
          height: 3px;
          border-radius: 3px;
          background: linear-gradient(90deg, var(--accent), #6f8ff8);
        }

        .jobs {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 8px;
        }

        .sidebar {
          padding: 14px;
          border-radius: 8px;
          background: linear-gradient(180deg, rgba(249, 250, 252, 0.95), #fff);
        }

        .project-title {
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 6px;
        }
        .education {
          font-size: 14px;
          color: #24343f;
        }

        .footer {
          margin-top: 18px;
          color: var(--muted);
          font-size: 12px;
        }

        @media (max-width: 980px) {
          .wrap {
            padding: 36px 14px 28px;
          }
          .body {
            grid-template-columns: 1fr;
          }
          .body::before {
            display: none;
          }
          .sidebar {
            background: transparent;
            padding: 0;
            box-shadow: none;
          }
        }

        @media print {
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
          body {
            background: white;
          }
          .wrap {
            padding: 0;
          }
          .card {
            box-shadow: none;
            border-radius: 0;
            padding: 12mm !important;
            max-width: calc(var(--max-width));
            margin: 0 auto;
          }
          .body {
            grid-template-columns: 65% 35% !important;
            gap: 14px !important;
          }
          .body::before {
            left: calc(65% + 8px) !important;
          }
          .section-title {
            font-size: 13pt;
          }
          .job ul {
            font-size: 11pt;
            line-height: 1.35;
          }
          @page {
            margin: var(--print-page-margin);
          }
        }
      `}</style>

      <div className="wrap">
        <article className="card" aria-label="Resume">
          <div className="no-print">
            <Navigation />
          </div>

          <HeroHeader
            name="Shiv Shankar Tiwari"
            subtitle="Senior Engineering Manager · Technical Architect"
            experienceYears="6.5 years of experience"
            contacts={contacts}
            heroSummary="I build and lead engineering teams to deliver reliable, high-performance mobile and web products. I combine product focus with technical execution — reducing operational risk, shortening delivery cycles, and improving end-user experience for millions of customers."
          />
          <section className="body" aria-label="Resume body">
            <div>
              <h3 className="section-title">Professional Summary</h3>
              <div
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.55,
                  color: "#223241",
                  marginBottom: 12,
                }}
              >
                I lead engineering organizations through product-focused,
                pragmatic execution. I specialize in mobile-first consumer
                products, backend architecture, and developer platforms. My
                priorities are performance, security, and developer productivity
                — delivered with measurable business outcomes.
              </div>

              <div style={{ marginTop: 16 }}>
                <h3 className="section-title">Experience</h3>
                <div className="jobs">
                  {experiences.map((e) => (
                    <ExperienceItem key={e.id} {...e} />
                  ))}
                </div>
              </div>
            </div>

            <aside className="sidebar" aria-labelledby="skillsHeading">
              <h3
                id="skillsHeading"
                className="section-title"
                style={{ marginTop: 0 }}
              >
                Core Skills
              </h3>
              <SkillSection categories={skills} clamp={9999} />
              <div style={{ marginTop: 12 }}>
                <div className="section-title" style={{ marginBottom: 8 }}>
                  Selected Projects
                </div>
                <div>
                  <div className="project-title">
                    Bitcoin Depot — BTC ATM Network
                  </div>
                  <div style={{ color: "#556777", fontSize: 13 }}>
                    Cross-platform kiosk apps and in-store checkout integrations
                    powering thousands of kiosks with high transaction volume.
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 14 }}>
                <div className="section-title" style={{ marginBottom: 8 }}>
                  Education & Certs
                </div>
                <div className="education">
                  <div style={{ fontWeight: 700 }}>
                    B.Tech — Computer Science & Engineering
                  </div>
                  <div style={{ color: "var(--muted)", marginTop: 6 }}>
                    Rajkiya Engineering College Sonbhadra • 2015 – 2019
                  </div>
                </div>
              </div>
            </aside>
          </section>

          <div className="footer">
            Full resume and portfolio available on request — or view my GitHub
            and LinkedIn profiles above.
          </div>
        </article>
      </div>
    </>
  );
}
