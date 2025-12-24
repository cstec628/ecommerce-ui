import { cartService } from "@/services/cart.service";
import { useQuery } from "@tanstack/react-query";



export function useCart() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: cartService.getCart,
  })
}