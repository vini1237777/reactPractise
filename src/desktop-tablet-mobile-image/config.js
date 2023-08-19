// Media queries for different variants
export const medias = {
  variant1: {
    desktop: { media: "(min-width: 1024px)" },
    tablet: { media: "(min-width: 768px)" },
    mobile: { media: "(max-width: 767px)" },
  },
  variant2: {}, // Add media queries for variant2 if needed
};

// Styles for different image variants
export const imageStyle = {
  variant1: { maxWidth: "100%", maxHeight: "100%" },
  variant2: { width: "100%", height: "100%", objectFit: "cover" },
};

// Image options based on variants
export const options = {
  variant1: {
    ...medias?.variant1, // Spread the media queries for variant1
  },
  variant2: {}, // Add options for variant2 if needed
};

// Available image variants
export const imageVariants = { variant1: "variant1", variant2: "variant2" };

// Get image attributes (type)
export const getAttributes = (image = {}) => {
  let metaInfo = {};
  if (image.type) {
    metaInfo.type = image.type;
  }
  return metaInfo;
};

// Get image srcset
export const getSrcSet = (image = {}) => {
  return image?.width ? `${image.src} ${image.width}` : image?.src;
};
