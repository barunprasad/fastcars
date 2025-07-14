import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BlogList } from "./index";

const meta = {
  title: "Components/BlogList",
  component: BlogList,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    posts: {
      description: "Array of blog posts to display",
    },
  },
} satisfies Meta<typeof BlogList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockPosts = [
  {
    _id: "1",
    title: "The Evolution of Supercars",
    slug: { current: "evolution-of-supercars" },
    excerpt:
      "Exploring how supercars have evolved over the decades, from classic beauties to modern marvels.",
    publishedAt: "2024-01-15T10:00:00Z",
    author: { name: "John Doe" },
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop",
      },
    },
    categories: [{ title: "History" }, { title: "Technology" }],
    era: "present",
  },
  {
    _id: "2",
    title: "Ferrari F40: The Last Pure Ferrari",
    slug: { current: "ferrari-f40-pure-ferrari" },
    excerpt:
      "A deep dive into the Ferrari F40, considered by many as the last pure Ferrari supercar.",
    publishedAt: "2024-01-10T14:30:00Z",
    author: { name: "Jane Smith" },
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
      },
    },
    categories: [{ title: "Ferrari" }, { title: "Classic" }],
    era: "80s",
  },
  {
    _id: "3",
    title: "Porsche 911 Turbo Through the Ages",
    slug: { current: "porsche-911-turbo-ages" },
    excerpt:
      "From the widow maker to the daily driver - how the 911 Turbo became a legend.",
    publishedAt: "2024-01-05T09:15:00Z",
    author: { name: "Mike Johnson" },
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
      },
    },
    categories: [{ title: "Porsche" }, { title: "Evolution" }],
    era: "70s",
  },
  {
    _id: "4",
    title: "McLaren P1: Hybrid Hypercar Revolution",
    slug: { current: "mclaren-p1-hybrid-hypercar" },
    excerpt:
      "How the McLaren P1 revolutionized the hypercar segment with hybrid technology.",
    publishedAt: "2024-01-01T16:45:00Z",
    author: { name: "Sarah Wilson" },
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop",
      },
    },
    categories: [{ title: "McLaren" }, { title: "Technology" }],
    era: "2010s",
  },
  {
    _id: "5",
    title: "Lamborghini Countach: The Poster Car",
    slug: { current: "lamborghini-countach-poster-car" },
    excerpt:
      "Why the Lamborghini Countach became the ultimate bedroom wall poster car.",
    publishedAt: "2023-12-28T11:20:00Z",
    author: { name: "David Brown" },
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=600&h=400&fit=crop",
      },
    },
    categories: [{ title: "Lamborghini" }, { title: "Culture" }],
    era: "80s",
  },
];

export const Default: Story = {
  args: {
    posts: mockPosts,
  },
};

export const WithFewPosts: Story = {
  args: {
    posts: mockPosts.slice(0, 2),
  },
};

export const WithManyPosts: Story = {
  args: {
    posts: [
      ...mockPosts,
      ...mockPosts.map((post, index) => ({
        ...post,
        _id: `${post._id}-${index}`,
        title: `${post.title} - Part ${index + 1}`,
      })),
    ],
  },
};

export const EmptyState: Story = {
  args: {
    posts: [],
  },
};

export const SinglePost: Story = {
  args: {
    posts: [mockPosts[0]],
  },
};

export const WithoutImages: Story = {
  args: {
    posts: mockPosts.map((post) => ({
      ...post,
      mainImage: undefined,
    })),
  },
};

export const WithoutCategories: Story = {
  args: {
    posts: mockPosts.map((post) => ({
      ...post,
      categories: undefined,
    })),
  },
};

export const MixedEras: Story = {
  args: {
    posts: [
      { ...mockPosts[0], era: "present" },
      { ...mockPosts[1], era: "2010s" },
      { ...mockPosts[2], era: "2000s" },
      { ...mockPosts[3], era: "90s" },
      { ...mockPosts[4], era: "80s" },
    ],
  },
};
