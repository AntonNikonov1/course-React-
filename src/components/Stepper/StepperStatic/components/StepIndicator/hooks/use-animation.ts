import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export const useStepIndicatorAnimation = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end", "start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);
  const color = useTransform(scrollYProgress, [0, 0.1], ["#0a0a0a", "#eaece4"]);
  const background = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["#eaece4", "#4a7cdd"]
  );

  return {
    containerRef,
    height,
    background,
    color,
  };
};
