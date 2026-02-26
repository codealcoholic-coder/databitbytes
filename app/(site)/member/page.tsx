import { PostList } from "@/components/PostList";
import { getPosts } from "@/lib/content";

export default function MemberPage() {
  return (
    <main className="content container article-page">
      <h1>Become a Member! ✨</h1>
      <p className="lede">
        Become a paid subscriber to unlock premium AI deep-dives, hands-on cheatsheets, and the complete SQL + MLOps learning tracks.
      </p>

      <section className="member-box">
        <h2>This is what you get as a paid member</h2>
        <ul>
          <li>📚 Full archive of premium AI articles and frameworks.</li>
          <li>🧩 Complete cheatsheet hub for data, ML, and GenAI.</li>
          <li>💬 Member comments and private community threads.</li>
          <li>🧠 Deep Learning and GenAI implementation notes weekly.</li>
        </ul>
      </section>

      <section className="list-wrap">
        <div className="tab-row">
          <button className="tab active">Top</button>
          <button className="tab">Latest</button>
          <button className="tab">Discussions</button>
        </div>
        <PostList posts={getPosts().slice(0, 3)} />
      </section>
    </main>
  );
}
