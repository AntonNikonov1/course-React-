import classes from "./Name.module.scss";

export const CourseIntroTextName = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Modern React</h1>
      <p className={classes.course_version}>2.0</p>
    </div>
  );
};
