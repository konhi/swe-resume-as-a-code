import { type ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3;

type HeadingProps = {
  level: HeadingLevel;
  children: ReactNode;
  className?: string;
};

const levelClasses: Record<HeadingLevel, string> = {
  1: "text-3xl font-bold tracking-tight text-white",
  2: "text-lg font-semibold text-white",
  3: "text-base font-semibold text-white",
};

export function Heading({ level, children, className = "" }: HeadingProps) {
  const classes = `${levelClasses[level]} ${className}`.trim();

  switch (level) {
    case 1:
      return <h1 className={classes}>{children}</h1>;
    case 2:
      return <h2 className={classes}>{children}</h2>;
    case 3:
      return <h3 className={classes}>{children}</h3>;
  }
}
