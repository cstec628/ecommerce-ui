import { api } from "@/lib/axios";
import { ProductCategory } from "@/types/product";
import { MOCK_PRODUCT_CATEGORIES } from "./__mock/product.mock";

export const productService = {
  getCategories: async (): Promise<ProductCategory[]> => {
    // const res = await api.get<ProductCategory[]>("/categories");
    // console.log(res.data);
    // return res.data;

    return MOCK_PRODUCT_CATEGORIES
  },
};
