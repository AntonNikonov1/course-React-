import { CSSProperties } from "react";

export interface CheckboxComponentProps {
  value: boolean;
  onChange: (value: boolean) => void;
  className?: string;
  style?: CSSProperties;
}
