import classes from "./CoursePreviewItem.module.scss";
import { CoursePreviewItemProps } from "./CoursePreviewItem.interface";
import { CoursePreviewItemLessonNavigation } from "./components/LessonNavigation/LessonNavigation";
import { CoursePreviewItemContext } from "./CoursePreviewItem.context";
import { useCoursePreviewItemToggleAnimation } from "./hooks/use-toggle-animation";
import { GetCoursePreviewItemId } from "./utils";
import { CoursePreviewItemLessonName } from "./components/LessonName/LessonName";

export const CoursePreviewItem = (props: CoursePreviewItemProps) => {
  const { isOpened, itemIndex } = props;

  const { containerRef } = useCoursePreviewItemToggleAnimation(
    isOpened,
    itemIndex
  );

  const getCoursePreviewItemId = new GetCoursePreviewItemId(itemIndex);

  return (
    <CoursePreviewItemContext.Provider value={{ ...props, containerRef }}>
      <div ref={containerRef} className={classes.container}>
        <div
          id={getCoursePreviewItemId.moduleMarkId}
          className={classes.module_mark}
        >
          1 Module
        </div>

        <CoursePreviewItemLessonName />

        <div
          id={getCoursePreviewItemId.lessonNavigationContainerId}
          className={classes.lesson_container}
        >
          <div className={classes.lesson_video} />

          <CoursePreviewItemLessonNavigation />
        </div>
      </div>
    </CoursePreviewItemContext.Provider>
  );
};
