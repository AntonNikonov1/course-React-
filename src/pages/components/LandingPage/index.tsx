import React from "react";
import classes from "./style.module.scss";
import { CourseIntro } from "./components/CourseIntro/CourseIntro";
import { CourseBenefits } from "./components/CourseBenefits/CourseBenefits";

export const LandingPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <CourseIntro />
        <CourseBenefits />
      </div>
    </div>
  );
};
