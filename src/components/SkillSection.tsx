// src/components/SkillSection.tsx
"use client";

import React from "react";
import { SkillCategory } from "@/data/skillsData";

interface SkillSectionProps {
  categories: SkillCategory[];
  clamp?: number; // number of pills to show before "show more" per category (0 = show all)
  layout?: "pills" | "classic"; // "pills" = current badges, "classic" = compact comma separated lines
  compact?: boolean; // visual compactness for classic mode
}

export default function SkillSection({
  categories,
  clamp = 6,
  layout = "pills",
  compact = false,
}: SkillSectionProps) {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setExpanded((s) => ({ ...s, [key]: !s[key] }));
  };

  // Render classic grouped comma-separated lines
  if (layout === "classic") {
    return (
      <section aria-labelledby="skillsHeading" className={`skill-section classic ${compact ? "compact" : ""}`}>
        <h2 id="skillsHeading" className="skills-heading">Technical Skills</h2>

        <div className="classic-list">
          {categories.map((cat) => {
            const items = cat.items ?? [];
            if (!items || items.length === 0) return null;
            return (
              <div key={cat.title} className="classic-group" aria-label={`${cat.title} skills`}>
                <div className="classic-title">{cat.title}:</div>
                <div className="classic-line">{items.join(", ")}</div>
              </div>
            );
          })}
        </div>

        <style jsx>{`
          .skill-section { padding: 0; }
          .skills-heading {
            font-size: 16px;
            font-weight: 700;
            margin: 0 0 10px 0;
            color: var(--title, #0b1220);
          }

          .classic-list { display: flex; flex-direction: column; gap: ${compact ? "8px" : "12px"}; }

          .classic-group { display: block; }

          .classic-title {
            font-weight: 700;
            font-size: ${compact ? "13px" : "14px"};
            margin-bottom: ${compact ? "2px" : "4px"};
            color: var(--title, #0b1220);
          }

          .classic-line {
            font-size: ${compact ? "12.25px" : "13px"};
            color: #15272b;
            line-height: 1.5;
            margin: 0;
            /* keep lines wrapping sensibly */
            word-break: break-word;
          }

          /* Visual spacing to match a printed resume */
          @media print {
            .skills-heading { font-size: 13pt; }
            .classic-title { font-size: 11pt; }
            .classic-line { font-size: 10.5pt; color: #000; }
          }
        `}</style>
      </section>
    );
  }

  // ---- default: pills layout (existing behavior, slightly refactored) ----
  return (
    <section aria-labelledby="skillsHeading" className="skill-section">
      <h2 id="skillsHeading" className="skills-heading">Core Skills</h2>

      <div className="skills-grid">
        {categories.map((cat) => {
          const isExpanded = !!expanded[cat.title];
          const showAll = clamp === 0 || isExpanded;
          const visible = showAll ? cat.items : cat.items.slice(0, clamp);

          return (
            <div key={cat.title} className="category">
              <h3 className="cat-title">{cat.title}</h3>

              <div className="pills" role="list">
                {visible.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    className="pill"
                    role="listitem"
                    title={skill}
                    tabIndex={0}
                  >
                    <span className="dot" aria-hidden />
                    <span className="pill-text">{skill}</span>
                  </button>
                ))}
                {!showAll && cat.items.length > clamp && (
                  <button
                    type="button"
                    className="pill more"
                    onClick={() => toggle(cat.title)}
                    aria-expanded={isExpanded}
                  >
                    +{cat.items.length - clamp} more
                  </button>
                )}
                {showAll && isExpanded && cat.items.length > clamp && (
                  <button type="button" className="pill more" onClick={() => toggle(cat.title)}>
                    show less
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .skill-section { padding: 0; }

        .skills-heading {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 10px 0;
          color: var(--title, #0b1220);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px 24px;
        }

        @media (min-width: 1000px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        .category { display:block; }

        .cat-title {
          margin: 2px 0 8px 0;
          font-weight: 700;
          font-size: 14px;
          color: var(--title, #0b1220);
          text-transform: none;
          letter-spacing: -0.01em;
        }

        .pills {
          display:flex;
          align-items:flex-start;
          gap: 8px;
          flex-wrap:wrap;
        }

        .pill {
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:6px 10px;
          border-radius:999px;
          background: rgba(15, 23, 42, 0.03);
          border: 1px solid rgba(15,23,42,0.03);
          font-size: 12px;
          color: #0f172a;
          cursor:default;
          user-select: none;
          transition: transform 120ms ease, box-shadow 120ms ease;
          min-height: 32px;
        }

        .pill.more {
          background: transparent;
          border: none;
          color: #2563eb;
          font-weight: 600;
          cursor: pointer;
          min-height: auto;
          padding: 4px 6px;
        }

        .pill:hover { transform: translateY(-2px); }

        .dot {
          width:8px;
          height:8px;
          border-radius:50%;
          background: linear-gradient(180deg, #6a8cff, #6f46ff);
          flex:0 0 8px;
        }

        .pill .pill-text { display:inline-block; max-width: 14ch; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }

        /* reduce visual size to make page compact and print friendly */
        @media (max-width: 720px) {
          .pill { padding:5px 8px; font-size:11px; gap:6px; }
          .dot { width:6px; height:6px; }
        }

        /* Print rules: render pills as simple inline text (no rounded shapes), ensure visibility */
        @media print {
          .pills { gap: 6px; }
          .pill {
            background: transparent !important;
            border: none !important;
            padding: 0 !important;
            min-height: 0 !important;
            box-shadow: none !important;
            color: #111 !important;
          }
          .dot { display:none; }
          .pill.more { color: #111; text-decoration: underline; }
          .cat-title { font-size: 11pt; }
          .skills-heading { font-size: 13pt; }
        }
      `}</style>
    </section>
  );
}
