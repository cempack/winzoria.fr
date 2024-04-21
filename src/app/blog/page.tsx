import { BlogComp } from "@/components/blog";

export default function Blog() {
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 md:gap-8">
      <BlogComp />
    </main>
  );
}
