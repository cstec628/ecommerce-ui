import { queryKeys } from "@/app/hooks/query/queryKeys";
import { useAppQuery } from "@/app/hooks/query/useAppQuery";
import { productService } from "@/services/product.service";
import { ProductCategory } from "@/types/product";


export function useProductCategories() {
  return useAppQuery<ProductCategory[]>(
    queryKeys.product.categories,
    productService.getCategories
  );
}