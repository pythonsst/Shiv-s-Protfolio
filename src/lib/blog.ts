import { blogPosts, type BlogPost } from "@/data/blogPosts";

export const getPublishedPosts = (): BlogPost[] =>
  blogPosts.filter((post) => post.published);

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);

export const getPostsByCategory = (category: string): BlogPost[] =>
  blogPosts.filter((post) => post.category === category && post.published);

export const getRecentPosts = (limit = 3): BlogPost[] =>
  getPublishedPosts().slice(0, limit);

/** Previous/next published posts relative to the given slug, in listing order. */
export const getAdjacentPosts = (
  slug: string
): { prev: BlogPost | null; next: BlogPost | null } => {
  const posts = getPublishedPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? posts[index - 1] : null,
    next: index < posts.length - 1 ? posts[index + 1] : null,
  };
};
