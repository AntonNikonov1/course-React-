import classes from "./CourseCommonQuestionsItem.module.scss";
import { AuthorComment } from "components/AuthorComment/AuthorComment";

export const CourseCommonQuestionsItem = () => {
  return (
    <div className={classes.container}>
      <p className={classes.question}>“Як відбувається процес навчання?”</p>
      <AuthorComment
        rotate={-4}
        comment="Ти отримуєш постійний доступ до Хабу і до приватного клубу. Вчишся автоматично у своєму темпі, приходиш на всі зустрічі, здаєш домашні завдання і бачиш свій прогрес — усе це під рукою, де б ти не був"
      />
    </div>
  );
};
