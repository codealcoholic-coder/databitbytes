import { PostList } from "@/components/PostList";
import { getPosts } from "@/lib/content";

export default function NotFound() {
  return (
    <main className="content container not-found-wrap">
      <h1>Page not found</h1>
      <section className="list-wrap">
        <div className="tab-row">
          <button className="tab active">Latest</button>
          <button className="tab">Top</button>
          <button className="tab">Discussions</button>
          <span className="search-icon">⌕</span>
        </div>
        <PostList posts={getPosts()} />
      </section>
    </main>
  );
}
