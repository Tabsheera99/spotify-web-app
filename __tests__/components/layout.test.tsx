import Layout from "@/components/layout";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Layout", () => {
  it("renders layout component", () => {
    render(<Layout>Sample data</Layout>);

    const data = screen.getByText("Sample data");
    expect(data).toBeInTheDocument();
  });
});
