"use client";

import Link from "next/link";
import {
  Mail,
  Heart,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  ArrowUpRight,
  Code,
  Briefcase,
  BookOpen,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";
import MotionDiv from "@/components/atoms/MotionDiv";

interface FooterProps {
  className?: string;
}

const navigation = [
  { name: "Home", href: "/", icon: Code },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Resources", href: "/resources", icon: Wrench },
];

const socialLinks = [
  { name: "GitHub", href: siteConfig.links.github, icon: Github },
  { name: "LinkedIn", href: siteConfig.links.linkedin, icon: Linkedin },
  { name: "Twitter", href: siteConfig.links.twitter, icon: Twitter },
  { name: "YouTube", href: siteConfig.links.youtube, icon: Youtube },
];

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "relative bg-gradient-to-br from-background via-muted/30 to-background border-t border-border/40",
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

      <div className="container relative">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand & CTA Section */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Freelance Focus */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Open to Work
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Available for freelance projects and collaborations.
                  Specializing in modern web development and digital solutions.
                </p>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  Want to hire me as a freelancer?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Let's discuss your project and bring your ideas to life.
                </p>
                <Button
                  asChild
                  className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
                >
                  <Link href={`mailto:${siteConfig.author.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Drop me an email
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </Button>
              </div>
            </MotionDiv>

            {/* Navigation */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-6"
            >
              <h3 className="text-lg font-semibold">Navigation</h3>
              <ul className="space-y-4">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-200"
                      >
                        <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                        <span className="group-hover:translate-x-1 transition-transform">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </MotionDiv>

            {/* Social Links */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-6"
            >
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href ?? ""}
                      target="_blank"
                      className="group flex items-center gap-3 p-3 rounded-lg border border-border/40 hover:border-primary/20 hover:bg-primary/5 transition-all duration-200"
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </MotionDiv>
          </div>
        </div>

        {/* Separator with gradient */}
        <div className="relative">
          <Separator className="bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Bottom Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="py-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.author.name}. All rights
              reserved.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Crafted with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>using Next.js & TypeScript</span>
            </div>
          </div>
        </MotionDiv>
      </div>
    </footer>
  );
}
