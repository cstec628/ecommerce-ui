import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./hooks/useCart";
import { Loading } from "@/components/ui/loading";

type Props = {};

function CartBadge({}: Props) {
  const { data, isLoading } = useCart();
  if (isLoading) {
    return (
      <Sheet>
        <SheetTrigger className="relative">
          <ShoppingCart className="h-5 w-5 cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="relative">
            <SheetTitle className="flex items-center justify-center">
              <Loading size="lg" />
            </SheetTitle>
            <SheetDescription className="text-center">
              Please wait while we load your cart items.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  }
  //   return (
  //     <Sheet>
  //       <SheetTrigger className="relative">
  //         <ShoppingCart className="h-5 w-5 cursor-pointer" />
  //         <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full pointer-events-none">
  //           3
  //         </span>
  //       </SheetTrigger>
  //       <SheetContent>
  //         <SheetHeader>
  //           <SheetTitle>Are you absolutely sure?</SheetTitle>
  //           <SheetDescription>
  //             This action cannot be undone. This will permanently delete your
  //             account and remove your data from our servers.
  //           </SheetDescription>
  //         </SheetHeader>
  //       </SheetContent>
  //     </Sheet>
  //   );
}

export default CartBadge;
