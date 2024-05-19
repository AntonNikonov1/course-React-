import React, { useState } from "react";
import classes from "./CoursePreview.module.scss";
import { CoursePreviewItem } from "./components/CoursePreviewItem/CoursePreviewItem";

export const CoursePreview = () => {
  const [openedCourseIndex, setOpenedCourseIndex] = useState<number | null>(0);

  const closeCoursePreviewItem = (previewIndex?: number) => {
    setOpenedCourseIndex(
      typeof previewIndex === "number" ? previewIndex : null
    );
  };

  const openCoursePreviewItem = (previewIndex: number) => {
    setOpenedCourseIndex(previewIndex);
  };

  return (
    <div style={{ paddingBottom: "500px" }}>
      <h2 className="title_section">Course Content</h2>

      <div className={classes.course_preview_container}>
        <CoursePreviewItem
          key="0"
          itemIndex={0}
          lessonName="01 / Getting Started"
          totalNumberModuleTimeInHour={1.5}
          isOpened={openedCourseIndex === 0}
          closeCoursePreviewItem={closeCoursePreviewItem}
          openCoursePreviewItem={openCoursePreviewItem}
        />
        <CoursePreviewItem
          key="1"
          itemIndex={1}
          lessonName="02 / React vs Vanilla JS"
          totalNumberModuleTimeInHour={1.25}
          isOpened={openedCourseIndex === 1}
          closeCoursePreviewItem={closeCoursePreviewItem}
          openCoursePreviewItem={openCoursePreviewItem}
        />
        <CoursePreviewItem
          key="2"
          itemIndex={2}
          lessonName="03 / A first look at React"
          totalNumberModuleTimeInHour={1.15}
          isOpened={openedCourseIndex === 2}
          closeCoursePreviewItem={closeCoursePreviewItem}
          openCoursePreviewItem={openCoursePreviewItem}
        />
      </div>
    </div>
  );
};
