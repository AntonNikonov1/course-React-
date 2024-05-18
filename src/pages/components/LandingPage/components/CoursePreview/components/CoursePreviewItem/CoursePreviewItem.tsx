import React from "react";
import classes from "./CoursePreviewItem.module.scss";
import { CoursePreviewItemProps } from "./CoursePreviewItem.interface";
import { LessonNavigation } from "./components/LessonNavigation/LessonNavigation";
import { ArrowTopIcon } from "components/Icons/ArrowTopIcon";
import { CoursePreviewItemContext } from "./CoursePreviewItem.context";
import { useCoursePreviewItemToggleAnimation } from "./hooks/use-toggle-animation";

export const CoursePreviewItem = (props: CoursePreviewItemProps) => {
  const { isOpened, itemIndex, openCoursePreviewItem } = props;

  const {
    containerRef,
    moduleMarkId,
    lessonNameId,
    expandIconId,
    lessonNavigationContainerId,
  } = useCoursePreviewItemToggleAnimation(isOpened, itemIndex);

  return (
    <CoursePreviewItemContext.Provider value={props}>
      <div ref={containerRef} className={classes.container}>
        <div id={moduleMarkId} className={classes.module_mark}>
          1 Module
        </div>

        <div className={classes.lesson_name_container}>
          <div id={lessonNameId} className={classes.lesson_name}>
            01 / Getting Started
          </div>

          <ArrowTopIcon
            id={expandIconId}
            className={classes.expand_icon}
            onClick={() => openCoursePreviewItem(itemIndex)}
          />
        </div>

        <div
          id={lessonNavigationContainerId}
          className={classes.lesson_container}
        >
          <div
            style={{
              background: "grey",
              flex: 0.6,
              height: "500px",
              borderRadius: "40px",
            }}
          />

          <LessonNavigation />
        </div>
      </div>
    </CoursePreviewItemContext.Provider>
  );
};
