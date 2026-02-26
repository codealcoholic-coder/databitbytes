import { Post } from "@/lib/types";

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="list">
      {posts.map((post) => (
        <article key={post.id} className="card">
          <div className="card-main">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <small>
              {new Date(post.date).toLocaleDateString()} · {post.author}
            </small>
            <div className="stats">
              <span>♡ {post.likes}</span>
              <span>💬 {post.comments}</span>
              <span>↻ {post.reposts}</span>
            </div>
          </div>
          <img src={post.image} alt={post.title} />
        </article>
      ))}
    </div>
  );
}
