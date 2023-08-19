import './App.css';
import { AspectRatio, Box, chakra, ChakraProvider, Container, SimpleGrid } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { getBreakpointLabels, mapWidthsToSizes, widthsAsArray, withUnit } from './image';
import theme from "@chakra-ui/theme";
import CategoryGrid from './category-grid';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const customTheme = extendTheme({
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "900px",
    xl: "1200px",
    "2xl": "1600px", // Add additional breakpoints as needed
  },
});

const bgColor=['red', 'pink', 'blue', 'green', 'yellow', 'cyan']
const minW={base:'100px', sm:'150px', md:'200px', };
const height = { base: "200px" };
// w={{
//         "@media (max-width: 300px)": "100px",
//         "@media (min-width: 301px) and (max-width: 600px)": "200px",
//         "@media (min-width: 601px) and (max-width: 900px)": "300px",
//         "@media (min-width: 901px)": "400px",
//       }}


const Image=({sizes})=>{
  return (
    <picture>
      <source
        media="(min-width: 1024px)"
        srcSet="https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZZRF_001/on/demandware.static/-/Sites-apparel-m-catalog/default/dwa7c11183/images/large/B0574182_001_0.jpg?sw=1024&q=60 1024w"
        // sizes="(min-width: 1024px) 60vw"
        sizes={sizes}
      />
      <source
        media="(min-width: 768px)"
        srcSet="https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZZRF_001/on/demandware.static/-/Sites-apparel-m-catalog/default/dwe685bc5f/images/large/B0574189_CP1_0.jpg?sw=768&q=60 768w,"
        // sizes="(min-width: 768px) 80vw"
        sizes={sizes}
      />
      <source
        media="(max-width: 767px)"
        srcSet="https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZZRF_001/on/demandware.static/-/Sites-apparel-m-catalog/default/dw1cb9026d/images/large/B0274213_EDS_0.jpg?sw=375&q=60 375w, https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZZRF_001/on/demandware.static/-/Sites-apparel-m-catalog/default/dw1ed83c8e/images/large/B0574208_CFF_L1.jpg?sw=120&q=60 120w,"
        // sizes="(min-width: 120px) and (max-width:374px) 100vw,  (min-width: 375px) 90vw, 50vw"
        sizes={sizes}
      />

      <img
        src="https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZZRF_001/on/demandware.static/-/Sites-apparel-m-catalog/default/dwa7c11183/images/large/B0574182_001_0.jpg?sw=1024&q=60 1024w"
        alt="Description of the image"
        // className="image"
        // style={{ objectFit: "cover", width: "100%", height: "100%" }}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        // sizes="100%"
        loading={"lazy"}
        // sizes="(max-width: 200px) 100vw,
        //  (max-width: 375px) 90vw,
        //  (max-width: 500px) 100vw,
        //  (max-width: 767px) 100vw,
        //  (min-width: 768px) and (max-width: 1023px) 90vw,
        //  (min-width: 1024px) 33.3vw"
        // sizes="(max-width: 767px) 100vw,
        //          (min-width: 768px) and (max-width: 1023px) 50vw,
        //          (min-width: 1024px) 33.3vw"
      />
    </picture>
  );
}
// breakpoints: {
//     sm: "576px",
//     md: "768px",
//     lg: "992px",
//     xl: "1000px",
//     "2xl": "1600px", // Add additional breakpoints as needed
//   },

 export const Renderer = (children) => {
   return (
     <BrowserRouter>
       <ChakraProvider>{children}</ChakraProvider>
     </BrowserRouter>
   );
 };

function App() {
  const {breakpoints} = theme;
  // console.log(breakpoints, "breakpoints");
  // console.log(getBreakpointLabels(), 'breakpoints');
  // console.log(withUnit(['100vw', '50vw', '20vw']), 'units1');
  // console.log(withUnit([250, 350, 450]), "units2");
  console.log(
    // mapWidthsToSizes(
    //   {
    //     base: "100px",
    //     sm: "170px",
    //     lg: "200px",
    //   },
    //   getBreakpointLabels(),
    //   customBreakpoints
    // ),
    // mapWidthsToSizes(
    //   ['100vw', '50vw', '20vw'],
    //   getBreakpointLabels(),
    //   customBreakpoints
    // )
  );
  // const sizes = mapWidthsToSizes(
  //   ["10vw", "20vw", "30vw", "40vw", "50vw", "60vw"],
  //   getBreakpointLabels(),
  //   customBreakpoints
  // );



  return (
      <BrowserRouter>
    <ChakraProvider>
        <Routes>
          <Route path="/" element={<CategoryGrid />} />
          {/* <Route path="/" element={<Navigate to="/home" />} /> */}
        </Routes>
    </ChakraProvider>
      </BrowserRouter>
  );
}

export default App;
