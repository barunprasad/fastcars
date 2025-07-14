import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header } from "./index";
import { HeaderNavigation } from "@/components/HeaderNavigation";
import { NAV_LINK_ITEMS } from "@/constants/navigation";

const meta = {
  title: "Navigation/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#000000",
        },
        {
          name: "with-content",
          value: "linear-gradient(180deg, #000000 0%, #333333 100%)",
        },
      ],
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ minHeight: "100vh" }}>
        <Story />
        <div style={{ padding: "100px 20px 20px", color: "white" }}>
          <h1>Page Content</h1>
          <p>
            This content demonstrates how the fixed header overlays the page
            content.
          </p>
          <p>
            The header should remain visible as you scroll through the page.
          </p>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <Header>
      <HeaderNavigation navItems={NAV_LINK_ITEMS} />
    </Header>
  ),
};

export const WithoutNavigation: Story = {
  args: {},
  render: () => <Header />,
};

export const WithScrollContent: Story = {
  args: {},
  render: () => (
    <Header>
      <HeaderNavigation navItems={NAV_LINK_ITEMS} />
    </Header>
  ),
  decorators: [
    (Story) => (
      <div style={{ minHeight: "200vh" }}>
        <Story />
        <div style={{ padding: "100px 20px 20px", color: "white" }}>
          <h1>Hero Section</h1>
          <p>This simulates a hero section with the header overlay.</p>
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2>Scroll down to see more content</h2>
          </div>
          <h2>More Content</h2>
          <p>The header should remain fixed and visible as you scroll.</p>
          <p>The backdrop blur effect creates a subtle overlay effect.</p>
          <div style={{ height: "50vh" }}>
            <p>Additional content to demonstrate scroll behavior...</p>
          </div>
        </div>
      </div>
    ),
  ],
};

export const OnLightBackground: Story = {
  args: {},
  render: () => (
    <Header>
      <HeaderNavigation navItems={NAV_LINK_ITEMS} />
    </Header>
  ),
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
        <Story />
        <div style={{ padding: "100px 20px 20px", color: "black" }}>
          <h1>Light Background Content</h1>
          <p>This shows how the header appears over light content.</p>
          <p>The semi-transparent black background provides good contrast.</p>
        </div>
      </div>
    ),
  ],
};

export const WithImageBackground: Story = {
  args: {},
  render: () => (
    <Header>
      <HeaderNavigation navItems={NAV_LINK_ITEMS} />
    </Header>
  ),
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "100vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Story />
        <div style={{ padding: "100px 20px 20px", color: "white" }}>
          <h1>Hero Image Background</h1>
          <p>This demonstrates the header over a hero image background.</p>
          <p>
            The backdrop blur effect helps the header stand out from the
            background.
          </p>
        </div>
      </div>
    ),
  ],
};

export const MobileView: Story = {
  args: {},
  render: () => (
    <Header>
      <HeaderNavigation navItems={NAV_LINK_ITEMS} />
    </Header>
  ),
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "100vh" }}>
        <Story />
        <div style={{ padding: "100px 20px 20px", color: "white" }}>
          <h1>Mobile View</h1>
          <p>This shows how the header appears on mobile devices.</p>
          <p>The navigation should be responsive and accessible.</p>
        </div>
      </div>
    ),
  ],
};

export const TabletView: Story = {
  args: {},
  render: () => (
    <Header>
      <HeaderNavigation navItems={NAV_LINK_ITEMS} />
    </Header>
  ),
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "100vh" }}>
        <Story />
        <div style={{ padding: "100px 20px 20px", color: "white" }}>
          <h1>Tablet View</h1>
          <p>This shows how the header appears on tablet devices.</p>
          <p>The spacing and sizing should be optimized for tablet screens.</p>
        </div>
      </div>
    ),
  ],
};
