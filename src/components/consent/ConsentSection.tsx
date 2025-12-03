import { Text } from "../typography/Text";

type ConsentSectionProps = {
  paragraphs: Array<string>;
};

export function ConsentSection({ paragraphs }: ConsentSectionProps) {
  return (
    <section className="pt-4 border-t border-white/10 mt-auto">
      {paragraphs.map((text, index) => (
        <Text
          key={index}
          variant="caption"
          opacity="40"
          as="p"
          className={index < paragraphs.length - 1 ? "mb-2" : ""}
        >
          {text}
        </Text>
      ))}
    </section>
  );
}
