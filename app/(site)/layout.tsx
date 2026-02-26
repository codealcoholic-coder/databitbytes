import { Header } from "@/components/Header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page">
      <Header />
      {children}
      <footer className="footer">© 2026 databites.tech clone · Ready for Vercel deployment.</footer>
    </div>
  );
}
