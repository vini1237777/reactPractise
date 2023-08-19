import { Button, Link as ChakraLink, Stack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { testIds } from "../utils";

/**
 * Extracts link-related properties from button data.
 *
 * @param {Object} data - Button data.
 * @returns {Object} - Extracted link properties.
 */
const getLinkInfo = (data) => {
  const linkProps = {};
  if (data.target === "_blank") {
    linkProps.href = data.link || data.url || data.to || data.href || data.path;
    linkProps.isExternal = true;
    linkProps.rel = "noopener noreferrer";
  } else {
    linkProps.to = data.link || data.url || data.to || data.href || data.path;
  }
  return linkProps;
};

/**
 * Utility component for rendering a stack of buttons with links.
 *
 * @param {Object} props - The props for the LinkButtonsStack component.
 * @param {Array} props.buttons - Array of button objects with link information.
 * @param {string} props.labelKey - The key to identify the label text for each button.
 * @param {string} props.identifier - The key to identify a unique identifier for each button.
 * @param {Object} props.btnProps - Additional props to pass to each Button component.
 * @param {Object} props.btnGroupProps - Additional props to pass to the Stack (or as) component.
 * @param {Object} props.btnLinkProps - Additional props to pass to the Link component.
 * @param {React.ElementType} [props.as] - The component to use as a wrapper (default: Stack).
 * @returns {JSX.Element} - The rendered LinkButtonsStack component.
 */

let rootId='linkButtonGroup'

const LinkButtonsStack = ({
  buttons,
  labelKey,
  identifier,
  btnProps,
  btnGroupProps,
  btnLinkProps,
  as,
  testIdPrefix,
  rootTestId,
}) => {
  const Component = as || Stack;
  rootId = rootTestId || rootId;
  return (
    <Component {...btnGroupProps} data-testid={rootId}>
      {buttons?.map((button = {}, index) => {
        return button?.target === "_blank" ? (
          <ChakraLink
            {...getLinkInfo(button)}
            key={
              button[identifier] ||
              button[labelKey] ||
              button.label ||
              button.title ||
              index
            }
            {...btnLinkProps}
          >
            <Button
              {...btnProps}
              {...button?.props}
              data-testid={testIds(testIdPrefix,rootId, `${button.label}-${index}`)}
            >
              {button[labelKey] || button.label || button.title || ""}
            </Button>
          </ChakraLink>
        ) : (
          <ChakraLink
            {...getLinkInfo(button)}
            key={
              button[identifier] ||
              button[labelKey] ||
              button.label ||
              button.title ||
              index
            }
            {...btnLinkProps}
            as={Link}
          >
            <Button
              {...btnProps}
              data-testid={testIds(testIdPrefix,rootId, `${button.label}-${index}`)}
              {...button?.props}
            >
              {button[labelKey] || button.label || button.title || ""}
            </Button>
          </ChakraLink>
        );
      })}
    </Component>
  );
};

LinkButtonsStack.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object),
  labelKey: PropTypes.string,
  identifier: PropTypes.string,
  btnProps: PropTypes.object,
  btnGroupProps: PropTypes.object,
  btnLinkProps: PropTypes.object,
  as: PropTypes.elementType,
  testIdPrefix: PropTypes.string,
  rootTestId: PropTypes.string,
};

export default LinkButtonsStack;
