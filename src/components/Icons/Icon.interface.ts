import { ComponentPropsWithoutRef } from "react";

export interface IconComponentProps extends ComponentPropsWithoutRef<"svg"> {
  type?: "outline";
}
