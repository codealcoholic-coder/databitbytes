"use client";

import { useEffect, useState } from "react";
import type { Category, Post } from "@/lib/types";

const emptyForm = {
  title: "",
  excerpt: "",
  author: "Admin",
  date: new Date().toISOString().slice(0, 10),
  category: "genai",
  likes: 0,
  comments: 0,
  reposts: 0,
  image: "https://images.unsplash.com/photo-1677442135968-6f5f07c4d36a?w=400"
};

export default function AdminPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [form, setForm] = useState(emptyForm);

  async function load() {
    const [postsRes, categoriesRes] = await Promise.all([fetch("/api/posts"), fetch("/api/categories")]);
    setPosts(await postsRes.json());
    setCategories(await categoriesRes.json());
  }

  useEffect(() => {
    load();
  }, []);

  async function handleCreate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    setForm(emptyForm);
    load();
  }

  async function boostLikes(id: string, likes: number) {
    await fetch(`/api/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: likes + 1 })
    });
    load();
  }

  return (
    <main className="admin-shell">
      <h1>Admin Dashboard (separate URL: /admin)</h1>
      <p>Use this private page to publish and update posts.</p>

      <form className="form-grid" onSubmit={handleCreate}>
        <input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Post title" />
        <textarea required value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} placeholder="Short excerpt" />
        <input required value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} placeholder="Author" />
        <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
        <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
          {categories.map((category) => (
            <option key={category.key} value={category.key}>
              {category.label}
            </option>
          ))}
        </select>
        <input required value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="Image URL" />
        <button className="btn" type="submit">Publish post</button>
      </form>

      <hr style={{ margin: "24px 0" }} />

      {posts.map((post) => (
        <div key={post.id} className="admin-row">
          <div>
            <strong>{post.title}</strong>
            <div>{post.category} · likes: {post.likes}</div>
          </div>
          <button className="btn secondary" onClick={() => boostLikes(post.id, post.likes)}>
            +1 Like
          </button>
        </div>
      ))}
    </main>
  );
}
