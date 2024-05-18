import { ComponentPropsWithoutRef } from "react";

export interface IconComponentProps
  extends Omit<
    ComponentPropsWithoutRef<"svg">,
    "color" | "shapeRendering" | "fontSize"
  > {
  type?: "outline";
}
