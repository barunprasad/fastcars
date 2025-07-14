import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BlogCard } from "./index";

const meta = {
  title: "Components/BlogCard",
  component: BlogCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    post: {
      description: "Blog post data object",
    },
  },
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock data for different story variants
const baseBlogPost = {
  _id: "1",
  title: "The Evolution of Supercars: From Classic to Modern",
  slug: { current: "evolution-of-supercars" },
  excerpt:
    "Explore the fascinating journey of supercars from their humble beginnings to today's high-tech marvels. This comprehensive guide covers the major milestones in automotive excellence.",
  publishedAt: "2024-01-15T10:00:00Z",
  author: { name: "Alex Richardson" },
  mainImage: {
    asset: {
      url: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  },
  categories: [{ title: "Technology" }, { title: "History" }],
  era: "2020s",
};

export const Default: Story = {
  args: {
    post: baseBlogPost,
  },
};

export const WithoutImage: Story = {
  args: {
    post: {
      ...baseBlogPost,
      mainImage: undefined,
    },
  },
};

export const WithoutEra: Story = {
  args: {
    post: {
      ...baseBlogPost,
      era: undefined,
    },
  },
};

export const WithoutCategories: Story = {
  args: {
    post: {
      ...baseBlogPost,
      categories: undefined,
    },
  },
};

export const LongTitle: Story = {
  args: {
    post: {
      ...baseBlogPost,
      title:
        "The Complete Guide to Understanding Modern Supercar Technology and Its Impact on Future Automotive Innovation",
    },
  },
};

export const ShortExcerpt: Story = {
  args: {
    post: {
      ...baseBlogPost,
      excerpt: "A brief look at modern supercars.",
    },
  },
};

export const MultipleCategories: Story = {
  args: {
    post: {
      ...baseBlogPost,
      categories: [
        { title: "Technology" },
        { title: "History" },
        { title: "Innovation" },
        { title: "Design" },
        { title: "Performance" },
      ],
    },
  },
};

export const VintageEra: Story = {
  args: {
    post: {
      ...baseBlogPost,
      title: "Classic Muscle Cars of the 1960s",
      excerpt:
        "Dive into the golden age of American muscle cars and discover what made these vehicles legendary.",
      era: "1960s",
      categories: [{ title: "Classic Cars" }, { title: "American Muscle" }],
      mainImage: {
        asset: {
          url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        },
      },
    },
  },
};

export const ElectricEra: Story = {
  args: {
    post: {
      ...baseBlogPost,
      title: "The Rise of Electric Supercars",
      excerpt:
        "Electric vehicles are revolutionizing the supercar industry. Learn about the latest innovations in electric performance vehicles.",
      era: "Electric",
      categories: [
        { title: "Electric Vehicles" },
        { title: "Innovation" },
        { title: "Sustainability" },
      ],
      mainImage: {
        asset: {
          url: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        },
      },
    },
  },
};

export const MinimalContent: Story = {
  args: {
    post: {
      _id: "2",
      title: "Fast Cars",
      slug: { current: "fast-cars" },
      excerpt: "Speed.",
      publishedAt: "2024-01-10T08:00:00Z",
      author: { name: "John Doe" },
    },
  },
};
