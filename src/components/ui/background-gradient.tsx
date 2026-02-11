import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
  };

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? { duration: 5, repeat: Infinity, repeatType: "reverse" }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-2xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#22c55e,transparent),radial-gradient(circle_farthest-side_at_100%_0,#f59e0b,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#16a34a,transparent),radial-gradient(circle_farthest-side_at_0_0,#eab308,#14532d)]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? { duration: 5, repeat: Infinity, repeatType: "reverse" }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-2xl z-[1]",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#22c55e,transparent),radial-gradient(circle_farthest-side_at_100%_0,#f59e0b,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#16a34a,transparent),radial-gradient(circle_farthest-side_at_0_0,#eab308,#14532d)]"
        )}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
