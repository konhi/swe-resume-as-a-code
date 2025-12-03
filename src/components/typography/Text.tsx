import { type ReactNode } from "react";

type TextVariant =
  | "body"
  | "mono"
  | "mono-sm"
  | "label"
  | "caption"
  | "period"
  | "subtitle";

type TextOpacity = "100" | "80" | "60" | "50" | "40" | "30" | "20";

type TextProps = {
  variant?: TextVariant;
  opacity?: TextOpacity;
  children: ReactNode;
  className?: string;
  as?: "span" | "p" | "div";
};

const variantClasses: Record<TextVariant, string> = {
  body: "text-xs",
  mono: "font-mono text-[10px] leading-relaxed",
  "mono-sm": "font-mono text-[9px] leading-relaxed",
  label: "text-xs font-semibold",
  caption: "text-xs leading-relaxed",
  period: "text-xs font-normal",
  subtitle: "text-base font-normal",
};

const opacityClasses: Record<TextOpacity, string> = {
  "100": "text-white",
  "80": "text-white/80",
  "60": "text-white/60",
  "50": "text-white/50",
  "40": "text-white/40",
  "30": "text-white/30",
  "20": "text-white/20",
};

export function Text({
  variant = "body",
  opacity = "80",
  children,
  className = "",
  as: Component = "span",
}: TextProps) {
  const classes =
    `${variantClasses[variant]} ${opacityClasses[opacity]} ${className}`.trim();

  return <Component className={classes}>{children}</Component>;
}
