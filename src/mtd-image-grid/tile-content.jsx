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
import { testIds } from "../utils";

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

let rootId= 'tile'

export const TileContent = ({
  data = {},
  styles = {},
  btnIdentifier,
  buttonStackProps = {},
  children,
  testIdPrefix,
  rootTestId,
}) => {
  
  rootId = rootTestId || rootId

  return (
    <>
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
        data-testid={testIds(testIdPrefix, rootId, "buttonTitleWrapper")}
        {...styles?.buttonsTitleWrapper}
      >
        <Typography value={data?.title} {...styles.title} />
        <LinkButtonsStack
          rootTestId={rootId}
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
  testIdPrefix: PropTypes.string,
};
