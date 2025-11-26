// src/components/HeroHeader.tsx
"use client";

import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export type ContactItem = { text: string; href?: string; ariaLabel?: string };

type Props = {
  name: string;
  heroSummary?: string;
  contacts?: ContactItem[];
  alignCenter?: boolean;
  subtitle?: string;
  years?: number | string;
};

const isLinkedin = (href?: string, text?: string) =>
  !!href?.includes("linkedin") || /linkedin/i.test(text || "");
const isGithub = (href?: string, text?: string) =>
  !!href?.includes("github") || /github/i.test(text || "");
const isMail = (href?: string, text?: string) =>
  !!(href?.startsWith("mailto:") || (text || "").includes("@"));
const isPhone = (href?: string, text?: string) =>
  !!(href?.startsWith("tel:") || /^\+?\d/.test(text || ""));
const isLocation = (text?: string) =>
  /india|usa|uk|bengaluru|hyderabad/i.test(text || "");

function iconForContact(c: ContactItem) {
  const { href, text } = c;
  if (isMail(href, text)) return <FiMail size={14} />;
  if (isPhone(href, text)) return <FiPhone size={14} />;
  if (isLinkedin(href, text)) return <FaLinkedin size={14} />;
  if (isGithub(href, text)) return <FaGithub size={14} />;
  if (isLocation(text)) return <FiMapPin size={14} />;
  return null;
}

function labelForContact(c: ContactItem) {
  const { href, text } = c;
  if (isLinkedin(href, text)) return "LinkedIn";
  if (isGithub(href, text)) return "GitHub";
  return text;
}

function sanitizeAllowInline(raw: string) {
  if (!raw) return "";
  return raw.replace(/<(?!\/?(strong|b|em|i)\b)[^>]*>/gi, "");
}

function renderSummaryWithHighlight(rawSummary?: string, yearsProp?: number | string) {
  if (!rawSummary && !yearsProp) return null;

  let summary = rawSummary ? String(rawSummary).trim() : "";
  const yearsStr = yearsProp ? String(yearsProp).trim() : "";

  const yearsRegex = /(\d+(\.\d+)?\s*(yrs?|years?))/i;
  if (yearsStr && !yearsRegex.test(summary)) {
    summary = summary
      ? `${summary} · <strong>${yearsStr} years</strong>`
      : `<strong>${yearsStr} years</strong>`;
  }

  const sanitized = sanitizeAllowInline(summary);

  return (
    <div
      className="summary-pill"
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  );
}

export default function HeroHeader({
  name,
  heroSummary,
  contacts = [],
  alignCenter = true,
  subtitle,
  years,
}: Props) {
  return (
    <header className={`hero ${alignCenter ? "center" : "left"}`}>
      <style jsx>{`
        .hero { margin-bottom: 12px; }

        .name {
          font-family: var(--font-serif);
          font-size: var(--size-name);
          font-weight: 700;
          margin: 0 0 4px 0;
          letter-spacing: -0.02em;
          color: var(--text);
          line-height: 1.05;
          text-align: center;
        }

        .subtitle {
          font-size: 13px;
          color: var(--muted);
          font-weight: 600;
          margin-bottom: 6px;
        }

        /* CONTACT ROW */
        .contact-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 8px 0 6px;
          font-size: var(--size-meta);
          flex-wrap: wrap;
          justify-content: center;
          color: var(--muted);
        }

        .hero.left .contact-row { justify-content: flex-start; }

        .contact-item { display: inline-flex; align-items: center; gap: 6px; color: var(--muted); font-weight: 500; white-space: nowrap; }
        .contact-icon { color: var(--muted); display:inline-flex; align-items:center; }
        .contact-link { color: var(--muted); text-decoration: none; font-weight: 500; }
        .contact-link:hover { color: var(--accent); text-decoration: underline; }

        .dot { width: 5px; height: 5px; background: rgba(11,18,32,0.08); border-radius: 50%; display:inline-block; }

        /* SUMMARY PILL aligns with body */
        .summary-pill {
          margin-top: 10px;
          background: transparent;
          border: none;
          color: var(--body);
          font-size: var(--size-body);
          line-height: 1.45;
          padding: 0;
          width: 100%;
          text-align: left;
        }

        .summary-pill strong { color: var(--accent); }

        @media print {
          .contact-link, .contact-item, .contact-icon { color: #000 !important; }
          .summary-pill strong { color: #000 !important; }
        }
      `}</style>

      <h1 className="name">{name}</h1>
      {subtitle && <div className="subtitle">{subtitle}</div>}

      {contacts.length > 0 && (
        <nav className="contact-row">
          {contacts.map((c, idx) => {
            const label = labelForContact(c);
            const icon = iconForContact(c);
            const href = c.href;
            const showShort = isLinkedin(href, c.text) || isGithub(href, c.text);

            return (
              <React.Fragment key={idx}>
                <div className="contact-item">
                  <span className="contact-icon">{icon}</span>
                  {href ? (
                    <a className="contact-link" href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noreferrer" : undefined}>
                      {showShort ? label : label}
                    </a>
                  ) : (
                    <span>{label}</span>
                  )}
                </div>

                {idx < contacts.length - 1 && <span className="dot" />}
              </React.Fragment>
            );
          })}
        </nav>
      )}

      {renderSummaryWithHighlight(heroSummary, years)}
    </header>
  );
}
