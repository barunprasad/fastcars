import Link from "next/link";
import { Instagram, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-racing text-white mb-2">
            Fast Cars Showcase
          </h2>
          <p className="text-sm">
            Celebrating the art of speed—from vintage muscle to modern
            hypercars.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-white mb-2">Navigate</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/models"
                className="hover:text-white transition-colors"
              >
                Models
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/favorites"
                className="hover:text-white transition-colors"
              >
                Favorites
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium text-white mb-2">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <Link
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://github.com"
              aria-label="GitHub"
              className="hover:text-white transition-colors"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </Link>
          </div>
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Fast Cars Showcase. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
