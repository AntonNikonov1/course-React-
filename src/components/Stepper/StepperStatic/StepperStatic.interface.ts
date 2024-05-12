import { StepperStaticItemProps } from "./components/StepperItem/StepperItem.interface";

export interface StepperStaticComponentProps {
  data: Omit<StepperStaticItemProps, "windowY">[];
}
