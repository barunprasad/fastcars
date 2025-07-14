import { render, screen } from "@testing-library/react";
import { Header } from "./index";

// Mock Next.js Image component
vi.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => (
    <img src={src} alt={alt} {...props} />
  ),
}));

describe("Header", () => {
  it("renders header with logo", () => {
    render(<Header />);

    const logo = screen.getByAltText("Fast Cars Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/logo.png");
  });

  it("renders home link", () => {
    render(<Header />);

    const homeLink = screen.getByRole("link");
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("renders children when provided", () => {
    render(
      <Header>
        <nav data-testid="navigation">Test Navigation</nav>
      </Header>,
    );

    const navigation = screen.getByTestId("navigation");
    expect(navigation).toBeInTheDocument();
    expect(navigation).toHaveTextContent("Test Navigation");
  });

  it("renders without children", () => {
    const { container } = render(<Header />);

    const header = container.querySelector("header");
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass("fixed", "top-0", "w-full");
  });

  it("has correct styling classes", () => {
    const { container } = render(<Header />);

    const header = container.querySelector("header");
    expect(header).toHaveClass("bg-black/60", "backdrop-blur-md", "z-50");
  });
});
