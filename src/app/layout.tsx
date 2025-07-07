import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fast Cars Showcase - High-Performance Automotive Gallery",
  description:
    "Dive into a curated collection of the world's most iconic and cutting-edge supercars, celebrating speed, design, and engineering excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white overscroll-none bg-black`}
      >
        <a
          href="#main-content"
          className="
            absolute top-0 left-0 
            -translate-y-full 
            px-4 py-2
            m-1 
            bg-transparent text-white 
            focus:translate-y-0 
            focus:outline-none 
            focus:ring-1 focus:ring-blue-400
            z-51
            transition-transform
          "
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
