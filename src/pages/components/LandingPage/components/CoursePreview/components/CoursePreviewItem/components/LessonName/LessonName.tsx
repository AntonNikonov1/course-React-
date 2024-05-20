import { useContext } from "react";
import classes from "./LessonName.module.scss";
import {
  COURSE_PREVIEW_ITEM_OPEN_ANIMATION_DURATION,
  GetCoursePreviewItemId,
} from "../../utils";
import { CoursePreviewItemContext } from "../../CoursePreviewItem.context";
import { ArrowTopIcon } from "components/Icons/ArrowTopIcon";

export const CoursePreviewItemLessonName = () => {
  const {
    containerRef,
    itemIndex,
    openCoursePreviewItem,
    lessonName,
    totalNumberModuleTimeInHour,
  } = useContext(CoursePreviewItemContext);

  const getCoursePreviewItemId = new GetCoursePreviewItemId(itemIndex);
  const totalNumberModuleTimeInHourArray = totalNumberModuleTimeInHour
    .toFixed(2)
    .split(".");

  const minutes = totalNumberModuleTimeInHourArray
    .slice(1, totalNumberModuleTimeInHourArray.length)
    .join("");

  const openCoursePreviewItemHandler = () => {
    openCoursePreviewItem(itemIndex);

    setTimeout(() => {
      const coursePreviewItemContainerNode = containerRef?.current;

      if (coursePreviewItemContainerNode) {
        coursePreviewItemContainerNode.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, COURSE_PREVIEW_ITEM_OPEN_ANIMATION_DURATION);
  };

  return (
    <div className={classes.lesson_name_container}>
      <p
        id={getCoursePreviewItemId.lessonNameId}
        className={classes.lesson_name}
      >
        {lessonName}
      </p>
      <p
        id={getCoursePreviewItemId.lessonDurationId}
        className={classes.lesson_duration}
      >
        3/9 {`${Math.floor(totalNumberModuleTimeInHour)}h ${minutes}m`}
      </p>

      <ArrowTopIcon
        id={getCoursePreviewItemId.expandIconId}
        className={classes.expand_icon}
        onClick={openCoursePreviewItemHandler}
      />
    </div>
  );
};
