import { IconComponentProps } from "./Icon.interface";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const ArrowTopIcon = ({
  type,

  ...rest
}: IconComponentProps) => {
  return <KeyboardArrowUpIcon {...rest} fontSize="large" />;
};
