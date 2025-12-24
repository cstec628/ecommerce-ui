import Link from "next/link";
import { NavigationMenuContent } from "@/components/ui/navigation-menu";
import { useProductCategories } from "@/app/hooks/useProductCategories";
import { Skeleton } from "../ui/skeleton";

export function ProductMenu() {
  const { data, isLoading } = useProductCategories();

  if (isLoading) {
    return (
      <NavigationMenuContent>
        <div className="grid w-[200px] gap-4">
          <Skeleton className="h-4 w-full rounded-full" />
          <Skeleton className="h-4 w-full rounded-full" />
          <Skeleton className="h-4 w-full rounded-full" />
        </div>
      </NavigationMenuContent>
    );
  }
  return (
    <NavigationMenuContent>
      <div className="grid w-[200px] gap-4">
        {data?.map((cat) => (
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
