import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { HeaderNavigation } from "@/components/HeaderNavigation";
import { NAV_LINK_ITEMS } from "@/constants/navigation";
import { SITE_METADATA } from "@/constants/metadata";
import { Footer } from "@/components/Footer";
import { SkipToMain } from "@/components/SkipToMain";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = SITE_METADATA;

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
        <SkipToMain />
        <Header>
          <HeaderNavigation navItems={NAV_LINK_ITEMS} />
        </Header>
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
