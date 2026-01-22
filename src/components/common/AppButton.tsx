import * as React from "react";
import Link from "next/link";
import clsx from "clsx";
import { cva, type VariantProps } from "class-variance-authority";

/* --------------------------------------------
 * VARIANTS
 * -------------------------------------------- */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-main-800 text-white rounded-full hover:bg-main-700",
        secondary:
          "group bg-white border border-main2-500 rounded-full hover:border-main-800 relative overflow-hidden before:absolute before:inset-0 before:bg-main-800 before:origin-left before:scale-x-0 before:transition-transform before:duration-[1000ms] hover:before:scale-x-100",
        secondaryActive:
          "bg-main-800 text-white rounded-full hover:bg-main-700",
        outline:
          "group border border-main-800 rounded-full text-main-800 relative overflow-hidden hover:text-white before:absolute before:inset-0 before:bg-main-800 before:origin-left before:scale-x-0 before:transition-transform before:duration-[1000ms] hover:before:scale-x-100",
        ghost: "text-main-500 hover:bg-main-50",
        danger: "bg-red-500 text-white hover:bg-red-600",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-[40px] px-5",
        lg: "h-[44px] px-[24px]",
        xl: "h-[48px] px-[24px]",
        xxl: "h-[56px] px-[24px]",
      },
      iconOnly: {
        true: "p-0 aspect-square",
        false: "",
      },
    },
    compoundVariants: [
      { size: "sm", iconOnly: true, className: "h-9 w-9" },
      { size: "md", iconOnly: true, className: "h-11 w-11" },
      { size: "lg", iconOnly: true, className: "h-13 w-13" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      iconOnly: false,
    },
  }
);

/* --------------------------------------------
 * PROPS
 * -------------------------------------------- */
export interface AppButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as link / tel / mail */
  href?: string;

  /** Icon only button */
  iconOnly?: boolean;

  /** REQUIRED when iconOnly = true */
  ariaLabel?: string;

  /** Loading state */
  loading?: boolean;

  /** Icons */
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/* --------------------------------------------
 * COMPONENT
 * -------------------------------------------- */
export function AppButton({
  className,
  variant,
  size,
  href,
  iconOnly,
  ariaLabel,
  loading,
  leftIcon,
  rightIcon,
  children,
  ...props
}: AppButtonProps) {
  if (iconOnly && !ariaLabel) {
    console.warn("AppButton: iconOnly requires ariaLabel");
  }

  const classes = clsx(buttonVariants({ variant, size, iconOnly }), className);

  const content = loading ? (
    "Loading..."
  ) : (
    <>
      {!iconOnly && leftIcon}
      {children}
      {!iconOnly && rightIcon}
    </>
  );

  /* LINK MODE */
  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isExternal) {
      return (
        <a href={href} aria-label={ariaLabel} className={classes}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} aria-label={ariaLabel} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      aria-label={ariaLabel}
      className={classes}
      disabled={loading || props.disabled}
      {...props}
    >
      {content}
    </button>
  );
}
