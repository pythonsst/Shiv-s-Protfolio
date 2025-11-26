// src/components/ResumeHeader.tsx
"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import HeroHeader from "@/components/HeroHeader";
import { contacts, profile } from "@/data/contact";

export default function ResumeHeader() {
  return (
    <header className="resume-header">
      <div className="no-print">
        <Navigation />
      </div>

      <HeroHeader
        name={profile.name}
        heroSummary={profile.heroSummary}
        contacts={contacts}
        alignCenter={false}
      />
    </header>
  );
}
