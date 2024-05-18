import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { GetCoursePreviewItemId } from "../utils";

export const useCoursePreviewItemToggleAnimation = (
  isOpened: boolean,
  itemIndex: number
) => {
  const [containerRef, animate] = useAnimate();

  const getCoursePreviewItemId = new GetCoursePreviewItemId(itemIndex);

  useEffect(() => {
    const animationSetup = { duration: 0.25, at: 0 };

    animate([
      [
        `#${getCoursePreviewItemId.moduleMarkId}`,
        {
          opacity: isOpened ? 1 : 0,
          transform: isOpened ? "scale(1)" : "scale(0)",
          padding: isOpened ? "0 30px" : "0",
          marginBottom: isOpened ? "40px" : "0",
        },
        animationSetup,
      ],
      [
        `#${getCoursePreviewItemId.lessonNavigationContainerId}`,
        {
          height: isOpened ? "500px" : "0",
          marginTop: isOpened ? "100px" : "0",
          opacity: isOpened ? 1 : 0,
        },
        animationSetup,
      ],
      [
        `#${getCoursePreviewItemId.lessonNameId}`,
        {
          transform: isOpened ? "translateX(-50%)" : "translateX(0)",
          left: isOpened ? "50%" : "0",
        },
        animationSetup,
      ],
      [
        `#${getCoursePreviewItemId.expandIconId}`,
        {
          opacity: isOpened ? 0 : 1,
          height: isOpened ? "0px" : "auto",
        },
        animationSetup,
      ],
    ]);
  }, [isOpened]);

  return { containerRef };
};
