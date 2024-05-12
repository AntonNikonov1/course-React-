import { StepProps } from "@mui/material";
import { ReactElement, ReactNode } from "react";

export interface StepperStaticItemProps extends StepProps {
  name: ReactNode;
  description: ReactNode;
  icon: ReactElement;
}
