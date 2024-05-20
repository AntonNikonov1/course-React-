import { ComponentPropsWithoutRef } from "react";

export interface AuthorCommentProps extends ComponentPropsWithoutRef<"div"> {
  author?: string;
  avatarUrl?: string;
  comment: string;
  rotate?: number;
}
