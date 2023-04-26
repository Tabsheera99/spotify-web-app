import Genre from "@/pages/[genre]";
import { render } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("Genre Page", () => {
  const track = [
    {
      name: "Track 1",
      id: "1",
      album: {
        images: [{ url: "/favion.ico", height: 300, width: 300 }],
      },
      artists: [{ name: "Artist 1" }],
    },
  ];

  it("renders genre page", () => {
    render(
      <Genre
        genres={["acoustic", "afrobeat"]}
        genre="acoustic"
        tracks={track}
      />
    );
  });

  it("displays genre as title", () => {
    const { container } = render(
      <Genre
        genres={["acoustic", "afrobeat"]}
        genre="acoustic"
        tracks={track}
      />
    );

    const title = container.querySelector("#top");

    expect(title).not.toBeNull();
  });
});
