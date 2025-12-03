import type { ExperienceEntry } from "../components/experience/ExperienceSection";
import type { Language } from "../components/languages/LanguagesSection";

import time4itLogo from "../assets/time4it.svg";
import willumpLogo from "../assets/willump.svg";
import appuniteLogo from "../assets/appunite.svg";
import githubLogo from "../assets/github.svg";
import type { AchievementCategory } from "../components/achievements/AchievementsSection";

type Contact = {
  href: string;
  label: string;
};

type HeaderData = {
  name: string;
  title: string;
  contacts: Array<Contact>;
};

export type ResumeConfig = {
  id: string;
  outputFileName: string;
  header: HeaderData;
  experience: Array<ExperienceEntry>;
  languages: Array<Language>;
  achievements: Array<AchievementCategory>;
  consent: Array<string>;
};

// AI: Shared data across all versions
const sharedContacts: Array<Contact> = [
  {
    href: "mailto:janszymanski.business@gmail.com",
    label: "janszymanski.business@gmail.com",
  },
  { href: "tel:(+48)123456789", label: "(+48) 123 456 789" },
  {
    href: "https://linkedin.com/in/jan-szymanski",
    label: "linkedin.com/in/jan-szymanski",
  },
  { href: "https://github.com/konhi", label: "github.com/konhi" },
];

const sharedLanguages: Array<Language> = [
  { name: "Polish", level: "Native" },
  { name: "English", level: "C2" },
  { name: "German", level: "A2" },
];

const sharedAchievements: Array<AchievementCategory> = [
  {
    category: "Educational",
    items: ["2x Laureate of National IT Olympiad", "3x Academic Scholarships"],
  },
  {
    category: "Personal",
    items: [
      "+50 hours of volounteering in a nonprofit animal welfare advocacy organization",
      "Top 0.15% (9,000th Western Europe) @ League of Legends",
    ],
  },
  {
    category: "Open-Source",
    items: ["8,500+ GitHub stars – Top 1% TypeScript engineer (via algora.io)"],
  },
];

const sharedConsent: Array<string> = [
  "Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w mojej aplikacji na potrzeby procesu rekrutacji, zgodnie z art. 6 ust. 1 lit. a Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO)",
  "Wyrażam zgodę na przetwarzanie moich danych osobowych również na potrzeby przyszłych procesów rekrutacyjnych.",
];

