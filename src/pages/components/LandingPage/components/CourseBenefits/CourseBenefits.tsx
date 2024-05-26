import classes from "./CourseBenefits.module.scss";
import { StepperStaticComponent } from "components/Stepper/StepperStatic/StepperStatic";
import { useStepperStaticData } from "./hooks/use-stepper-static-data";

export const CourseBenefits = () => {
  const { stepperStaticData } = useStepperStaticData();
  return (
    <section className={classes.container}>
      <StepperStaticComponent data={stepperStaticData} />
    </section>
  );
};
