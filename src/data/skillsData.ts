// src/data/skillsData.ts
export type SkillCategory = {
  title: string;
  items: string[];
};

const skills: SkillCategory[] = [
  {
    title: "Frontend",
    items: ["React.js", "React Native", "TypeScript", "Next.js", "Redux Toolkit", "Hooks", "Modular UI"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "Java", "Spring Boot", "Kotlin Microservices"],
  },
  {
    title: "Architecture",
    items: ["Microservices", "Event-Driven Systems", "DDD", "Modular Monoliths"],
  },
  {
    title: "APIs",
    items: ["REST", "GraphQL", "gRPC"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (ECS, Lambda, API Gateway, RDS, DynamoDB, S3)", "Terraform", "AWS CDK", "Jenkins", "GitHub Actions", "Bitrise", "Fastlane"],
  },
  {
    title: "Messaging & Events",
    items: ["Kafka", "AWS SQS", "SNS", "EventBridge"],
  },
  {
    title: "Testing",
    items: ["Jest", "Detox", "Selenium", "Playwright", "Postman"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Firebase"],
  },
  {
    title: "Practices",
    items: ["CI/CD", "Clean Architecture", "Performance Optimization", "Observability"],
  },
  {
    title: "Soft Skills",
    items: ["Technical Leadership", "System Design", "Mentoring", "Cross-Functional Collaboration"],
  },
];

export default skills;
