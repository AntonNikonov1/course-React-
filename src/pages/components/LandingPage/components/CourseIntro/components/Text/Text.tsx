import classes from "./Text.module.scss";
import { CourseIntroTextHeader } from "./components/Header/Header";
import { CourseIntroTextName } from "./components/Name/Name";
import { CourseIntroTextTagline } from "./components/Tagline/Tagline";
import { ButtonComponent } from "components/Button/Button";

export const CourseIntroText = () => {
  return (
    <div className={classes.container}>
      <div>
        <CourseIntroTextHeader />
        <CourseIntroTextName />
        <CourseIntroTextTagline />
        <p className={classes.description}>
          This course focuses on developing a deep understanding of React
          through building complex projects. You'll not only master React but
          also learn how to integrate it with other technologies. These in-depth
          skills and practical experience will help you excel in interviews and
          stand out from other candidates.
        </p>
      </div>

      <div className={classes.action_container}>
        <ButtonComponent ui="primary">More about tariffs</ButtonComponent>
        <ButtonComponent>Modules and Lessons</ButtonComponent>
      </div>
    </div>
  );
};
