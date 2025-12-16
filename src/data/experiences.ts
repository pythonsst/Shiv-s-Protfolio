// data/experiences.ts
import type { ExperienceItemProps } from "@/components/ExperienceItem";

export const experiences: ExperienceItemProps[] = [
  {
    id: "validus",
    title: "Senior Software Engineer",
    org: "Validus Fintech Services Pvt Ltd",
    orgUrl: "https://validusfintech.com",
    location: "Hyderabad, India",
    period: "Jul 2024 – Oct 2025",
    bullets: [
      "Architected a white-label investment platform managing over **500 crore INR** AUM across web and mobile.",
      "Designed reusable component libraries and modular front-end systems enabling multi-team scalability.",
      "Improved application startup time by **35 percent** through bundle optimization and performance tuning.",
      "Implemented real-time investor dashboards and feature modules supporting high traffic and scale.",
      "Automated CI/CD pipelines using GitHub Actions and Fastlane, reducing release cycles by **40 percent**.",
      "Led mobile and front-end engineering, driving code quality, architecture decisions, and performance improvements."
    ],
  },

  {
    id: "bitcoindepot",
    title: "Senior React Native / Front-End Engineer",
    org: "Bitcoin Depot — Atlanta, USA",
    orgUrl: "https://bitcoindepot.com",
    location: "Remote",
    period: "Aug 2022 – Jun 2024",
    bullets: [
      "Migrated legacy React Native codebase to Hooks and TypeScript, improving stability and maintainability.",
      "Integrated crypto payment processing with Simplex, contributing to **100 percent** revenue growth.",
      "Built secure wallet transaction workflows and authentication layers using Web3 APIs.",
      "Optimized Google Maps rendering, reducing memory usage by **28 percent** and improving UI responsiveness.",
      "Lowered crash rates by **40 percent** through automated testing, profiling, and quality improvements."
    ],
  },

  {
    id: "affinidi",
    title: "Full Stack Engineer",
    org: "Affinidi — Bangalore, India",
    orgUrl: "https://affinidi.com",
    location: "Bangalore, India",
    period: "Aug 2019 – May 2022",
    bullets: [
      "Developed decentralized identity applications using React Native with DID-based authentication.",
      "Improved client runtime performance by **25 percent** through Hermes tuning and resource optimization.",
      "Built GraphQL APIs and backend services, improving response times by **50 percent** and reducing errors.",
      "Collaborated with blockchain engineering teams to deliver secure credential verification workflows."
    ],
  },
];
