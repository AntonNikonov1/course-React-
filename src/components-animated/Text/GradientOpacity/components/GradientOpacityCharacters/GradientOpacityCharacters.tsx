import React from "react";
import classes from "../../GradientOpacity.module.scss";
import { motion } from "framer-motion";
import { GradientOpacityCharactersProps } from "./GradientOpacityCharacters.interface";
import { useTransform } from "framer-motion";

export const GradientOpacityCharacters = ({
  character,
  range,
  scrollYProgress,
}: GradientOpacityCharactersProps) => {
  const opacity = useTransform(scrollYProgress, range, [0, 1]);

  return (
    <span className={classes.characters}>
      <span className={classes.characters_shadow}>{character}</span>
      <motion.span style={{ opacity }}>{character}</motion.span>
    </span>
  );
};
