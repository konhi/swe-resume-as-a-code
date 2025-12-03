import { Heading } from "../typography/Heading";
import { Separator } from "../typography/Separator";
import { Text } from "../typography/Text";

type ContactLink = {
  href: string;
  label: string;
};

type ResumeHeaderProps = {
  name: string;
  title: string;
  contacts: Array<ContactLink>;
};

export function ResumeHeader({ name, title, contacts }: ResumeHeaderProps) {
  return (
    <header className="mb-8 pb-5 border-b border-white/10">
      <div className="flex items-center gap-4 mb-4">
        <Heading level={1}>{name}</Heading>
        <Text variant="subtitle" opacity="50">
          {title}
        </Text>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {contacts.map((contact, index) => (
          <span key={contact.href} className="contents">
            <Text variant="body" opacity="40">
              <a href={contact.href}>{contact.label}</a>
            </Text>
            {index < contacts.length - 1 && <Separator />}
          </span>
        ))}
      </div>
    </header>
  );
}
