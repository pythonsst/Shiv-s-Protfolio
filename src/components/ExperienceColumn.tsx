// src/components/ExperienceColumn.tsx
"use client";

import React from "react";
import ExperienceItem from "@/components/ExperienceItem";
import { experiences } from "@/data/experiences";

export default function ExperienceColumn() {
  return (
    <div>
      <section aria-labelledby="experienceHeading">
        <h3 className="section-title" id="experienceHeading">Experience</h3>
        <div className="jobs">
          {experiences.map((e) => (
            <ExperienceItem key={e.id} {...e} />
          ))}
        </div>
      </section>
    </div>
  );
}
