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
  if (!resumeData) {
    return <div style={{ padding: 32 }}>Loading…</div>;
  }

  const certifications = resumeData.certifications;

  return (
    <>
      <style jsx global>{`
        /* ================= Fonts ================= */
        @import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Inter:wght@300;400;600;700&display=swap");

        :root {
          --text: #0b1220;
          --muted: #6b7280;
          --accent: #2563eb;
          --accent-2: #7c3aed;
        }

        html,
        body {
          margin: 0;
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto;
          background: #f7fafc;
          color: var(--text);
          -webkit-font-smoothing: antialiased;
        }

        /* ================= Web Layout ================= */
        .resume-wrapper {
          display: flex;
          justify-content: center;
          padding: 90px 20px 20px;
        }

        .resume-container {
          width: 100%;
          max-width: 1100px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
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
          background: linear-gradient(90deg, var(--accent), var(--accent-2));
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

        .resume-footer {
          text-align: center;
          font-size: 12px;
          color: var(--muted);
          padding: 12px 24px 16px;
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
            summary={
              "Senior Software Engineer with 6+ years of experience building high-scale, performance-critical mobile and web systems. Focused on architecture ownership, reliability, and production-grade delivery."
            }
          />

          <section className="resume-body">
            {/* LEFT COLUMN */}
            <div>
              <ResumeSummary
                summary={
                  "I design and scale high-performance mobile and web systems with a strong focus on architecture ownership, reliability, and developer productivity. I have 6+ years of experience delivering production-grade applications across fintech and consumer platforms."
                }
              />

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

          <div className="resume-footer">Full resume and portfolio available on request.</div>
        </article>
      </div>
    </>
  );
}
