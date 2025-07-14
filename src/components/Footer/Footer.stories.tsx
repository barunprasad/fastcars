import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Footer } from "./index";

const meta = {
  title: "Common/Footer",
  component: Footer,
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
          name: "gray",
          value: "#1a1a1a",
        },
      ],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithPageContent: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div>
        <div
          style={{
            minHeight: "100vh",
            padding: "2rem",
            backgroundColor: "#1a1a1a",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Page Content
          </h1>
          <p style={{ marginBottom: "2rem", textAlign: "center" }}>
            This demonstrates how the footer appears at the bottom of page
            content.
          </p>
          <p style={{ color: "#888" }}>
            Scroll down to see the footer in context.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const MobileView: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  decorators: [
    (Story) => (
      <div>
        <div
          style={{
            height: "50vh",
            padding: "1rem",
            backgroundColor: "#1a1a1a",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Mobile Content
          </h1>
          <p style={{ textAlign: "center" }}>
            This shows how the footer stacks on mobile devices.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const TabletView: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
  decorators: [
    (Story) => (
      <div>
        <div
          style={{
            height: "50vh",
            padding: "2rem",
            backgroundColor: "#1a1a1a",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
            Tablet Content
          </h1>
          <p style={{ textAlign: "center" }}>
            This demonstrates the footer layout on tablet screens.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const InteractiveLinks: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div>
        <div
          style={{
            height: "30vh",
            padding: "2rem",
            backgroundColor: "#1a1a1a",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
            Interactive Footer
          </h1>
          <p style={{ textAlign: "center", marginBottom: "1rem" }}>
            Hover over the navigation links and social media icons to see the
            interactive states.
          </p>
          <p style={{ color: "#888", fontSize: "0.9rem" }}>
            The footer demonstrates proper hover states and accessibility
            features.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};
