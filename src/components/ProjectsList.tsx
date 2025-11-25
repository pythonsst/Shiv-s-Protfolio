// src/components/ProjectsList.tsx
"use client";

import React from "react";

export default function ProjectsList() {
  return (
    <div>
      <div className="section-title" style={{ marginBottom: 8 }}>
        Selected Projects
      </div>

      <div>
        <div style={{ fontWeight: 700 }} className="project-title">
          Bitcoin Depot — BTC ATM Network
        </div>
        <div style={{ color: "#556777", fontSize: 13 }}>
          Cross-platform kiosk apps and in-store checkout integrations powering
          thousands of kiosks with high transaction volume.
        </div>
      </div>
    </div>
  );
}
