import { api } from "@/lib/axios";
import { Cart } from "@/types/cart";

export const cartService = {
 getCart: async (): Promise<Cart> => {
    const res = await api.get<Cart>("/cart");
    return res.data;
  },

  addItem: async (payload: {
    productId: string;
    quantity: number;
  }): Promise<Cart> => {
    const res = await api.post<Cart>("/cart/items", payload);
    return res.data;
  },

  updateItem: async (
    id: string,
    quantity: number
  ): Promise<Cart> => {
    const res = await api.put<Cart>(`/cart/items/${id}`, {
      quantity,
    });
    return res.data;
  },

  removeItem: async (id: string): Promise<Cart> => {
    const res = await api.delete<Cart>(`/cart/items/${id}`);
    return res.data;
  },
};
