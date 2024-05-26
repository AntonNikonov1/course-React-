import classes from "./Description.module.scss";
import classNames from "classnames";
import { AuthorComment } from "components/AuthorComment/AuthorComment";
import { getMediaBreakpoints } from "utils/media-breakpoints";

export const CoursePriceListDescription = () => {
  const getAuthorRotate = () => {
    const { breakPointValue } = getMediaBreakpoints();
    const excludeRotateForBreakPoints = ["xs", "sm", "md", "lg"];

    if (excludeRotateForBreakPoints.includes(breakPointValue)) {
      return 0;
    }

    return 4;
  };

  return (
    <div className={classes.container}>
      <div className={classes.handwriting_down_arrow} />

      <div className={classes.content_container}>
        <div className={classNames("title", classes.description)}>
          <span>Start earning </span>
          <span
            className={classNames(classes.highlighted_text, "highlighted_text")}
          >
            from $1,2K/m
          </span>
          <span>
            {" "}
            while{" "}
            <span className={classNames(classes.description_down)}>
              working remotely on exciting projects!
            </span>
          </span>
        </div>

        <AuthorComment
          rotate={getAuthorRotate()}
          className={classes.author_comment}
          comment="If you want to get 3 projects (1  for free) in your portfolio and A LOT OF practice, choose BLAZE package."
        />
      </div>
    </div>
  );
};
