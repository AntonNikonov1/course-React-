import classes from "./Description.module.scss";
import classNames from "classnames";
import { AuthorComment } from "components/AuthorComment/AuthorComment";

export const CoursePriceListDescription = () => {
  return (
    <div className={classes.container}>
      <div className={classes.handwriting_down_arrow} />

      <div className={classes.content_container}>
        <div className={classes.description}>
          <span>Start earning </span>
          <span
            className={classNames(classes.highlighted_text, "highlighted_text")}
          >
            from $1,2K/m
          </span>
          <span> while</span>
        </div>
        <p
          className={classNames(classes.description_down, classes.description)}
        >
          working remotely on exciting projects!
        </p>

        <AuthorComment
          rotate={4}
          className={classes.author_comment}
          comment="If you want to get 3 projects (1  for free) in your portfolio and A LOT OF practice, choose BLAZE package."
        />
      </div>
    </div>
  );
};
