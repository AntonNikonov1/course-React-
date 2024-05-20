import classes from "./CourseIntro.module.scss";
import { CourseIntroText } from "./components/Text/Text";
import { CourseIntroVideo } from "./components/Video/Video";

export const CourseIntro = () => {
  return (
    <section className={classes.section}>
      <CourseIntroText />
      <CourseIntroVideo />
    </section>
  );
};
