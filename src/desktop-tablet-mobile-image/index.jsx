
import { Img } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
// import { mapWidthsToSizes } from "../../../../../app/utils/responsive-image";
import {
  getAttributes,
  getSrcSet,
  imageStyle,
  imageVariants,
  options,
} from "./config";

const defaultSrc = "";

const DesktopTabletMobileImage = ({
  variant = imageVariants.variant1,
  images = {},
  altText = "",
  imageStyles = {},
  loading = "lazy",
  widths,
  imageVariant = imageVariants.variant1,
  as,
}) => {
  const Component = as || Img;

  return (
    <picture>
      <source
        media={options?.[variant]?.desktop?.media}
        srcSet={getSrcSet(images.desktop) || defaultSrc}
        sizes={widths ? null : ""}
        {...getAttributes(images.desktop)}
      />
      <source
        media={options?.[variant]?.tablet?.media}
        srcSet={getSrcSet(images.tablet) || defaultSrc}
        sizes={widths ? null : ""}
        {...getAttributes(images.tablet)}
      />
      <source
        media={options?.[variant]?.mobile?.media}
        srcSet={getSrcSet(images.mobile) || defaultSrc}
        sizes={widths ? null : ""}
        {...getAttributes(images.mobile)}
      />
      <Component
        src={images.desktop?.src || defaultSrc}
        alt={altText}
        loading={loading}
        {...imageStyles}
        {...imageStyle[imageVariant]}
      />
    </picture>
  );
};

const imagePropTypes = PropTypes.shape({
  src: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
});

DesktopTabletMobileImage.propTypes = {
  variant: PropTypes.string,
  images: PropTypes.shape({
    desktop: imagePropTypes,
    tablet: imagePropTypes,
    mobile: imagePropTypes,
  }),
  altText: PropTypes.string,
  imageStyles: PropTypes.object,
  loading: PropTypes.string,
  widths: PropTypes.arrayOf(PropTypes.string), // Added PropTypes for widths
  imageVariant: PropTypes.string, // Added PropTypes for imageVariant
  as: PropTypes.elementType, // Added PropTypes for 'as' prop
};

export default DesktopTabletMobileImage;