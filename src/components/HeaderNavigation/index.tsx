"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { NavLinkItem } from "@/constants/navigation";
import { cn } from "@/lib/utils";

interface HeaderNavigationProps {
  navItems: NavLinkItem[];
}

export function HeaderNavigation({ navItems }: HeaderNavigationProps) {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex space-x-1">
        {navItems.map(({ label, value }) => {
          const isActive = pathname === value;

          const base =
            "px-2 py-1 text-white bg-transparent font-bold underline-offset-8 outline-0 hover:text-white hover:bg-transparent hover:underline hover:underline-offset-8 focus:text-white focus:bg-transparent focus:underline focus:underline-offset-8 focus-visible:text-white focus-visible:underline focus-visible:underline-offset-8 transition";
          const active = "underline underline-offset-4";

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
      </NavigationMenuList>
    </NavigationMenu>
  );
}
