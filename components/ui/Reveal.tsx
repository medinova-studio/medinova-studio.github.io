"use client";

import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: RevealProps) {
  const style = {
    animationDelay: `${delay}s`,
    "--reveal-y": `${y}px`,
  } as CSSProperties;

  return (
    <div className={`reveal${className ? ` ${className}` : ""}`} style={style}>
      {children}
    </div>
  );
}
