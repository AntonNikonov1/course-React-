export interface CoursePreviewItemProps {
  isOpened: boolean;
  itemIndex: number;
  openCoursePreviewItem: (previewIndex: number) => void;
  closeCoursePreviewItem: (previewIndex?: number) => void;
}
