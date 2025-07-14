import { render, screen } from "@testing-library/react";
import { HeaderNavigation } from "./index";
import { NAV_LINK_ITEMS } from "../../constants/navigation";

// Mock Next.js router
vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

import { usePathname } from "next/navigation";

const mockUsePathname = usePathname as ReturnType<typeof vi.fn>;

describe("HeaderNavigation", () => {
  const defaultProps = {
    navItems: NAV_LINK_ITEMS,
  };

  beforeEach(() => {
    mockUsePathname.mockReturnValue("/");
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders all navigation items", () => {
    render(<HeaderNavigation {...defaultProps} />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Models")).toBeInTheDocument();
    expect(screen.getByText("Blogs")).toBeInTheDocument();
  });

  it("renders correct links", () => {
    render(<HeaderNavigation {...defaultProps} />);

    const homeLink = screen.getByRole("link", { name: "Home" });
    const modelsLink = screen.getByRole("link", { name: "Models" });
    const blogsLink = screen.getByRole("link", { name: "Blogs" });

    expect(homeLink).toHaveAttribute("href", "/");
    expect(modelsLink).toHaveAttribute("href", "/models");
    expect(blogsLink).toHaveAttribute("href", "/blog");
  });

  it("renders custom navigation items", () => {
    const customNavItems = [
      { value: "/custom", label: "Custom" },
      { value: "/test", label: "Test" },
    ];

    render(<HeaderNavigation navItems={customNavItems} />);

    expect(screen.getByText("Custom")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.queryByText("Home")).not.toBeInTheDocument();
  });

  it("highlights active page", () => {
    mockUsePathname.mockReturnValue("/models");

    render(<HeaderNavigation {...defaultProps} />);

    const modelsLink = screen.getByRole("link", { name: "Models" });
    expect(modelsLink).toHaveClass("underline", "underline-offset-4");
  });

  it("applies correct base styles to all links", () => {
    render(<HeaderNavigation {...defaultProps} />);

    const links = screen.getAllByRole("link");

    links.forEach((link) => {
      expect(link).toHaveClass(
        "px-2",
        "py-1",
        "text-white",
        "bg-transparent",
        "font-bold",
      );
    });
  });

  it("handles home page active state", () => {
    mockUsePathname.mockReturnValue("/");

    render(<HeaderNavigation {...defaultProps} />);

    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toHaveClass("underline", "underline-offset-4");
  });

  it("handles blog page active state", () => {
    mockUsePathname.mockReturnValue("/blog");

    render(<HeaderNavigation {...defaultProps} />);

    const blogLink = screen.getByRole("link", { name: "Blogs" });
    expect(blogLink).toHaveClass("underline", "underline-offset-4");
  });

  it("handles empty navigation items", () => {
    render(<HeaderNavigation navItems={[]} />);

    const links = screen.queryAllByRole("link");
    expect(links).toHaveLength(0);
  });
});
