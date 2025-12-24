"use client";

import Link from "next/link";
import { HEADER_NAV } from "@/config/header-nav";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ProductMenu } from "./ProductMenu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function HeaderNav() {
  const pathName = usePathname();
  return (
    <NavigationMenu className="hidden md:flex items-center">
      <NavigationMenuList className="flex items-center gap-8">
        {HEADER_NAV.map((item) => {
          if (item.label === "Products") {
            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuTrigger
                  className={cn(
                    "flex items-center cursor-pointer uppercase text-base font-medium duration-300 md:hover:text-[var(--color-main2)]",
                    pathName === item.href && "active text-[var(--color-main2)]"
                  )}
                >
                  {item.label}
                </NavigationMenuTrigger>
                <ProductMenu />
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={item.label} className="leading-none">
              <Link
                href={item.href}
                className={cn(
                  "uppercase text-base font-medium duration-300 md:hover:text-[var(--color-main2)]",
                  pathName === item.href && "active text-[var(--color-main2)]"
                )}
              >
                {item.label}
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
      <NavigationMenuList className="flex items-center gap-8">
        {HEADER_NAV.map((item) => {
          if (item.label === "Products") {
            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuTrigger
                  className={cn(
                    "flex items-center cursor-pointer uppercase text-base font-medium duration-300 md:hover:text-[var(--color-main2)]",
                    pathName === item.href && "active text-[var(--color-main2)]"
                  )}
                >
                  {item.label}
                </NavigationMenuTrigger>
                <ProductMenu />
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={item.label} className="leading-none">
              <Link
                href={item.href}
                className={cn(
                  "uppercase text-base font-medium duration-300 md:hover:text-[var(--color-main2)]",
                  pathName === item.href && "active text-[var(--color-main2)]"
                )}
              >
                {item.label}
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
