import React from "react";
import classes from "./CoursePreview.module.scss";
import { CoursePreviewItem } from "./components/CoursePreviewItem/CoursePreviewItem";

export const CoursePreview = () => {
  return (
    <div style={{ paddingBottom: "500px" }}>
      <h2 className="title_section">Course Content</h2>

      <div className={classes.course_preview_container}>
        <CoursePreviewItem />
      </div>
    </div>
  );
};
