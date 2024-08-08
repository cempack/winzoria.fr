import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  );
}

function BestVotersSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-4 w-full rounded-sm mb-2" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-4 w-full rounded-sm mt-2" />
    </div>
  );
}

export { BestVotersSkeleton, Skeleton };
