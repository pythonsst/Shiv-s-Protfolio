// src/components/SkillSection.tsx
"use client";

import React from "react";
import { SkillCategory } from "@/data/skillsData";

interface SkillSectionProps {
  categories: SkillCategory[];
  clamp?: number; // number of pills to show before "show more" per category (0 = show all)
}

export default function SkillSection({ categories, clamp = 6 }: SkillSectionProps) {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setExpanded((s) => ({ ...s, [key]: !s[key] }));
  };

  return (
    <section aria-labelledby="skillsHeading" className="skill-section">
      <h2 id="skillsHeading" className="skills-heading">Technical Skills</h2>

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
                  <span
                    key={skill}
                    className="pill"
                    role="listitem"
                    title={skill}
                  >
                    {skill}
                  </span>
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
        .skill-section { 
          padding: 0; 
        }

        .skills-heading {
          font-size: 19px;
          font-weight: 700;
          margin: 0 0 14px 0;
          color: var(--resume-title, #0b1220);
          position: relative;
          padding-bottom: 10px;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .skills-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 55px;
          height: 3.5px;
          border-radius: 2px;
          background: linear-gradient(90deg, #2563eb 0%, #7c3aed 100%);
          box-shadow: 0 2px 4px rgba(37, 99, 235, 0.3);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px 24px;
        }

        .category {
          padding: 0;
        }

        @media (min-width: 1000px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }


        .cat-title {
          margin: 0 0 8px 0;
          font-weight: 700;
          font-size: 14px;
          color: var(--resume-title, #0b1220);
          text-transform: none;
          letter-spacing: -0.01em;
          position: relative;
          padding-left: 12px;
        }

        .cat-title::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 14px;
          background: linear-gradient(180deg, #2563eb, #7c3aed);
          border-radius: 2px;
        }

        .pills {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          flex-wrap: wrap;
          line-height: 1.6;
        }

        .pill {
          display: inline-block;
          font-size: 12.5px;
          color: #0f172a;
          font-weight: 500;
          padding: 0;
          margin: 0;
          user-select: none;
          letter-spacing: -0.005em;
        }

        .pill.more {
          color: #2563eb;
          font-weight: 600;
          cursor: pointer;
          padding: 0;
          font-size: 12px;
          text-decoration: underline;
        }

        .pill.more:hover {
          color: #1d4ed8;
        }

        /* reduce visual size to make page compact and print friendly */
        @media (max-width: 720px) {
          .pill { 
            font-size: 11px; 
          }
        }

        /* Print rules: render pills as simple inline text, ensure visibility */
        @media print {
          .pills { 
            gap: 6px; 
          }
          .pill {
            color: #111 !important;
            font-size: 10pt !important;
          }
          .cat-title::before {
            display: none !important;
          }
          .pill.more { 
            color: #111; 
            text-decoration: underline; 
          }
          .cat-title { 
            font-size: 11pt; 
          }
          .skills-heading { 
            font-size: 13pt; 
          }
        }
      `}</style>
    </section>
  );
}

