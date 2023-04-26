import Track from "@/components/track";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Track", () => {
  const track = {
    name: "Track 1",
    id: "1",
    album: {
      images: [{ url: "/favion.ico", height: 300, width: 300 }],
    },
    artists: [{ name: "Artist 1" }],
  };

  it("renders track", () => {
    render(<Track track={track} />);
  });

  it("renders track name", () => {
    render(<Track track={track} />);

    const name = screen.getByText("Artist 1");
    expect(name).toBeInTheDocument();
  });

  it("renders artist name", () => {
    render(<Track track={track} />);

    const artist = screen.getByText("Track 1");
    expect(artist).toBeInTheDocument();
  });
});
