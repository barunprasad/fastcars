import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ErrorBoundary } from "./index";

const meta = {
  title: "Components/ErrorBoundary",
  component: ErrorBoundary,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    error: {
      description: "Error object with optional digest",
    },
    reset: {
      description: "Function to reset the error state",
      action: "reset",
    },
    title: {
      description: "Error title to display",
    },
    description: {
      description: "Error description to display",
    },
    backButton: {
      description: "Optional back button configuration",
    },
    tryAgainButtonSize: {
      description: "Size of the try again button",
      control: { type: "select" },
      options: ["default", "lg"],
    },
  },
} satisfies Meta<typeof ErrorBoundary>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockError = new Error("Something went wrong") as Error & {
  digest?: string;
};
mockError.digest = "abc123";

export const Default: Story = {
  args: {
    error: mockError,
    reset: () => console.log("Reset clicked"),
    title: "Something went wrong",
    description: "We encountered an unexpected error. Please try again.",
    tryAgainButtonSize: "default",
  },
};

export const WithBackButton: Story = {
  args: {
    error: mockError,
    reset: () => console.log("Reset clicked"),
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist or has been moved.",
    backButton: {
      href: "/",
      label: "Back to Home",
    },
    tryAgainButtonSize: "default",
  },
};

export const LargeTryAgainButton: Story = {
  args: {
    error: mockError,
    reset: () => console.log("Reset clicked"),
    title: "Failed to Load Data",
    description:
      "We couldn't load the requested data. This might be a temporary issue.",
    tryAgainButtonSize: "lg",
  },
};

export const BlogError: Story = {
  args: {
    error: mockError,
    reset: () => console.log("Reset clicked"),
    title: "Failed to Load Blog Posts",
    description:
      "We encountered an error while loading the blog posts. This might be a temporary issue.",
    tryAgainButtonSize: "lg",
  },
};

export const BlogPostError: Story = {
  args: {
    error: mockError,
    reset: () => console.log("Reset clicked"),
    title: "Failed to Load Article",
    description:
      "We couldn't load this blog post. It might have been moved or deleted, or there's a temporary issue.",
    backButton: {
      href: "/blog",
      label: "Back to Blog",
    },
  },
};

export const ModelsError: Story = {
  args: {
    error: mockError,
    reset: () => console.log("Reset clicked"),
    title: "Failed to Load Car Models",
    description:
      "We encountered an error while loading the car models. This might be a temporary issue with our database.",
    tryAgainButtonSize: "lg",
  },
};

export const ModelDetailError: Story = {
  args: {
    error: mockError,
    reset: () => console.log("Reset clicked"),
    title: "Failed to Load Car Details",
    description:
      "We couldn't load the details for this car model. It might have been removed or there's a temporary issue.",
    backButton: {
      href: "/models",
      label: "Back to Models",
    },
  },
};

export const WithoutDigest: Story = {
  args: {
    error: new Error("Error without digest"),
    reset: () => console.log("Reset clicked"),
    title: "Network Error",
    description:
      "Unable to connect to the server. Please check your internet connection and try again.",
    tryAgainButtonSize: "default",
  },
};
