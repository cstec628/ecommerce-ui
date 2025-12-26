import { cartService } from "@/services/cart.service";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../query/queryKeys";



export function useCart() {
  return useQuery({
    queryKey: queryKeys.cart.all,
    queryFn: cartService.getCart,
  })
}