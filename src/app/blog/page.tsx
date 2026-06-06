import type { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import BlogCard from "@/components/blog/BlogCard";
import { getPublishedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Writing — Shiv Shankar Tiwari",
  description:
    "Thoughts, stories, and lessons from the trenches building mobile, web, and backend systems at scale.",
};

export default function BlogIndexPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="mb-12 md:mb-20 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              <span className="text-sm font-medium text-accent uppercase tracking-wider">Blog</span>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6 font-serif">Writing</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Thoughts, stories, and lessons from the trenches. No fluff, just real experiences
              building stuff that actually works.
            </p>
          </div>
          <div className="space-y-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
