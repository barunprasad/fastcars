import Link from "next/link";
import { Navigation } from "./Navigation";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-1">
        <Link
          href="/"
          className="text-md font-bold flex items-center justify-start"
        >
          <Image
            src="/logo.png"
            alt="Fast Cars Logo"
            width={42}
            height={42}
            priority
          />
        </Link>

        <Navigation />
      </div>
    </header>
  );
}
