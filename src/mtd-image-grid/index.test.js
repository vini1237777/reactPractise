import React from "react";
import { render, screen } from "@testing-library/react";
import ImageGrid from "./index";
import { BrowserRouter } from "react-router-dom";
import { mockData } from "./mock";

describe("ImageGrid Component", () => {

  it("should render loading skeleton when isLoading is true", () => {
    render(
      <BrowserRouter>
        <ImageGrid isLoading={true} rootTestId="category_grid" numOfSkeletons={6}/>
      </BrowserRouter>
    );

    const skeletonTiles = screen.getAllByTestId("category_grid_skeleton");
    expect(skeletonTiles).toHaveLength(6); // Assuming you're rendering 4 skeleton tiles
  });

  it("should render correct number of tiles when data is provided", () => {
    render(
      <BrowserRouter>
        <ImageGrid data={mockData} rootTestId={'image_grid'}/>
      </BrowserRouter>
    );

    const imageTiles = screen.getAllByTestId("image_grid_tile");
    expect(imageTiles).toHaveLength(mockData.length);
  });

  it("should render image tiles with correct alt text", () => {
    render(
      <BrowserRouter>
        <ImageGrid data={mockData} />
      </BrowserRouter>
    );

    const altTexts = mockData.map((item) => item.altText);
    altTexts.forEach((altText) => {
      const imageTile = screen.getByAltText(altText);
      expect(imageTile).toBeInTheDocument();
    });
  });

    it("should render buttons with correct labels and links for single card", () => {
      render(
        <BrowserRouter>
          <ImageGrid data={mockData} />
        </BrowserRouter>
      );

        mockData[0]?.buttons.forEach((button)=>{
          const btn = screen.getByRole("button", {
            name: new RegExp(button.label, "i"),
          });
          expect(btn).toBeInTheDocument();

        })
       

    });
});
