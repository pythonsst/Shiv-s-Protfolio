import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostLayout from "@/components/blog/BlogPostLayout";
import { getPostBySlug, getPublishedPosts } from "@/lib/blog";
import { blogContent } from "@/content/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Shiv Shankar Tiwari`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const Body = blogContent[slug];

  if (!post || !post.published || !Body) {
    notFound();
  }

  return (
    <BlogPostLayout post={post}>
      <Body />
    </BlogPostLayout>
  );
}
