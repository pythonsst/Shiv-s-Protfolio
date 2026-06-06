// src/data/resumeData.ts
// ============================================
// CENTRALIZED RESUME DATA
// ============================================
// To update your resume, modify the data below.
// 
// IMPORTANT FILES:
// - This file (resumeData.ts): Contact info, summary, projects, education, certifications
// - experiences.ts: Your work experience entries
// - skillsData.ts: Your technical skills organized by category
//
// The resume will automatically update when you change the data in these files.
// ============================================

import { experiences } from "./experiences";
import skills from "./skillsData";

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
  portfolio?: string;
}

export interface Summary {
  brief: string; // Short summary in header
  detailed: string; // Detailed professional summary
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies?: string[];
  url?: string;
  highlights?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  gpa?: string;
  honors?: string[];
  relevantCoursework?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export interface ResumeData {
  contact: ContactInfo;
  summary: Summary;
  experiences: typeof experiences;
  skills: typeof skills;
  projects: Project[];
  education: Education[];
  certifications?: Certification[];
}

// ============================================
// RESUME DATA - UPDATE ONLY THIS SECTION
// ============================================

export const resumeData: ResumeData = {
  contact: {
    name: "Shiv Shankar Tiwari",
    title: "Staff Mobile App Engineer",
    email: "pythonsst@gmail.com",
    phone: "+91 7007746087",
    location: "Hyderabad, India",
    linkedin: "https://linkedin.com/in/mobile-engineer",
    github: "https://github.com/pythonsst",
  },

  summary: {
    brief:
      "Staff Mobile App Engineer with **7+ years of experience** building **high-scale, performance-critical mobile and web systems**. Focused on **architecture ownership**, performance optimization, and **production-grade delivery**.",
    detailed:
      "I lead engineering organizations through product-focused, pragmatic execution. I specialize in mobile-first consumer products, backend architecture, and developer platforms. My priorities are performance, security, and developer productivity — delivered with measurable business outcomes.",
  },

  // Experiences are imported from experiences.ts
  experiences,

  // Skills are imported from skillsData.ts
  skills,

  projects: [
    {
      id: "bitcoin-depot",
      name: "Bitcoin Depot — BTC ATM Network",
      description:
        "Cross-platform kiosk apps and in-store checkout integrations powering thousands of kiosks with high transaction volume.",
      technologies: ["React Native", "Node.js", "AWS", "NestJS"],
      highlights: [
        "8k+ ATMs supported",
        "$100M+ transaction volume",
        "35% memory reduction",
        "40% battery optimization",
      ],
    },
    // Add more projects here
  ],

  education: [
    {
      degree: "B.Tech — Computer Science & Engineering",
      institution: "Rajkiya Engineering College Sonbhadra",
      period: "2015 – 2019",
    },
  ],

  certifications: [
    // Add certifications here
    // Example:
    // {
    //   name: "AWS Certified Solutions Architect",
    //   issuer: "Amazon Web Services",
    //   date: "2023",
    //   credentialId: "ABC123",
    //   url: "https://aws.amazon.com/verification",
    // },
  ],
};

