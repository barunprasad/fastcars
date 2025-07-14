import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CardGroup } from "./index";

const meta = {
  title: "Components/CardGroup",
  component: CardGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Content to be wrapped in the card group",
    },
  },
} satisfies Meta<typeof CardGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="text-white">
        <h2 className="text-2xl font-bold mb-4">Card Group Content</h2>
        <p className="text-gray-300">
          This is sample content inside a CardGroup component. The CardGroup
          provides a styled container with gradient background and border.
        </p>
      </div>
    ),
  },
};

export const WithMultipleCards: Story = {
  args: {
    children: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="bg-neutral-800 p-6 rounded-lg">
          <h3 className="text-white font-bold text-lg mb-2">Card 1</h3>
          <p className="text-gray-300">Content for the first card</p>
        </div>
        <div className="bg-neutral-800 p-6 rounded-lg">
          <h3 className="text-white font-bold text-lg mb-2">Card 2</h3>
          <p className="text-gray-300">Content for the second card</p>
        </div>
      </div>
    ),
  },
};

export const WithLargeContent: Story = {
  args: {
    children: (
      <div className="text-white max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Large Content Example</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Section 1</h3>
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Feature 1</li>
              <li>• Feature 2</li>
              <li>• Feature 3</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Section 2</h3>
            <p className="text-gray-300 mb-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="bg-neutral-700 p-4 rounded">
              <p className="text-sm text-gray-400">
                This is a highlighted section within the card group.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
};

export const MinimalContent: Story = {
  args: {
    children: (
      <div className="text-center text-white">
        <h3 className="text-lg font-medium">Minimal Content</h3>
      </div>
    ),
  },
};
