import { Stepper } from "@mui/material";
import { StepperStaticItem } from "./components/StepperItem/StepperItem";
import { StepperStaticComponentProps } from "./StepperStatic.interface";

export const StepperStaticComponent = ({
  data,
}: StepperStaticComponentProps) => {
  return (
    <Stepper orientation="vertical" connector={null}>
      {data.map((dataItem, index) => (
        <StepperStaticItem key={index} {...dataItem} index={index} />
      ))}
    </Stepper>
  );
};
