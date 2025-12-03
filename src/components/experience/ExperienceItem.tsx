import { Heading } from "../typography/Heading";
import { Separator } from "../typography/Separator";
import { Text } from "../typography/Text";

export type Skill = {
  category: string;
  items: string;
  subItems?: string;
};

function parseItemsWithParentheses(text: string) {
  const parts: Array<{ text: string; isParentheses: boolean }> = [];
  const regex = /(\([^)]+\))/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // AI: Add text before parentheses
    if (match.index > lastIndex) {
      parts.push({
        text: text.slice(lastIndex, match.index),
        isParentheses: false,
      });
    }
    // AI: Add parentheses content
    parts.push({ text: match[0], isParentheses: true });
    lastIndex = match.index + match[0].length;
  }

  // AI: Add remaining text after last parentheses
  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex), isParentheses: false });
  }

  return parts;
}

function CommaToSlash({ text }: { text: string }) {
  const items = text.split(",").map((item) => {
    const trimmedStart = item.replace(/^\s+/, "");
    return trimmedStart;
  });

  return (
    <>
      {items.map((item, index) => (
        <span key={index}>
          {item}
          {index < items.length - 1 && (
            <>
              {" "}
              <span className="text-[8px] text-white/20 inline-block align-middle">
                /
              </span>{" "}
            </>
          )}
        </span>
      ))}
    </>
  );
}

export function ExperienceItem({
  company,
  period,
  title,
  skills,
  logo,
}: {
  company: string;
  period: string;
  title: string;
  skills: Array<Skill>;
  logo?: string;
}) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          {logo ? (
            <div className="w-8 h-8 rounded-2xl border border-white/10 flex-shrink-0 flex items-center justify-center p-1.5">
              <img
                src={logo}
                alt={`${company} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-2xl bg-white/10 flex-shrink-0" />
          )}
          <Heading level={3}>{company}</Heading>
          <Separator />
          <Text variant="body" opacity="40">
            {title}
          </Text>
        </div>
        <Text variant="period" opacity="30">
          {period}
        </Text>
      </div>
      <div className="rounded-lg border border-white/10 overflow-hidden bg-white/[0.02]">
        {skills.map((skill, index) => {
          const itemParts = parseItemsWithParentheses(skill.items);

          return (
            <div
              key={index}
              className={`grid grid-cols-[140px_1fr] text-xs ${
                index !== skills.length - 1 ? "border-b border-white/5" : ""
              }`}
            >
              <div className="py-2.5 px-3 bg-white/[0.03] border-r border-white/5">
                <Text variant="label" opacity="60">
                  {skill.category}
                </Text>
              </div>
              <div className="py-2.5 px-3">
                <Text variant="mono" opacity="80" as="div">
                  {itemParts.map((part, partIndex) => (
                    <span
                      key={partIndex}
                      className={part.isParentheses ? "text-white/40" : ""}
                    >
                      <CommaToSlash text={part.text} />
                    </span>
                  ))}
                </Text>
                {skill.subItems && (
                  <Text
                    variant="mono-sm"
                    opacity="40"
                    as="div"
                    className="mt-1.5 pl-3 italic"
                  >
                    ↳ with: <CommaToSlash text={skill.subItems} />
                  </Text>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
