import Link from "next/link";
import { getCategories } from "@/lib/content";

export function Header() {
  const categories = getCategories();

  return (
    <header className="top">
      <div className="brand-row">
        <div className="logo">⟟</div>
        <Link className="brand" href="/">
          databites.tech
        </Link>
        <button className="subscribe">Subscribe</button>
      </div>
      <nav className="nav">
        <Link href="/">Home</Link>
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
