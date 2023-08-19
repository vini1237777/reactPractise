import theme from "@chakra-ui/theme";

export const mapWidthsToSizes = (widths, breakpointLabels, themeBreakpoints) => {
  const _widths = withUnit(
    Array.isArray(widths) ? widths : widthsAsArray(widths, breakpointLabels)
  );

  return breakpointLabels
    .slice(0, _widths.length)
    .map((bp, i) => {
      console.log(bp, 'bp');
      console.log(themeBreakpoints[bp],themeBreakpoints, "themeBreakpoints");
      return i === 0
        ? _widths[i]
        : `(min-width: ${themeBreakpoints[bp]}) ${_widths[i]}`;
    })
    .reverse()
    .join(", ");
};

export const withUnit = (widths) =>
  // By default, unitless value is interpreted as px
  widths.map((width) => (typeof width === "number" ? `${width}px` : width));

export const widthsAsArray = (widths, breakpointLabels) => {
  const biggestBreakpoint = breakpointLabels
    .filter((bp) => Boolean(widths[bp]))
    .pop();

  let mostRecent;
  return breakpointLabels
    .slice(0, breakpointLabels.indexOf(biggestBreakpoint) + 1)
    .map((bp) => {
      if (widths[bp]) {
        mostRecent = widths[bp];
        return widths[bp];
      } else {
        return mostRecent;
      }
    });
};

const {breakpoints} =theme;

export const getBreakpointLabels = () =>
  Object.entries(breakpoints)
    .sort((a, b) => parseFloat(a[1]) - parseFloat(b[1]))
    .map(([key]) => key);

