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
