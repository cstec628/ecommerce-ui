import React from "react";
import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean; // full width, không giới hạn max-width
};

export function Container({ children, className, fluid }: ContainerProps) {
  return (
    <div className={clsx(fluid ? "container-fluid" : "container", className)}>
      {children}
    </div>
  );
}
