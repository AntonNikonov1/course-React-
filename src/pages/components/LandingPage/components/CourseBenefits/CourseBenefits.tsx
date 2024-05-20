import classes from "./CourseBenefits.module.scss";
import { StepperStaticComponent } from "components/Stepper/StepperStatic/StepperStatic";
import { useStepperStaticData } from "./hooks/use-stepper-static-data";

export const CourseBenefits = () => {
  const { stepperStaticData } = useStepperStaticData();
  return (
    <div className={classes.container}>
      <StepperStaticComponent data={stepperStaticData} />
    </div>
  );
};
