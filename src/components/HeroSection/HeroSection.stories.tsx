import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HeroSection } from "./index";

const meta = {
  title: "Common/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Hero section title",
    },
    subtitle: {
      description: "Hero section subtitle",
    },
    variant: {
      control: "select",
      options: ["fullscreen", "compact"],
      description: "Hero section variant",
    },
    showScrollIndicator: {
      control: "boolean",
      description: "Show scroll indicator",
    },
  },
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockVideoUrl =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const defaultActions = [
  { href: "/models", label: "View All Cars", variant: "primary" as const },
  { href: "/blog", label: "Read Stories", variant: "secondary" as const },
];

export const FullscreenWithActions: Story = {
  args: {
    title: "SPEED LEGENDS",
    subtitle:
      "From Classic Muscle to Modern Hypercars - Experience the Evolution of Speed",
    videoUrl: mockVideoUrl,
    variant: "fullscreen",
    showScrollIndicator: true,
    actions: defaultActions,
  },
};

export const CompactBlogStyle: Story = {
  args: {
    title: "Stories of Speed",
    subtitle:
      "Read about legendary fast cars, racing history, and automotive innovation",
    videoUrl: mockVideoUrl,
    variant: "compact",
    showScrollIndicator: false,
    actions: [],
  },
};

export const CompactModelsStyle: Story = {
  args: {
    title: "All Models",
    subtitle: "Browse our complete collection of fast cars from every era",
    videoUrl: mockVideoUrl,
    variant: "compact",
    showScrollIndicator: false,
    actions: [],
  },
};

export const WithoutVideo: Story = {
  args: {
    title: "SPEED LEGENDS",
    subtitle:
      "From Classic Muscle to Modern Hypercars - Experience the Evolution of Speed",
    variant: "fullscreen",
    showScrollIndicator: true,
    actions: defaultActions,
  },
};

export const ShortTitle: Story = {
  args: {
    title: "FAST CARS",
    subtitle: "Pure speed, pure power",
    videoUrl: mockVideoUrl,
    variant: "fullscreen",
    showScrollIndicator: true,
    actions: defaultActions,
  },
};

export const LongTitle: Story = {
  args: {
    title: "THE ULTIMATE SUPERCAR EXPERIENCE",
    subtitle:
      "Immerse yourself in the world of high-performance vehicles where cutting-edge technology meets timeless design philosophy",
    videoUrl: mockVideoUrl,
    variant: "fullscreen",
    showScrollIndicator: true,
    actions: defaultActions,
  },
};

export const ElectricTheme: Story = {
  args: {
    title: "ELECTRIC REVOLUTION",
    subtitle:
      "The future of performance is electric - silent, powerful, and sustainable",
    videoUrl: mockVideoUrl,
    variant: "fullscreen",
    showScrollIndicator: true,
    actions: [
      {
        href: "/models",
        label: "View Electric Cars",
        variant: "primary" as const,
      },
      { href: "/blog", label: "Learn More", variant: "secondary" as const },
    ],
  },
};

export const VintageTheme: Story = {
  args: {
    title: "CLASSIC LEGENDS",
    subtitle:
      "Celebrating the golden age of automotive history and timeless design",
    videoUrl: mockVideoUrl,
    variant: "fullscreen",
    showScrollIndicator: true,
    actions: [
      { href: "/models", label: "View Classics", variant: "primary" as const },
      { href: "/blog", label: "Read History", variant: "secondary" as const },
    ],
  },
};

export const SingleAction: Story = {
  args: {
    title: "RACING HERITAGE",
    subtitle:
      "From the track to the street - where competition breeds perfection",
    videoUrl: mockVideoUrl,
    variant: "fullscreen",
    showScrollIndicator: true,
    actions: [
      {
        href: "/models",
        label: "View Racing Cars",
        variant: "primary" as const,
      },
    ],
  },
};
