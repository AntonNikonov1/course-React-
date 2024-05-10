import { ButtonProps } from "@mui/material";

export interface ButtonComponentProps extends Omit<ButtonProps, "size"> {
  ui?: "primary";
  size?: "xl";
}
