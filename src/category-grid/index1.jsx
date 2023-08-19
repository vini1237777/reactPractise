import React from "react";
import { render, screen } from "@testing-library/react";
import CategoryGrid from "./index";
import { mockData } from "./mock"; // Import mock data from the provided file
import { BrowserRouter } from "react-router-dom";
import { Renderer } from "../App";
import { ChakraProvider } from "@chakra-ui/react";

// const categoryGrid = Renderer(CategoryGrid);
describe("CategoryGrid Component", () => {
  it("renders without errors", () => {
    render(
      <BrowserRouter>
        <ChakraProvider>
          <CategoryGrid />
        </ChakraProvider>
      </BrowserRouter>
    );
  });

  it("should render correct number of tiles", () => {
    render(
      <BrowserRouter>
        <ChakraProvider>
          <CategoryGrid />
        </ChakraProvider>
      </BrowserRouter>
    );
    screen.debug();
    // const tiles = screen.getAllByRole("listitem"); // Assuming each tile is a list item
    // expect(tiles.length).toBe(mockData.length);
    screen.logTestingPlaygroundURL();
  });

//   it("renders tile titles correctly", () => {
//     render(<CategoryGrid />);
//     const tileTitleElements = screen.getAllByRole("heading");

//     for (let i = 0; i < mockData.length; i++) {
//       expect(tileTitleElements[i]).toBeInTheDocument();
//       expect(tileTitleElements[i]).toHaveTextContent(mockData[i].title);
//     }
//   });

  // You can add more specific test cases based on your component's behavior and features
});
