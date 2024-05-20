import React from "react";
import classes from "./style.module.scss";
import { CourseIntro } from "./components/CourseIntro/CourseIntro";
import { CourseBenefits } from "./components/CourseBenefits/CourseBenefits";
import { CourseCustomerFit } from "./components/CourseCustomerFit/CourseCustomerFit";
import { CoursePreview } from "./components/CoursePreview/CoursePreview";
import { CoursePriceList } from "./components/CoursePriceList/CoursePriceList";
import { CourseCommonQuestions } from "./components/CourseCommonQuestions/CourseCommonQuestions";

export const LandingPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <CourseIntro />
        <CourseBenefits />
        <CourseCustomerFit />
        <CoursePreview />
        <CoursePriceList />
        <CourseCommonQuestions />
      </div>
    </div>
  );
};