// AI: Full-Stack version experience entries
const fullStackExperience: Array<ExperienceEntry> = [
  {
    company: "Time4IT",
    period: "AUGUST 2025 - PRESENT",
    title: "Full-Stack Developer",
    logo: time4itLogo,
    skills: [
      {
        category: "Front-end",
        items: "HTML, CSS, JavaScript, TypeScript, React, Next.js",
        subItems:
          "TailwindCSS, TanStack Query & Table, Zod, RadixUI, Shadcn, Next Intl, Formik, Nuqs, Recharts, Zustand",
      },
      {
        category: "Back-end",
        items:
          "JavaScript, TypeScript, Node.js, Postgres, Redis, MongoDB, NestJS, Kafka",
        subItems: "Mongoose, Swagger, CQRS, KafkaJS, Socket.IO, Passport",
      },
      {
        category: "DevOps: CI/CD",
        items: "GitHub Actions, ArgoCD, Docker",
      },
      {
        category: "DevOps: Cloud",
        items: "AWS (S3, EKS, MSK, ElastiCache), Cloudflare (WAF, Zero Trust)",
      },
      {
        category: "Testing",
        items: "Cypress",
      },
      {
        category: "Services",
        items:
          "Payment (Przelewy24, Tpay), Invoices (InFakt), CRM (Enova), Delivery (InPost, DPD, DHL)",
      },
      {
        category: "Observability",
        items: "Sentry, BetterStack, Grafana Alloy",
      },
    ],
  },
  {
    company: "Willump Studios",
    period: "FEBRUARY 2024 - AUGUST 2025",
    title: "Founding Engineer",
    logo: willumpLogo,
    skills: [
      {
        category: "Front-end",
        items: "HTML, CSS, JavaScript, TypeScript, React, Next.js, Vite",
        subItems:
          "TailwindCSS, NextAuth.js, React Query, Zod, Storybook, RadixUI, Next Intl, Apollo",
      },
      {
        category: "Back-end",
        items:
          "JavaScript, TypeScript, Postgres, Redis, Node.js, Express, NestJS",
        subItems: "Apollo GraphQL, Drizzle, TypeORM, Swagger",
      },
      {
        category: "DevOps: CI/CD",
        items: "Terraform, GitHub Actions, Docker",
      },
      {
        category: "DevOps: Cloud",
        items:
          "AWS (S3, Lambda, Amplify, SQS, RDS, EventBridge, ECS, SES), Azure (OpenAI), GCP (IAM), Cloudflare (Workers, D1, R2, Firewall)",
      },
      {
        category: "Testing",
        items: "Jest, Vitest, Storybook",
      },
      {
        category: "Services",
        items: "Firebase, Supabase, Stripe, Keycloak, N8N, Langfuse, LiteLLM",
      },
      {
        category: "Observability",
        items: "Sentry, Grafana",
      },
      {
        category: "Marketing",
        items: "GTM, Google Analytics, PostHog, Google Ads",
      },
      {
        category: "UI Design",
        items: "Figma",
      },
    ],
  },
  {
    company: "Appunite",
    period: "SEPTEMBER 2022 - FEBRUARY 2024",
    title: "Full-Stack Developer",
    logo: appuniteLogo,
    skills: [
      {
        category: "Front-end",
        items: "HTML, CSS, JavaScript, TypeScript, React, Next.js, Vite",
        subItems:
          "TailwindCSS, React Hook Form, Apollo, Tanstack Query, Zod, RadixUI, i18next, WebSockets",
      },
      {
        category: "Back-end",
        items: "JavaScript, TypeScript, Node.js, Express, Strapi, WebSockets",
        subItems: "TypeORM",
      },
      {
        category: "DevOps: CI/CD",
        items: "Kubernetes, GitHub Actions",
      },
      {
        category: "DevOps: Cloud",
        items: "AWS (AWS, S3, ECS, SES, RDS)",
      },
      {
        category: "Testing",
        items: "Cypress, Cypress Cloud",
      },
      {
        category: "Services",
        items: "Stripe, Auth0",
      },
      {
        category: "Observability",
        items: "Sentry, Grafana",
      },
      {
        category: "Marketing",
        items: "GTM, Google Analytics, PostHog",
      },
    ],
  },
  {
    company: "Open-Source",
    period: "SINCE AUGUST 2021",
    title: "Full-Stack Developer",
    logo: githubLogo,
    skills: [
      {
        category: "Front-end",
        items: "HTML, CSS, JavaScript, TypeScript, React, Next.js",
        subItems:
          "TailwindCSS, React Query, Zod, ChakraUI, Storybook, RadixUI, Apollo",
      },
      {
        category: "Back-end",
        items: "JavaScript, TypeScript, Postgres, Node.js, Express, Strapi",
        subItems: "Apollo GraphQL, Drizzle, TypeORM, Swagger, Meilisearch",
      },
      {
        category: "DevOps: CI/CD",
        items: "GitHub Actions, Docker",
      },
      {
        category: "DevOps: Cloud",
        items: "Azure (App Service), Cloudflare (Workers, D1, R2, Firewall)",
      },
      {
        category: "Testing",
        items: "Storybook, Jest",
      },
      {
        category: "Observability",
        items: "Sentry, Grafana",
      },
      {
        category: "UI Design",
        items: "Figma",
      },
    ],
  },
];

