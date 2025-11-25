// components/ContactRow.tsx
"use client";

import { ContactItem } from "@/data/contact";
import React from "react";

export default function ContactRow({ contacts }: { contacts: ContactItem[] }) {
  return (
    <>
      <style jsx>{`
        .contact-row {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 10px;
          font-size: 13px;
          color: #6b7280; /* muted */
        }

        .contact-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }

        .contact-link {
          color: inherit;
          text-decoration: none;
        }

        .contact-link:hover {
          text-decoration: underline;
          color: #2563eb; /* accent hover */
        }

        /* separator dot between items */
        .sep {
          display: inline-block;
          width: 6px;
          height: 6px;
          background: rgba(11, 17, 32, 0.12);
          border-radius: 50%;
          margin: 0 6px;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        @media print {
          .contact-row { color: #666 !important; font-size: 11pt; }
          .sep { background: #bbb !important; }
          /* make all links printable as text */
          .contact-link { color: #111; text-decoration: none; }
        }
      `}</style>

      <nav className="contact-row" aria-label="Contact details">
        {contacts.map((c, i) => {
          const isLast = i === contacts.length - 1;

          // Render anchor if href exists, otherwise plain text
          const node = c.href ? (
            // open external links in new tab except mailto/tel — safe to open in same or new
            <a
              className="contact-link"
              href={c.href}
              {...(c.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {c.text}
            </a>
          ) : (
            <span>{c.text}</span>
          );

          return (
            <React.Fragment key={`${c.text}-${i}`}>
              <div className="contact-item">{node}</div>
              {!isLast && <span className="sep" aria-hidden="true" />}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
