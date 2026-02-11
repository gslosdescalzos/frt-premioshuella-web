import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const wordsArray = words.split(" ");

  return (
    <div className={cn("font-bold", className)}>
      <div>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="inline-block mr-[0.25em]"
            initial={{ opacity: 0, filter: filter ? "blur(10px)" : "none" }}
            animate={{ opacity: 1, filter: filter ? "blur(0px)" : "none" }}
            transition={{ duration, delay: idx * 0.1 }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
};
