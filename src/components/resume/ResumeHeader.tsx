// src/components/resume/ResumeHeader.tsx
"use client";

import React from "react";
import { ContactInfo } from "@/data/resumeData";

interface ResumeHeaderProps {
  contact: ContactInfo;
  summary: string;
}

export default function ResumeHeader({ contact, summary }: ResumeHeaderProps) {
  return (
    <header className="resume-header">
      <h1 className="resume-name">{contact.name}</h1>
      <div className="resume-title">{contact.title}</div>

      <div
        className="resume-summary-pill"
        role="note"
        aria-label="Summary"
        dangerouslySetInnerHTML={{
          __html: summary.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
        }}
      />

      <div className="resume-contact-row">
        <a href={`mailto:${contact.email}`} className="resume-contact-item">
          <svg className="resume-contact-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>{contact.email}</span>
        </a>
        <span className="separator">•</span>
        <a href={`tel:${contact.phone}`} className="resume-contact-item">
          <svg className="resume-contact-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span>{contact.phone}</span>
        </a>
        <span className="separator">•</span>
        <span className="resume-contact-item">
          <svg className="resume-contact-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>{contact.location}</span>
        </span>
        {contact.linkedin && (
          <>
            <span className="separator">•</span>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="resume-contact-item">
              <svg className="resume-contact-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </>
        )}
        {contact.github && (
          <>
            <span className="separator">•</span>
            <a href={contact.github} target="_blank" rel="noreferrer" className="resume-contact-item">
              <svg className="resume-contact-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C17.138 18.18 20 14.42 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              <span>GitHub</span>
            </a>
          </>
        )}
        {contact.website && (
          <>
            <span className="separator">•</span>
            <a href={contact.website} target="_blank" rel="noreferrer" className="resume-contact-item">
              <svg className="resume-contact-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
              </svg>
              <span>Website</span>
            </a>
          </>
        )}
      </div>

      <style jsx>{`
        .resume-header {
          text-align: center;
          padding: 32px 40px 24px;
          width: 100%;
          box-sizing: border-box;
          overflow: visible;
        }

        .resume-name {
          font-family: "Merriweather", serif;
          font-size: 54px;
          font-weight: 700;
          color: var(--resume-title, #0b1220);
          margin: 0;
          line-height: 1.15;
          letter-spacing: -0.03em;
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          max-width: 100%;
        }

        .resume-title {
          margin-top: 12px;
          color: var(--resume-muted, #6b7280);
          font-weight: 600;
          font-size: 15px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          word-wrap: break-word;
        }

        .resume-summary-pill {
          margin: 26px auto 20px;
          max-width: 1000px;
          padding: 18px 26px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.06), rgba(124, 58, 237, 0.05));
          color: #1f2d3d;
          font-size: 14.5px;
          line-height: 1.75;
          border: 1px solid rgba(37, 99, 235, 0.12);
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.1);
          word-wrap: break-word;
        }

        .resume-summary-pill :global(strong) {
          font-weight: 700;
          color: #0b1220;
        }

        .resume-contact-row {
          margin-top: 20px;
          color: var(--resume-muted, #6b7280);
          display: flex;
          gap: 16px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          font-size: 13.5px;
          line-height: 1.6;
          max-width: 100%;
        }

        .resume-contact-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--resume-muted, #6b7280);
          text-decoration: none;
          padding: 3px 0;
        }

        .resume-contact-item:hover {
          color: var(--resume-accent, #2563eb);
          text-decoration: underline;
        }

        .resume-contact-item:focus {
          outline: 2px solid var(--resume-accent, #2563eb);
          outline-offset: 2px;
          border-radius: 3px;
        }

        .resume-contact-icon {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
          opacity: 0.85;
        }

        .resume-contact-item:hover .resume-contact-icon {
          opacity: 1;
        }

        .separator {
          color: var(--resume-muted, #6b7280);
          opacity: 0.4;
          user-select: none;
        }

        @media print {
          .resume-header {
            padding-top: 8px;
            padding-bottom: 6px;
          }
          .resume-name {
            font-size: 20pt;
            word-wrap: normal;
            overflow-wrap: normal;
          }
          .resume-title {
            font-size: 9pt;
            word-wrap: normal;
          }
          .resume-summary-pill {
            padding: 6px;
            font-size: 11pt;
            margin-bottom: 8px;
            background: transparent;
            word-wrap: normal;
          }
          .resume-contact-row {
            font-size: 10pt;
          }
          .resume-contact-row a {
            color: #000;
            text-decoration: none;
          }
          .resume-summary-pill :global(strong) {
            font-weight: 700;
            color: #000;
          }
        }
      `}</style>
    </header>
  );
}

