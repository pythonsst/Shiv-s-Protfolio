// src/components/ExperienceList.tsx
"use client";

import experiences from "@/data/experiences";
import React from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";

/**
 * Single-file Experience list (data + UI).
 * Replace the `experiences` array with your real data.
 */

/* ----------------------------- Data (example) ----------------------------- */
type Experience = {
  id: string;
  title: string;
  org: string;
  orgUrl?: string;
  location?: string;
  period?: string;
  bullets?: string[]; // accepts simple HTML for <strong>, <b>, <em>, <i>
};

/* ------------------------------- Helpers --------------------------------- */
function sanitizeHTML(raw: string) {
  if (!raw) return "";
  // allow only <strong>, <b>, <em>, <i>
  return raw.replace(/<(?!\/?(strong|b|em|i)\b)[^>]*>/gi, "");
}

/* --------------------------- ExperienceItem ------------------------------ */
function ExperienceItem({ e }: { e: Experience }) {
  return (
    <article className="exp" id={e.id} aria-label={`${e.title} at ${e.org}`}>
      <div className="row header">
        <div className="left">
          <h3 className="title">{e.title}</h3>

          <div className="org-location">
            {e.orgUrl ? (
              <a className="org" href={e.orgUrl} target="_blank" rel="noopener noreferrer">
                {e.org}
              </a>
            ) : (
              <span className="org">{e.org}</span>
            )}

            {e.location && (
              <>
                <span className="dot" aria-hidden="true" />
                <span className="location">{e.location}</span>
              </>
            )}
          </div>
        </div>

        {e.period && (
          <div className="period" aria-label={`Period: ${e.period}`}>
            <FiCalendar aria-hidden size={14} />
            <span className="period-text">{e.period}</span>
          </div>
        )}
      </div>

      {e.bullets && e.bullets.length > 0 && (
        <ul className="bullets" aria-label={`${e.title} responsibilities`}>
          {e.bullets.map((b, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: sanitizeHTML(b) }} />
          ))}
        </ul>
      )}

      <style jsx>{`
        .exp {
          margin: 0;
          padding: 12px 0;
        }

        .header {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          justify-content: space-between;
        }

        .left {
          min-width: 0;
          flex: 1 1 auto;
        }

        .title {
          margin: 0 0 6px 0;
          font-size: 15px;
          font-weight: 700;
          color: #0b1220;
          line-height: 1.06;
        }

        .org-location {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #6b7280;
          font-size: 13px;
          white-space: nowrap;
          overflow: hidden;
        }

        .org {
          color: #5b21b6;
          font-weight: 600;
          text-decoration: none;
          max-width: 36ch;
          overflow: hidden;
          text-overflow: ellipsis;
          display: inline-block;
          vertical-align: middle;
        }

        .org:hover {
          text-decoration: underline;
        }

        .dot {
          width: 6px;
          height: 6px;
          background: rgba(11, 17, 32, 0.12);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .location {
          color: #6b7280;
          font-weight: 500;
          max-width: 20ch;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .period {
          display: inline-flex;
          gap: 8px;
          align-items: center;
          color: #6b7280;
          font-size: 13px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .period svg {
          color: #9aa0a6;
          flex-shrink: 0;
        }

        .period-text {
          display: inline-block;
        }

        .bullets {
          margin-top: 12px;
          padding-left: 18px;
          margin-bottom: 6px;
          line-height: 1.55;
          font-size: 13px;
          color: #111827;
          list-style: none;
        }

        .bullets li {
          margin-bottom: 12px;
          position: relative;
          padding-left: 12px;
        }

        .bullets li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 10px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #9aa0a6;
        }

        /* dashed divider between items will be applied by parent when rendering list */
        /* Responsive: move period under on narrow screens and allow wrapping */
        @media (max-width: 920px) {
          .header {
            flex-direction: column;
            gap: 8px;
            align-items: flex-start;
          }
          .period {
            width: 100%;
            gap: 8px;
          }
          .org-location {
            white-space: normal;
            overflow: visible;
          }
        }
      `}</style>
    </article>
  );
}

/* ----------------------------- ExperienceList ---------------------------- */
export default function ExperienceList() {
  return (
    <section aria-labelledby="experienceHeading" className="experience-list">
      <h2 id="experienceHeading" className="section-title">
        Experience
      </h2>

      <div className="jobs">
        {experiences.map((e, idx) => (
          <React.Fragment key={e.id}>
            <ExperienceItem e={e} />
            {/* dashed divider except after last item */}
            {idx < experiences.length - 1 && <div className="divider" aria-hidden="true" />}
          </React.Fragment>
        ))}
      </div>

      <style jsx>{`
        .section-title {
          font-size: 15px;
          font-weight: 700;
          margin: 0 0 12px 0;
          color: #0b1220;
        }

        .jobs {
          display: block;
        }

        .divider {
          margin-top: 12px;
          margin-bottom: 12px;
          border-bottom: 1px dashed rgba(11, 17, 32, 0.06);
          width: 100%;
        }

        /* container-level print tweaks (if the page uses it) */
        @media print {
          .section-title { color: #111; }
          .divider { border-color: rgba(0,0,0,0.12); }
        }
      `}</style>
    </section>
  );
}
