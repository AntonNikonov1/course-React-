import classes from "./ExamButton.module.scss";
import { ButtonComponent } from "components/Button/Button";
import { BooksIcon } from "components/Icons/BooksIcon";

export const ExamButton = () => {
  return (
    <ButtonComponent className={classes.button}>
      <BooksIcon className={classes.icon} />
      Exam
    </ButtonComponent>
  );
};
