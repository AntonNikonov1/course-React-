import React from "react";
import classes from "./LessonNavigation.module.scss";
import { CoursePreviewLessonButton } from "../Buttons/LessonButton/LessonButton";
import { ExamButton } from "../Buttons/ExamButton/ExamButton";
import { CloseModuleButton } from "../Buttons/CloseModuleButton/CloseModuleButton";

export const CoursePreviewItemLessonNavigation = () => {
  return (
    <div className={classes.navigation}>
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

      <div className={classes.button_navigation}>
        <ExamButton />
        <CloseModuleButton />
      </div>
    </div>
  );
};
