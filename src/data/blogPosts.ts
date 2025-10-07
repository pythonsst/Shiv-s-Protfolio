export const blogPosts = [
  {
    id: 1,
    title: "From Startup One-Man Army to Full-Stack Leader: My Journey Building Million-User Apps",
    excerpt: "How I became the technical backbone of multiple startups, scaling from solo developer to engineering leader. Real stories of building end-to-end solutions, leading remote teams, and shipping products that serve millions of users across mobile, web, and backend systems.",
    date: "January 15, 2025",
    readTime: "12 mins read",
    category: "Leadership",
    tags: ["Startup", "Full Stack", "Leadership", "Scaling"],
    slug: "startup-one-man-army-to-leader",
    published: true
  },
  {
    id: 2,
    title: "Scaling Mobile Apps to Millions of Users: Architecture & Performance",
    excerpt: "Deep dive into building high-performance mobile applications that scaled to millions of users. Covering Clean Architecture, performance optimization, crash rate reduction by 30%, and maintaining 4.5+ app store ratings.",
    date: "January 10, 2025",
    readTime: "8 mins read",
    category: "Engineering",
    tags: ["Mobile Development", "Performance", "Scaling", "Architecture"],
    slug: "scaling-mobile-apps-100k-downloads",
    published: true
  },
  {
    id: 3,
    title: "Startup Engineering: Building Production-Ready Apps as a One-Man Army",
    excerpt: "How I built complete mobile and web applications from scratch while juggling multiple roles. Real-world stories of implementing React Native, Node.js, AWS infrastructure, and DevOps practices while being the sole technical founder of successful startups.",
    date: "January 5, 2025",
    readTime: "11 mins read",
    category: "Engineering",
    tags: ["Startup", "Full Stack", "Production", "DevOps"],
    slug: "startup-engineering-one-man-army",
    published: true
  },
  {
    id: 4,
    title: "Modern Web Development with React & TypeScript: A Mobile Developer's Guide",
    excerpt: "Transitioning from mobile to web development using React, TypeScript, and modern tooling. Covering component architecture, state management, and building responsive web applications that scale.",
    date: "December 28, 2024",
    readTime: "7 mins read",
    category: "Engineering",
    tags: ["Web Development", "React", "TypeScript", "Frontend"],
    slug: "modern-web-development-react-typescript",
    published: true
  },
  {
    id: 5,
    title: "Backend Development with Node.js & AWS: Building Scalable APIs",
    excerpt: "Comprehensive guide to building robust backend systems using Node.js, Express, and AWS services. Covering API design, database optimization, microservices architecture, and cloud deployment strategies.",
    date: "December 20, 2024",
    readTime: "9 mins read",
    category: "Engineering",
    tags: ["Backend", "Node.js", "AWS", "API Development"],
    slug: "backend-development-nodejs-aws",
    published: true
  },
  {
    id: 6,
    title: "Full-Stack Development: Building End-to-End Solutions",
    excerpt: "Complete guide to full-stack development covering React Native mobile apps, React web applications, Node.js backends, and AWS cloud infrastructure. Real-world examples from production applications.",
    date: "December 15, 2024",
    readTime: "10 mins read",
    category: "Engineering",
    tags: ["Full Stack", "React Native", "Node.js", "AWS"],
    slug: "fullstack-development-end-to-end",
    published: true
  },
  {
    id: 7,
    title: "Leading Engineering Teams: From Individual Contributor to Tech Lead",
    excerpt: "Insights from transitioning from senior developer to engineering leadership. Covering team mentorship, technical decision-making, architecture planning, and scaling development processes across mobile, web, and backend teams.",
    date: "December 10, 2024",
    readTime: "8 mins read",
    category: "Leadership",
    tags: ["Leadership", "Engineering Management", "Team Building"],
    slug: "startup-technical-leadership",
    published: true
  },
  {
    id: 8,
    title: "DevOps & CI/CD: Automating Mobile & Web Application Deployment",
    excerpt: "Complete guide to DevOps practices for modern applications. Covering Fastlane automation, GitHub Actions, AWS deployment, and building robust CI/CD pipelines for mobile and web applications.",
    date: "December 5, 2024",
    readTime: "7 mins read",
    category: "Engineering",
    tags: ["DevOps", "CI/CD", "Automation", "AWS"],
    slug: "devops-cicd-automation-deployment",
    published: true
  }
];

// Utility functions for working with blog posts
export const getPublishedPosts = () => {
  return blogPosts.filter(post => post.published);
};

export const getPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string) => {
  return blogPosts.filter(post => post.category === category && post.published);
};

export const getRecentPosts = (limit: number = 3) => {
  return getPublishedPosts().slice(0, limit);
};
