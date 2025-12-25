import cart from "./cart.json";
import { Cart } from "@/components/header/cart/types/cart";

export const cartService = {
  getCart: async (): Promise<Cart> => {
    // const res = await api.get<ProductCategory[]>("/categories");
    // console.log(res.data);
    // return res.data;
    return new Promise((resolve) => {
      setTimeout(() => resolve(cart as Cart), 50000);
    });
  },
};
