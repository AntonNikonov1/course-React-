import React from "react";
import classes from "./CoursePriceItem.module.scss";
import { ButtonComponent } from "components/Button/Button";
import { CoursePriceItemProps } from "./CoursePriceItem.interface";
import classNames from "classnames";

export const CoursePriceItem = ({ type }: CoursePriceItemProps) => {
  return (
    <div style={{ position: "relative" }}>
      {type === "main" && <p className={classes.recommended}>Recommended</p>}

      <div
        className={classNames(
          classes.container,
          type && classes[`container_${type}`]
        )}
      >
        <h3 className={classes.price_name}>Spark</h3>
        <p className={classes.price}>$296</p>

        <div className={classes.advantage_container}>
          <p className={classes.advantage}>Моментальний доступ</p>
          <p className={classes.advantage}>
            Індивідуальне навчання у своєму темпі та пожиттєвий доступ до
            програми та всіх її оновлень
          </p>
          <p className={classes.advantage}>
            Пожиттєвий доступ до приватного клубу UX/UI з 0 з учасниками, які
            вже заробляють від $1К/міс. до $10К/міс.
          </p>
          <p className={classes.advantage}>
            Деталізоване продуктове портфоліо, навички продажу та презентації
            себе та своїх рішень
          </p>
          <p className={classes.advantage}>
            Регулярні щомісячні клубні зустрічі з Артуром, QA сесії, запрошені
            гості. Пожиттєвий доступ до всіх подій
          </p>
          <p className={classes.advantage}>
            Партнерська програма, промокоди, бонуси та пріоритетна черга на всі
            нові проєкти клубу та Артура
          </p>
          <p className={classes.advantage}>
            100% гарантія повернення коштів протягом двох тижнів
          </p>
        </div>

        <ButtonComponent
          className={classNames(
            type === "main" && "pulse_button",
            classes.action_button
          )}
        >
          Invest in Your Future
        </ButtonComponent>
      </div>
    </div>
  );
};
