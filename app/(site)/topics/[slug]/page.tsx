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
    <main className="content container">
      <section className="topic-header">
        <h1>{category.label}</h1>
        <p>{category.description}</p>
      </section>

      <section className="list-wrap">
        <div className="tab-row">
          <button className="tab active">Latest</button>
          <button className="tab">Top</button>
          <button className="tab">Discussions</button>
          <span className="search-icon">⌕</span>
        </div>
        <PostList posts={posts} />
      </section>
    </main>
  );
}
