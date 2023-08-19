import React from "react";
import PropTypes from "prop-types";
import { AspectRatio, Box, SimpleGrid } from "@chakra-ui/react";
import { CategoryGridSkelton } from "../category-grid/skeleton";
import { column, padding, spacing, variants } from "./config";
import {
  buttonStackPropTypes,
  cardStylesPropTypes,
  dataPropTypes,
  gridVariantsPropTypes,
} from "./proptypes";
import { ImageTile } from "./image-tile";
import { testIds } from "../utils";

/**
 * ImageGrid component displays a grid of images with associated overlays.
 *
 * @param {Object} props - The props for the ImageGrid component.
 * @param {Object} [props.gridVariants] - Variants for grid configuration.
 * @param {string} props.gridVariants.column - Column variant for the grid.
 * @param {string} props.gridVariants.spacing - Spacing variant for the grid.
 * @param {string} props.gridVariants.padding - Padding variant for the grid.
 * @param {Object} [props.styles] - Styling options for various elements.
 * @param {Array} props.data - Array of data items for the grid.
 * @param {Object} [props.uniqueKeys] - Unique keys for data items and buttons.
 * @param {number} props.aspectRatio - Aspect ratio for the images.
 * @param {Object} [props.customProps] - Additional custom properties.
 * @param {boolean} props.isLoading - Flag indicating whether data is loading.
 * @returns {JSX.Element} - The rendered ImageGrid component.
 */
let rootId= 'image_grid';
const ids = { skeleton: "skeleton", tile: "tile", aspect: "aspect" };
const ImageGrid = ({
  gridVariants = {
    column: variants.variant1,
    spacing: variants.variant1,
    padding: variants.variant1,
  },
  styles = {},
  data = {},
  uniqueKeys = {},
  aspectRatio,
  customProps = {},
  isLoading,
  numOfSkeletons = 4,
  testIdPrefix,
  rootTestId
}) => {
    rootId = rootTestId || rootId;
  return (
    <SimpleGrid
      columns={column[gridVariants.column]}
      spacing={spacing[gridVariants.spacing]}
      p={padding[gridVariants.padding] || padding.variant1}
      {...styles.grid}
      data-testid={rootId}
    >
      {isLoading ? (
        <>
          {[...new Array(numOfSkeletons)].map((_, index) => (
            <CategoryGridSkelton
              key={index}
              testId={testIds(testIdPrefix, rootId, ids.skeleton)}
            />
          ))}
        </>
      ) : (
        data?.map((item, i) => {
          return (
            <Box
              data-testid={testIds(testIdPrefix, rootId, ids.tile)}
              key={item[uniqueKeys?.dataItem || "id"] || i}
              {...styles.card}
            >
              {aspectRatio ? (
                <AspectRatio
                  ratio={aspectRatio}
                  {...styles?.aspect}
                  data-testid={testIds(testIdPrefix, rootId, ids.aspect)}
                >
                  <Box>
                    <ImageTile
                      styles={styles}
                      data={item}
                      btnIdentifier={uniqueKeys?.bottom}
                      buttonStackProps={customProps?.buttonStackProps}
                      rootTestId={rootId}
                    />
                  </Box>
                </AspectRatio>
              ) : (
                <ImageTile
                  styles={styles}
                  data={item}
                  btnIdentifier={uniqueKeys?.bottom}
                  buttonStackProps={customProps?.buttonStackProps}
                  rootTestId={rootId}
                />
              )}
            </Box>
          );
        })
      )}
    </SimpleGrid>
  );
};

ImageGrid.propTypes = {
  gridVariants: gridVariantsPropTypes,
  styles: cardStylesPropTypes,
  data: dataPropTypes,
  uniqueKeys: PropTypes.shape({
    dataItem: PropTypes.string,
    button: PropTypes.string,
  }),
  aspectRatio: PropTypes.number,
  customProps: PropTypes.shape({
    buttonStackProps: buttonStackPropTypes,
  }),
  isLoading: PropTypes.bool,
  numOfSkeletons: PropTypes.number,
  testIdPrefix: PropTypes.string,
  rootTestId:PropTypes.string
};

ImageGrid.defaultProps = {
  gridVariants: {
    column: "variant1",
    spacing: "variant1",
    padding: "variant1",
  },
  styles: {},
  data: [],
  uniqueKeys: {},
};

export default ImageGrid;
