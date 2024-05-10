import React from "react";
import classes from "./Button.module.scss";
import classNames from "classnames";
import { ButtonComponentProps } from "./Button.interface";
import { Button } from "@mui/material";

export const ButtonComponent = ({
  ui,
  size = "xl",
  className,
  ...restButtonProps
}: ButtonComponentProps) => {
  return (
    <Button
      className={classNames(
        className,
        classes.button,
        classes[size],
        ui && classes[ui]
      )}
      {...restButtonProps}
    />
  );
};
