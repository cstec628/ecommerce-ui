import { cn } from "@/lib/utils";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Loading({ size = "md", className }: LoadingProps) {
  const sizeMap = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-10 w-10 border-4",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-muted border-t-foreground",
        sizeMap[size],
        className
      )}
      aria-label="Loading"
      role="status"
    />
  );
}
