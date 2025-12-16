// src/components/resume/ResumeCertifications.tsx
"use client";

import React from "react";
import { Certification } from "@/data/resumeData";

interface ResumeCertificationsProps {
  certifications?: Certification[];
}

export default function ResumeCertifications({
  certifications,
}: ResumeCertificationsProps) {
  if (!certifications || certifications.length === 0) return null;

  return (
    <div className="resume-certifications-section">
      <h3 className="resume-section-title">Certifications</h3>
      <div className="resume-certifications-list">
        {certifications.map((cert, idx) => (
          <div key={idx} className="resume-certification-item">
            <div className="resume-certification-header">
              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="resume-certification-name"
                >
                  {cert.name}
                </a>
              ) : (
                <div className="resume-certification-name">{cert.name}</div>
              )}
            </div>
            <div className="resume-certification-details">
              <span className="resume-certification-issuer">{cert.issuer}</span>
              <span className="resume-certification-separator"> • </span>
              <span className="resume-certification-date">{cert.date}</span>
              {cert.credentialId && (
                <>
                  <span className="resume-certification-separator"> • </span>
                  <span className="resume-certification-id">
                    ID: {cert.credentialId}
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .resume-certifications-section {
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

        .resume-certifications-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .resume-certification-item {
          font-size: 13.5px;
          line-height: 1.6;
        }

        .resume-certification-name {
          font-weight: 600;
          color: var(--resume-title, #0b1220);
          text-decoration: none;
          display: inline-block;
          transition: all 0.25s ease;
          letter-spacing: -0.01em;
        }

        .resume-certification-name:hover {
          color: var(--resume-accent, #2563eb);
          text-decoration: underline;
        }

        .resume-certification-details {
          color: var(--resume-muted, #6b7280);
          font-size: 12.5px;
          margin-top: 5px;
          line-height: 1.5;
        }

        .resume-certification-separator {
          color: var(--resume-muted, #6b7280);
        }

        @media print {
          .resume-certifications-section {
            margin-bottom: 12px;
          }
          .resume-section-title {
            font-size: 13pt;
            margin-bottom: 8px;
          }
          .resume-certification-item {
            font-size: 11pt;
          }
          .resume-certification-name {
            color: #000;
            text-decoration: none;
          }
          .resume-certification-details {
            font-size: 10pt;
          }
        }
      `}</style>
    </div>
  );
}

