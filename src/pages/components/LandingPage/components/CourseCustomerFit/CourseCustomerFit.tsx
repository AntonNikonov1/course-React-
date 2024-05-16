import React from "react";
import classes from "./CourseCustomerFit.module.scss";
import { CourseCustomerFitItem } from "./components/CourseCustomerFitItem/CourseCustomerFitItem";
import { courseCustomerFitSetup } from "./utils";

export const CourseCustomerFit = () => {
  return (
    <div style={{ paddingBottom: "1000px" }} className={classes.container}>
      {courseCustomerFitSetup.map((item, index) => (
        <CourseCustomerFitItem key={index} {...item} />
      ))}
    </div>
  );
};
