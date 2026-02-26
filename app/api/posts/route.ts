import { NextRequest, NextResponse } from "next/server";
import { addPost, getPosts } from "@/lib/content";
import { CategoryKey, Post } from "@/lib/types";

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category") as CategoryKey | null;
  return NextResponse.json(getPosts(category ?? undefined));
}

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as Omit<Post, "id">;
  const post: Post = {
    id: crypto.randomUUID(),
    ...payload
  };

  addPost(post);
  return NextResponse.json(post, { status: 201 });
}
