"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { getCategories, getPosts } from "@/lib/content";

export function Header() {
  const categories = useMemo(() => getCategories(), []);
  const posts = useMemo(() => getPosts().slice(0, 8), []);
  const [searchOpen, setSearchOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  return (
    <>
      <header className="top">
        <div className="brand-row container-wide">
          <Link className="logo" href="/" aria-label="Home">
            <span>0101</span>
          </Link>
          <Link className="brand" href="/">
            databites.tech
          </Link>

          <button className="icon-btn" onClick={() => setSearchOpen(true)} aria-label="Open search">
            ⌕
          </button>
          <button className="icon-btn" onClick={() => setShareOpen((v) => !v)} aria-label="Share">
            ⤴
          </button>
          <Link className="subscribe" href="/subscribe">
            Subscribe
          </Link>
          <Link className="sign-in" href="/signin">
            Sign in
          </Link>

          {shareOpen && (
            <div className="share-menu" role="menu">
              <button>Copy link</button>
              <button>Send as email</button>
              <button>Share to Facebook</button>
              <button>Share to Linkedin</button>
              <button>Share to X</button>
            </div>
          )}
        </div>

        <nav className="nav container-wide">
          <Link href="/">Home</Link>
          <Link href="/member">Become a member ✨</Link>
          {categories.map((category) => (
            <Link key={category.key} href={`/topics/${category.key}`}>
              {category.label}
            </Link>
          ))}
          <Link href="/admin">Admin</Link>
        </nav>
      </header>

      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="search-input">⌕ Search people and posts</div>
            <h4>People</h4>
            <div className="search-person">Josep Ferrer · Author · @rfeers</div>
            <div className="search-person">Cornellius Yudha Wijaya · Author · @cornellius</div>
            <h4>Posts</h4>
            {posts.map((post) => (
              <div key={post.id} className="search-post">
                <img src={post.image} alt={post.title} />
                <div>
                  <strong>{post.title}</strong>
                  <p>{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
