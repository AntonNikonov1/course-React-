import React from "react";
import classes from "./CoursePreviewItem.module.scss";
import { CoursePreviewLessonButton } from "./components/LessonButton/LessonButton";
import { ExamButton } from "./components/ExamButton/ExamButton";

export const CoursePreviewItem = () => {
  return (
    <div className={classes.container}>
      <div className={classes.module_mark}>1 Module</div>
      <div className={classes.lesson_name}>01 / Getting Started</div>

      <div className={classes.lesson_container}>
        <div
          style={{
            background: "grey",
            flex: 0.6,
            height: "500px",
            borderRadius: "40px",
          }}
        />
        <div className={classes.lesson_navigation}>
          <div>
            <CoursePreviewLessonButton isFocused={false}>
              What is React and why I need use it?
            </CoursePreviewLessonButton>
            <CoursePreviewLessonButton isFocused={true}>
              What is React and why I need use it?
            </CoursePreviewLessonButton>
            <CoursePreviewLessonButton isFocused={false}>
              What is React and why I need use it?
            </CoursePreviewLessonButton>
          </div>

          <ExamButton />
        </div>
      </div>
    </div>
  );
};