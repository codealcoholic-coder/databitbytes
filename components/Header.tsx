import Link from "next/link";
import { getCategories } from "@/lib/content";

export function Header() {
  const categories = getCategories();

  return (
    <header className="top">
      <div className="brand-row container">
        <Link className="logo" href="/" aria-label="Home">
          0101
        </Link>
        <Link className="brand" href="/">
          databites.tech
        </Link>

        <div className="header-actions" aria-hidden>
          <span>⌕</span>
          <span>⤴</span>
        </div>

        <button className="subscribe">Subscribe</button>
        <button className="sign-in">Sign in</button>
      </div>

      <nav className="nav container">
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
  );
}
