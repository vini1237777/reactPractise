import React from "react";
import { render } from "@testing-library/react";
import DesktopTabletMobileImage from "./index"; // Replace with the correct path

describe("DesktopTabletMobileImage Component", () => {
  const images = {
    desktop: {
      src: "https://picsum.photos/1024/1024 1024w",
      type: "image/jpeg",
    },
    tablet: {
      src: "https://picsum.photos/767/767 767w",
      type: "image/jpeg",
    },
    mobile: { src: "mobile-image.jpg", type: "image/jpeg" },
  };

  it("renders an image with correct attributes", () => {
    const altText = "Image alt text";
    const imageVariant = "variant2";

    const { getByAltText, getByRole } = render(
      <DesktopTabletMobileImage
        images={images}
        altText={altText}
        imageVariant={imageVariant}
      />
    );
    const imgElement = getByRole("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", images.desktop.src);
    expect(imgElement).toHaveAttribute("alt", altText);
    expect(imgElement).toHaveAttribute("loading", "lazy");
    expect(imgElement).toHaveStyle("width: 100%");
    expect(imgElement).toHaveStyle("height: 100%");
    expect(imgElement).toHaveStyle("objectFit: cover");

});

});
