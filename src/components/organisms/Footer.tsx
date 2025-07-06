import Link from "next/link";
import { Heart, Mail, MapPin, Phone, Briefcase, Sparkles } from "lucide-react";
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
import Logo from "@/components/atoms/Logo";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";
import SubtleGradientLine from "../atoms/SubtleGradientLine";

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
    <footer
      className={cn(
        "relative overflow-hidden backdrop-blur-[1px] bg-muted/20",
        className
      )}
    >
      <SubtleGradientLine className="top-0" />
      <div className="container relative z-10">
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <Logo />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <span className="text-sm font-semibold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                      Available for Work
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-md text-base">
                    Passionate about creating exceptional digital experiences
                    with cutting-edge technologies. Let&apos;s collaborate on
                    your next innovative project.
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Get in Touch
                </h4>
                <div className="space-y-3">
                  <div className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <a
                      href={`mailto:${siteConfig.author.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {siteConfig.author.email}
                    </a>
                  </div>

                  {siteConfig.author.phone && (
                    <div className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <a
                        href={`tel:${siteConfig.author.phone}`}
                        className="hover:text-primary transition-colors"
                      >
                        {siteConfig.author.phone}
                      </a>
                    </div>
                  )}

                  {siteConfig.author.location && (
                    <div className="group flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <span>{siteConfig.author.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">
                Navigation
              </h3>
              <ul className="space-y-3">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300"
                      >
                        <div className="p-1.5 rounded-md bg-muted/50 group-hover:bg-primary/10 transition-colors">
                          <Icon className="h-4 w-4 group-hover:text-primary transition-colors" />
                        </div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Social & CTA */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Connect</h3>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Button
                        key={link.name}
                        variant="ghost"
                        size="icon"
                        asChild
                        className="h-12 w-12 rounded-xl border border-border/50 hover:border-primary/20 hover:bg-primary/10 hover:scale-110 transition-all duration-300 group"
                      >
                        <Link
                          href={link.href!}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Follow on ${link.name}`}
                        >
                          <Icon className="h-5 w-5 group-hover:text-primary transition-colors" />
                        </Link>
                      </Button>
                    );
                  })}
                </div>

                <div className="pt-2">
                  <Button
                    asChild
                    className="w-full group relative overflow-hidden"
                  >
                    <Link
                      href={`mailto:${siteConfig.author.email}?subject=Let's Collaborate!`}
                    >
                      <Briefcase className="h-4 w-4 mr-2 relative z-10" />
                      <span className="relative z-10">Start a Project</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50">
          <div className="py-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} {siteConfig.author.name}. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
