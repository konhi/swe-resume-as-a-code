import { SectionTitle } from "../typography/SectionTitle";
import { Text } from "../typography/Text";

export type Language = {
  name: string;
  level: string;
};

type LanguagesSectionProps = {
  title: string;
  languages: Array<Language>;
};

export function LanguagesSection({ title, languages }: LanguagesSectionProps) {
  return (
    <section className="mb-8">
      <SectionTitle>{title}</SectionTitle>
      <div className="rounded-lg border border-white/10 overflow-hidden bg-white/[0.02]">
        {languages.map((lang, index) => (
          <div
            key={lang.name}
            className={`grid grid-cols-[140px_1fr] text-xs ${
              index !== languages.length - 1 ? "border-b border-white/5" : ""
            }`}
          >
            <div className="py-2.5 px-3 bg-white/[0.03] border-r border-white/5">
              <Text variant="label" opacity="60">
                {lang.name}
              </Text>
            </div>
            <div className="py-2.5 px-3">
              <Text variant="mono" opacity="80">
                {lang.level}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
