import classes from "./LessonButton.module.scss";
import { ButtonComponent } from "components/Button/Button";
import { CoursePreviewLessonButtonProps } from "./LessonButton.interface";
import classNames from "classnames";

export const CoursePreviewLessonButton = ({
  children,
  isFocused,
}: CoursePreviewLessonButtonProps) => {
  return (
    <ButtonComponent
      className={classNames(classes.container, isFocused && classes.focused)}
    >
      {children}
    </ButtonComponent>
  );
};
