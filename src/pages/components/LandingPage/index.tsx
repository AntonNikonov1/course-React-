import React from "react";
import classes from "./style.module.scss";
import { CourseIntro } from "./components/CourseIntro/CourseIntro";
import { CourseBenefits } from "./components/CourseBenefits/CourseBenefits";
import { CourseCustomerFit } from "./components/CourseCustomerFit/CourseCustomerFit";
import { CoursePreview } from "./components/CoursePreview/CoursePreview";

export const LandingPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <CourseIntro />
        <CourseBenefits />
        <CourseCustomerFit />
        <CoursePreview />
      </div>
    </div>
  );
};
