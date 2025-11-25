// src/components/ExperienceItem.tsx
"use client";

import React from "react";

export type SpacingPreset = "compact" | "normal" | "spacious";
export type PeriodPosition = "right" | "below";

export interface ExperienceItemProps {
  id?: string;
  title: string;
  org: string;
  orgUrl?: string;
  location?: string;
  period?: string;
  bullets?: string[];
  spacing?: SpacingPreset;
  periodPosition?: PeriodPosition;
  className?: string;
}

/**
 * Minimal sanitizer: allow only <strong>, <b>, <em>, <i> tags.
 * Removes any other tags (prevents scripts and other unsafe markup).
 */
function sanitizeHTML(raw: string) {
  if (!raw) return "";
  return raw.replace(/<(?!\/?(strong|b|em|i)\b)[^>]*>/gi, "");
}

export default function ExperienceItem({
  id,
  title,
  org,
  orgUrl,
  location,
  period,
  bullets = [],
  spacing = "normal",
  // default to "below" so header is two-line (meta on line 1, period on line 2)
  periodPosition = "below",
  className,
}: ExperienceItemProps) {
  const presets = {
    compact: {
      "--title-size": "14px",
      "--org-size": "12px",
      "--meta-size": "11px",
      "--bullet-size": "12.5px",
      "--gap-v": "6px",
      "--line-height": "1.32",
    },
    normal: {
      "--title-size": "16px",
      "--org-size": "13px",
      "--meta-size": "12px",
      "--bullet-size": "14px",
      "--gap-v": "10px",
      "--line-height": "1.45",
    },
    spacious: {
      "--title-size": "18px",
      "--org-size": "14px",
      "--meta-size": "13px",
      "--bullet-size": "15px",
      "--gap-v": "14px",
      "--line-height": "1.7",
    },
  } as const;

  const cssVars = presets[spacing];

  // Build first-line text: Title · Org — Location
  // Keep org as clickable when orgUrl is present.
  const metaParts = [];
  if (org) metaParts.push(org);
  if (location) metaParts.push(location);

  return (
    <article id={id} className={`exp ${className ?? ""}`} style={cssVars as React.CSSProperties}>
      {/* HEADER: first line contains title, second line contains period (by default) */}
      <div className="header">
        <div className="line1">
          <h3 className="title">{title}</h3>

          <div className="meta">
            {orgUrl ? (
              <a href={orgUrl} target="_blank" rel="noreferrer" className="org">
                {org}
              </a>
            ) : (
              <span className="org">{org}</span>
            )}

            {location && (
              <>
                <span className="sep"> — </span>
                <span className="location">{location}</span>
              </>
            )}
          </div>
        </div>

        {/* show period on the right when periodPosition === 'right' */}
        {period && periodPosition === "right" && <div className="period period-right">{period}</div>}
      </div>

      {/* period below (default) */}
      {period && periodPosition === "below" && <div className="period period-below">{period}</div>}

      {/* responsibilities */}
      {bullets.length > 0 && (
        <ul className="bullets" aria-label={`${title} — responsibilities`}>
          {bullets.map((b, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: sanitizeHTML(b) }} />
          ))}
        </ul>
      )}

      <style jsx>{`
        .exp {
          margin-bottom: var(--gap-v);
          padding: 0;
        }

        /* Header wrapper */
        .header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* Line 1: title + meta (kept together) */
        .line1 {
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-width: 0;
        }

        .title {
          margin: 0;
          font-size: var(--title-size);
          font-weight: 700;
          color: #0b1220;
          line-height: 1.05;
        }

        /* meta on same visual "line" as title block (but below title text) */
        .meta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: var(--org-size);
          color: #374151;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .org {
          color: #2563eb;
          font-weight: 600;
          text-decoration: none;
        }

        .org:hover {
          text-decoration: underline;
        }

        .sep {
          color: #6b7280;
        }

        .location {
          color: #6b7280;
          font-weight: 500;
        }

        /* Period - when right, keep it aligned to the header right */
        .period {
          color: #6b7280;
          font-size: var(--meta-size);
          align-self: center;
          white-space: nowrap;
          margin-left: 12px;
        }

        .period-right {
          margin-left: 12px;
        }

        /* Period below (second line) */
        .period-below {
          margin-top: 6px;
          font-size: var(--meta-size);
          color: #6b7280;
          width: 100%;
        }

        .bullets {
          margin-top: calc(var(--gap-v) + 4px);
          margin-left: 0;
          padding-left: 18px;
          color: #26323f;
          line-height: var(--line-height);
          font-size: var(--bullet-size);
          list-style: none;
        }

        .bullets li {
          margin-bottom: 8px;
          position: relative;
          padding-left: 14px;
        }

        .bullets li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 5px;
          height: 5px;
          background: linear-gradient(135deg, #5b6bff, #8e4bff);
          border-radius: 50%;
        }

        @media (max-width: 720px) {
          .header {
            display: block;
          }
          .meta {
            white-space: normal;
            overflow: visible;
          }
          .period-below {
            margin-top: 6px;
          }
        }

        @media print {
          .org {
            color: #000 !important;
            text-decoration: none !important;
          }
          .bullets li::before {
            background: #000;
          }
        }
      `}</style>
    </article>
  );
}
