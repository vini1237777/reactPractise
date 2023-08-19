import React from "react";
import { render, screen } from "@testing-library/react";
import LinkButtonsStack from "./index";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const CustomLinkButtonsStack =(props)=>{
   return <BrowserRouter>
      <ChakraProvider>
        <LinkButtonsStack {...props} />
      </ChakraProvider>
    </BrowserRouter>;
}

describe("LinkButtonsStack Component", () => {
  const mockButtons = [
    {
      label: "Button 1",
      link: "https://example.com/button1",
      target: "_blank",
    },
    {
      label: "Button 2",
      link: "/button2",
      target: "_self",
    },
    {
      label: "Button 3",
      link: "/button3",
    },
  ];
  const mockButtons2 = mockButtons.map((button)=>{
    return {...button, label:'btn', buttonLabel:button.label}
  })

  it("renders buttons with correct length", () => {
    render(<CustomLinkButtonsStack buttons={mockButtons} />);

    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(mockButtons.length);
  });

   it("should render buttons with correct labels and links", () => {

    render(<CustomLinkButtonsStack buttons={mockButtons} />);

    mockButtons.forEach(button =>{
    const btn=screen.getByRole("button", {
      name: new RegExp(button.label, "i"),
    });
    const linkComponent = btn.closest("a");
    expect(btn).toBeInTheDocument();
    expect(linkComponent).toHaveAttribute("href", btn.link);
    })

  });

     it("should give precedence to buttonLabel over label key", () => {
       render(<CustomLinkButtonsStack buttons={mockButtons2} labelKey={'buttonLabel'}/>);
    //    screen.debug()
       mockButtons2.forEach((button) => {
         const btn = screen.queryByRole("button", {
           name: new RegExp(button.buttonLabel, "i"),
         });
          const btn1 = screen.queryByRole("button", {
            name: new RegExp(button.label, "i"),
          });
         expect(btn).toBeInTheDocument();
         expect(btn1).toBeNull();

       });
     });
});
