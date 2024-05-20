import React from "react";
import classes from "./CoursePriceList.module.scss";
import { CoursePriceItem } from "./components/CoursePriceItem/CoursePriceItem";
import { CoursePriceListTitle } from "./components/Title/Title";
import { CoursePriceListDescription } from "./components/Description/Description";

export const CoursePriceList = () => {
  return (
    <section className={classes.section}>
      <CoursePriceListTitle />
      <CoursePriceListDescription />

      <div style={{ display: "flex", gap: "20px" }}>
        <CoursePriceItem />
        <CoursePriceItem type="main" />
        <CoursePriceItem />
      </div>
    </section>
  );
};
