"use client";

import React, { JSX } from "react";
import clsx from "clsx";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "bodySm"
  | "caption"
  | "overline";

type TypographyTag = keyof Pick<
  JSX.IntrinsicElements,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "strong" | "label"
>;

type TypographyProps = {
  as?: TypographyTag;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  size?: string; // override custom: "text-5xl", "text-sm"
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right" | "justify";
};

/* --------------------------------------
   1. VARIANTS (Design System Style)
---------------------------------------*/
const variantStyles: Record<Variant, string> = {
  h1: "text-4xl md:text-5xl font-bold",
  h2: "text-3xl md:text-4xl font-semibold",
  h3: "text-2xl md:text-3xl font-semibold",
  h4: "text-xl md:text-2xl font-medium",
  h5: "text-lg md:text-xl font-medium",
  h6: "text-base md:text-lg font-medium",

  body: "text-base",
  bodySm: "text-sm",
  caption: "text-xs text-gray-500",
  overline: "text-[11px] uppercase tracking-wider font-medium opacity-70",
};

// DEFAULT style for as
const tagFallback: Record<string, string> = {
  h1: variantStyles.h1,
  h2: variantStyles.h2,
  h3: variantStyles.h3,
  h4: variantStyles.h4,
  h5: variantStyles.h5,
  h6: variantStyles.h6,
  p: variantStyles.body,
  span: variantStyles.body,
  strong: "font-semibold",
  label: "text-sm font-medium",
};

//  Weight / Align maps
const weightMap = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const alignMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

// Component
export function Typography({
  as = "p",
  variant,
  size,
  weight,
  align = "left",
  className,
  children,
}: TypographyProps) {
  const Tag = as;

  const appliedStyle =
    size ||
    (variant && variantStyles[variant]) ||
    tagFallback[as] ||
    "text-base";

  return (
    <Tag
      className={clsx(
        appliedStyle,
        weight && weightMap[weight],
        alignMap[align],
        "tracking-tight",
        className
      )}
    >
      {children}
    </Tag>
  );
}
