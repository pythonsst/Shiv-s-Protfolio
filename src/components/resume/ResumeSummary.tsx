// src/components/resume/ResumeSummary.tsx
"use client";

import React from "react";

interface ResumeSummaryProps {
  summary: string;
}

export default function ResumeSummary({ summary }: ResumeSummaryProps) {
  return (
    <div className="resume-summary-section">
      <h3 className="resume-section-title">Professional Summary</h3>
      <div className="resume-summary-content">{summary}</div>

      <style jsx>{`
        .resume-summary-section {
          margin-bottom: 24px;
        }

        .resume-section-title {
          font-size: 19px;
          font-weight: 700;
          color: var(--resume-title, #0b1220);
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

        .resume-summary-content {
          background: transparent;
          border-radius: 6px;
          padding: 0;
          color: #28364a;
          line-height: 1.7;
          font-size: 14.5px;
        }

        @media print {
          .resume-summary-section {
            margin-bottom: 12px;
          }
          .resume-section-title {
            font-size: 13pt;
            margin-bottom: 8px;
          }
          .resume-summary-content {
            font-size: 11pt;
            line-height: 1.5;
          }
        }
      `}</style>
    </div>
  );
}

