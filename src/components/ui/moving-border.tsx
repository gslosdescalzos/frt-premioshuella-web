import React from "react";
import { cn } from "@/lib/utils";

export const MovingBorderButton = ({
  children,
  borderRadius = "1.5rem",
  duration = 3000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  ...otherProps
}: {
  children: React.ReactNode;
  borderRadius?: string;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}) => {
  return (
    <Component
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-huella-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900",
        containerClassName
      )}
      style={{ borderRadius }}
      {...otherProps}
    >
      <span
        className={cn(
          "absolute inset-[-1000%] animate-[spin_3s_linear_infinite]",
          "bg-[conic-gradient(from_90deg_at_50%_50%,#c62519_0%,#009aa8_50%,#ffaa04_100%)]",
          borderClassName
        )}
      />
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-8 py-2 text-sm font-semibold backdrop-blur-3xl",
          "bg-white dark:bg-neutral-950",
          "text-neutral-900 dark:text-neutral-100",
          "hover:bg-huella-50 dark:hover:bg-huella-950/50 transition-colors",
          className
        )}
        style={{ borderRadius }}
      >
        {children}
      </span>
    </Component>
  );
};
