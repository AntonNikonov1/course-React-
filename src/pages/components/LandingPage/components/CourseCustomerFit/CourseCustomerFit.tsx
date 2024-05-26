import classes from "./CourseCustomerFit.module.scss";
import { CourseCustomerFitItem } from "./components/CourseCustomerFitItem/CourseCustomerFitItem";
import { courseCustomerFitSetup } from "./utils";

export const CourseCustomerFit = () => {
  return (
    <section className={classes.container}>
      {courseCustomerFitSetup.map((item, index) => (
        <CourseCustomerFitItem key={index} {...item} />
      ))}
    </section>
  );
};
