import React, { useRef } from "react";
import classes from "./GradientOpacity.module.scss";
import { TextGradientOpacityProps } from "./GradientOpacity.interface";
import { useScroll } from "framer-motion";
import { GradientOpacityCharacters } from "./components/GradientOpacityCharacters/GradientOpacityCharacters";

export const TextGradientOpacity = ({ text }: TextGradientOpacityProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.45"],
  });

  const words = text.split(" ");

  const getCharactersRange = (
    word: string,
    wordIndex: number,
    characterIndex: number
  ): [number, number] => {
    const wordStart = wordIndex / words.length;
    const wordEnd = wordStart + 1 / words.length;

    const wordRange = [wordStart, wordEnd];

    const amount = wordRange[1] - wordRange[0];
    const step = amount / word.length;

    const start = wordRange[0] + step * characterIndex;
    const end = wordRange[0] + step * (characterIndex + 1);

    return [start, end];
  };

  return (
    <p ref={containerRef} className={classes.container}>
      {words.map((word, wordIndex) => {
        return (
          <div key={wordIndex} className={classes.word}>
            {word.split("").map((character, characterIndex) => (
              <GradientOpacityCharacters
                character={character}
                scrollYProgress={scrollYProgress}
                range={getCharactersRange(word, wordIndex, characterIndex)}
              />
            ))}
          </div>
        );
      })}
    </p>
  );
};
