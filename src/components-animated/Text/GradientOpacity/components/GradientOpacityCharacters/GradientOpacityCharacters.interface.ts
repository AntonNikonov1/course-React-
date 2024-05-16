import { MotionValue } from "framer-motion";

export interface GradientOpacityCharactersProps {
  character: string;
  range: number[];
  scrollYProgress: MotionValue<number>;
}
