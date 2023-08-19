import React from "react";
import PropTypes from "prop-types";
import { Text, chakra } from "@chakra-ui/react";
import { textVariants } from "./variants";

/**
 * TypographyComponent renders text with Chakra UI styles based on a given variant key.
 *
 * @param {Object} props - The props for the TypographyComponent.
 * @param {string} props.variantKey - The key to identify the text variant.
 * @param {string} [props.value=""] - The text content to be rendered.
 * @param {Object} rest - Additional props to pass to the Text component.
 * @returns {JSX.Element} - The rendered TypographyComponent.
 */
const TypographyComponent = ({ variantKey, value = "", ...rest }) => {
  const customProps = textVariants[variantKey] || {};
  return (
    <Text {...customProps} {...rest}>
      {value}
    </Text>
  );
};

TypographyComponent.propTypes = {
  variantKey: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export const Typography = chakra(TypographyComponent);
