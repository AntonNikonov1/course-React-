import React from "react";
import classes from "./CourseBenefits.module.scss";
import { BenefitItem } from "./components/BenefitItem/BenefitItem";
import { StepperStaticComponent } from "components/Stepper/StepperStatic/StepperStatic";

export const CourseBenefits = () => {
  return (
    <div className={classes.container}>
      {/* <BenefitItem /> */}
      <StepperStaticComponent />
    </div>
  );
};
