import { Header } from "@/components/Header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page">
      <Header />
      {children}
      <footer className="footer">
        <p>© 2026 Josep Ferrer · Privacy · Terms · Collection notice</p>
        <div className="footer-buttons">
          <button>▣ Start your Substack</button>
          <button>Get the app</button>
        </div>
        <p>
          <a href="https://substack.com">Substack</a> is the home for great culture
        </p>
      </footer>
    </div>
  );
}
