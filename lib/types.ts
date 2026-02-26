export type CategoryKey =
  | "notes"
  | "cheatsheets"
  | "sql"
  | "getting-started"
  | "guest-bites"
  | "deep-learning"
  | "genai";

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: CategoryKey;
  likes: number;
  comments: number;
  reposts: number;
  image: string;
}

export interface Category {
  key: CategoryKey;
  label: string;
  description: string;
}
