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
    <>
      <NavigationMenu className="hidden md:flex items-center">
        <NavigationMenuList className="flex items-center gap-8">
          {HEADER_NAV.map((item) => {
            if (!item.hide) {
              return (
                <NavigationMenuItem key={item.label} className="leading-none">
                  <Link
                    href={item.href}
                    className={cn(
                      "text-base md:text-h5 font-bold transition-opacity duration-200 hover:text-main-800 hover:underline hover:underline-offset-4",
                      pathName === item.href && "active"
                    )}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              );
            }
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
