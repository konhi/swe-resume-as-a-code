import { ResumeHeader } from "../components/header/ResumeHeader";
import {
  ExperienceSection,
  type ExperienceEntry,
} from "../components/experience/ExperienceSection";
import { LanguagesSection } from "../components/languages/LanguagesSection";
import { AchievementsSection } from "../components/achievements/AchievementsSection";
import { ConsentSection } from "../components/consent/ConsentSection";

import time4itLogo from "../assets/time4it.svg";
import willumpLogo from "../assets/willump.svg";
import appuniteLogo from "../assets/appunite.svg";
import githubLogo from "../assets/github.svg";

import {
  sharedContacts,
  sharedLanguages,
  sharedAchievements,
  sharedConsent,
} from "./shared";

const experienceEntries: Array<ExperienceEntry> = [
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

function FullStackResume() {
  return (
    <div className="resume-page w-[210mm] min-h-[297mm] bg-[#0a0a0a] text-white p-[20mm] rounded-lg border border-white/5 leading-relaxed flex flex-col print:w-[210mm] print:h-[297mm] print:rounded-none print:border-0 print:bg-black">
      <ResumeHeader
        name="Jan Szymanski"
        title="Full-Stack Developer — TypeScript, Node, React"
        contacts={sharedContacts}
      />
      <ExperienceSection title="Experience" entries={experienceEntries} />
      <LanguagesSection title="Languages" languages={sharedLanguages} />
      <div className="mt-2" />
      <AchievementsSection
        title="Achievements"
        categories={sharedAchievements}
      />
      <ConsentSection paragraphs={sharedConsent} />
    </div>
  );
}

export { FullStackResume };
