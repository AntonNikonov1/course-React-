import classes from "./Title.module.scss";
import classNames from "classnames";

export const CoursePriceListTitle = () => {
  return (
    <h2 className="title_section">
      Finally, start
      <span className={classNames(classes.title, "animated_underline")}>
        practicing.
      </span>
    </h2>
  );
};
