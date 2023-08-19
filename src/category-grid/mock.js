const images = {
  desktop: {
    src: "https://picsum.photos/1024/1024 1024w",
  },
  tablet: {
    src: "https://picsum.photos/767/767 767w",
  },
  mobile: {
    src: "https://picsum.photos/375/375 375w",
  },
};

const buttons = [
  {
    label: "Button 1",
    url: "https://start.atlassian.com/",
    target: "_blank",
  },
  { label: "Button 2", url: "/yu", target: "_self" },
  { label: "Button 3", url: "/abc" },
];

export const mockData = [
  {
    tileLink: "/men/shoes",
    buttons,
    // images,
    title: "this is the title",
  },
  {
    buttons,
    images,
    title: "this is the title",
    tileLink: "https://start.atlassian.com/",
    target: "_blank",
  },
  {
    buttons,
    images,
    title: "this is the title",
    tileLink: "https://start.atlassian.com/",
    target: "_self",
  },
  {
    buttons,
    images,
    title: "this is the title",
    tileLink: "https://start.atlassian.com/",
  },
  {
    buttons,
    images,
    title: "Testing data, this is testing data.",
  },
  {
    buttons,
    images,
    title: "Testing data, this is testing data.",
  },
  {
    buttons,
    images,
    title: "Testing data, this is testing data.",
  },
  {
    buttons,
    images,
    title: "Testing data, this is testing data.",
  },
];
