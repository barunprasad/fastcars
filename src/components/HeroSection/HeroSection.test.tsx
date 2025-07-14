import { render, screen } from "@testing-library/react";
import { HeroSection } from "./index";

describe("HeroSection", () => {
  const defaultProps = {
    title: "Test Title",
    subtitle: "Test Subtitle",
  };

  it("renders title and subtitle correctly", () => {
    render(<HeroSection {...defaultProps} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("renders fullscreen variant by default", () => {
    const { container } = render(<HeroSection {...defaultProps} />);

    const section = container.querySelector("section");
    expect(section).toHaveClass("h-screen");
  });

  it("renders compact variant when specified", () => {
    const { container } = render(
      <HeroSection {...defaultProps} variant="compact" />,
    );

    const section = container.querySelector("section");
    expect(section).toHaveClass("h-[40vh]");
  });

  it("renders action buttons when provided", () => {
    const actions = [
      { href: "/test1", label: "Test Button 1", variant: "primary" as const },
      { href: "/test2", label: "Test Button 2", variant: "secondary" as const },
    ];

    render(<HeroSection {...defaultProps} actions={actions} />);

    expect(screen.getByText("Test Button 1")).toBeInTheDocument();
    expect(screen.getByText("Test Button 2")).toBeInTheDocument();
  });

  it("renders video when videoUrl is provided", () => {
    const { container } = render(
      <HeroSection {...defaultProps} videoUrl="test-video.mp4" />,
    );

    const video = container.querySelector("video");
    expect(video).toBeInTheDocument();
    expect(video).toHaveProperty("autoplay", true);
    expect(video).toHaveProperty("muted", true);
    expect(video).toHaveProperty("loop", true);
    expect(video).toHaveProperty("playsInline", true);
  });

  it("shows scroll indicator when enabled", () => {
    const { container } = render(
      <HeroSection {...defaultProps} showScrollIndicator={true} />,
    );

    // Check for ChevronDown icon
    const scrollIndicator = container.querySelector(".animate-bounce");
    expect(scrollIndicator).toBeInTheDocument();
  });

  it("does not show scroll indicator by default", () => {
    const { container } = render(<HeroSection {...defaultProps} />);

    const scrollIndicator = container.querySelector(".animate-bounce");
    expect(scrollIndicator).not.toBeInTheDocument();
  });
});
