import { cn } from "@/lib/utils";

interface SubtleGradientLineProps {
  className?: string;
}

export default function SubtleGradientLine({
  className,
}: SubtleGradientLineProps) {
  return (
    <div
      className={cn(
        "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent",
        className
      )}
    />
  );
}
