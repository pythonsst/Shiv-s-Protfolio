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
      "Architected CI/CD & observability to reduce deployment time by 90% and improve recovery time.",
      "Defined security and release standards aligned with SOC2 goals.",
      "Introduced performance budgets and monitoring to improve app stability metrics.",
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
      "Optimized map & locator features — reduced memory by 35% and battery usage by 40%.",
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
      "Designed secure digital wallet with end-to-end encryption and passwordless sign-ins.",
      "Built GraphQL APIs improving response times by 50%.",
    ],
  },
];
