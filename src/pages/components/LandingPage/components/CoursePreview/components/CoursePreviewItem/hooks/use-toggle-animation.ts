import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import {
  COURSE_PREVIEW_ITEM_OPEN_ANIMATION_DURATION,
  CoursePreviewItemAnimation,
  GetCoursePreviewItemId,
} from "../utils";

export const useCoursePreviewItemToggleAnimation = (
  isOpened: boolean,
  itemIndex: number
) => {
  const [containerRef, animate] = useAnimate();

  const getCoursePreviewItemId = new GetCoursePreviewItemId(itemIndex);
  const coursePreviewItemAnimation = new CoursePreviewItemAnimation(isOpened);

  useEffect(() => {
    const duration = COURSE_PREVIEW_ITEM_OPEN_ANIMATION_DURATION / 1000;
    const animationSetup = { duration, at: 0 };

    animate([
      [
        `#${getCoursePreviewItemId.moduleMarkId}`,
        {
          position: isOpened ? "static" : "absolute",
          opacity: isOpened ? 1 : 0,
          transform: isOpened ? "scale(1)" : "scale(0)",
          padding: isOpened ? "5px 25px" : "0",
          marginBottom: coursePreviewItemAnimation.getModuleMarkMargin(),
        },
        animationSetup,
      ],
      [
        `#${getCoursePreviewItemId.lessonNavigationContainerId}`,
        {
          height: isOpened ? "auto" : "0",
          margin:
            coursePreviewItemAnimation.getLessonNavigationContainerMargin(),
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
        `#${getCoursePreviewItemId.lessonDurationId}`,
        {
          opacity: isOpened ? 0 : 1,
          margin: coursePreviewItemAnimation.getLessonDurationMargin(),
        },
        { ...animationSetup, duration: duration - 0.15 },
      ],
      [
        `#${getCoursePreviewItemId.expandIconId}`,
        {
          opacity: isOpened ? 0 : 1,
          height: isOpened ? "0px" : "38px",
        },
        animationSetup,
      ],
    ]);
  }, [isOpened]);

  return { containerRef };
};
