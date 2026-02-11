import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
  onClick?: () => void;
}

export const FloatingNavbar = ({
  navItems,
  className,
  logo,
  rightElement,
}: {
  navItems: NavItem[];
  className?: string;
  logo?: React.ReactNode;
  rightElement?: React.ReactNode;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    const direction = current - lastScrollY;
    setAtTop(current < 50);

    if (current < 50) {
      setVisible(true);
    } else if (direction < -5) {
      setVisible(true);
    } else if (direction > 5) {
      setVisible(false);
    }

    setLastScrollY(current);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed top-4 inset-x-0 mx-auto z-50 flex items-center justify-between px-6 py-3 max-w-5xl rounded-full",
          atTop
            ? "bg-transparent"
            : "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg border border-neutral-200/50 dark:border-neutral-700/50 shadow-lg",
          className
        )}
      >
        {logo && <div className="flex-shrink-0">{logo}</div>}

        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={(e) => {
                if (item.onClick) {
                  e.preventDefault();
                  item.onClick();
                }
              }}
              className={cn(
                "relative px-3 py-2 text-sm font-medium rounded-full transition-colors",
                "text-neutral-600 dark:text-neutral-300 hover:text-huella-600 dark:hover:text-huella-400",
                "hover:bg-huella-50 dark:hover:bg-huella-950/50"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {rightElement && <div className="flex-shrink-0">{rightElement}</div>}
      </motion.nav>
    </AnimatePresence>
  );
};
