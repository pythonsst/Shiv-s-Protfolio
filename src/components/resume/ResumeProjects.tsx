// src/components/resume/ResumeProjects.tsx
"use client";

import React from "react";
import { Project } from "@/data/resumeData";

interface ResumeProjectsProps {
  projects: Project[];
}

export default function ResumeProjects({ projects }: ResumeProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="resume-projects-section">
      <h3 className="resume-section-title">Selected Projects</h3>
      <div className="resume-projects-list">
        {projects.map((project) => (
          <div key={project.id} className="resume-project-item">
            <div className="resume-project-header">
              <h4 className="resume-project-name">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="resume-project-link"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h4>
            </div>
            <p className="resume-project-description">{project.description}</p>
            {project.highlights && project.highlights.length > 0 && (
              <ul className="resume-project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            )}
            {project.technologies && project.technologies.length > 0 && (
              <div className="resume-project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="resume-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .resume-projects-section {
          margin-bottom: 24px;
        }

        .resume-section-title {
          font-size: 19px;
          font-weight: 700;
          color: var(--resume-title);
          margin: 0 0 20px 0;
          position: relative;
          padding-bottom: 14px;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .resume-section-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 55px;
          height: 3.5px;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--resume-accent) 0%, var(--resume-accent-2) 100%);
          box-shadow: none;
        }

        .resume-projects-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .resume-project-item {
          padding: 0;
        }

        .resume-project-name {
          font-weight: 700;
          color: var(--resume-title);
          margin: 0 0 8px 0;
          font-size: 15px;
          letter-spacing: -0.01em;
        }

        .resume-project-link {
          color: var(--resume-title);
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .resume-project-link:hover {
          color: var(--resume-accent);
          text-decoration: underline;
        }

        .resume-project-description {
          color: var(--resume-muted);
          font-size: 13.5px;
          line-height: 1.6;
          margin: 0 0 10px 0;
        }

        .resume-project-highlights {
          margin: 10px 0;
          padding-left: 20px;
          color: var(--resume-text);
          font-size: 12.5px;
          line-height: 1.6;
          list-style: none;
        }

        .resume-project-highlights li {
          margin-bottom: 6px;
          position: relative;
        }

        .resume-project-highlights li::before {
          content: "▸";
          position: absolute;
          left: -18px;
          color: var(--resume-accent);
          font-weight: 600;
        }

        .resume-project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
        }

        .resume-tech-tag {
          font-size: 11.5px;
          padding: 5px 10px;
          border-radius: 12px;
          background: var(--resume-chip-bg);
          border: 1px solid var(--resume-chip-border);
          color: var(--resume-chip-text);
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .resume-tech-tag:hover {
          background: var(--resume-chip-bg-hover);
          transform: translateY(-1px);
        }

        @media print {
          .resume-projects-section {
            margin-bottom: 12px;
          }
          .resume-section-title {
            font-size: 13pt;
            margin-bottom: 8px;
          }
          .resume-project-name {
            font-size: 12pt;
          }
          .resume-project-description {
            font-size: 10pt;
          }
          .resume-project-link {
            color: #000;
            text-decoration: none;
          }
          .resume-project-highlights {
            font-size: 10pt;
          }
          .resume-tech-tag {
            font-size: 9pt;
            background: transparent;
            border: 1px solid #ccc;
          }
        }
      `}</style>
    </div>
  );
}

