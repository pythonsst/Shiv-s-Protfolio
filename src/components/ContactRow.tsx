// components/ContactRow.tsx
"use client";

import React from "react";
import { ContactItem } from "@/data/contact";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

type Props = { contacts: ContactItem[] };

/* Helpers to detect type of contact (keeps rendering consistent) */
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

/* small icon factory (visual only) */
function iconFor(c: ContactItem) {
  const { href, text } = c;
  if (isMail(href, text)) return <FiMail aria-hidden />;
  if (isPhone(href, text)) return <FiPhone aria-hidden />;
  if (isLinkedin(href, text)) return <FaLinkedin aria-hidden />;
  if (isGithub(href, text)) return <FaGithub aria-hidden />;
  if (isLocation(text)) return <FiMapPin aria-hidden />;
  return null;
}

/* Accessible visually-hidden helper for sr-only text (if needed) */
function SrOnly({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        position: "absolute",
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0,0,0,0)",
        whiteSpace: "nowrap",
        border: 0,
      }}
    >
      {children}
    </span>
  );
}

export default function ContactRow({ contacts }: Props) {
  return (
    <>
      <style jsx>{`
        :root {
          --contact-size: 14px;
          --contact-color: #6b7280;
          --contact-accent: #5b21b6;
          --contact-sep: rgba(11, 17, 32, 0.12);
          --contact-gap: 12px;
        }

        /* Use list semantics for accessibility */
        nav.contact-row {
          display: flex;
          align-items: center;
          justify-content: center; /* centered under name by default */
          gap: var(--contact-gap);
          margin-top: 10px;
          font-size: var(--contact-size);
          color: var(--contact-color);
          flex-wrap: wrap;
        }

        /* Each item (list item) */
        .contact-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          line-height: 1;
          min-width: 0;
        }

        /* Icon container — consistent size & alignment */
        .contact-icon {
          width: 18px;
          height: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #4b5563;
          flex-shrink: 0;
        }

        /* Link or plain text styling */
        .contact-link,
        .contact-text {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: inherit;
          font-weight: 500;
          min-width: 0;
        }

        /* Truncate long contact items gracefully */
        .contact-link > span,
        .contact-text > span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: inline-block;
          max-width: 18ch; /* reasonable width before truncation */
        }

        .contact-link:hover,
        .contact-link:focus {
          color: var(--contact-accent);
          text-decoration: underline;
        }

        /* Dot separator */
        .sep {
          width: 6px;
          height: 6px;
          background: var(--contact-sep);
          border-radius: 50%;
          flex-shrink: 0;
          margin: 0 6px;
        }

        /* Responsive: move to left-align on narrow screens & reduce gaps */
        @media (max-width: 760px) {
          nav.contact-row {
            justify-content: flex-start;
            gap: 10px;
            font-size: 13px;
          }
          .sep {
            width: 5px;
            height: 5px;
          }
          .contact-link > span,
          .contact-text > span {
            max-width: 14ch;
          }
        }

        /* Print: plain text and solid separators */
        @media print {
          nav.contact-row {
            justify-content: flex-start;
            color: #111 !important;
            font-size: 11pt !important;
          }
          .sep {
            background: #bbb !important;
          }
          .contact-link {
            color: #111 !important;
            text-decoration: none !important;
          }
        }
      `}</style>

      <nav className="contact-row" role="list" aria-label="Contact details">
        {contacts.map((c, i) => {
          const isLast = i === contacts.length - 1;
          const icon = iconFor(c);

          const href = c.href?.trim();
          const isExternal = !!href && /^https?:\/\//i.test(href);
          const isMailLink = !!href && href.startsWith("mailto:");
          const isTel = !!href && href.startsWith("tel:");

          const linkProps: Record<string, unknown> = {};
          if (isExternal) {
            linkProps.target = "_blank";
            linkProps.rel = "noopener noreferrer";
          }

          const ariaLabel = c.ariaLabel ?? c.text;

          const labelText =
            // For long labels such as "LinkedIn" we show short label (LinkedIn/GitHub)
            isLinkedin(href, c.text) ? "LinkedIn" :
            isGithub(href, c.text) ? "GitHub" :
            c.text;

          const content = href ? (
            <a
              className="contact-link"
              href={href}
              {...linkProps}
              aria-label={ariaLabel}
              title={c.text}
            >
              {icon && <span className="contact-icon" aria-hidden>{icon}</span>}
              <span>{labelText}</span>
            </a>
          ) : (
            <span className="contact-text" aria-label={ariaLabel} title={c.text}>
              {icon && <span className="contact-icon" aria-hidden>{icon}</span>}
              <span>{labelText}</span>
            </span>
          );

          return (
            <React.Fragment key={`${c.text}-${i}`}>
              <div className="contact-item" role="listitem">
                {content}
              </div>
              {!isLast && <span className="sep" aria-hidden="true" />}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
