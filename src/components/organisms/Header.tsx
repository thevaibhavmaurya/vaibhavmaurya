import Logo from "@/components/atoms/Logo";
import Navigation from "@/components/molecules/Navigation";
import MobileNav from "@/components/molecules/MobileNav";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Logo />

          <div className="flex items-center space-x-4">
            <Navigation />
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
