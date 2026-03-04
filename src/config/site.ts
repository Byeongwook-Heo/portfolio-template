export const siteConfig = {
  url:
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://byungwook-portfolio.vercel.app",
  author: {
    name: { ko: "허병욱", en: "Byungwook Heo" },
    title: {
      ko: "Customer Success Manager",
      en: "Customer Success Manager",
    },
    email: "contact@example.com",
  },
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/byeongwook-heo-1a1779185/",
    blog: "https://blog.example.com",
  },
  nav: [
    "about",
    "experience",
    "career-highlights",
    "projects",
    "contact",
  ] as const,
  sections: {
    hero: true,
    about: true,
    experience: true,
    careerHighlights: true,
    speaking: false,
    certified: false,
    projects: true,
    contact: true,
  },
  seo: {
    titleTemplate: "%s | Byungwook Heo",
    defaultTitle: "Byungwook Heo | Customer Success Manager",
    description:
      "Customer Success Manager portfolio focused on enterprise account growth, adoption, renewal, and long-term customer value.",
    keywords: [
      "customer success manager",
      "pre-sales",
      "enterprise saas",
      "hashicorp",
      "financial sales",
    ],
  },
  googleVerification: "",
};

export type NavKey = (typeof siteConfig.nav)[number];
