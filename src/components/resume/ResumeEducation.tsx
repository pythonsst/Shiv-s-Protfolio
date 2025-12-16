// src/components/resume/ResumeEducation.tsx
"use client";

import React from "react";
import { Education } from "@/data/resumeData";

interface ResumeEducationProps {
  education: Education[];
}

export default function ResumeEducation({ education }: ResumeEducationProps) {
  if (!education || education.length === 0) return null;

  return (
    <div className="resume-education-section">
      <h3 className="resume-section-title">Education & Certs</h3>
      <div className="resume-education-list">
        {education.map((edu, idx) => (
          <div key={idx} className="resume-education-item">
            <div className="resume-education-degree">{edu.degree}</div>
            <div className="resume-education-institution">
              {edu.institution}
              {edu.location && ` • ${edu.location}`}
            </div>
            <div className="resume-education-period">{edu.period}</div>
            {edu.gpa && (
              <div className="resume-education-gpa">GPA: {edu.gpa}</div>
            )}
            {edu.honors && edu.honors.length > 0 && (
              <div className="resume-education-honors">
                {edu.honors.join(", ")}
              </div>
            )}
            {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
              <div className="resume-education-coursework">
                <strong>Relevant Coursework:</strong>{" "}
                {edu.relevantCoursework.join(", ")}
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .resume-education-section {
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

        .resume-education-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .resume-education-item {
          font-size: 14px;
          line-height: 1.5;
        }

        .resume-education-degree {
          font-weight: 700;
          color: var(--resume-title, #0b1220);
          margin-bottom: 6px;
          font-size: 14.5px;
          letter-spacing: -0.01em;
        }

        .resume-education-institution {
          color: var(--resume-muted, #6b7280);
          font-size: 13.5px;
          margin-top: 5px;
          line-height: 1.5;
        }

        .resume-education-period {
          color: var(--resume-muted, #6b7280);
          font-size: 12.5px;
          margin-top: 5px;
          font-weight: 500;
        }

        .resume-education-gpa {
          color: var(--resume-muted, #6b7280);
          font-size: 12px;
          margin-top: 4px;
        }

        .resume-education-honors {
          color: var(--resume-muted, #6b7280);
          font-size: 12px;
          margin-top: 4px;
          font-style: italic;
        }

        .resume-education-coursework {
          color: var(--resume-muted, #6b7280);
          font-size: 12px;
          margin-top: 6px;
          line-height: 1.4;
        }

        @media print {
          .resume-education-section {
            margin-bottom: 12px;
          }
          .resume-section-title {
            font-size: 13pt;
            margin-bottom: 8px;
          }
          .resume-education-item {
            font-size: 11pt;
          }
          .resume-education-degree {
            font-size: 11pt;
          }
          .resume-education-institution,
          .resume-education-period,
          .resume-education-gpa,
          .resume-education-honors,
          .resume-education-coursework {
            font-size: 10pt;
          }
        }
      `}</style>
    </div>
  );
}

