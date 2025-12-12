import React from "react";
import clsx from "clsx";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string; // anchor link
};

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={clsx(className)}>
      {children}
    </section>
  );
}
