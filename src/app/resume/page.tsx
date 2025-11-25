// src/app/resume/page.tsx  OR wherever your ResumePage was
"use client";

import React from "react";
import ResumeHeader from "@/components/ResumeHeader";
import ExperienceColumn from "@/components/ExperienceColumn";
import SidebarColumn from "@/components/SidebarColumn";
import ResumeFooter from "@/components/ResumeFooter";
import Navigation from "@/components/Navigation"; // still available if needed

export default function ResumePage() {
  return (
    <>
      <style jsx global>{`
        /* keep your existing global rules here (unchanged) */
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
        }
        /* Outer wrap — increase top padding so the name isn't hidden by the site header */
        .wrap {
          display: flex;
          justify-content: center;
          /* bump top padding to account for the fixed nav/header */
          padding: 110px 18px 48px;
        }

        .card {
          width: 100%;
          max-width: var(--max-width);
          background: var(--page-bg);
          padding: 20px 24px;
          border-radius: 8px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
        }
        .body {
          display: grid;
          grid-template-columns: 63% 37%;
          gap: 22px;
          margin-top: 8px;
          position: relative;
          align-items: start;
        }
        .body::before {
          content: "";
          position: absolute;
          left: calc(63% + 10px);
          top: 0;
          bottom: 0;
          width: 1px;
          background: var(--divider);
        }
        .section-title {
          font-weight: 700;
          font-size: 15px;
          margin: 0 0 10px;
          position: relative;
        }
        .section-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 40px;
          height: 3px;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--accent), #6f8ff8);
        }
        .jobs {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 8px;
        }
        .sidebar {
          padding: 16px;
          border-radius: 10px;
          background: #fafbff;
          border: 1px solid rgba(47, 111, 230, 0.04);
        }
        .footer {
          margin-top: 18px;
          color: var(--muted);
          font-size: 12px;
        }
        @media (max-width: 980px) {
          .wrap {
            padding: 24px 14px 28px;
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
            border: none;
          }
        }
      `}</style>

      <div className="wrap">
        <article className="card" aria-label="Resume">
          <ResumeHeader />

          <section className="body" aria-label="Resume body">
            <div>
              {/* Experience column only — hero summary is already at top */}
              <ExperienceColumn />
            </div>

            <SidebarColumn />
          </section>

          <ResumeFooter />
        </article>
      </div>
    </>
  );
}
