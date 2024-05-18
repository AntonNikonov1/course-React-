import React from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SchoolIcon from "@mui/icons-material/School";
import { IconComponentProps } from "./Icon.interface";

export const EducationIcon = ({ type, className }: IconComponentProps) => {
  if (type === "outline") {
    return <SchoolOutlinedIcon className={className} />;
  }
  return <SchoolIcon className={className} />;
};
