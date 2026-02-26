import { NextRequest, NextResponse } from "next/server";
import { updatePost } from "@/lib/content";

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const updates = await request.json();
  const changed = updatePost(params.id, updates);

  if (!changed) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(changed);
}
