// src/app/resume/page.tsx
"use client";

import React, { useEffect } from "react";
import ResumeHeader from "@/features/resume/components/Header";
import ExperienceColumn from "@/features/resume/components/Experience";
import SidebarColumn from "@/features/resume/components/Sidebar";
import EducationBlock from "@/components/EducationBlock";

/**
 * Narrowly type document for fonts access (no `any`).
 * FontFaceSet is part of lib.dom so this is safe.
 */
type DocumentWithFonts = Document & { fonts?: FontFaceSet };

export default function ResumePage() {
  useEffect(() => {
    let printLink: HTMLLinkElement | null = null;

    function addPrintAssets() {
      document.documentElement.classList.add("resume-print");

      if (!printLink) {
        printLink = document.createElement("link");
        printLink.rel = "stylesheet";
        printLink.href = "/resume-print.css";
        // using media="print" is OK, but some browsers apply print CSS earlier if media="all".
        // Keep what you had:
        printLink.media = "print";
        printLink.id = "resume-print-link";
        document.head.appendChild(printLink);
      }

      // Ensure web fonts are ready before print preview renders (best-effort).
      try {
        const doc = document as DocumentWithFonts;
        if (doc.fonts && typeof doc.fonts.ready?.then === "function") {
          // fonts.ready is a Promise — wait then force a reflow
          doc.fonts.ready.then(() => void document.body.offsetHeight).catch(() => void document.body.offsetHeight);
        }
      } catch {
        // ignore any errors here
      }
    }

    function removePrintAssets() {
      document.documentElement.classList.remove("resume-print");
      if (printLink && printLink.parentNode) {
        printLink.parentNode.removeChild(printLink);
        printLink = null;
      }
    }

    window.addEventListener("beforeprint", addPrintAssets);
    window.addEventListener("afterprint", removePrintAssets);
    // Fallback: some browsers don't reliably emit afterprint, so remove when window regains focus.
    window.addEventListener("focus", removePrintAssets);

    return () => {
      window.removeEventListener("beforeprint", addPrintAssets);
      window.removeEventListener("afterprint", removePrintAssets);
      window.removeEventListener("focus", removePrintAssets);
      removePrintAssets();
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        /* keep screen styles here unchanged — these are your current styles */
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Source+Serif+Pro:wght@600;700&display=swap");

        :root {
          --font-sans: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
          --font-serif: "Source Serif Pro", Georgia, serif;
          --text: #0b1220;
          --body: #111827;
          --muted: #6b7280;
          --accent: #5b21b6;
          --divider: rgba(11,17,32,0.06);
          --size-name: 32px;
          --size-section: 15px;
          --size-title: 13px;
          --size-body: 13px;
          --size-meta: 11.5px;
          --max-width: 860px;
          --print-page-margin: 8mm;
        }

        * { box-sizing: border-box; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; }
        html,body,#__next { height:100%; }
        html, body {
          margin:0; padding:0;
          font-family: var(--font-sans);
          font-size: var(--size-body);
          color: var(--body);
          background: #ffffff !important;
        }

        .hero .name {
          font-family: var(--font-serif);
          font-size: var(--size-name);
          font-weight: 600;
          color: var(--text);
          margin: 8px 0;
          line-height: 1.03;
          text-align: center;
        }

        .summary-pill {
          font-size: var(--size-body);
          line-height: 1.45;
          color: var(--body);
          margin-top: 8px;
          text-align: left;
          background: transparent !important;
          border: none !important;
        }

        .contact-row, .contact-item, .contact-link, .contact-icon {
          font-size: var(--size-meta);
          color: var(--muted);
        }

        .section-title, .skills-heading, .marissa-skill-title {
          font-size: var(--size-section);
          font-weight: 700;
          color: var(--text);
          margin: 0 0 6px;
        }
        .section-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 36px;
          height: 3px;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--accent), #6f8ff8);
        }

        .wrap {
          display:flex;
          justify-content:center;
          padding: 60px 18px 28px;
        }

        .card {
          width:100%;
          max-width: var(--max-width);
          background: #ffffff;
          padding: 32px;
          border: 1px solid rgba(11, 17, 32, 0.12);
          border-radius: 6px;
        }

        .body {
          display: grid;
          grid-template-columns: 65% 35%;
          gap: 18px;
          position: relative;
          align-items: start;
          margin-top: 8px;
        }

        .body::before {
          content: "";
          position: absolute;
          left: calc(65% + 8px);
          top: 0;
          bottom: 0;
          width: 1px;
          background: var(--divider);
        }

        .jobs { display:flex; flex-direction:column; gap: 12px; }

        .exp { padding: 0; margin: 0; }
        .exp + .exp { border-top: 1px dashed rgba(11, 17, 32, 0.06); padding-top: 12px; margin-top: 12px; }

        .sidebar { padding: 0; }
        .sidebar .skill-section { padding: 0; }
        .sidebar .skills-heading { margin-bottom: 10px; }

        @media (max-width: 980px) {
          .wrap { padding: 20px 14px 24px; }
          .card { padding: 20px; }
          .body { grid-template-columns: 1fr; }
          .body::before { display: none; }
          .hero .name { text-align: left; }
        }

        .header-divider {
          width: 100%;
          border-bottom: 1px solid rgba(11, 17, 32, 0.08);
          margin-top: 18px;
          margin-bottom: 18px;
        }

        /* small print-safe defaults retained here but the full print style is in public/resume-print.css */
        @media print {
          @page { margin: var(--print-page-margin); }
          :root { --accent: #000; --muted: #000; --body: #000; }
          .wrap { padding: 0; }
          .body::before { display: none; }
          .card { border: 1px solid #000 !important; padding: 20px !important; border-radius: 0 !important; }
        }
      `}</style>

      <div className="wrap">
        <article className="card" aria-label="Resume">
          <ResumeHeader />
          <div className="header-divider" />
          <section className="body" aria-label="Resume body">
            <div>
              <ExperienceColumn />
              <EducationBlock />
            </div>
            <SidebarColumn />
          </section>
        </article>
      </div>
    </>
  );
}
