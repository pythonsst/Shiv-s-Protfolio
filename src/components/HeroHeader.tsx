// src/components/HeroHeader.tsx
"use client";

import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ContactItem } from "@/data/contact";

type Props = {
  name: string;
  subtitle?: string;
  years?: string | number;
  heroSummary?: string;
  contacts?: ContactItem[];
};

function iconForText(text: string) {
  const t = text.toLowerCase();
  if (t.includes("@")) return <FiMail aria-hidden="true" />;
  if (t.startsWith("+") || t.match(/^\d/)) return <FiPhone aria-hidden="true" />;
  if (t.includes("linkedin")) return <FaLinkedin aria-hidden="true" />;
  if (t.includes("github")) return <FaGithub aria-hidden="true" />;
  if (t.includes("india") || t.includes("hyderabad") || t.includes("bengaluru")) return <FiMapPin aria-hidden="true" />;
  return null;
}

/**
 * Render a readable label for the contact item:
 * - email => "Email"
 * - tel => "Phone"
 * - linkedin => "LinkedIn"
 * - github => "GitHub"
 * - otherwise, show the text (shortened)
 */
function labelFor(c: ContactItem) {
  const t = c.text.toLowerCase();
  if (t.includes("@")) return c.text; // show full email
  if (t.startsWith("+") || t.match(/^\d/)) return c.text; // show full phone
  if (t.includes("linkedin")) return "LinkedIn";
  if (t.includes("github")) return "GitHub";
  if (t.includes("india") || t.includes("hyderabad")) return c.text;
  // default: return text
  return c.text;
}

export default function HeroHeader({
  name,
  subtitle,
  years,
  heroSummary,
  contacts = [],
}: Props) {
  return (
    <header className="hero">
      <style jsx>{`
        .hero {
          margin-bottom: 12px;
          text-align: left;
        }

        .name {
          font-family: "Source Serif Pro", Georgia, serif;
          font-size: 44px;
          font-weight: 700;
          margin: 0 0 6px 0;
          letter-spacing: -0.02em;
          color: var(--text, #0b1220);
          line-height: 1;
        }

        .subtitle {
          font-size: 14px;
          color: #4b5563;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .years {
          font-size: 14px;
          color: #4b5563;
          margin-bottom: 12px;
          font-weight: 600;
        }

        /* CONTACT ROW: single-line on wide screens, wrap on small screens */
        .contact-row {
          display: flex;
          align-items: center;
          gap: 20px;
          margin: 12px 0;
          font-size: 14px;
          color: #4b5563;
          flex-wrap: nowrap;             /* keep single line on wide screens */
          overflow: hidden;              /* hide overflow instead of showing a scrollbar */
          white-space: nowrap;           /* prevent items from wrapping each other */
        }

        /* fallback: allow wrapping on narrow screens */
        @media (max-width: 980px) {
          .contact-row {
            flex-wrap: wrap;
            white-space: normal;
            overflow: visible;
            gap: 14px;
          }
        }

        .contact-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          flex: 0 0 auto;   /* do not stretch */
          min-width: 0;     /* allow ellipsis */
        }

        .contact-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          color: #3b4a59;
          flex-shrink: 0;
        }

        .contact-link,
        .contact-text {
          color: #374151;
          text-decoration: none;
          display: inline-block;
          max-width: 18ch;               /* prevent extremely long strings from breaking layout */
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          vertical-align: middle;
        }

        .contact-link:hover,
        .contact-link:focus {
          color: var(--accent, #2f6fe6);
          text-decoration: underline;
        }

        /* visual circular separator dot between items when in single-line mode */
        .sep-dot {
          width: 6px;
          height: 6px;
          background: #e5e7eb;
          border-radius: 50%;
          flex: 0 0 auto;
        }

        .summary-pill {
          background: linear-gradient(180deg, rgba(47,111,230,0.04), rgba(47,111,230,0.02));
          border: 1px solid rgba(47,111,230,0.06);
          padding: 14px 16px;
          border-radius: 8px;
          color: #172634;
          font-size: 15px;
          line-height: 1.55;
          margin-top: 6px;
        }

        @media print {
          .summary-pill {
            background: none !important;
            border: none !important;
            color: #111 !important;
          }
          .contact-link { color: #111 !important; text-decoration: none !important; }
        }
      `}</style>

      <h1 className="name">{name}</h1>

      {subtitle && <div className="subtitle">{subtitle}</div>}
      {years !== undefined && (
        <div className="years">
          {typeof years === "number" ? `${years} years of experience` : years}
        </div>
      )}

      {/* contacts: icons + human label. Nothing is hardcoded here — uses the contacts prop */}
      {contacts.length > 0 && (
        <nav aria-label="Contact details" className="contact-row">
          {contacts.map((c, idx) => {
            const isExternal = !!c.href && c.href.startsWith("http");
            const iconElem = iconForText(c.text) || null;
            const label = labelFor(c);

            return (
              <React.Fragment key={`${c.text}-${idx}`}>
                <div className="contact-item" role="listitem">
                  <span className="contact-icon" aria-hidden="true">
                    {iconElem}
                  </span>

                  {c.href ? (
                    <a
                      className="contact-link"
                      href={c.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      aria-label={c.text}
                      title={c.text}
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="contact-text" aria-label={c.text}>
                      {label}
                    </span>
                  )}
                </div>

                {idx < contacts.length - 1 && <span className="sep-dot" aria-hidden="true" />}
              </React.Fragment>
            );
          })}
        </nav>
      )}

      {heroSummary && (
        <div className="summary-pill" role="note" aria-label="Summary">
          {heroSummary}
        </div>
      )}
    </header>
  );
}
