import { Category, CategoryKey, Post } from "./types";

export const categories: Category[] = [
  { key: "notes", label: "Josep's Notes 🚀", description: "Stories, lessons, and practical ideas for building in AI." },
  { key: "cheatsheets", label: "Cheatsheets 🧩", description: "Concise explainers for ML, MLOps, and AI tooling." },
  { key: "sql", label: "SQL crash course 🔢", description: "Hands-on SQL for analytics engineering and AI pipelines." },
  { key: "getting-started", label: "Getting Started ⬆️", description: "Beginner-friendly guides for Python, ML and AI careers." },
  { key: "guest-bites", label: "TheGuestBites 🎙️", description: "Guest stories from researchers, builders, and practitioners." },
  { key: "deep-learning", label: "Deep Learning 🧠", description: "Neural networks, CV, NLP, and model optimization." },
  { key: "genai", label: "Generative AI ✨", description: "LLMs, RAG, agents, and production GenAI systems." }
];

let posts: Post[] = [
  {
    id: "p1",
    title: "You’re Using ChatGPT Wrong (According to 700M Users)",
    excerpt: "How asking better prompts unlocks better AI outcomes in work.",
    author: "Josep Ferrer",
    date: "2026-01-16",
    category: "notes",
    likes: 11,
    comments: 1,
    reposts: 3,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
  },
  {
    id: "p2",
    title: "How to Actually Get Started with LLMs",
    excerpt: "A clear roadmap to start building LLM products without overwhelm.",
    author: "Josep Ferrer",
    date: "2026-01-08",
    category: "getting-started",
    likes: 24,
    comments: 2,
    reposts: 5,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400"
  },
  {
    id: "p3",
    title: "Practical CNNs for Vision Tasks",
    excerpt: "A from-scratch deep learning guide using transfer learning in production.",
    author: "Ava Lin",
    date: "2025-12-21",
    category: "deep-learning",
    likes: 15,
    comments: 4,
    reposts: 2,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400"
  },
  {
    id: "p4",
    title: "RAG in Production: What Actually Breaks",
    excerpt: "Designing retrieval systems with evaluation, observability, and guardrails.",
    author: "Daniel Park",
    date: "2025-12-10",
    category: "genai",
    likes: 33,
    comments: 8,
    reposts: 12,
    image: "https://images.unsplash.com/photo-1677442135968-6f5f07c4d36a?w=400"
  },
  {
    id: "p5",
    title: "SQL Patterns for Feature Stores",
    excerpt: "Batch + streaming SQL patterns to power ML features reliably.",
    author: "Josep Ferrer",
    date: "2025-11-28",
    category: "sql",
    likes: 17,
    comments: 3,
    reposts: 7,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400"
  },
  {
    id: "p6",
    title: "A Guest’s Guide to AI Career Moats",
    excerpt: "A senior ML lead shares how to build hard-to-replace skills in AI.",
    author: "Claudia Ng",
    date: "2025-11-13",
    category: "guest-bites",
    likes: 19,
    comments: 1,
    reposts: 5,
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400"
  },
  {
    id: "p7",
    title: "The Only MLOps Cheatsheet You Need",
    excerpt: "Monitoring, deployment, testing, and rollback basics in one place.",
    author: "Josep Ferrer",
    date: "2025-10-30",
    category: "cheatsheets",
    likes: 27,
    comments: 4,
    reposts: 9,
    image: "https://images.unsplash.com/photo-1551281044-8b39a6606d3b?w=400"
  }
];

export function getPosts(category?: CategoryKey) {
  const source = category ? posts.filter((post) => post.category === category) : posts;
  return [...source].sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getCategories() {
  return categories;
}

export function addPost(post: Post) {
  posts = [post, ...posts];
  return post;
}

export function updatePost(id: string, updates: Partial<Post>) {
  let changed: Post | null = null;
  posts = posts.map((post) => {
    if (post.id !== id) {
      return post;
    }
    changed = { ...post, ...updates };
    return changed;
  });
  return changed;
}
