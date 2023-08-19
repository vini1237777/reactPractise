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
    label: "Button1",
    url: "https://start.atlassian.com/",
    target: "_blank",
  },
  { label: "Button2", url: "/yu", target: "_self" },
  { label: "Button3", url: "/abc" },
];


export const mockData = [
  {
    tileLink: "/men/shoes",
    altText: "Responsive image 1",
    buttons: [
  {
    label: "btn1",
    url: "https://start.atlassian.com/",
    target: "_blank",
  },
  { label: "btn2", url: "/yu", target: "_self" },
  { label: "btn3", url: "/abc" },
],
    images,
    title: "this is the title",
  },
  {
    buttons,
    images,
    title: "this is the title",
    tileLink: "https://start.atlassian.com/",
    altText: "Responsive image 2",
    target: "_blank",
  },
  {
    buttons,
    images,
    title: "this is the title",
    tileLink: "https://start.atlassian.com/",
    altText: "Responsive image 3",
    target: "_self",
  },
  {
    buttons,
    images,
    altText: "Responsive image",
    title: "this is the title",
    tileLink: "https://start.atlassian.com/",
    altText: "Responsive image 4",
  },
  {
    buttons,
    images,
    title: "Testing data, this is testing data.",
    altText: "Responsive image 5",
  },
  {
    buttons,
    images,
    title: "Testing data, this is testing data.",
    altText: "Responsive image 6",

  },
  {
    buttons,
    images,
    title: "Testing data, this is testing data.",
    altText: "Responsive image 7",

  },
  {
    buttons,
    images,
    title: "Testing data, this is testing data.",
    altText: "Responsive image 8",

  },
];
