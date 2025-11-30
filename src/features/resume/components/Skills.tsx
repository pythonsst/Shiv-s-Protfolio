// src/components/SkillSection.tsx
"use client";

import React from "react";
import { SkillCategory } from "@/data/skillsData";

interface SkillSectionProps {
  categories: SkillCategory[];
  clamp?: number;
  layout?: "pills" | "classic";
  compact?: boolean;
}

export default function SkillSection({
  categories,
  clamp = 6,
  layout = "pills",
  compact = false,
}: SkillSectionProps) {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});
  const toggle = (key: string) => setExpanded((s) => ({ ...s, [key]: !s[key] }));

  // CLASSIC layout — sub-title weight set to 500 per request
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

          /* Section heading remains strong */
          .skills-heading {
            font-size: 15px;
            font-weight: 700;
            margin: 0 0 12px 0;
            color: #0b1220;
          }

          .classic-list {
            display: flex;
            flex-direction: column;
            gap: ${compact ? "8px" : "14px"};
          }

          .classic-group { display: block; }

          /* Sub-title: weight 500 per your change, same size as other subtitles */
          .classic-title {
            font-weight: 500;
            font-size: 15px;
            margin-bottom: ${compact ? "2px" : "6px"};
            color: #0b1220;
          }

          /* Body text exactly match Experience bullets */
          .classic-line {
            font-size: 13px;
            line-height: 1.55;
            color: #111827 !important;
            margin: 0;
            font-weight: 400;
            word-break: break-word;
          }

          @media (max-width: 720px) {
            .classic-line { font-size: 13px; }
          }

          @media print {
            .skills-heading { color: #111; }
            .classic-title { font-size: 11pt; }
            .classic-line { font-size: 10.5pt; color: #000; }
          }
        `}</style>
      </section>
    );
  }

  // PILLS layout (cat-title weight adjusted to 500 to match classic)
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
                  <button key={skill} type="button" className="pill" role="listitem" title={skill} tabIndex={0}>
                    <span className="dot" aria-hidden />
                    <span className="pill-text">{skill}</span>
                  </button>
                ))}

                {!showAll && cat.items.length > clamp && (
                  <button type="button" className="pill more" onClick={() => toggle(cat.title)} aria-expanded={isExpanded}>
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
          font-size: var(--size-section);
          font-weight: 700;
          margin: 0 0 10px 0;
          color: var(--text);
        }

        .skills-grid { display: grid; grid-template-columns: 1fr; gap: 18px 24px; }

        .category { display:block; }

        .cat-title {
          margin: 2px 0 8px 0;
          font-weight: 500; /* match classic-title weight */
          font-size: var(--size-title);
          color: var(--text);
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
          font-size: 13px; /* match body size */
          color: #0f172a;
          cursor:default;
          user-select: none;
          min-height: 32px;
        }

        .pill.more {
          background: transparent;
          border: none;
          color: var(--accent, #2563eb);
          font-weight: 600;
          cursor: pointer;
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

        .pill .pill-text {
          display:inline-block;
          max-width: 14ch;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
          font-size: 13px; /* ensure pill text matches body */
        }
      `}</style>
    </section>
  );
}
