export type CartItemType = {
  id: string;
  productId: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  price: number;
  quantity: number;
  variant?: Record<string, string>;
};

export type CartSummary = {
  totalItems: number;
  subTotal: number;
  discount: number;
  shippingFee: number;
  tax: number;
  total: number;
};

export type Cart = {
  id: string;
  userId?: string;
  items: CartItemType[];
  summary: CartSummary;
  currency: "VND";
  updatedAt: string;
};
