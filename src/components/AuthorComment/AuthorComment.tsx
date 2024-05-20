import classes from "./AuthorComment.module.scss";
import { AuthorCommentProps } from "./AuthorComment.interface";
import classNames from "classnames";

export const AuthorComment = ({
  avatarUrl = 'url("https://johnsonlaird.com/img/1043/full/1/20220915124223327_1043.jpg")',
  author = "Anton Nikonov",
  comment,
  rotate = 0,
  className,
  ...restProps
}: AuthorCommentProps) => {
  return (
    <div
      {...restProps}
      style={{ rotate: `${rotate}deg` }}
      className={classNames(className, classes.container)}
    >
      <div style={{ backgroundImage: avatarUrl }} className={classes.img} />

      <div>
        <p className={classes.name}>{author}</p>
        <p className={classes.author_comment}>{comment}</p>
      </div>
    </div>
  );
};
