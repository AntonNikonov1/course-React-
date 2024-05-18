import { useAnimate } from "framer-motion";
import { useEffect } from "react";

export const useCoursePreviewItemToggleAnimation = (
  isOpened: boolean,
  itemIndex: number
) => {
  const [containerRef, animate] = useAnimate();

  const moduleMarkId = `CoursePreviewItemModuleMark${itemIndex}`;
  const lessonNameId = `CoursePreviewItemContainer${itemIndex}`;
  const expandIconId = `CoursePreviewItemExpandIconId${itemIndex}`;
  const lessonNavigationContainerId = `CoursePreviewItemLessonContainer${itemIndex}`;

  useEffect(() => {
    const animationSetup = { duration: 0.25, at: 0 };

    animate([
      [
        `#${moduleMarkId}`,
        {
          transform: isOpened ? "scale(1)" : "scale(0)",
          padding: isOpened ? "0 30px" : "0",
          marginBottom: isOpened ? "40px" : "0",
        },
        animationSetup,
      ],
      [
        `#${lessonNavigationContainerId}`,
        {
          height: isOpened ? "500px" : "0",
          marginTop: isOpened ? "100px" : "0",
          opacity: isOpened ? 1 : 0,
        },
        animationSetup,
      ],
      [
        `#${lessonNameId}`,
        {
          transform: isOpened ? "translateX(-50%)" : "translateX(0)",
          left: isOpened ? "50%" : "0",
        },
        animationSetup,
      ],
      [
        `#${expandIconId}`,
        {
          opacity: isOpened ? 0 : 1,
          height: isOpened ? "0px" : "auto",
        },
        animationSetup,
      ],
    ]);
  }, [isOpened]);

  return {
    containerRef,
    moduleMarkId,
    lessonNameId,
    expandIconId,
    lessonNavigationContainerId,
  };
};
