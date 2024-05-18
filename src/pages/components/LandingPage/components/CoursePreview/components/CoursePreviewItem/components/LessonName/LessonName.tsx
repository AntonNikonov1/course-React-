import React, { useContext } from "react";
import classes from "./LessonName.module.scss";
import {
  COURSE_PREVIEW_ITEM_OPEN_ANIMATION_DURATION,
  GetCoursePreviewItemId,
} from "../../utils";
import { CoursePreviewItemContext } from "../../CoursePreviewItem.context";
import { ArrowTopIcon } from "components/Icons/ArrowTopIcon";

export const CoursePreviewItemLessonName = () => {
  const { containerRef, itemIndex, openCoursePreviewItem } = useContext(
    CoursePreviewItemContext
  );

  const getCoursePreviewItemId = new GetCoursePreviewItemId(itemIndex);

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
      <div
        id={getCoursePreviewItemId.lessonNameId}
        className={classes.lesson_name}
      >
        01 / Getting Started
      </div>

      <ArrowTopIcon
        id={getCoursePreviewItemId.expandIconId}
        className={classes.expand_icon}
        onClick={openCoursePreviewItemHandler}
      />
    </div>
  );
};
