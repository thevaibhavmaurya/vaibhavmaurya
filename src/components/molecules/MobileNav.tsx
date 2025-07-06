"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Twitter, Youtube, Menu, X } from "lucide-react";
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
          "h-10 w-10 relative transition-all duration-300 rounded-full",
          "hover:bg-accent/50 hover:text-accent-foreground",
          "focus:bg-accent/50 focus:text-accent-foreground",
          "active:scale-95 border border-transparent",
          "hover:border-primary/20 hover:shadow-lg",
          isOpen && "bg-accent/50 text-accent-foreground border-primary/20"
        )}
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <X className="h-5 w-5 transition-all duration-300" />
        ) : (
          <Menu className="h-5 w-5 transition-all duration-300" />
        )}
      </Button>

      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 transition-all duration-300",
          isOpen
            ? "opacity-100 visible backdrop-blur-md bg-black/20"
            : "opacity-0 invisible backdrop-blur-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Navigation Panel */}
      <div
        className={cn(
          "fixed left-0 w-full top-16 z-50 transition-all bg-card duration-500 ease-out",
          isOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-8 opacity-0 invisible"
        )}
      >
        <div className="border-b border-white/10 dark:border-white/5 shadow-2xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="py-8">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "group flex items-center px-6 py-4 text-base font-medium rounded-xl",
                      "transition-all duration-300 ease-out relative overflow-hidden",
                      "hover:bg-white/10 dark:hover:bg-white/5",
                      "focus:bg-white/10 dark:focus:bg-white/5 focus:outline-none",
                      "active:scale-[0.98] border border-transparent",
                      "hover:border-primary/20 hover:shadow-lg",
                      pathname === item.href
                        ? "text-primary bg-primary/10 border-primary/20 shadow-md"
                        : "text-foreground/80 hover:text-foreground",
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
                    <span className="relative z-10 flex items-center gap-3">
                      {item.name}
                      {pathname === item.href && (
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      )}
                    </span>
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                ))}
              </div>

              {/* Social Links Section */}
              <div
                className={cn(
                  "mt-8 pt-8 border-t border-white/10 dark:border-white/5 space-y-6",
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
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground/70 mb-4">
                    Connect with me
                  </p>
                  <div className="flex justify-center gap-3">
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
                            "h-12 w-12 rounded-full border border-white/10 dark:border-white/5",
                            "hover:bg-white/10 dark:hover:bg-white/5 hover:border-primary/20",
                            "hover:shadow-lg transition-all duration-300",
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
                            <Icon className="h-5 w-5" />
                          </Link>
                        </Button>
                      );
                    })}
                  </div>
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
    </div>
  );
}
