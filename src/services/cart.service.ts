import cart from "./__mock/cart.json";
import { Cart } from "@/types/cart";

export const cartService = {
  getCart: async (): Promise<Cart> => {
    // const res = await api.get<ProductCategory[]>("/categories");
    // console.log(res.data);
    // return res.data;
    return new Promise((resolve) => {
      setTimeout(() => resolve(cart as Cart), 500);
    });
  },
};
