import type { ReactNode } from "react";

type SectionHeaderProps = {
  badge: string;
  title: ReactNode;
  subtitle?: string;
};

export default function SectionHeader({
  badge,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft border border-primary/20 eyebrow text-primary">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        {badge}
      </span>
      <h2 className="mt-5 font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-ink-subtle leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}