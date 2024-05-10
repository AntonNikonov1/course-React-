import React from "react";
import classes from "./BenefitItem.module.scss";

export const BenefitItem = () => {
  return (
    <div className={classes.container}>
      <div>
        <p className={classes.title}>Practical learning</p>
        <p className={classes.description}>
          Practical knowledge really matters because it turns what you know into
          what you can do. It's huge for solving real issues and makes you super
          valuable in the job market. Plus, it speeds up your career growth in
          this fast-changing field.
        </p>
      </div>
    </div>
  );
};
