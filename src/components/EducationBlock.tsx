// src/components/EducationBlock.tsx
"use client";

import React from "react";

export default function EducationBlock() {
  return (
    <div>
      <div className="section-title" style={{ marginBottom: 8 }}>
        Education & Certs
      </div>

      <div className="education">
        <div style={{ fontWeight: 700 }}>B.Tech — Computer Science & Engineering</div>
        <div style={{ color: "var(--muted)", marginTop: 6 }}>
          Rajkiya Engineering College Sonbhadra • 2015 – 2019
        </div>
      </div>
    </div>
  );
}
