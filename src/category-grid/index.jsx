import React from "react";
import ImageGrid from "../mtd-image-grid/index";
import { textVariants, textVariantsKeys } from "../typography/variants";
import { rem } from "../utils";
import { mockData } from "./mock";

// Custom properties for the button stack
const customProps = {
  buttonStackProps: {
    btnGroupProps: {
      direction: "row",
      spacing: rem(8),
    //   onClick: (event) => {
    //     event?.stopPropagation();
    //   },
    },
    btnProps: {
      w: "100%",
      h: rem(48),
    //   variant: "primary",
    },
    btnLinkProps: {
      w: "calc(100%/3)",
      overflow: "hidden",
    },
  },
};

// Styles for the CategoryGrid component
const styles = {
  card: {
    cursor: "pointer",
    _hover: {
      "& .chakra-text": {
        textDecoration: "underline",
        // Add any other styles you want on typography hover
      },
    },
  },
  buttonsTitleWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    px: { base: rem(24), xl: rem(40) },
    bottom: { base: rem(24), xl: rem(40) },
  },
  title: {
    className: "category-title",
    w: "fit-content",
    maxWidth: "100%",
    overflow: "hidden",
    textWrap: "nowrap",
    whiteSpace: "nowrap",
    ...textVariants[textVariantsKeys.white_xl1_700],
  },
  overlay: {
    bgGradient:
      "linear(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(255, 255, 255, 0.00) 100%), lightgray 50% / cover no-repeat, #F7F7F7",
    backgroundBlendMode: "multiply, normal, normal",
  },
};

const CategoryGrid = ({}) => {
  return (
    <>
      <ImageGrid
        data={mockData}
        aspectRatio={1}
        customProps={customProps}
        styles={styles}
        rootTestId='categoryGrid'
      />
    </>
  );
};

export default CategoryGrid;
