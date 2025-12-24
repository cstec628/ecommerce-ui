export const queryKeys = {
  product: {
    categories: ["product", "categories"] as const,
    productsByCategory: (slug: string) =>
      ["product", "category", slug] as const,
  }
};
