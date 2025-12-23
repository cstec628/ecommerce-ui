import { cache } from "react";
import { ProductCategory } from "@/types/product";
import { MOCK_PRODUCT_CATEGORIES } from "./__mock/product.mock";

// 👉 flag bật/tắt mock
const USE_MOCK = true;

export const getProductCategories = cache(
  async (): Promise<ProductCategory[]> => {
    if (USE_MOCK) {
      return MOCK_PRODUCT_CATEGORIES;
    }

    // Khi có API thật → chỉ mở đoạn này
    // const res = await api.get<ProductCategory[]>("/categories");
    // return res.data;

    return [];
  }
);
