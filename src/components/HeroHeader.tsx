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
  alignCenter?: boolean; // default true
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
  /,?\s*\w+/.test(text || "") &&
  /india|city|town|usa|uk|bengaluru|hyderabad/i.test(text || "");

function iconForContact(c: ContactItem) {
  const { href, text } = c;
  if (isMail(href, text)) return <FiMail aria-hidden size={14} />;
  if (isPhone(href, text)) return <FiPhone aria-hidden size={14} />;
  if (isLinkedin(href, text)) return <FaLinkedin aria-hidden size={14} />;
  if (isGithub(href, text)) return <FaGithub aria-hidden size={14} />;
  if (isLocation(text)) return <FiMapPin aria-hidden size={14} />;
  return null;
}

function labelForContact(c: ContactItem) {
  const { href, text } = c;
  if (isLinkedin(href, text)) return "LinkedIn";
  if (isGithub(href, text)) return "GitHub";
  if (isMail(href, text) || isPhone(href, text) || isLocation(text)) return text;
  return text;
}

/** highlight years inside summary */
function renderSummaryWithHighlight(rawSummary?: string, yearsProp?: number | string) {
  if (!rawSummary && !yearsProp) return null;

  let summary = rawSummary ? String(rawSummary).trim() : "";
  const yearsStr = yearsProp !== undefined ? String(yearsProp).trim() : "";

  const yearsTokenRegex = /(\d+(\.\d+)?\s*(?:yrs?|years?|yr\.?))/i;
  if (yearsStr && !yearsTokenRegex.test(summary)) {
    summary = summary ? `${summary} · ${yearsStr} years` : `${yearsStr} years`;
  }

  const splitRegex = /(\d+(?:\.\d+)?\s*(?:yrs?|years?|yr\.?))/gi;
  const tokens = summary.split(splitRegex).filter((t) => t !== undefined && t !== "");

  return (
    <div className="summary-pill" role="note">
      {tokens.map((t, idx) => {
        if (splitRegex.test(t)) {
          splitRegex.lastIndex = 0;
          return (
            <span key={idx} className="years" aria-label={`${t} experience`}>
              {t}
            </span>
          );
        }
        return <span key={idx}>{t}</span>;
      })}
    </div>
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
        .hero {
          margin-bottom: 14px;
        }

        .hero.center { text-align: center; }
        .hero.left { text-align: left; }

        /* tightened clamp to avoid huge headers on wide screens */
        .name {
          font-family: "Source Serif Pro", Georgia, serif;
          font-size: clamp(22px, 2.4vw, 34px); /* less aggressive scaling */
          font-weight: 700;
          margin: 0 0 6px 0;
          letter-spacing: -0.02em;
          color: var(--text, #0b1220);
          line-height: 1.02;
        }

        .subtitle {
          font-size: 14px;
          color: var(--muted, #6b7280);
          font-weight: 600;
          margin-bottom: 8px;
        }

        .years {
          color: var(--accent, #2f6fe6);
          font-weight: 800;
          margin-left: 6px;
          white-space: nowrap;
        }

        /* CONTACT ROW */
        .contact-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin: 10px 0;
          font-size: 14px;
        }

        .hero.left .contact-row { justify-content: flex-start; }

        .contact-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #374151;
          white-space: nowrap;
          font-weight: 500;
        }

        .contact-link { color: #374151; text-decoration: none; }
        .contact-link:hover, .contact-link:focus { color: var(--accent, #2f6fe6); text-decoration: underline; }

        .contact-icon { display: inline-flex; align-items: center; justify-content: center; color: #4b5563; margin-top: -1px; }

        .dot { display: inline-block; width: 6px; height: 6px; background: #e9edf2; border-radius: 50%; margin: 0 8px; }

        .contact-row { flex-wrap: nowrap; overflow: visible; }
        @media (max-width: 920px) {
          .contact-row { flex-wrap: wrap; justify-content: center; gap: 10px; }
          .hero.left .contact-row { justify-content: flex-start; }
        }

        .summary-pill {
          margin-top: 10px;
          display: inline-block;
          background: linear-gradient(180deg, rgba(47,111,230,0.03), rgba(47,111,230,0.01));
          border: 1px solid rgba(47,111,230,0.05);
          padding: 12px 14px;
          border-radius: 8px;
          color: #172634;
          font-size: 15px;
          line-height: 1.55;
          text-align: center;
          max-width: 920px; /* prevent extremely long single-line summary */
          width: min(92%, 920px);
        }

        .hero.center .summary-pill { margin-left: auto; margin-right: auto; display: block; text-align: center; }

        @media print {
          .summary-pill { background: transparent !important; border: none !important; color: #111 !important; }
          .contact-link { color: #111 !important; text-decoration: none !important; }
        }
      `}</style>

      <h1 className="name">{name}</h1>
      {subtitle && <div className="subtitle">{subtitle}</div>}

      {contacts.length > 0 && (
        <nav aria-label="Contact details" className="contact-row">
          {contacts.map((c, idx) => {
            const label = labelForContact(c) ?? c.text;
            const icon = iconForContact(c);
            const href = c.href;
            const showShortLabel = isLinkedin(href, c.text) || isGithub(href, c.text);

            return (
              <React.Fragment key={`${label}-${idx}`}>
                <div className="contact-item" role="listitem">
                  <span className="contact-icon" aria-hidden>{icon}</span>
                  {href ? (
                    <a
                      className="contact-link"
                      href={href}
                      target={href?.startsWith("http") ? "_blank" : undefined}
                      rel={href?.startsWith("http") ? "noreferrer" : undefined}
                      aria-label={c.ariaLabel ?? label}
                      title={label}
                    >
                      {showShortLabel ? label : label}
                    </a>
                  ) : (
                    <span>{label}</span>
                  )}
                </div>
                {idx < contacts.length - 1 && <span className="dot" aria-hidden />}
              </React.Fragment>
            );
          })}
        </nav>
      )}

      {renderSummaryWithHighlight(heroSummary, years)}
    </header>
  );
}
