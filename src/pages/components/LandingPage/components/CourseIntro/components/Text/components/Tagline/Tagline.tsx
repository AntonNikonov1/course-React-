import React from "react";
import classes from "./Tagline.module.scss";

export const CourseIntroTextTagline = () => {
  return (
    <p className={classes.container}>
      <span className={classes.tagline}>From&nbsp;</span>
      <span className={classes.bad_instance}>theory</span>
      <span className={classes.tagline}>&nbsp;to&nbsp;</span>
      <span className={classes.good_instance}>practice</span>
    </p>
  );
};
