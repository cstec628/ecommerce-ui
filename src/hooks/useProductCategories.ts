import { queryKeys } from "@/hooks/query/queryKeys";
import { useAppQuery } from "@/hooks/query/useAppQuery";
import { productService } from "@/services/product.service";
import { ProductCategory } from "@/types/product";


export function useProductCategories() {
  return useAppQuery<ProductCategory[]>(
    queryKeys.product.categories,
    productService.getCategories
  );
}