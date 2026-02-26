import { PostList } from "@/components/PostList";
import { getCategories, getPosts } from "@/lib/content";

export default function HomePage() {
  const posts = getPosts();
  const categories = getCategories();

  return (
    <>
      <section className="hero">
        <h1>Welcome to DataBites AI 🧠</h1>
        <p>
          Same visual style as your screenshot set, but evolved for Deep Learning, AI and Generative AI topics. You can rename/brand later.
        </p>
      </section>

      {categories.slice(0, 3).map((category) => (
        <section key={category.key} className="section">
          <h2>{category.label}</h2>
          <PostList posts={posts.filter((post) => post.category === category.key).slice(0, 3)} />
        </section>
      ))}

      <section className="section">
        <h2>Recent posts</h2>
        <PostList posts={posts} />
      </section>
    </>
  );
}
