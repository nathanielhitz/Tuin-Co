"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const delayClass = delay ? `reveal-d${delay}` : "";

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} ${inView ? "in-view" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
