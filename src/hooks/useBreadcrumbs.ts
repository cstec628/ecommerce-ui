"use client";

import { usePathname } from "next/navigation";

export function useBreadcrumbs(map?: Record<string, string>) {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);
  return [
    { label: "Home", href: "/" },
    ...segments.map((seg, index) => {
      const key = decodeURIComponent(seg);
      const label = map?.[key] || key.replace(/-/g, " ");

      return {
        label: label.charAt(0).toUpperCase() + label.slice(1),
        href: "/" + segments.slice(0, index + 1).join("/"),
      };
    }),
  ];
}
