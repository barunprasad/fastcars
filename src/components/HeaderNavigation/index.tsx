"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { NavLinkItem } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import useStore from "@/store/useStore";
import { Badge } from "@/components/ui/badge";

interface HeaderNavigationProps {
  navItems: NavLinkItem[];
}

const base =
  "px-2 py-1 text-white bg-transparent font-bold underline-offset-8 outline-0 hover:text-white hover:bg-transparent hover:underline hover:underline-offset-8 focus:text-white focus:bg-transparent focus:underline focus:underline-offset-8 focus-visible:text-white focus-visible:underline focus-visible:underline-offset-8 transition";
const active = "underline underline-offset-4";

const baseMobileView =
  "px-4 py-2 text-white font-bold hover:text-white hover:underline hover:underline-offset-4 focus:text-white focus:underline focus:underline-offset-4 transition";
const activeMobileView = "underline underline-offset-4";

export function HeaderNavigation({ navItems }: HeaderNavigationProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const favCount = useStore((s) => s.favorites.length);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="flex space-x-1">
          {navItems.map(({ label, value }) => {
            const isActive = pathname === value;

            return (
              <NavigationMenuItem key={value}>
                <NavigationMenuLink asChild>
                  <Link href={value} className={cn(base, isActive && active)}>
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
          {/* Favorites Link with Badge */}
          <>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/favorites"
                  className={cn(
                    base,
                    pathname === "/favorites" && active,
                    "flex flex-row",
                  )}
                >
                  Favorites
                  {favCount > 0 && (
                    <Badge
                      variant="destructive"
                      className="ml-1 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                    >
                      {favCount}
                    </Badge>
                  )}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleMenuToggle}
          className="text-white hover:bg-white/30 cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col items-center py-4 space-y-2">
            {navItems.map(({ label, value }) => {
              const isActive = pathname === value;

              return (
                <Link
                  key={value}
                  href={value}
                  onClick={handleMenuClose}
                  className={cn(baseMobileView, isActive && activeMobileView)}
                >
                  {label}
                </Link>
              );
            })}

            {/* mobile favorites/comparison links */}
            <Link
              href="/favorites"
              onClick={handleMenuClose}
              className={cn(
                baseMobileView,
                pathname === "/favorites" && activeMobileView,
                "flex flex-row gap-0.5",
              )}
            >
              Favorites
              {favCount > 0 && (
                <Badge className="ml-2 bg-red-600">{favCount}</Badge>
              )}
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
