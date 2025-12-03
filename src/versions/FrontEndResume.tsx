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

export function FrontEndResume() {
  return (
    <div className="resume-page w-[210mm] min-h-[297mm] bg-[#0a0a0a] text-white p-[20mm] rounded-lg border border-white/5 leading-relaxed flex flex-col print:w-[210mm] print:h-[297mm] print:rounded-none print:border-0 print:bg-black">
      <ResumeHeader
        name="Jan Szymanski"
        title="Front-End Developer — TypeScript, React, Next.js"
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
