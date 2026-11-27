import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Skip link: keyboard users jump past the navigation (HCI: flexibility) */}
      <a
        href="#main"
        className="sr-only z-50 rounded-br-md bg-gold-500 px-4 py-2 text-sm font-bold text-ink focus:not-sr-only focus:fixed focus:top-0 focus:left-0"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
