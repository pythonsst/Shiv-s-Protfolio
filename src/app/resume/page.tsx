"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import ExperienceItem from "@/components/ExperienceItem";
import SkillSection from "@/components/SkillSection";
import ResumeHeader from "@/components/resume/ResumeHeader";
import ResumeSummary from "@/components/resume/ResumeSummary";
import ResumeProjects from "@/components/resume/ResumeProjects";
import ResumeEducation from "@/components/resume/ResumeEducation";
import ResumeCertifications from "@/components/resume/ResumeCertifications";
import { resumeData } from "@/data/resumeData";

export default function ResumePage() {
  // Safety check - ensure data is loaded
  if (!resumeData) {
    return (
      <div style={{ padding: "2rem", textAlign: "center", minHeight: "100vh" }}>
        <p>Loading resume data...</p>
      </div>
    );
  }

  return (
    <>
      <style jsx global>{`
        /* Fonts */
        @import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Inter:wght@300;400;600;700&display=swap");

        :root {
          --resume-bg: #ffffff;
          --resume-card-bg: #ffffff;
          --resume-muted: #6b7280;
          --resume-accent: #2563eb;
          --resume-accent-2: #7c3aed;
          --resume-title: #0b1220;
          --resume-text: #0b1220;
        }

        html,
        body {
          margin: 0;
          height: 100%;
          font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto,
            "Helvetica Neue", Arial;
          background: #f7fafc;
          color: var(--resume-text);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Ensure visibility */
        #__next {
          min-height: 100vh;
        }

        /* Outer wrapper */
        .resume-wrapper {
          display: flex;
          justify-content: center;
          padding: 90px 20px 20px;
          min-height: 100vh;
        }

        /* Main container - world-class professional design */
        .resume-container {
          width: 100%;
          max-width: 1100px;
          background: var(--resume-card-bg);
          border-radius: 0;
          overflow: visible;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.1);
          margin: 0 auto;
        }

        /* Body grid: 65/35 split for optimal readability - FAANG standard */
        .resume-body {
          display: grid;
          grid-template-columns: 65% 35%;
          gap: 40px;
          padding: 32px 40px 40px;
          align-items: start;
          position: relative;
        }

        /* Subtle divider between columns */
        .resume-body::before {
          content: "";
          position: absolute;
          left: calc(65% + 20px);
          top: 32px;
          bottom: 40px;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.05), transparent);
          pointer-events: none;
        }

        /* Section titles - world-class typography */
        .resume-section-title {
          font-size: 19px;
          font-weight: 700;
          color: var(--resume-title);
          margin: 0 0 20px 0;
          position: relative;
          padding-bottom: 14px;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .resume-section-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 55px;
          height: 3.5px;
          border-radius: 2px;
          background: linear-gradient(90deg, #2563eb 0%, #7c3aed 100%);
          box-shadow: 0 2px 4px rgba(37, 99, 235, 0.3);
        }

        /* Experience list - optimized spacing */
        .resume-experience-list {
          display: flex;
          flex-direction: column;
          gap: 28px;
          margin-top: 12px;
        }

        /* Sidebar - compact professional spacing */
        .resume-sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Subtle background for sidebar sections */
        .resume-sidebar > * {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .resume-sidebar > *:hover {
          transform: translateY(-1px);
        }

        /* Footer */
        .resume-footer {
          padding: 12px 28px 18px;
          text-align: center;
          color: var(--resume-muted);
          font-size: 12px;
        }

        /* Responsive fallback */
        @media (max-width: 980px) {
          .resume-wrapper {
            padding: 90px 12px 12px;
          }
          .resume-body {
            grid-template-columns: 1fr;
            gap: 18px;
            padding: 12px;
          }
          .resume-name {
            font-size: 42px;
          }
        }

        @media (max-width: 640px) {
          .resume-wrapper {
            padding: 90px 10px 10px;
          }
          .resume-name {
            font-size: 36px;
            letter-spacing: -0.02em;
          }
          .resume-header {
            padding: 24px 20px 20px;
          }
        }

        /* Print rules — optimized for printing */
        @media print {
          nav,
          .no-print {
            display: none !important;
          }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          body {
            background: #fff !important;
            color: #111827 !important;
          }

          .resume-wrapper {
            padding: 0 !important;
          }

          .resume-container {
            border-radius: 0 !important;
            width: auto !important;
            max-width: 100% !important;
            box-shadow: none !important;
            background: #fff !important;
          }

          .resume-body {
            padding: 8mm 10mm 10mm !important;
            gap: 8px !important;
            display: grid !important;
            grid-template-columns: 65% 35% !important;
          }

          .resume-body::before {
            display: none !important;
          }

          .resume-section-title {
            font-size: 13pt !important;
            page-break-after: avoid !important;
            color: #000 !important;
          }

          .resume-section-title::after {
            background: linear-gradient(90deg, #2563eb, #7c3aed) !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .resume-experience-list {
            gap: 12px !important;
          }

          .resume-sidebar {
            gap: 16px !important;
          }

          .resume-footer {
            display: none !important;
          }

          /* Ensure links are visible in print */
          a {
            color: #000 !important;
            text-decoration: none !important;
          }

          a[href^="http"]:after {
            content: " (" attr(href) ")";
            font-size: 9pt;
            color: #666;
          }

          @page {
            margin: 10mm;
            size: letter;
          }

          /* Prevent page breaks inside experience items */
          .exp {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Ensure sections don't break awkwardly */
          .resume-sidebar > * {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Prevent orphaned headings */
          h1, h2, h3, h4, h5, h6 {
            page-break-after: avoid !important;
          }

          /* Keep summary together */
          .resume-summary-pill {
            page-break-inside: avoid !important;
          }
        }
      `}</style>

      <div className="resume-wrapper">
        <article className="resume-container" aria-label="Resume">
          <div className="no-print">
            <Navigation />
          </div>

          <ResumeHeader
            contact={resumeData.contact}
            summary={resumeData.summary.brief}
          />

          <section className="resume-body">
            {/* Left column: 65% - Main content */}
            <div>
              <ResumeSummary summary={resumeData.summary.detailed} />

              <div style={{ marginTop: 32 }}>
                <h3 className="resume-section-title">Experience</h3>
                <div className="resume-experience-list">
                  {resumeData.experiences.map((exp) => (
                    <ExperienceItem key={exp.id} {...exp} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right column: 35% - Sidebar */}
            <aside className="resume-sidebar">
              <SkillSection categories={resumeData.skills} clamp={6} />

              <ResumeProjects projects={resumeData.projects} />

              <ResumeEducation education={resumeData.education} />

              {resumeData.certifications &&
                resumeData.certifications.length > 0 && (
                  <ResumeCertifications
                    certifications={resumeData.certifications}
                  />
                )}
            </aside>
          </section>

          <div className="resume-footer">
            Full resume and portfolio available on request — or view my GitHub
            and LinkedIn profiles above.
          </div>
        </article>
      </div>
    </>
  );
}
