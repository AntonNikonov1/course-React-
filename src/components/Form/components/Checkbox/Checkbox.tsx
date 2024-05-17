import React from "react";
import classes from "./Checkbox.module.scss";
import { CheckboxComponentProps } from "./Checkbox.interface";
import { Checkbox } from "@mui/material";

export const CheckboxComponent = ({
  value,
  onChange,
  ...restProps
}: CheckboxComponentProps) => {
  return (
    <Checkbox
      className={classes.checkbox}
      checked={value}
      onChange={(event) => onChange(event.currentTarget.checked)}
      style={{ color: "var(--inversion)" }}
      {...restProps}
    />
  );
};
