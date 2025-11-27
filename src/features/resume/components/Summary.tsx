// src/components/ResumeSummary.tsx
"use client";

import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function ResumeSummary({ children }: Props) {
  return (
    <div className="resume-summary" style={{ marginBottom: 10 }}>
      {children}
    </div>
  );
}
