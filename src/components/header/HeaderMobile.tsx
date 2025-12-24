"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HEADER_NAV } from "@/config/header-nav";
import { DialogTitle } from "../ui/dialog";

export function HeaderMobile() {
  return (
    <Sheet>
      <DialogTitle className="hidden">Mobile navigation</DialogTitle>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64">
        <nav className="flex flex-col gap-4 mt-6 px-4">
          {HEADER_NAV.map((item) => {
            if (!item.href) return null;

            return (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
