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
      <NavigationMenu className="hidden lg:flex items-center">
        <NavigationMenuList className="flex items-center gap-6">
          {HEADER_NAV.map((item) => {
            if (!item.hide) {
              return (
                <NavigationMenuItem key={item.label} className="leading-none">
                  <Link
                    href={item.href}
                    className={cn(
                      "text-base lg:text-h5 font-bold transition-all duration-300 relative before:content-[''] before:absolute before:w-0 before:h-0.5 before:-bottom-1 before:left-0 before:transition-all before:duration-300 before:bg-main-800 md:hover:text-main-800 md:hover:before:w-full ",
                      pathName === item.href &&
                        "active before:w-full text-main-800",
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
