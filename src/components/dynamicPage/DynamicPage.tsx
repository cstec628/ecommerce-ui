"use client";

import React from "react";
import clsx from "clsx";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";
import { DynamicBreadcrumb } from "../breadcrumb/DynamicBreadcrumb";

type PageProps = {
  children: React.ReactNode;
  className?: string;
  Breadcrumb?: boolean;
};

export function DynamicPage({
  children,
  className,
  Breadcrumb = true,
}: PageProps) {
  const BreadcrumbPage = useBreadcrumbs();

  return (
    <main className={clsx(className)}>
      {Breadcrumb && BreadcrumbPage.length > 0 && (
        <DynamicBreadcrumb items={BreadcrumbPage} />
      )}
      {children}
    </main>
  );
}
