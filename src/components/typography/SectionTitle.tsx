import { type ReactNode } from "react";
import { Heading } from "./Heading";

type SectionTitleProps = {
  children: ReactNode;
};

// AI: Wrapper for consistent section title styling across the resume
export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <Heading level={2} className="mb-4 flex items-center gap-2">
      {children}
    </Heading>
  );
}
