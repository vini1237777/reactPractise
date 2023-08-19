// import { fontFamily } from "../foundation/fonts";
import { rem } from "../utils";

const fontFamily = {
  avance_offc: 'Avance Offc',
};

export const textVariantsKeys = {
  white_xl1_700: "white-xl1_700",
};

export const defaultVariantKeys = {
  xl1_700: "xl1_700",
  xl2_700: "xl2_700",
};

export const baseVariants = {
  [defaultVariantKeys.xl1_700]: {
    fontSize: { base: rem(30), sm: rem(36), md: rem(30), lg: rem(36) },
    lineHeight: { base: rem(38), sm: rem(45), md: rem(38), lg: rem(45) },
    fontWeight: { base: 700 },
  },
};

export const textVariants = {
  [textVariantsKeys.white_xl1_700]: {
    ...baseVariants[defaultVariantKeys.xl1_700],
    fontFamily: { base: fontFamily.avance_offc },
    color: "#fff",
  },
};
