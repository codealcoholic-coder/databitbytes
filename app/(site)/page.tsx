import Link from "next/link";
import { PostList } from "@/components/PostList";
import { getCategories, getPosts } from "@/lib/content";

export default function HomePage() {
  const posts = getPosts();
  const categories = getCategories();

  return (
    <main className="content">
      <section className="hero container">
        <div className="hero-banner">
          <div className="overlay" />
          <div className="hero-copy">
            <h1>Welcome to DataBites! 🧠</h1>
            <p>Practical AI, Deep Learning and Generative AI insights for builders.</p>
            <Link href="/topics/getting-started" className="hero-link">
              Read the latest →
            </Link>
          </div>
        </div>
      </section>

      {categories.slice(0, 4).map((category) => {
        const sectionPosts = posts.filter((post) => post.category === category.key).slice(0, 3);
        if (sectionPosts.length === 0) {
          return null;
        }

        return (
          <section key={category.key} className="section container">
            <div className="section-head">
              <h2>{category.label}</h2>
              <Link href={`/topics/${category.key}`}>VIEW ALL</Link>
            </div>
            <PostList posts={sectionPosts} />
          </section>
        );
      })}

      <section className="cta-strip">
        <div className="container cta-inner">
          <p>👉 Subscribe now and level up your AI skills! 🔥</p>
          <button className="subscribe">Subscribe</button>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>Recent posts</h2>
        </div>
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
