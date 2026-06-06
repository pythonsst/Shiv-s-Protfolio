import { useMemo } from "react";
import { blogPosts } from "@/data/blogPosts";
import { getPublishedPosts } from "@/lib/blog";

export function useBlogPosts() {
  return useMemo(() => {
    return {
      allPosts: blogPosts,
      publishedPosts: getPublishedPosts(),
    };
  }, []);
}
