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
import { HEADER_NAV } from "@/config/header-nav";

export type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: Crumb[];
  className?: string;
};

export function DynamicBreadcrumb({ items, className }: BreadcrumbProps) {
  console.log(items);
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
                <BreadcrumbPage>
                  {HEADER_NAV.filter((nav) => nav.href === item.href)[0]
                    ?.label || item.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href}>
                  {HEADER_NAV.filter((nav) => nav.href === item.href)[0]
                    ?.label || item.label}
                </BreadcrumbLink>
              )}

              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
