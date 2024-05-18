import React from "react";
import { IconComponentProps } from "./Icon.interface";
import { LibraryBooks } from "@mui/icons-material";

export const BooksIcon = ({ className }: IconComponentProps) => {
  return <LibraryBooks className={className} />;
};
