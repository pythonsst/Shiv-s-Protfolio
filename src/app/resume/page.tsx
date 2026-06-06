"use client";

import React from "react";
import Navigation from "@/components/ui/Navigation";
import ExperienceItem from "@/components/resume/ExperienceItem";
import SkillSection from "@/components/resume/SkillSection";
import ResumeHeader from "@/components/resume/ResumeHeader";
import ResumeSummary from "@/components/resume/ResumeSummary";
import ResumeProjects from "@/components/resume/ResumeProjects";
import ResumeEducation from "@/components/resume/ResumeEducation";
import ResumeCertifications from "@/components/resume/ResumeCertifications";
import { resumeData } from "@/data/resumeData";

export default function ResumePage() {
  if (!resumeData) {
    return <div style={{ padding: 32 }}>Loading…</div>;
  }

  const certifications = resumeData.certifications;

  return (
    <>
      <style jsx global>{`
        /* ================= Fonts ================= */
        @import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Inter:wght@300;400;600;700&display=swap");

        html,
        body {
          margin: 0;
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto;
          -webkit-font-smoothing: antialiased;
        }

        /* ================= Theme tokens (light) ================= */
        .resume-wrapper {
          --resume-page-bg: #e9e0cd;
          --resume-surface: #ffffff;
          --resume-title: #0b1220;
          --resume-text: #2b3744;
          --resume-muted: #6b7280;
          --resume-accent: #0b7b6e;
          --resume-accent-2: #c99628;
          --resume-border: rgba(11, 18, 32, 0.08);
          --resume-soft-bg: rgba(11, 123, 110, 0.06);
          --resume-chip-bg: rgba(11, 123, 110, 0.07);
          --resume-chip-bg-hover: rgba(11, 123, 110, 0.12);
          --resume-chip-border: rgba(11, 123, 110, 0.16);
          --resume-chip-text: #0b3d37;
          --resume-shadow: 0 10px 40px rgba(2, 6, 23, 0.1);
        }

        /* ================= Theme tokens (dark) ================= */
        :global(.dark) .resume-wrapper {
          --resume-page-bg: #0a0a0c;
          --resume-surface: #16161c;
          --resume-title: #fff7e0;
          --resume-text: #d6d0c2;
          --resume-muted: #a89f8c;
          --resume-accent: #46b08d;
          --resume-accent-2: #d9a73a;
          --resume-border: rgba(255, 255, 255, 0.1);
          --resume-soft-bg: rgba(70, 176, 141, 0.1);
          --resume-chip-bg: rgba(70, 176, 141, 0.12);
          --resume-chip-bg-hover: rgba(70, 176, 141, 0.2);
          --resume-chip-border: rgba(70, 176, 141, 0.28);
          --resume-chip-text: #bfe9da;
          --resume-shadow: 0 16px 50px rgba(0, 0, 0, 0.55);
        }

        /* ================= Web Layout ================= */
        .resume-wrapper {
          display: flex;
          justify-content: center;
          padding: 90px 20px 40px;
          background: var(--resume-page-bg);
          min-height: 100vh;
          transition: background-color 0.3s ease;
        }

        .resume-container {
          width: 100%;
          max-width: 1100px;
          background: var(--resume-surface);
          border: 1px solid var(--resume-border);
          border-radius: 16px;
          box-shadow: var(--resume-shadow);
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        .resume-body {
          display: grid;
          grid-template-columns: 65% 35%;
          gap: 40px;
          padding: 32px 40px 40px;
          align-items: start;
        }

        .resume-section-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--resume-title);
          margin-bottom: 16px;
          padding-bottom: 12px;
          position: relative;
        }

        .resume-section-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 3px;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--resume-accent), var(--resume-accent-2));
        }

        .resume-experience-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .resume-sidebar {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* ================= Responsive ================= */
        @media (max-width: 980px) {
          .resume-body {
            grid-template-columns: 1fr;
            padding: 20px;
            gap: 24px;
          }
        }

        /* ================= PRINT (PDF) ================= */
        @media print {
          /* Always print on white paper, regardless of the active theme */
          .resume-wrapper,
          :global(.dark) .resume-wrapper {
            --resume-page-bg: #ffffff;
            --resume-surface: #ffffff;
            --resume-title: #000000;
            --resume-text: #111111;
            --resume-muted: #333333;
            --resume-accent: #1f5f54;
            --resume-accent-2: #7a5c12;
            --resume-border: rgba(0, 0, 0, 0.15);
            --resume-soft-bg: transparent;
            --resume-chip-bg: transparent;
            --resume-chip-bg-hover: transparent;
            --resume-chip-border: #cccccc;
            --resume-chip-text: #111111;
            --resume-shadow: none;
          }

          nav,
          .no-print {
            display: none !important;
          }

          body {
            background: #ffffff !important;
            color: #000000 !important;
          }

          .resume-wrapper {
            padding: 0 !important;
          }

          .resume-container {
            box-shadow: none !important;
            border: none !important;
            max-width: 100% !important;
          }

          /* Keep grid for correct reading order */
          .resume-body {
            grid-template-columns: 65% 35% !important;
            gap: 14mm !important;
            padding: 8mm 10mm !important;
          }

          /* Allow natural pagination on containers */
          .resume-body > div,
          .resume-body > aside {
            break-inside: auto;
          }

          /* Protect only atomic items */
          .exp {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          /* Flatten decorative UI */
          .resume-summary-pill {
            background: none !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin-bottom: 6mm !important;
          }

          /* Header compression for PDF */
          .resume-header {
            padding-top: 2mm !important;
            padding-bottom: 3mm !important;
          }

          .resume-name {
            font-size: 26pt !important;
            margin-bottom: 1mm !important;
          }

          .resume-subtitle {
            font-size: 10pt !important;
            margin-bottom: 2mm !important;
          }

          .resume-footer {
            display: none !important;
          }

          @page {
            size: A4;
            margin: 10mm;
          }
        }
      `}</style>

      <div className="resume-wrapper">
        <article className="resume-container">
          <div className="no-print">
            <Navigation />
          </div>

          {/* Header + concise IC-aligned brief */}
          <ResumeHeader
            contact={resumeData.contact}
            summary={resumeData.summary.brief}
          />

          <section className="resume-body">
            {/* LEFT COLUMN */}
            <div>
              <ResumeSummary summary={resumeData.summary.detailed} />

              <h3 className="resume-section-title">Experience</h3>

              <div className="resume-experience-list">
                {resumeData.experiences.map((exp) => (
                  <ExperienceItem key={exp.id} {...exp} />
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <aside className="resume-sidebar">
              {/* Slightly tighter clamp for PDF balance */}
              <SkillSection categories={resumeData.skills} clamp={5} />
              <ResumeProjects projects={resumeData.projects} />
              <ResumeEducation education={resumeData.education} />
              {certifications && certifications.length > 0 && (
                <ResumeCertifications certifications={certifications} />
              )}
            </aside>
          </section>
        </article>
      </div>
    </>
  );
}
