import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";

/** Listing card for a single blog post, used on the home page and the blog index. */
export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group">
      <Link
        href={`/blog/${post.slug}`}
        className="block bg-card/95 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 group"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1.5 bg-accent/10 text-accent rounded-full font-medium text-xs">
                {post.date}
              </span>
              <span className="text-muted-foreground text-xs">•</span>
              <span className="text-muted-foreground text-xs">{post.readTime}</span>
            </div>
            {post.category && (
              <span className="px-2.5 py-1 bg-muted text-muted-foreground rounded-full font-medium text-xs uppercase tracking-wide">
                {post.category}
              </span>
            )}
          </div>

          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors cursor-pointer leading-tight">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border/30">
            <span className="inline-flex items-center gap-1.5 text-accent group-hover:text-accent-hover transition-colors font-medium text-sm">
              Read more
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-accent text-xs">→</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
