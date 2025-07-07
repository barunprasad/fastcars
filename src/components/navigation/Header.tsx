import Link from "next/link";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-md font-bold flex items-center justify-start"
        >
          <span className="relative -left-2 font-mono">Fast Cars</span>
        </Link>

        <Navigation />
      </div>
    </header>
  );
}
