import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SkipToMain } from "./index";

const meta = {
  title: "Components/SkipToMain",
  component: SkipToMain,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SkipToMain>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The SkipToMain component provides an accessibility link that allows keyboard users to skip navigation and go directly to the main content. It's visually hidden by default and becomes visible when focused.",
      },
    },
  },
  render: () => (
    <div className="relative bg-gray-900 p-8 min-h-[200px]">
      <SkipToMain />
      <div className="text-white">
        <p className="mb-4">
          Press Tab to see the Skip to Main Content link appear at the top.
        </p>
        <p className="text-gray-400 text-sm">
          This is an accessibility feature that helps keyboard users navigate
          more efficiently.
        </p>
      </div>
    </div>
  ),
};

export const WithContext: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Example showing how the SkipToMain component appears in context with other navigation elements.",
      },
    },
  },
  render: () => (
    <div className="relative bg-gray-900 min-h-[300px]">
      <SkipToMain />
      <nav className="bg-black/60 backdrop-blur-md p-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold">Fast Cars</div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:underline">
              Home
            </a>
            <a href="#" className="text-white hover:underline">
              Models
            </a>
            <a href="#" className="text-white hover:underline">
              Blog
            </a>
          </div>
        </div>
      </nav>
      <main id="main-content" className="p-8 text-white">
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        <p className="text-gray-300">
          This is the main content area that users will skip to when they use
          the Skip to Main Content link.
        </p>
      </main>
    </div>
  ),
};

export const FocusedState: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Shows how the SkipToMain component appears when focused (simulated for demonstration).",
      },
    },
  },
  render: () => (
    <div className="relative bg-gray-900 p-8 min-h-[200px]">
      <a
        href="#main-content"
        className="
          absolute top-0 left-0 
          translate-y-0
          px-4 py-2
          m-1 
          bg-transparent text-white 
          outline-none 
          ring-1 ring-blue-400
          z-51
          transition-transform
        "
      >
        Skip to main content
      </a>
      <div className="text-white mt-12">
        <p className="mb-4">
          This shows how the Skip to Main Content link appears when focused.
        </p>
        <p className="text-gray-400 text-sm">
          In the actual component, this would only be visible when the user tabs
          to it.
        </p>
      </div>
    </div>
  ),
};
