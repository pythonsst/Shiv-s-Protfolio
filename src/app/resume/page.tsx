"use client";

import ExperienceItem from "@/components/ExperienceItem";
import Navigation from "@/components/Navigation";
import SkillSection from "@/components/SkillSection";
import { experiences } from "@/data/experiences";
import skills from "@/data/skillsData";
import skillCategories from "@/data/skillsData";

export default function ResumePagePolished65_35() {
  return (
    <>
      <style jsx global>{`
        /* Fonts */
        @import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Inter:wght@300;400;600;700&display=swap");

        :root {
          --bg: #f7fafc;
          --card-bg: #ffffff;
          --muted: #6b7280;
          --accent: #2563eb;
          --accent-2: #7c3aed;
          --title: #0b1220;
          --text: #0b1220;
        }

        html,
        body {
          margin: 0;
          height: 100%;
          font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto,
            "Helvetica Neue", Arial;
          background: var(--bg);
          color: var(--text);
        }

        /* Outer wrapper */
        .wrap {
          display: flex;
          justify-content: center;
          padding: 18px 18px;
        }

        /* Main container - flat, borderless */
        .card {
          width: 100%;
          max-width: 1060px;
          background: var(--card-bg);
          border-radius: 0;
          overflow: hidden;
        }

        /* Header */
        .header {
          text-align: center;
          padding: 18px 28px 8px;
        }
        .name {
          font-family: "Merriweather", serif;
          font-size: 46px;
          font-weight: 700;
          color: var(--title);
          margin: 0;
          line-height: 1;
        }
        .subtitle {
          margin-top: 6px;
          color: var(--muted);
          font-weight: 600;
          font-size: 13px;
        }

        /* Summary (flat, subtle) */
        .summary-pill {
          margin: 14px auto 10px;
          max-width: 980px;
          padding: 10px 14px;
          border-radius: 6px;
          background: rgba(37, 99, 235, 0.03);
          color: #1f2d3d;
          font-size: 14px;
          line-height: 1.5;
        }

        .contact-row {
          margin-top: 10px;
          color: var(--muted);
          display: flex;
          gap: 10px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          font-size: 13px;
        }

        /* Body grid: 65/35 */
        .body {
          display: grid;
          grid-template-columns: 65% 35%;
          gap: 28px;
          padding: 18px 28px 28px;
          align-items: start;
        }

        /* Section titles */
        .section-title {
  font-size: 16px;
  font-weight: 700;
  position: relative;
}

.section-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 40px;
  height: 3px;
  border-radius: 3px;
  background: linear-gradient(90deg, #2563eb, #7c3aed);
}


        /* Summary box */
        .summary-box {
          background: transparent;
          border-radius: 6px;
          padding: 6px 0;
          color: #28364a;
          line-height: 1.5;
          font-size: 14px;
        }

        /* Experience list */
        .jobs {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-top: 6px;
        }

        .job {
          background: transparent;
          padding: 6px 0;
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: flex-start;
          margin-bottom: 6px;
        }

        .job-left {
          min-width: 0;
        }

        .job-title {
          font-weight: 700;
          font-size: 18px;
          color: var(--title);
          margin: 0;
        }

        .job-org {
          margin-top: 6px;
          font-size: 13px;
          color: #2563eb;
          font-weight: 600;
        }

        .job-location {
          margin-top: 3px;
          font-size: 12px;
          color: var(--muted);
        }

        .job-period {
          font-size: 12px;
          color: var(--muted);
          padding-left: 6px;
          white-space: nowrap;
          margin-left: 6px;
        }

        .job ul {
          margin-top: 10px;
          padding-left: 18px;
          color: #26323f;
          line-height: 1.6;
          font-size: 14px;
        }
        .job li {
          margin-bottom: 8px;
        }

        /* Sidebar */
        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .card-box {
          background: transparent;
          padding: 0;
        }

        /* Skills */
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 6px;
        }
        .skill {
          font-size: 12px;
          padding: 6px 8px;
          border-radius: 999px;
          background: rgba(10, 14, 22, 0.04);
          color: #101827;
        }

        .muted {
          color: var(--muted);
          font-size: 13px;
          margin-top: 8px;
        }

        /* Project card (flat, minimal) */
        .project-title {
          font-weight: 700;
          color: var(--title);
          margin-bottom: 6px;
          font-size: 14px;
        }

        /* Education */
        .education {
          font-size: 14px;
          line-height: 1.45;
        }

        /* Footer */
        .footer {
          padding: 12px 28px 18px;
          text-align: center;
          color: var(--muted);
          font-size: 12px;
        }

        /* Responsive fallback */
        @media (max-width: 980px) {
          .body {
            grid-template-columns: 1fr;
            gap: 18px;
            padding: 12px;
          }
          .name {
            font-size: 36px;
          }
          .summary-pill {
            font-size: 13px;
          }
        }

        /* Print rules — condensed and print-optimized */
        @media print {
          nav,
          .no-print {
            display: none !important;
          }
          body {
            background: #fff;
            color: #111827;
          }
          .wrap {
            padding: 0;
          }
          .card {
            border-radius: 0;
            width: auto;
          }
          .header {
            padding-top: 8px;
            padding-bottom: 6px;
          }
          .name {
            font-size: 20pt;
          }
          .subtitle {
            font-size: 9pt;
          }
          .summary-pill {
            padding: 6px;
            font-size: 11pt;
            margin-bottom: 8px;
            background: transparent;
          }
          .body {
            padding: 8mm 10mm 10mm;
            gap: 8px;
          }
          .section-title {
            font-size: 13pt;
          }
          .job {
            padding: 4px 0;
          }
          .job-title {
            font-size: 12.5pt;
          }
          .job ul {
            font-size: 11pt;
            line-height: 1.3;
            margin-top: 8px;
            padding-left: 14px;
          }
          .footer {
            display: none;
          }
          @page {
            margin: 10mm;
          }
        }
      `}</style>

      <div className="wrap">
        <article
          className="card"
          aria-label="Resume — Shiv Shankar Tiwari (65/35)"
        >
          <div className="no-print">
            <Navigation />
          </div>

          <header className="header">
            <h1 className="name">Shiv Shankar Tiwari</h1>
            <div className="subtitle">
              Senior Engineering Manager · Technical Architect
            </div>

            <div className="summary-pill" role="note" aria-label="Summary">
              I build and lead engineering teams to deliver reliable,
              high-performance mobile and web products. I combine product focus
              with technical execution — reducing operational risk, shortening
              delivery cycles, and improving end-user experience for millions of
              customers.
            </div>

            <div className="contact-row">
              <a href="mailto:pythonsst@gmail.com">pythonsst@gmail.com</a> •
              <a href="tel:+917007746087">+91 7007746087</a> •
              <span>Hyderabad, India</span> •
              <a
                href="https://linkedin.com/in/mobile-engineer"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>{" "}
              •
              <a
                href="https://github.com/pythonsst"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </header>

          <section className="body">
            {/* Left column: 65% */}
            <div>
              <div>
                <h3 className="section-title">Professional Summary</h3>
                <div className="summary-box">
                  I lead engineering organizations through product-focused,
                  pragmatic execution. I specialize in mobile-first consumer
                  products, backend architecture, and developer platforms. My
                  priorities are performance, security, and developer
                  productivity — delivered with measurable business outcomes.
                </div>
              </div>

              <div style={{ marginTop: 14 }}>
                <h3 className="section-title">Experience</h3>

                {experiences.map((exp) => (
                  <ExperienceItem key={exp.id} {...exp} />
                ))}
              </div>
            </div>

            {/* Right column: 35% */}
            <aside className="sidebar">
              <div className="sidebar">
<SkillSection categories={skills} clamp={6} />
    </div>

              <div className="card-box">
                <div className="section-title" style={{ marginBottom: 8 }}>
                  Selected Projects
                </div>
                <div>
                  <div className="project-title">
                    Bitcoin Depot — BTC ATM Network
                  </div>
                  <div className="muted">
                    Cross-platform apps and in-store checkout integrations
                    powering thousands of kiosks and processing significant
                    transaction volumes.
                  </div>
                </div>
              </div>

              <div className="card-box">
                <div className="section-title" style={{ marginBottom: 8 }}>
                  Education & Certs
                </div>
                <div className="education">
                  <div style={{ fontWeight: 700 }}>
                    B.Tech — Computer Science & Engineering
                  </div>
                  <div className="muted" style={{ marginTop: 6 }}>
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
