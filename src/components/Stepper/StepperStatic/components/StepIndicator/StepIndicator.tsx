import classes from "./StepIndicator.module.scss";
import { motion } from "framer-motion";
import classNames from "classnames";
import { StepperStaticIndicatorProps } from "./StepIndicator.interface";
import { useStepIndicatorAnimation } from "./hooks/use-animation";

export const StepperStaticIndicator = ({
  icon,
}: StepperStaticIndicatorProps) => {
  const { containerRef, height, background, color } =
    useStepIndicatorAnimation();

  return (
    <motion.div ref={containerRef} className={classes.container}>
      <motion.p className={classes.indicator} style={{ background, color }}>
        {icon}
      </motion.p>
      <div className={classNames(classes.divider_common, classes.divider)}>
        <motion.div
          className={classNames(classes.divider_common, classes.divider_fill)}
          style={{ height }}
        />
      </div>
    </motion.div>
  );
};
