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
          background: linear-gradient(90deg, var(--resume-accent) 0%, var(--resume-accent-2) 100%);
          box-shadow: none;
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
          color: var(--resume-title);
          text-decoration: none;
          display: inline-block;
          transition: all 0.25s ease;
          letter-spacing: -0.01em;
        }

        .resume-certification-name:hover {
          color: var(--resume-accent);
          text-decoration: underline;
        }

        .resume-certification-details {
          color: var(--resume-muted);
          font-size: 12.5px;
          margin-top: 5px;
          line-height: 1.5;
        }

        .resume-certification-separator {
          color: var(--resume-muted);
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

