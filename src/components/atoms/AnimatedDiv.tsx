"use client";

import { HTMLAttributes, forwardRef, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedDivProps extends HTMLAttributes<HTMLDivElement> {
  animation?: "fade-in" | "slide-up" | "slide-left" | "slide-right" | "none";
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
  threshold?: number;
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
    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const element = elementRef.current;
      if (!element || animation === "none") return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
            setTimeout(() => {
              setIsVisible(true);
              if (triggerOnce) setHasTriggered(true);
            }, delay * 1000);
          } else if (!triggerOnce && !entry.isIntersecting) {
            setIsVisible(false);
          }
        },
        {
          threshold,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      observer.observe(element);
      return () => observer.disconnect();
    }, [delay, triggerOnce, hasTriggered, threshold, animation]);

    const getAnimationClasses = () => {
      if (animation === "none") return "";

      const baseClasses = "transition-all ease-out";
      const durationClass = `duration-[${Math.floor(duration * 1000)}ms]`;

      switch (animation) {
        case "fade-in":
          return cn(
            baseClasses,
            durationClass,
            isVisible ? "opacity-100" : "opacity-0"
          );
        case "slide-up":
          return cn(
            baseClasses,
            durationClass,
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          );
        case "slide-left":
          return cn(
            baseClasses,
            durationClass,
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          );
        case "slide-right":
          return cn(
            baseClasses,
            durationClass,
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          );
        default:
          return baseClasses;
      }
    };

    return (
      <div
        ref={(node) => {
          elementRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn(getAnimationClasses(), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AnimatedDiv.displayName = "AnimatedDiv";

export default AnimatedDiv;
