"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItemType } from "@/types/cart";

interface Props {
  item: CartItemType;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
  disabled?: boolean;
}

export function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
  disabled,
}: Props) {
  return (
    <div className="flex gap-4 py-4 border-b">
      {/* Image */}
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md border">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-1">
        <h4 className="line-clamp-2 text-sm font-medium">{item.name}</h4>

        <span className="text-sm text-muted-foreground">
          {item.price.toLocaleString()} ₫
        </span>

        {/* Actions */}
        <div className="mt-2 flex items-center justify-between">
          {/* Quantity */}
          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="outline"
              onClick={onDecrease}
              disabled={disabled || item.quantity <= 1}
              className="h-8 w-8"
            >
              <Minus size={14} />
            </Button>

            <span className="w-8 text-center text-sm">{item.quantity}</span>

            <Button
              size="icon"
              variant="outline"
              onClick={onIncrease}
              disabled={disabled || item.quantity >= item.stock}
              className="h-8 w-8"
            >
              <Plus size={14} />
            </Button>
          </div>

          {/* Remove */}
          <Button
            size="icon"
            variant="ghost"
            onClick={onRemove}
            disabled={disabled}
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
