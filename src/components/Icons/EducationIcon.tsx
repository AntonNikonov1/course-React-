import React from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { IconComponentProps } from "./Icon.interface";

export const EducationIcon = ({ type, className }: IconComponentProps) => {
  return <SchoolOutlinedIcon className={className} />;
};
