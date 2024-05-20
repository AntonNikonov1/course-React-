import { useState } from "react";
import classes from "./LessonButton.module.scss";
import { ButtonComponent } from "components/Button/Button";
import { CheckboxComponent } from "components/Form/components/Checkbox/Checkbox";
import { CoursePreviewLessonButtonProps } from "./LessonButton.interface";
import classNames from "classnames";

export const CoursePreviewLessonButton = ({
  children,
  isFocused,
}: CoursePreviewLessonButtonProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ButtonComponent
      className={classNames(classes.container, isFocused && classes.focused)}
    >
      <CheckboxComponent
        style={{ color: isFocused ? "var(--inversion)" : "var(--main-black)" }}
        value={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      {children}
    </ButtonComponent>
  );
};
