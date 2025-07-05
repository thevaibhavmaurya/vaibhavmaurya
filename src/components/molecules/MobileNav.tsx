"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, socialLinks } from "@/lib/config/site";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  className?: string;
}

export default function MobileNav({ className }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className={cn("md:hidden", className)}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "h-9 w-9 relative transition-all duration-300",
          "hover:bg-accent hover:text-accent-foreground",
          "focus:bg-accent focus:text-accent-foreground",
          "active:scale-95",
          isOpen && "bg-accent text-accent-foreground"
        )}
        aria-label="Toggle navigation"
      >
        <div className="relative h-4 w-4">
          <span
            className={cn(
              "absolute block h-0.5 w-4 bg-current transition-all duration-300",
              "left-0 top-1",
              isOpen ? "rotate-45 top-2" : "rotate-0 top-1"
            )}
          />
          <span
            className={cn(
              "absolute block h-0.5 w-4 bg-current transition-all duration-300",
              "left-0 top-2",
              isOpen ? "opacity-0" : "opacity-100"
            )}
          />
          <span
            className={cn(
              "absolute block h-0.5 w-4 bg-current transition-all duration-300",
              "left-0 top-3",
              isOpen ? "-rotate-45 top-2" : "rotate-0 top-3"
            )}
          />
        </div>
      </Button>

      <div
        className={cn(
          "fixed inset-0 top-14 z-40 transition-all duration-300",
          isOpen
            ? "opacity-100 visible backdrop-blur-sm"
            : "opacity-0 invisible backdrop-blur-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={cn(
          "fixed left-0 w-full top-14 z-50 transition-all duration-300 ease-out",
          isOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-4 opacity-0 invisible"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95 border-b border-border/50" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="py-8">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "group flex items-center px-4 py-3 text-sm font-medium rounded-lg",
                    "transition-all duration-300 ease-out",
                    "hover:bg-accent hover:text-accent-foreground",
                    "focus:bg-accent focus:text-accent-foreground focus:outline-none",
                    "active:scale-[0.98]",
                    pathname === item.href
                      ? "text-foreground bg-accent/80 shadow-sm"
                      : "text-foreground/70 hover:text-foreground",
                    isOpen
                      ? "animate-in slide-in-from-top-4 fade-in"
                      : "animate-out slide-out-to-top-4 fade-out"
                  )}
                  style={{
                    animationDelay: isOpen ? `${index * 100}ms` : "0ms",
                    animationDuration: "400ms",
                    animationFillMode: "both",
                  }}
                >
                  <span className="relative">
                    {item.name}
                    {pathname === item.href && (
                      <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-4 bg-primary rounded-full" />
                    )}
                  </span>
                </Link>
              ))}
            </div>

            <div
              className={cn(
                "mt-8 pt-6 border-t border-border/30 space-y-4",
                "transition-all duration-500 ease-out",
                isOpen
                  ? "animate-in slide-in-from-bottom-4 fade-in"
                  : "animate-out slide-out-to-bottom-4 fade-out"
              )}
              style={{
                animationDelay: isOpen
                  ? `${navItems.length * 100 + 200}ms`
                  : "0ms",
                animationDuration: "400ms",
                animationFillMode: "both",
              }}
            >
              <div className="flex justify-center gap-2">
                {socialLinks.map((link, index) => {
                  const getIcon = (name: string) => {
                    switch (name.toLowerCase()) {
                      case "github":
                        return Github;
                      case "linkedin":
                        return Linkedin;
                      case "twitter":
                        return Twitter;
                      case "youtube":
                        return Youtube;
                      default:
                        return Github;
                    }
                  };

                  const Icon = getIcon(link.name);

                  return (
                    <Button
                      key={link.name}
                      variant="ghost"
                      size="icon"
                      asChild
                      className={cn(
                        "h-8 w-8 hover:bg-accent hover:text-accent-foreground transition-all duration-200",
                        "hover:scale-110 active:scale-95",
                        isOpen
                          ? "animate-in zoom-in-50 fade-in"
                          : "animate-out zoom-out-50 fade-out"
                      )}
                      style={{
                        animationDelay: isOpen
                          ? `${navItems.length * 100 + 300 + index * 50}ms`
                          : "0ms",
                        animationDuration: "300ms",
                        animationFillMode: "both",
                      }}
                    >
                      <Link
                        href={link.href!}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow on ${link.name}`}
                      >
                        <Icon className="h-4 w-4" />
                      </Link>
                    </Button>
                  );
                })}
              </div>

              <div className="text-center text-xs text-muted-foreground">
                <p className="flex items-center justify-center gap-1">
                  <span>© {new Date().getFullYear()} Vaibhav Maurya</span>
                </p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
