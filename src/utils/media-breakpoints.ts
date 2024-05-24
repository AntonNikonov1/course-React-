import { ValueOf } from "common/interface";

export const getMediaBreakpoints = () => {
  const mapping = {
    576: "xs",
    768: "sm",
    992: "md",
    1200: "xs",
    1400: "xl",
    1600: "xxl",
    1800: "xxxl",
  } as const;

  let breakPointValue = "xs" as ValueOf<typeof mapping>;

  Object.entries(mapping).map(([key, value]) => {
    if (+key < window.screen.width) {
      breakPointValue = value;
    }
  });

  return { breakPointValue };
};
