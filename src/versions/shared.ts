import type { Language } from "../components/languages/LanguagesSection";
import type { AchievementCategory } from "../components/achievements/AchievementsSection";

export type Contact = {
  href: string;
  label: string;
};

export const sharedContacts: Array<Contact> = [
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

export const sharedLanguages: Array<Language> = [
  { name: "Polish", level: "Native" },
  { name: "English", level: "C2" },
  { name: "German", level: "A2" },
];

export const sharedAchievements: Array<AchievementCategory> = [
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

export const sharedConsent: Array<string> = [
  "Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w mojej aplikacji na potrzeby procesu rekrutacji, zgodnie z art. 6 ust. 1 lit. a Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO)",
  "Wyrażam zgodę na przetwarzanie moich danych osobowych również na potrzeby przyszłych procesów rekrutacyjnych.",
];
