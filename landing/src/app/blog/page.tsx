import { BlogIndexPage } from "@/features/landing/components/blog";
import { getWorkspaceBlogPosts } from "@/features/landing/data/workspace-api";

export const metadata = {
  title: "Prosperify Blog | Governed document AI insights",
  description:
    "Practical writing on evidence-backed document AI, retrieval, governance and enterprise deployment.",
};

export default async function BlogPage() {
  try {
    const posts = await getWorkspaceBlogPosts();

    return <BlogIndexPage initialPosts={posts} lang="fr" />;
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Workspace content could not be loaded.";

    return <BlogIndexPage initialError={message} initialPosts={[]} lang="fr" />;
  }
}
