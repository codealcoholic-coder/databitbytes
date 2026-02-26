import { notFound } from "next/navigation";
import { PostList } from "@/components/PostList";
import { getCategories, getPosts } from "@/lib/content";

export default function TopicPage({ params }: { params: { slug: string } }) {
  const categories = getCategories();
  const category = categories.find((item) => item.key === params.slug);

  if (!category) {
    notFound();
  }

  const posts = getPosts(category.key);

  return (
    <section className="section">
      <h2>{category.label}</h2>
      <p>{category.description}</p>
      <PostList posts={posts} />
    </section>
  );
}
