// src/components/SidebarColumn.tsx
"use client";

import React from "react";
import SkillSection from "@/components/SkillSection";
import skills from "@/data/skillsData";
import ProjectsList from "@/components/ProjectsList";
import EducationBlock from "@/components/EducationBlock";

export default function SidebarColumn() {
  return (
    <aside className="sidebar" aria-labelledby="skillsHeading">
      {/* Classic resume-style technical skills */}
      <SkillSection categories={skills} layout="classic" compact={false} />

      <div style={{ marginTop: 12 }}>
        <ProjectsList />
      </div>

      <div style={{ marginTop: 14 }}>
        <EducationBlock />
      </div>
    </aside>
  );
}
