export interface CoursePreviewItemProps {
  isOpened: boolean;
  itemIndex: number;
  lessonName: string;
  totalNumberModuleTimeInHour: number;
  openCoursePreviewItem: (previewIndex: number) => void;
  closeCoursePreviewItem: (previewIndex?: number) => void;
}
