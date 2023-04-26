import Header from "@/components/header";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("renders header component", () => {
    render(<Header />);
  });

  it("displays header text", () => {
    render(<Header />);
    const title = screen.getByText("Spotify Recommendations");

    expect(title).toBeInTheDocument();
  });

  it("displays header icon", () => {
    render(<Header />);
    const image = screen.getByRole("img") as HTMLImageElement;

    expect(image.alt).toBe("spotify-icon");
  });
});
