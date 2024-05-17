import React from "react";
import classes from "./ExamButton.module.scss";
import { ButtonComponent } from "components/Button/Button";
import { LibraryBooks, QuizOutlined } from "@mui/icons-material";

export const ExamButton = () => {
  return (
    <ButtonComponent className={classes.container}>
      <LibraryBooks color="primary" />
      Exam
    </ButtonComponent>
  );
};
