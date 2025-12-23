import Link from "next/link";
import { getProductCategories } from "@/services/product.service";
import { NavigationMenuContent } from "@/components/ui/navigation-menu";

export async function ProductMenu() {
  const categories = await getProductCategories();

  return (
    <NavigationMenuContent>
      <div className="grid w-[200px] gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/products/${cat.slug}`}
            className="rounded-md p-2 text-sm hover:bg-muted"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </NavigationMenuContent>
  );
}
