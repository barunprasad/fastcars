import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HeaderNavigation } from "./index";
import { NAV_LINK_ITEMS } from "@/constants/navigation";

const meta = {
  title: "Navigation/HeaderNavigation",
  component: HeaderNavigation,
  argTypes: {
    navItems: {
      description: "Array of navigation items with value and label properties",
    },
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#000000",
        },
        {
          name: "transparent",
          value: "rgba(0, 0, 0, 0.6)",
        },
      ],
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "20px", color: "white" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HeaderNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navItems: NAV_LINK_ITEMS,
  },
};

export const CustomItems: Story = {
  args: {
    navItems: [
      { value: "/dashboard", label: "Dashboard" },
      { value: "/analytics", label: "Analytics" },
      { value: "/settings", label: "Settings" },
      { value: "/profile", label: "Profile" },
    ],
  },
};

export const MinimalNav: Story = {
  args: {
    navItems: [
      { value: "/", label: "Home" },
      { value: "/about", label: "About" },
    ],
  },
};

export const EmptyNav: Story = {
  args: {
    navItems: [],
  },
};

export const OnTransparentBackground: Story = {
  args: {
    navItems: NAV_LINK_ITEMS,
  },
  parameters: {
    backgrounds: {
      default: "transparent",
    },
  },
};

export const InHeader: Story = {
  args: {
    navItems: NAV_LINK_ITEMS,
  },
  decorators: [
    (Story) => (
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(12px)",
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "4px 16px",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            🏎️ Fast Cars
          </div>
          <Story />
        </div>
      </header>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
};
