export type ContactItem = {
  ariaLabel: string; text: string; href?: string 
};

export const contacts: ContactItem[] = [
  {
    text: "pythonsst@gmail.com", href: "mailto:pythonsst@gmail.com",
    ariaLabel: ""
  },
  {
    text: "+91 7007746087", href: "tel:+917007746087",
    ariaLabel: ""
  },
  {
    text: "Hyderabad, India",
    ariaLabel: ""
  },
  {
    text: "linkedin.com/in/mobile-engineer", href: "https://linkedin.com/in/mobile-engineer",
    ariaLabel: ""
  },
  {
    text: "github.com/pythonsst", href: "https://github.com/pythonsst",
    ariaLabel: ""
  },
];

export const profile = {
  name: "Shiv Shankar Tiwari",
  heroSummary:
    "Senior Software Engineer with <strong>6+ years of experience</strong> building scalable, high-performance mobile and web platforms. I design and deliver <strong>distributed systems</strong>, make <strong>architecture-level decisions</strong>, and lead engineering teams to improve <strong>reliability</strong>, reduce <strong>operational risk</strong>, and accelerate <strong>delivery velocity</strong> at scale.",
};

