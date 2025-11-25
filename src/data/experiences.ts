// data/experiences.ts
import type { ExperienceItemProps } from "@/components/ExperienceItem";

export const experiences: ExperienceItemProps[] = [
  {
    id: "validus",
    title: "Deputy Manager — Mobile Engineering",
    org: "Validus Fintech Services Pvt Ltd",
    orgUrl: "https://validusfintech.com",
    location: "Enterprise FinTech",
    period: "Jul 2024 – Present",
    bullets: [
      "Architected CI/CD pipelines and observability — cut deployment time by 90% and reduced MTTR.",
      "Defined security & release standards to align with SOC2 goals and reduced release rollback incidents.",
      "Introduced performance budgets and monitoring — improved app stability and reduced crash rate.",
    ],
  },
  {
    id: "bitcoindepot",
    title: "Senior Mobile App Engineer",
    org: "Bitcoin Depot — Atlanta, USA",
    orgUrl: "https://bitcoindepot.com",
    location: "Retail & Payments",
    period: "Jul 2022 – May 2024",
    bullets: [
      "Led cross-platform apps and in-store checkout supporting 8k+ ATMs and $100M+ transactions.",
      "Optimized map & locator — reduced memory usage 35% and battery draw 40%, improving user retention.",
      "Built resilient NestJS services for real-time transaction processing and wallet integrations.",
    ],
  },
  {
    id: "affinidi",
    title: "Full Stack Engineer",
    org: "Affinidi — Bangalore, India",
    orgUrl: "https://affinidi.com",
    location: "Identity & Wallets",
    period: "Jul 2021 – May 2022",
    bullets: [
      "Designed a secure digital wallet with end-to-end encryption and passwordless sign-ins.",
      "Built GraphQL APIs and services — improved average response times by 50% and reduced error rates.",
    ],
  },
];

export default experiences;
