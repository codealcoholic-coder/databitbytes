import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page" style={{ padding: 40 }}>
      <h1>Page not found</h1>
      <p>This route does not exist yet. Go back home.</p>
      <Link href="/">Return home</Link>
    </div>
  );
}
