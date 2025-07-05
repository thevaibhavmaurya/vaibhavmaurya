import { ReactNode } from "react";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <div className="relative flex min-h-screen flex-col">
        <Header />

        <main className={cn("flex-1", className)}>{children}</main>

        <Footer />
      </div>
    </div>
  );
}
