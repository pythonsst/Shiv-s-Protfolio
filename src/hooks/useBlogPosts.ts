import { useMemo } from 'react';
import { blogPosts, getPublishedPosts } from '@/data/blogPosts';

export function useBlogPosts() {
  return useMemo(() => {
    const publishedPosts = getPublishedPosts();
    return {
      allPosts: blogPosts,
      publishedPosts,
    };
  }, []);
}