// AI: Front-End version experience entries (front-end focused, simplified back-end)
const frontEndExperience: Array<ExperienceEntry> = [
  {
    company: "Time4IT",
    period: "AUGUST 2025 - PRESENT",
    title: "Front-End Developer",
    logo: time4itLogo,
    skills: [
      {
        category: "Front-end",
        items: "HTML, CSS, JavaScript, TypeScript, React, Next.js",
        subItems:
          "TailwindCSS, TanStack Query & Table, Zod, RadixUI, Shadcn, Next Intl, Formik, Nuqs, Recharts, Zustand",
      },
      {
        category: "Back-end",
        items: "Node.js, Postgres, Redis, MongoDB, NestJS",
      },
      {
        category: "DevOps",
        items: "GitHub Actions, ArgoCD, Docker, AWS (S3, EKS), Cloudflare",
      },
      {
        category: "Testing",
        items: "Cypress",
      },
      {
        category: "Services",
        items:
          "Payment (Przelewy24, Tpay), Invoices (InFakt), Delivery (InPost, DPD, DHL)",
      },
      {
        category: "Observability",
        items: "Sentry, BetterStack, Grafana Alloy",
      },
    ],
  },
  {
    company: "Willump Studios",
    period: "FEBRUARY 2024 - AUGUST 2025",
    title: "Founding Engineer",
    logo: willumpLogo,
    skills: [
      {
        category: "Front-end",
        items: "HTML, CSS, JavaScript, TypeScript, React, Next.js, Vite",
        subItems:
          "TailwindCSS, NextAuth.js, React Query, Zod, Storybook, RadixUI, Next Intl, Apollo",
      },
      {
        category: "Back-end",
        items: "Postgres, Redis, Node.js, Express, NestJS, GraphQL",
      },
      {
        category: "DevOps",
        items: "Terraform, GitHub Actions, Docker, AWS, Azure, GCP, Cloudflare",
      },
      {
        category: "Testing",
        items: "Jest, Vitest, Storybook",
      },
      {
        category: "Services",
        items: "Firebase, Supabase, Stripe, Keycloak",
      },
      {
        category: "Observability",
        items: "Sentry, Grafana",
      },
      {
        category: "Marketing",
        items: "GTM, Google Analytics, PostHog, Google Ads",
      },
      {
        category: "UI Design",
        items: "Figma",
      },
    ],
  },
  {
    company: "Appunite",
    period: "SEPTEMBER 2022 - FEBRUARY 2024",
    title: "Front-End Developer",
    logo: appuniteLogo,
    skills: [
      {
        category: "Front-end",
        items: "HTML, CSS, JavaScript, TypeScript, React, Next.js, Vite",
        subItems:
          "TailwindCSS, React Hook Form, Apollo, Tanstack Query, Zod, RadixUI, i18next, WebSockets",
      },
      {
        category: "Back-end",
        items: "Node.js, Express, Strapi",
      },
      {
        category: "DevOps",
        items: "Kubernetes, GitHub Actions, AWS (S3, ECS, SES, RDS)",
      },
      {
        category: "Testing",
        items: "Cypress, Cypress Cloud",
      },
      {
        category: "Services",
        items: "Stripe, Auth0",
      },
      {
        category: "Observability",
        items: "Sentry, Grafana",
      },
      {
        category: "Marketing",
        items: "GTM, Google Analytics, PostHog",
      },
    ],
  },
  {
    company: "Open-Source",
    period: "SINCE AUGUST 2021",
    title: "Front-End Developer",
    logo: githubLogo,
    skills: [
      {
        category: "Front-end",
        items: "HTML, CSS, JavaScript, TypeScript, React, Next.js",
        subItems:
          "TailwindCSS, React Query, Zod, ChakraUI, Storybook, RadixUI, Apollo",
      },
      {
        category: "Back-end",
        items: "Postgres, Node.js, Express, Strapi, GraphQL",
      },
      {
        category: "DevOps",
        items: "GitHub Actions, Docker, Azure, Cloudflare",
      },
      {
        category: "Testing",
        items: "Storybook, Jest",
      },
      {
        category: "Observability",
        items: "Sentry, Grafana",
      },
      {
        category: "UI Design",
        items: "Figma",
      },
    ],
  },
];

export const RESUME_VERSIONS: Record<string, ResumeConfig> = {
  "full-stack": {
    id: "full-stack",
    outputFileName: "Jan_Szymanski_FullStack_Resume.pdf",
    header: {
      name: "Jan Szymanski",
      title: "Full-Stack Developer — TypeScript, Node, React",
      contacts: sharedContacts,
    },
    experience: fullStackExperience,
    languages: sharedLanguages,
    achievements: sharedAchievements,
    consent: sharedConsent,
  },
  "front-end": {
    id: "front-end",
    outputFileName: "Jan_Szymanski_FrontEnd_Resume.pdf",
    header: {
      name: "Jan Szymanski",
      title: "Front-End Developer — TypeScript, React, Next.js",
      contacts: sharedContacts,
    },
    experience: frontEndExperience,
    languages: sharedLanguages,
    achievements: sharedAchievements,
    consent: sharedConsent,
  },
};

export const DEFAULT_VERSION = "full-stack";

export function getResumeConfig(version: string | null): ResumeConfig {
  return (
    RESUME_VERSIONS[version ?? DEFAULT_VERSION] ??
    RESUME_VERSIONS[DEFAULT_VERSION]
  );
}
