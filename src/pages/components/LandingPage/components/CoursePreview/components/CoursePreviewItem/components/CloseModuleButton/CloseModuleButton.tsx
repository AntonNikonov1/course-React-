import React from "react";
import classes from "./CloseModuleButton.module.scss";
import { ButtonComponent } from "components/Button/Button";

export const CloseModuleButton = () => {
  return (
    <ButtonComponent ui="outline" className={classes.button}>
      Close Module
    </ButtonComponent>
  );
};
