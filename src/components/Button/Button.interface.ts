import { ButtonProps } from "@mui/material";

export interface ButtonComponentProps extends Omit<ButtonProps, "size"> {
  ui?: "primary" | "outline";
  size?: "xl";
}
