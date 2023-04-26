import Home from "@/pages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders home screen", () => {
    render(<Home />);

    const div = screen.getByText("Home");

    expect(div).toBeInTheDocument();
  });
});
