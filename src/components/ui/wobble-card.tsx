import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - left - width / 2) / width;
    const y = (event.clientY - top - height / 2) / height;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x * 5}px, ${mousePosition.y * 5}px, 0) scale3d(1.02, 1.02, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
      }}
      className={cn(
        "relative overflow-hidden rounded-2xl",
        containerClassName
      )}
    >
      <div
        className="relative h-full"
        style={{
          transform: isHovering
            ? `translate3d(${-mousePosition.x * 10}px, ${-mousePosition.y * 10}px, 0)`
            : "translate3d(0px, 0px, 0)",
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className={cn("relative h-full p-8", className)}>{children}</div>
      </div>
    </motion.div>
  );
};
