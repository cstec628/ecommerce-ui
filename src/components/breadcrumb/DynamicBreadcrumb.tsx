"use client";

import clsx from "clsx";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HomeIcon } from "lucide-react";
import { Fragment } from "react/jsx-runtime";

export type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: Crumb[];
  className?: string;
};

export function DynamicBreadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <Breadcrumb className={clsx(className)}>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === items.length - 1;

          return (
            <Fragment key={index}>
              {isFirst ? (
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={item.href}
                    className="flex items-center gap-1"
                  >
                    <HomeIcon size={16} />
                  </BreadcrumbLink>
                </BreadcrumbItem>
              ) : isLast ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              )}

              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
