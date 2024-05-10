import React from "react";
import { CourseIntroText } from "./components/Text/Text";
import { CourseIntroVideo } from "./components/Video/Video";
import { Grid } from "@mui/material";

export const CourseIntro = () => {
  return (
    <Grid container columns={3} columnSpacing={2}>
      <CourseIntroText />
      <CourseIntroVideo />
    </Grid>
  );
};
