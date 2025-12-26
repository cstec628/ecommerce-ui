import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, XIcon } from "lucide-react";
import { useCart } from "../../hooks/cart/useCartQuery";
import { Loading } from "@/components/ui/loading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { DialogTitle } from "@/components/ui/dialog";

function CartBadge() {
  const { data, isLoading } = useCart();
  return (
    <Sheet>
      <DialogTitle className="hidden">cart</DialogTitle>
      <SheetTrigger className="relative">
        <ShoppingCart size={24} className="cursor-pointer" />
        <Badge className="absolute -top-1 -right-2 h-4 min-w-4 font-sm rounded-full px-0 font-mono tabular-nums bg-main">
          {data?.items.length! > 0 ? data?.items.length : 0}
        </Badge>
      </SheetTrigger>
      {data?.items.length! > 0 ? (
        <>
          <SheetContent>
            <SheetHeader className="flex items-center justify-between flex-row">
              <SheetTitle className="text-2xl">Shopping cart</SheetTitle>
              <SheetClose className="cursor-pointer rotate-0 transition-transform duration-500 ease-in-out hover:rotate-90">
                <XIcon size={24} />
                <span className="sr-only">Close</span>
              </SheetClose>
            </SheetHeader>
            <div className="">
              {/* {data?.items.map((item) => (
              ))} */}
            </div>
          </SheetContent>
        </>
      ) : (
        <>
          <SheetContent>
            <SheetHeader className="relative">
              <SheetClose className="absolute top-4 right-4 cursor-pointer rotate-0 transition-transform duration-500 ease-in-out hover:rotate-90">
                <XIcon size={24} />
                <span className="sr-only">Close</span>
              </SheetClose>
            </SheetHeader>
            <div className="h-full flex items-center justify-center flex-col px-4">
              <SheetTitle className="mb-1 font-bold text-3xl">
                Your cart is empty
              </SheetTitle>
              <SheetDescription className="mb-5 text-center">
                You may check out all the available products and buy some in the
                shop.
              </SheetDescription>
              <SheetClose asChild>
                <Link href="/products" className="w-full flex justify-center">
                  <Button
                    className="cursor-pointer bg-main text-white hover:bg-main2 hover:text-white"
                    size="lg"
                    variant="outline"
                  >
                    Continue shopping
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </>
      )}
    </Sheet>
  );
}

export default CartBadge;
