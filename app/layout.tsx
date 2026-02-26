import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "databites.tech clone | AI edition",
  description: "AI-focused publication style website with admin panel."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
