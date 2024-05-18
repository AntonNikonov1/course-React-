import React, { useContext } from "react";
import classes from "./CloseModuleButton.module.scss";
import { ButtonComponent } from "components/Button/Button";
import { ButtonComponentProps } from "components/Button/Button.interface";
import { CoursePreviewItemContext } from "../../../CoursePreviewItem.context";

export const CloseModuleButton = (props: ButtonComponentProps) => {
  const { closeCoursePreviewItem } = useContext(CoursePreviewItemContext);
  return (
    <ButtonComponent
      ui="outline"
      className={classes.button}
      onClick={() => closeCoursePreviewItem()}
      {...props}
    >
      Close Module
    </ButtonComponent>
  );
};
