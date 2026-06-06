import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import type { BlogPost } from "@/data/blogPosts";
import { getAdjacentPosts } from "@/lib/blog";

/** Shared chrome (nav, header, prev/next) wrapping a single blog post's body. */
export default function BlogPostLayout({
  post,
  children,
}: {
  post: BlogPost;
  children: React.ReactNode;
}) {
  const { prev, next } = getAdjacentPosts(post.slug);

  return (
    <>
      <Navigation />
      <main className="pt-20">
        <article className="max-w-4xl mx-auto px-6 py-16">
          {/* Top Navigation */}
          <div className="mb-8 pb-6 border-b border-border">
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-sm font-medium">Back to Home</span>
              </Link>

              {next && (
                <Link
                  href={`/blog/${next.slug}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Next Article →
                </Link>
              )}
            </div>
          </div>

          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{post.title}</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="prose max-w-none">{children}</div>

          {/* Article Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-center gap-4">
              {prev ? (
                <Link
                  href={`/blog/${prev.slug}`}
                  className="flex items-center gap-3 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors duration-300"
                >
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-foreground font-medium">Previous</span>
                </Link>
              ) : (
                <span />
              )}

              {next && (
                <Link
                  href={`/blog/${next.slug}`}
                  className="flex items-center gap-3 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors duration-300"
                >
                  <span className="text-foreground font-medium">Next</span>
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
