import classes from "./Tagline.module.scss";
import classNames from "classnames";

export const CourseIntroTextTagline = () => {
  return (
    <p className={classes.container}>
      <span className={classes.tagline}>From&nbsp;</span>
      <span className={classes.bad_instance}>theory</span>
      <span className={classes.tagline}>&nbsp;to&nbsp;</span>
      <span className={classNames(classes.good_instance, "animated_underline")}>
        practice
      </span>
    </p>
  );
};
