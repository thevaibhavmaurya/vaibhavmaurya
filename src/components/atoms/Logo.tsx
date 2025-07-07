import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <h1
      className={cn(
        "text-2xl font-jost font-semibold gradient-text",
        className
      )}
    >
      Vabihav Maurya.
    </h1>
  );
}
