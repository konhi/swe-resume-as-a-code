import { SectionTitle } from "../typography/SectionTitle";
import { ExperienceItem, type Skill } from "./ExperienceItem";

export type ExperienceEntry = {
  company: string;
  period: string;
  title: string;
  logo: string;
  skills: Array<Skill>;
};

type ExperienceSectionProps = {
  title: string;
  entries: Array<ExperienceEntry>;
};

export function ExperienceSection({ title, entries }: ExperienceSectionProps) {
  return (
    <section className="mb-8">
      <SectionTitle>{title}</SectionTitle>

      {entries.map((entry) => (
        <ExperienceItem
          key={entry.company}
          company={entry.company}
          period={entry.period}
          title={entry.title}
          logo={entry.logo}
          skills={entry.skills}
        />
      ))}
    </section>
  );
}
