import { createContext } from "react";
import { CoursePreviewItemProps } from "./CoursePreviewItem.interface";
import { AnimationScope } from "framer-motion";

interface CoursePreviewItemContextProps extends CoursePreviewItemProps {
  containerRef: AnimationScope<HTMLDivElement> | null;
}

export const CoursePreviewItemContext =
  createContext<CoursePreviewItemContextProps>({
    itemIndex: 0,
    isOpened: false,
    closeCoursePreviewItem: () => null,
    openCoursePreviewItem: () => null,
    containerRef: null,
  });
