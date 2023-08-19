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
  testIdPrefix: PropTypes.string,
};
