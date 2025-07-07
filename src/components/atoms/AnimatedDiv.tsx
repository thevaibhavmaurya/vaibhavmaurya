"use client";

import { HTMLAttributes, forwardRef, useEffect, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedDivProps extends Omit<HTMLMotionProps<"div">, "children"> {
  animation?: "fade-in" | "slide-up" | "slide-left" | "slide-right" | "none";
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
  threshold?: number;
  children?: React.ReactNode;
}

const AnimatedDiv = forwardRef<HTMLDivElement, AnimatedDivProps>(
  (
    {
      animation = "fade-in",
      delay = 0,
      duration = 0.6,
      triggerOnce = true,
      threshold = 0.1,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 100);

      return () => clearTimeout(timer);
    }, []);

    const getAnimationVariants = () => {
      switch (animation) {
        case "fade-in":
          return {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          };
        case "slide-up":
          return {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          };
        case "slide-left":
          return {
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 },
          };
        case "slide-right":
          return {
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          };
        case "none":
          return {
            hidden: {},
            visible: {},
          };
        default:
          return {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          };
      }
    };

    const variants = getAnimationVariants();

    if (animation === "none") {
      return (
        <div
          ref={ref}
          className={className}
          {...(props as HTMLAttributes<HTMLDivElement>)}
        >
          {children}
        </div>
      );
    }

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{
          once: triggerOnce,
          amount: threshold,
        }}
        transition={{
          duration,
          delay,
          ease: "easeOut",
        }}
        variants={variants}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

AnimatedDiv.displayName = "AnimatedDiv";

export default AnimatedDiv;
