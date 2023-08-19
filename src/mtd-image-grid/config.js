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
