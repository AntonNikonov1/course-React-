import React from "react";
import classes from "./StepperStatic.module.scss";
import { Stepper, Step, StepLabel, StepIcon } from "@mui/material";
import { QontoConnector } from "./components/StyledStepperSetupt";
import { StepperStaticIndicator } from "./components/StepIndicator/StepIndicator";



export const StepperStaticComponent = () => {
  return (
    <Stepper activeStep={-1} alternativeLabel connector={<QontoConnector />}>
      {[{title: 'Practical learning', description: 'Practical knowledge really matters because it turns what you know into what you can do. It’s huge for solving real issues and makes you super valuable in the job market. Plus, it speeds up your career growth in this fast-changing field.'}].map(({title,description}) => (
        <Step key={title} className={classes.container}>
          <StepLabel className={classes.container} StepIconComponent={StepperStaticIndicator}>
            <p className={classes.title}>{title}</p>
            <p className={classes.description}>{description}</p>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
