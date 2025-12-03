type SeparatorProps = {
  className?: string;
};

export function Separator({ className = "" }: SeparatorProps) {
  return (
    <span className={`text-xs font-normal text-white/20 ${className}`.trim()}>
      /
    </span>
  );
}
