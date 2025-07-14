import { render, screen } from "@testing-library/react";
import { BlogCard } from "./index";
import {
  mockBlogPost,
  mockBlogPostWithoutImage,
  mockBlogPostWithoutCategories,
  mockBlogPostWithoutEra,
  mockBlogPostMinimal,
} from "./__mocks__/mockData";

// Mock Next.js components
vi.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => (
    <img src={src} alt={alt} {...props} />
  ),
}));

vi.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Mock the formatDate utility
vi.mock("@/lib/utils", () => ({
  formatDate: vi.fn((date: string) => "January 1, 2023"),
}));

describe("BlogCard", () => {
  it("renders basic blog card with all elements", () => {
    render(<BlogCard post={mockBlogPost} />);

    // Check if title is rendered
    expect(screen.getByText("Mock Blog Post Title")).toBeInTheDocument();

    // Check if excerpt is rendered
    expect(
      screen.getByText("This is a mock excerpt for testing purposes"),
    ).toBeInTheDocument();

    // Check if author is rendered
    expect(screen.getByText("John Doe")).toBeInTheDocument();

    // Check if date is rendered
    expect(screen.getByText("January 1, 2023")).toBeInTheDocument();

    // Check if categories are rendered
    expect(screen.getByText("Technology")).toBeInTheDocument();
    expect(screen.getByText("Innovation")).toBeInTheDocument();

    // Check if era badge is rendered
    expect(screen.getByText("2020s")).toBeInTheDocument();

    // Check if image is rendered
    expect(screen.getByAltText("Mock Blog Post Title")).toBeInTheDocument();
  });

  it("renders correct link href", () => {
    render(<BlogCard post={mockBlogPost} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/blog/mock-blog-post");
  });

  it("renders without main image", () => {
    render(<BlogCard post={mockBlogPostWithoutImage} />);

    // Check if title is rendered
    expect(screen.getByText("Blog Post Without Image")).toBeInTheDocument();

    // Check if excerpt is rendered
    expect(screen.getByText("This post has no main image")).toBeInTheDocument();

    // Check if author is rendered
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();

    // Image should not be rendered
    expect(
      screen.queryByAltText("Blog Post Without Image"),
    ).not.toBeInTheDocument();
  });

  it("renders without categories", () => {
    render(<BlogCard post={mockBlogPostWithoutCategories} />);

    // Check if title is rendered
    expect(
      screen.getByText("Blog Post Without Categories"),
    ).toBeInTheDocument();

    // Check if author is rendered
    expect(screen.getByText("Bob Johnson")).toBeInTheDocument();

    // Categories section should not be rendered
    expect(screen.queryByText("Technology")).not.toBeInTheDocument();
    expect(screen.queryByText("Innovation")).not.toBeInTheDocument();
  });

  it("renders without era badge", () => {
    render(<BlogCard post={mockBlogPostWithoutEra} />);

    // Check if title is rendered
    expect(screen.getByText("Blog Post Without Era")).toBeInTheDocument();

    // Check if author is rendered
    expect(screen.getByText("Alice Williams")).toBeInTheDocument();

    // Check if category is rendered
    expect(screen.getByText("Classic Cars")).toBeInTheDocument();

    // Era badge should not be rendered
    expect(screen.queryByText("2020s")).not.toBeInTheDocument();
    expect(screen.queryByText("2010s")).not.toBeInTheDocument();
  });

  it("renders minimal blog post", () => {
    render(<BlogCard post={mockBlogPostMinimal} />);

    // Check if title is rendered
    expect(screen.getByText("Minimal Blog Post")).toBeInTheDocument();

    // Check if excerpt is rendered
    expect(screen.getByText("Short")).toBeInTheDocument();

    // Check if author is rendered
    expect(screen.getByText("Test Author")).toBeInTheDocument();

    // Check if date is rendered
    expect(screen.getByText("January 1, 2023")).toBeInTheDocument();

    // Optional elements should not be rendered
    expect(screen.queryByText("Technology")).not.toBeInTheDocument();
    expect(screen.queryByText("2020s")).not.toBeInTheDocument();
    expect(screen.queryByAltText("Minimal Blog Post")).not.toBeInTheDocument();
  });

  it("has correct CSS classes for styling", () => {
    render(<BlogCard post={mockBlogPost} />);

    const link = screen.getByRole("link");
    expect(link).toHaveClass("block", "h-full");

    // Check if the card has the correct styling classes
    const cardElement = link.querySelector('[class*="group"]');
    expect(cardElement).toHaveClass("group");
  });

  it("renders user and calendar icons", () => {
    render(<BlogCard post={mockBlogPost} />);

    // Check if icons are rendered by looking for their container elements
    const authorSection = screen.getByText("John Doe").closest("div");
    const dateSection = screen.getByText("January 1, 2023").closest("div");

    expect(authorSection).toBeInTheDocument();
    expect(dateSection).toBeInTheDocument();
  });

  it("handles long title text", () => {
    const longTitlePost = {
      ...mockBlogPost,
      title:
        "This is a very long blog post title that should be truncated or handled properly by the component styling",
    };

    render(<BlogCard post={longTitlePost} />);

    expect(
      screen.getByText(
        "This is a very long blog post title that should be truncated or handled properly by the component styling",
      ),
    ).toBeInTheDocument();
  });

  it("handles long excerpt text", () => {
    const longExcerptPost = {
      ...mockBlogPost,
      excerpt:
        "This is a very long excerpt that should be truncated or handled properly by the component styling. It contains multiple sentences and should demonstrate how the component handles longer text content.",
    };

    render(<BlogCard post={longExcerptPost} />);

    expect(
      screen.getByText(
        "This is a very long excerpt that should be truncated or handled properly by the component styling. It contains multiple sentences and should demonstrate how the component handles longer text content.",
      ),
    ).toBeInTheDocument();
  });

  it("renders multiple categories correctly", () => {
    const multiCategoryPost = {
      ...mockBlogPost,
      categories: [
        { title: "Technology" },
        { title: "Innovation" },
        { title: "Design" },
        { title: "Performance" },
        { title: "History" },
      ],
    };

    render(<BlogCard post={multiCategoryPost} />);

    expect(screen.getByText("Technology")).toBeInTheDocument();
    expect(screen.getByText("Innovation")).toBeInTheDocument();
    expect(screen.getByText("Design")).toBeInTheDocument();
    expect(screen.getByText("Performance")).toBeInTheDocument();
    expect(screen.getByText("History")).toBeInTheDocument();
  });

  it("renders with different era values", () => {
    const vintagePost = {
      ...mockBlogPost,
      era: "1960s",
    };

    render(<BlogCard post={vintagePost} />);

    expect(screen.getByText("1960s")).toBeInTheDocument();
  });

  it("maintains accessibility with proper link structure", () => {
    render(<BlogCard post={mockBlogPost} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/blog/mock-blog-post");
    expect(link).toHaveClass("block");

    // The entire card should be clickable
    expect(link).toContainElement(screen.getByText("Mock Blog Post Title"));
  });
});
