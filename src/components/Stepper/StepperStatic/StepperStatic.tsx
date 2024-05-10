import React from "react";
import classes from "./StepperStatic.module.scss";
import { Stepper, Step, StepLabel } from "@mui/material";
import { StepIndicator } from "./StepIndicator/StepIndicator";

export const StepperStaticComponent = () => {
  return (
    <Stepper activeStep={-1} component={StepIndicator}>
      {["sddsdssdsd"].map((label) => (
        <Step key={label}>
          <StepLabel>
            <p className={classes.title}>{label}</p>
            <p className={classes.description}>{label}</p>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
