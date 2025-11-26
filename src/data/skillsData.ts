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
    items: ["React.js", "Next.js", "TypeScript", "Redux Toolkit"],
  },

  {
    title: "Mobile",
    items: [
      "React Native",
      "Android (Kotlin)",
      "iOS (Swift)",
      "Flutter (Dart)",
    ],
  },
  {
    title: "Languages",
    items: [
      "Java",
      "Kotlin",
      "Swift",
      "Dart",
      "JavaScript",
      "TypeScript",
      "SQL",
    ],
  },

  {
    title: "Backend — Java",
    items: [
      "Spring Boot",
      "Spring Data (JPA / Hibernate)",
      "Spring Security",
      "Microservices",
      "Maven",
      "Gradle",
      "JUnit",
      "Mockito",
    ],
  },

  {
    title: "Backend — Node.js / JS",
    items: ["Node.js", "Express.js", "NestJS", "GraphQL", "gRPC"],
  },

  {
    title: "Cloud & DevOps",
    items: [
      "AWS (ECS, Lambda, RDS, S3)",
      "Terraform",
      "Docker",
      "Kubernetes",
      "CI/CD (GitHub Actions, Jenkins, Fastlane)",
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
