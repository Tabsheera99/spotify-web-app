import Sidebar from "@/components/sidebar";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Sidebar", () => {
  it("renders sidebar", () => {
    render(<Sidebar />);

    const title = screen.getByText("Genres");
    expect(title).toBeInTheDocument();
  });
});
