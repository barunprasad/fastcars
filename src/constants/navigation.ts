export interface NavLinkItem {
  value: string;
  label: string;
}

export const NAV_LINK_ITEMS: NavLinkItem[] = [
  { value: "/", label: "Home" },
  { value: "/models", label: "Models" },
  { value: "/blog", label: "Blogs" },
];

export interface ActionButton {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}

export const HERO_ACTION_BUTTONS: ActionButton[] = [
  { href: "/models", label: "View All Cars", variant: "primary" },
  { href: "/blog", label: "Read Stories", variant: "secondary" },
];

export const CAR_ERAS = [
  "all",
  "present",
  "2010s",
  "2000s",
  "90s",
  "80s",
  "70s",
] as const;
