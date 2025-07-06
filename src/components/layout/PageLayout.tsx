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
    <div className="min-h-screen font-sans antialiased relative bg-gradient-to-tl from-transparent to-primary/10">
      <div
        className={cn(
          "fixed inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] opacity-50"
        )}
      />
      <div className="relative flex min-h-screen flex-col">
        <Header />

        <main className={cn("flex-1", className)}>{children}</main>

        <Footer />
      </div>
    </div>
  );
}
