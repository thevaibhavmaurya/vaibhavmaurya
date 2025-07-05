"use client";

import Link from "next/link";
import { MessageCircle, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";
import MotionDiv from "@/components/atoms/MotionDiv";

interface FooterProps {
  className?: string;
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Resources", href: "/resources" },
];

const socialLinks = [
  { name: "GitHub", href: siteConfig.links.github },
  { name: "LinkedIn", href: siteConfig.links.linkedin },
  { name: "Twitter", href: siteConfig.links.twitter },
  { name: "YouTube", href: siteConfig.links.youtube },
];

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-muted/30 border-t", className)}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* CTA Section */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Want to hire me as a freelancer?
              </h3>
              <p className="text-muted-foreground">
                Let's discuss your project and bring your ideas to life.
              </p>
            </div>

            <div className="space-y-3">
              <Button asChild className="w-full group">
                <Link
                  href={`https://wa.me/${siteConfig.author.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat on WhatsApp
                </Link>
              </Button>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Drop your email and I'll get back to you:
                </p>
                <Button asChild variant="outline" className="w-full group">
                  <Link href={`mailto:${siteConfig.author.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    {siteConfig.author.email}
                  </Link>
                </Button>
              </div>
            </div>
          </MotionDiv>

          {/* Navigation Links */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </MotionDiv>

          {/* Social Links */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="space-y-3">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href ?? ""}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </MotionDiv>
        </div>

        <Separator className="my-8" />

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.author.name}. All rights
            reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using Next.js</span>
          </div>
        </MotionDiv>
      </div>
    </footer>
  );
}
