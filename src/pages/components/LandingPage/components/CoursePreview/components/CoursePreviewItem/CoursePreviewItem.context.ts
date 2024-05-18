import { createContext } from "react";
import { CoursePreviewItemProps } from "./CoursePreviewItem.interface";

export const CoursePreviewItemContext = createContext<CoursePreviewItemProps>({
  itemIndex: 0,
  isOpened: false,
  closeCoursePreviewItem: () => null,
  openCoursePreviewItem: () => null,
});
