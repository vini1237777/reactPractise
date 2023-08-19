//ImageGrid
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
}) => {
  return (
    <SimpleGrid
      columns={column[gridVariants.column]}
      spacing={spacing[gridVariants.spacing]}
      p={padding[gridVariants.padding] || padding.variant1}
      {...styles.grid}
    >
      {isLoading ? (
        <>
          {[...new Array(4)].map((_, index) => (
            <CategoryGridSkelton key={index} />
          ))}
        </>
      ) : (
        data?.map((item, i) => {
          return (
            <Box
              key={item[uniqueKeys?.dataItem || "id"] || i}
              data-testid="tile"
              {...styles.card}
            >
              {aspectRatio ? (
                <AspectRatio ratio={aspectRatio} {...styles?.aspect}>
                  <Box>
                    <ImageTile
                      styles={styles}
                      data={item}
                      btnIdentifier={uniqueKeys?.bottom}
                      buttonStackProps={customProps?.buttonStackProps}
                    />
                  </Box>
                </AspectRatio>
              ) : (
                <ImageTile
                  styles={styles}
                  data={item}
                  btnIdentifier={uniqueKeys?.bottom}
                  buttonStackProps={customProps?.buttonStackProps}
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

//ImageTile
import React from "react";
import PropTypes from "prop-types";
import DesktopTabletMobileImage from "../desktop-tablet-mobile-image";
import { imageVariants } from "../desktop-tablet-mobile-image/config";
import { TileContent } from "./tile-content";
import {
  buttonStackPropTypes,
  cardStylesPropTypes,
  dataPropTypes,
} from "./proptypes";

/**
 * Component for rendering the content of a image-tile.
 * @param {Object} props - The props for the ImageTile component.
 * @param {Object} props.data - Data object for the tile.
 * @param {Object} props.styles - Styling options for the card.
 * @param {boolean} props.btnIdentifier - Boolean identifier for buttons.
 * @param {Object} [props.buttonStackProps] - Props for the LinkButtonsStack component.
 * @returns {JSX.Element} - The rendered ImageTile component.
 */
export const ImageTile = (props) => {
  return (
    <TileContent {...props}>
      <DesktopTabletMobileImage
        altText={props?.data.altText || ""}
        images={props?.data.images || {}}
        imageStyles={props?.styles.image}
        imageVariant={imageVariants?.variant2}
      />
    </TileContent>
  );
};

ImageTile.propTypes = {
  styles: cardStylesPropTypes,
  data: dataPropTypes,
  buttonStackProps: buttonStackPropTypes,
  btnIdentifier: PropTypes.bool,
};

//TileContent
import { Box, Link as ChakraLink } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import LinkButtonsStack from "../link-buttons-stack";
import { Typography } from "../typography";
import { Link } from "react-router-dom";
import {
  buttonStackPropTypes,
  cardStylesPropTypes,
  dataPropTypes,
} from "./proptypes";

/**
 * Component for rendering an overlay box.
 * @param {Object} props - The props for the Overlay component.
 * @param {Object} props.styles - Styling options for the overlay.
 * @returns {JSX.Element} - The rendered Overlay component.
 */
export const Overlay = ({ styles }) => (
  <Box
    position={"absolute"}
    bottom={0}
    left={0}
    right={0}
    top={0}
    {...styles}
  ></Box>
);

Overlay.propTypes = {
  styles: PropTypes.object,
};

/**
 * Component for rendering the content of a tile.
 * @param {Object} props - The props for the TileContent component.
 * @param {Object} props.data - Data object for the tile.
 * @param {Object} props.styles - Styling options for the card.
 * @param {boolean} props.btnIdentifier - Boolean identifier for buttons.
 * @param {Object} [props.buttonStackProps] - Props for the LinkButtonsStack component.
 * @returns {JSX.Element} - The rendered TileContent component.
 */
export const TileContent = ({
  data = {},
  styles = {},
  btnIdentifier,
  buttonStackProps = {},
  children,
}) => {
  return (
    <>
      {/* <DesktopTabletMobileImage
        altText={data?.altText || ""}
        images={data?.images || {}}
        imageStyles={styles.image}
        imageVariant={imageVariants?.variant2}
      /> */}
      {children}
      {data?.target === "_blank" ? (
        <ChakraLink href={data?.tileLink} isExternal>
          <Overlay styles={styles.overlay} />
        </ChakraLink>
      ) : (
        <ChakraLink as={Link} to={data?.tileLink} exact={true}>
          <Overlay styles={styles.overlay} />
        </ChakraLink>
      )}
      <Box
        width={"100%"}
        position={"absolute"}
        {...styles?.buttonsTitleWrapper}
      >
        <Typography value={data?.title} {...styles.title} />
        <LinkButtonsStack
          buttons={data.buttons}
          identifier={btnIdentifier}
          {...buttonStackProps}
        />
      </Box>
    </>
  );
};

TileContent.propTypes = {
  styles: cardStylesPropTypes,
  data: dataPropTypes,
  buttonStackProps: buttonStackPropTypes,
  btnIdentifier: PropTypes.bool,
};


//config
// Import the 'rem' function from the 'utils' module
import { rem } from "../utils";

// Define grid column configurations for different variants
export const column = {
  variant1: { base: 1, md: 2 },
  variant2: { base: 1, md: 2, lg: 3 },
};

// Define spacing configurations for different variants
export const spacing = {
  variant1: { base: rem(8) }, // Utilize the 'rem' function for spacing values
};

// Define padding configurations for different variants and screen sizes
export const padding = {
  variant1: {
    base: `${rem(24)} ${rem(16)}`,
    md: `${rem(40)} ${rem(38)}`,
    lg: `${rem(40)} ${rem(50)}`,
    xl: `${rem(60)} ${rem(60)}`,
    "2xl": `${rem(80)} ${rem(80)}`,
  },
};

// Define available variants
export const variants = { variant1: "variant1", variant2: "variant2" };


//proptypes
import PropTypes from "prop-types";
import { variants } from "./config";

export const buttonStackPropTypes = PropTypes.shape({
  labelKey: PropTypes.string,
  btnProps: PropTypes.object,
  btnGroupProps: PropTypes.object,
  btnLinkProps: PropTypes.object,
});

export const cardStylesPropTypes = PropTypes.shape({
  card: PropTypes.object,
  aspect: PropTypes.object,
  overlay: PropTypes.object,
  title: PropTypes.object,
  image: PropTypes.object,
  buttonsTitleWrapper: PropTypes.object,
});

export const gridVariantsPropTypes = PropTypes.shape({
  column: PropTypes.oneOf(Object.values(variants)),
  spacing: PropTypes.oneOf(Object.values(variants)),
  padding: PropTypes.oneOf(Object.values(variants)),
});

export const imagesPropTypes = PropTypes.shape({
  srcset: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number,
});

export const dataPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    images: PropTypes.shape({
      desktop: imagesPropTypes,
      mobile: imagesPropTypes,
      tablet: imagesPropTypes,
    }),
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string,
        target: PropTypes.string,
        title: PropTypes.string,
      })
    ),
    title: PropTypes.string,
    tileLink: PropTypes.string,
    tileTarget: PropTypes.string,
    altText: PropTypes.string,
  })
);

