import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "text-2xl font-bold text-foreground hover:text-foreground/80 transition-colors",
        className
      )}
    >
      Vaibhav Maurya
    </Link>
  );
}
