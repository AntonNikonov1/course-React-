import React from "react";
import classes from "./CourseIntro.module.scss";
import { CourseIntroText } from "./components/Text/Text";
import { CourseIntroVideo } from "./components/Video/Video";

export const CourseIntro = () => {
  return (
    <div className={classes.container}>
      <CourseIntroText />
      <CourseIntroVideo />
    </div>
  );
};
