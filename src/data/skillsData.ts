// src/data/skillsData.ts
export type SkillCategory = {
  title: string;
  items: string[];
};

/**
 * Trimmed, focused skills for Java / Mobile / Full-stack applications.
 * - Removed overly-verbose or duplicate entries
 * - Added Tools & Platforms (Android Studio, Xcode, Play Store, Reactotron, Flipper)
 * - Kept categories compact and ATS-friendly
 */
const skills: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Redux-Saga",
      "Zustand",
    ],
  },

  {
    title: "Mobile",
    items: ["React Native", "Android", "iOS", "Flutter"],
  },
  {
    title: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "Java",
      "Kotlin",
      "Dart",
      "Swift",
      "C++",
      "C",
      "SQL",
    ],
  },

  {
    title: "Backend — Node.js / JS",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Fastify",
      "REST API Design",
      "GraphQL (Apollo Server)",
      "WebSockets (Socket.IO)",
      "gRPC",
      "Prisma ORM",
      "TypeORM",
      "Mongoose",
    ],
  },

  {
    title: "Cloud & DevOps",
    items: [
      "AWS (ECS, Lambda, RDS, S3)",
      "Docker",
      "Kubernetes",
      "CI/CD (GitHub Actions,Fastlane)",
    ],
  },

  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },

  {
    title: "Messaging & Events",
    items: ["Kafka", "AWS SQS", "SNS"],
  },

  {
    title: "Testing & QA",
    items: ["JUnit", "Mockito", "Jest", "Playwright", "Postman"],
  },

  {
    title: "Tools & Platforms",
    items: [
      "Android Studio",
      "Xcode",
      "Google Play Console",
      "App Store Connect",
      "Reactotron",
      "Flipper",
      "Crashlytics",
      "Bitrise",
      "Fastlane",
      "IntelliJ IDEA",
      "VS Code",
      "Git",
    ],
  },

  {
    title: "Practices & Architecture",
    items: [
      "Clean Architecture",
      "Event-Driven Systems",
      "Performance Optimization",
      "Observability",
    ],
  },

  {
    title: "Soft Skills",
    items: [
      "Technical Leadership",
      "System Design",
      "Mentoring",
      "Cross-Functional Collaboration",
    ],
  },
];

export default skills;
