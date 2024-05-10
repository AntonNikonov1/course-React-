import React from "react";
import classes from "./style.module.scss";
import { CourseIntro } from "./components/CourseIntro/CourseIntro";

export const LandingPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <CourseIntro />
      </div>
    </div>
  );
};
