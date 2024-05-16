import React, { cloneElement, useRef } from "react";
import classes from "./CourseCustomerFitItem.module.scss";
import { motion } from "framer-motion";
import { CourseCustomerFitItemProps } from "./CourseCustomerFitItem.props";
import { TextGradientOpacity } from "components-animated/Text/GradientOpacity/GradientOpacity";
import { useScroll, useTransform } from "framer-motion";

export const CourseCustomerFitItem = ({
  icon,
  title,
  description,
}: CourseCustomerFitItemProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={containerRef}
      className={classes.container}
      style={{ scale, opacity }}
    >
      {cloneElement(icon, { className: classes.icon })}

      <p className="highlighted_text">{title}</p>
      <p className={classes.description}>
        <TextGradientOpacity text={description} />
      </p>
    </motion.div>
  );
};
