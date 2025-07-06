import Logo from "@/components/atoms/Logo";
import Navigation from "@/components/molecules/Navigation";
import MobileNav from "@/components/molecules/MobileNav";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import { cn } from "@/lib/utils";
import SubtleGradientLine from "../atoms/SubtleGradientLine";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-white/10 dark:border-white/5 backdrop-blur-sm",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="flex items-center space-x-6">
            <Navigation />
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
      <SubtleGradientLine />
    </header>
  );
}
