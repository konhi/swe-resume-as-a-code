import { SectionTitle } from "../typography/SectionTitle";
import { Text } from "../typography/Text";

export type AchievementCategory = {
  category: string;
  items: Array<string>;
};

type AchievementsSectionProps = {
  title: string;
  categories: Array<AchievementCategory>;
};

export function AchievementsSection({
  title,
  categories,
}: AchievementsSectionProps) {
  return (
    <section className="mb-8">
      <SectionTitle>{title}</SectionTitle>
      <div className="rounded-lg border border-white/10 overflow-hidden bg-white/[0.02]">
        {categories.map((section, sectionIndex) => (
          <div
            key={section.category}
            className={`grid grid-cols-[140px_1fr] text-xs ${
              sectionIndex !== categories.length - 1
                ? "border-b border-white/5"
                : ""
            }`}
          >
            <div className="py-2.5 px-3 bg-white/[0.03] border-r border-white/5">
              <Text variant="label" opacity="60">
                {section.category}
              </Text>
            </div>
            <div className="py-2.5 px-3">
              <ul className="list-none pl-0 space-y-1.5">
                {section.items.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <Text variant="body" opacity="30" className="mr-2">
                      •
                    </Text>
                    <Text variant="mono" opacity="80">
                      {achievement}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
