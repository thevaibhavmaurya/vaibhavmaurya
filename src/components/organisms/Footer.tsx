import Link from "next/link";
import { Heart, Mail, MapPin, Phone, Briefcase } from "lucide-react";
import {
  Home,
  User,
  FileText,
  FolderOpen,
  Github,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/atoms/Logo";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/#about", icon: User },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Resources", href: "/resources", icon: FileText },
];

const socialLinks = [
  { name: "GitHub", href: siteConfig.links.github, icon: Github },
  { name: "LinkedIn", href: siteConfig.links.linkedin, icon: Linkedin },
  { name: "Twitter", href: siteConfig.links.twitter, icon: Twitter },
  { name: "YouTube", href: siteConfig.links.youtube, icon: Youtube },
];

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("border-t bg-background", className)}>
      <div className="container">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <Logo />
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      Open to Work
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    Available for freelance projects and collaborations.
                    Let&apos;s build something amazing together with
                    cutting-edge technologies and innovative solutions.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground">
                  Let&apos;s Connect
                </h4>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <a
                    href={`mailto:${siteConfig.author.email}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {siteConfig.author.email}
                  </a>
                </div>

                {siteConfig.author.phone && (
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <a
                      href={`tel:${siteConfig.author.phone}`}
                      className="hover:text-foreground transition-colors"
                    >
                      {siteConfig.author.phone}
                    </a>
                  </div>
                )}

                {siteConfig.author.location && (
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{siteConfig.author.location}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
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
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Button
                        key={link.name}
                        variant="ghost"
                        size="sm"
                        asChild
                        className="hover:bg-muted/50 transition-colors"
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

                <div className="pt-4">
                  <Button asChild className="w-full">
                    <Link
                      href={`mailto:${siteConfig.author.email}?subject=Let's Collaborate!`}
                    >
                      <Briefcase className="h-4 w-4 mr-2" />
                      Start a Project
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.author.name}. All rights
              reserved.
            </p>

            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <span>Crafted with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>using Next.js & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
