export const rem = (px) => {
  return `${px / 16}rem`;
};

export const testIds = (...args) => {
  return args.reduce((acc, element) => {
    return typeof element === "string"
      ? acc
        ? `${acc}_${element}`
        : element
      : acc || "";
  }, "");
};
