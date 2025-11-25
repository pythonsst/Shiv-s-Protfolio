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
 * Reusable ExperienceItem component
 * - spacing: controls density (compact | normal | spacious)
 * - periodPosition: "right" places dates on the right; "below" places dates under the title (good for narrow layouts)
 *
 * Usage:
 * <ExperienceItem {...exp} spacing="compact" periodPosition="right" />
 */
export default function ExperienceItem({
  id,
  title,
  org,
  orgUrl,
  location,
  period,
  bullets = [],
  spacing = "normal",
  periodPosition = "right",
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

  return (
    <article id={id} className={`exp ${className ?? ""}`} style={cssVars as React.CSSProperties}>
      <div className={`row period-${periodPosition}`}>
        <div className="left">
          <h3 className="title">{title}</h3>

          <div className="orgBlock">
            {orgUrl ? (
              <a href={orgUrl} target="_blank" rel="noreferrer" className="org">
                {org}
              </a>
            ) : (
              <div className="org">{org}</div>
            )}

            {location && <div className="location">{location}</div>}
          </div>
        </div>

        {period && periodPosition === "right" && <div className="period">{period}</div>}
      </div>

      {period && periodPosition === "below" && <div className="period-below">{period}</div>}

      {bullets.length > 0 && (
        <ul className="bullets" aria-label={`${title} — responsibilities`}>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}

      <style jsx>{`
        .exp {
          margin-bottom: var(--gap-v);
          padding: 0;
        }

        .row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        /* Support period below layout */
        .row.period-below {
          flex-direction: column;
        }

        .left {
          min-width: 0;
        }

        .title {
          margin: 0 0 4px 0;
          font-size: var(--title-size);
          font-weight: 700;
          color: #0b1220;
          line-height: 1.05;
        }

        .orgBlock {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .org {
          color: #2563eb;
          font-weight: 600;
          font-size: var(--org-size);
          text-decoration: none;
        }

        .org:hover {
          text-decoration: underline;
        }

        .location {
          font-size: var(--meta-size);
          color: #6b7280;
        }

        .period {
          flex: 0 0 auto;
          color: #6b7280;
          font-size: var(--meta-size);
          align-self: center;
          white-space: nowrap;
          margin-left: 12px;
        }

        .period-below {
          margin-top: 6px;
          font-size: var(--meta-size);
          color: #6b7280;
        }

        .bullets {
          margin-top: calc(var(--gap-v) + 4px);
          margin-left: 0;
          padding-left: 18px;
          color: #26323f;
          line-height: var(--line-height);
          font-size: var(--bullet-size);
        }

        .bullets li {
          margin-bottom: 8px;
        }

        /* Responsive: on narrow containers, ensure stacked layout and reduce gaps */
        @media (max-width: 720px) {
          .row {
            flex-direction: column;
            gap: 6px;
          }

          .period {
            margin-left: 0;
            align-self: flex-start;
          }
        }

        /* Print adjustments (keeps density controlled) */
        @media print {
          .exp {
            margin-bottom: calc(var(--gap-v));
          }
          .title {
            font-size: calc(var(--title-size));
          }
          .org {
            font-size: calc(var(--org-size));
            color: #000;
            text-decoration: none;
          }
          .period,
          .period-below {
            color: #333;
          }
          .bullets {
            font-size: calc(var(--bullet-size));
            line-height: var(--line-height);
          }
        }
      `}</style>
    </article>
  );
}
