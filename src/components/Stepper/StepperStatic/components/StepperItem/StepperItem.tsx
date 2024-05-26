import { cloneElement } from "react";
import classes from "./StepperItem.module.scss";
import { Step, StepLabel } from "@mui/material";
import { StepperStaticIndicator } from "../StepIndicator/StepIndicator";
import { StepperStaticItemProps } from "./StepperItem.interface";
import classNames from "classnames";

export const StepperStaticItem = ({
  name,
  description,
  icon,
  index,
  ...stepProps
}: StepperStaticItemProps) => {
  return (
    <div id={String(index) || "1"}>
      <Step index={index} {...stepProps} className={classes.step_container}>
        <StepLabel
          classes={{
            root: classes.label_root_container,
            label: classes.label_container,
          }}
          StepIconComponent={(props) => <StepperStaticIndicator {...props} />}
        >
          <div className={classes.label_content_container}>
            <p className={classNames("title", classes.title)}>{name}</p>
            <p className={classNames("description", classes.description)}>
              {description}
            </p>
          </div>

          {cloneElement(icon, { className: classes.icon })}
        </StepLabel>
      </Step>
    </div>
  );
};
