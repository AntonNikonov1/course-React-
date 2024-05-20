import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SchoolIcon from "@mui/icons-material/School";
import { IconComponentProps } from "./Icon.interface";

export const EducationIcon = ({ type, ...restProps }: IconComponentProps) => {
  if (type === "outline") {
    return <SchoolOutlinedIcon {...restProps} />;
  }
  return <SchoolIcon {...restProps} />;
};
