import NavItem from "@/components/nav-item";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("NavItem", () => {
  it("renders navitem component", () => {
    render(<NavItem data="acoustic" />);

    const item = screen.getByText("Acoustic");
    expect(item).toBeInTheDocument();
  });
});
