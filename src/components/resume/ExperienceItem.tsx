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
          {bullets.map((b, i) => {
            // Handle both HTML and markdown formats
            let highlightedText = b;
            
            // If it already contains HTML tags, use them; otherwise process markdown
            if (!b.includes('<strong>') && !b.includes('<em>')) {
              // Process markdown and auto-highlight metrics
              highlightedText = b
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Support markdown bold
                .replace(/(\d+\.?\d*%|\$\d+[BMK]?|\d+[BMK]?\+|\d+[kK]\+|₹\d+[BMK]?)/gi, '<strong class="metric">$1</strong>')
                .replace(/(\d+\.?\d*x|\d+\.?\d*-fold)/gi, '<strong class="metric">$1</strong>');
            } else {
              // Already has HTML, just add metric highlighting for numbers
              highlightedText = b.replace(/(\d+\.?\d*%|\$\d+[BMK]?|\d+[BMK]?\+|\d+[kK]\+|₹\d+[BMK]?)/gi, '<strong class="metric">$1</strong>');
            }
            
            return (
              <li 
                key={i}
                dangerouslySetInnerHTML={{ __html: highlightedText }}
              />
            );
          })}
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
          margin: 0 0 8px 0;
          font-size: var(--title-size);
          font-weight: 700;
          color: var(--resume-title);
          line-height: 1.25;
          letter-spacing: -0.015em;
        }

        .orgBlock {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .org {
          color: var(--resume-accent);
          font-weight: 600;
          font-size: var(--org-size);
          text-decoration: none;
          transition: all 0.25s ease;
          letter-spacing: -0.01em;
        }

        .org:hover {
          color: var(--resume-accent);
          text-decoration: underline;
          transform: translateX(2px);
        }

        .location {
          font-size: var(--meta-size);
          color: var(--resume-muted);
        }

        .period {
          flex: 0 0 auto;
          color: var(--resume-muted);
          font-size: var(--meta-size);
          align-self: center;
          white-space: nowrap;
          margin-left: 12px;
          font-weight: 500;
        }

        .period-below {
          margin-top: 6px;
          font-size: var(--meta-size);
          color: var(--resume-muted);
        }

        .bullets {
          margin-top: calc(var(--gap-v) + 8px);
          margin-left: 0;
          padding-left: 24px;
          color: var(--resume-text);
          line-height: var(--line-height);
          font-size: var(--bullet-size);
          list-style: none;
        }

        .bullets li {
          margin-bottom: 14px;
          position: relative;
          padding-left: 0;
        }

        .bullets li:last-child {
          margin-bottom: 0;
        }

        .bullets li::before {
          content: "▸";
          position: absolute;
          left: -22px;
          color: var(--resume-accent);
          font-weight: 700;
          font-size: 1em;
          top: 0;
          opacity: 0.9;
        }

        .bullets li :global(strong) {
          font-weight: 700;
          color: var(--resume-title);
          letter-spacing: -0.01em;
        }

        .bullets li :global(strong.metric) {
          color: var(--resume-accent);
          font-weight: 700;
          background: var(--resume-chip-bg);
          padding: 1px 4px;
          border-radius: 3px;
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
          .bullets li :global(strong.metric) {
            color: #000;
          }
          .period::before {
            display: none;
          }
        }
      `}</style>
    </article>
  );
}
