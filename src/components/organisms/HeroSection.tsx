"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config/site";
import AnimatedDiv from "@/components/atoms/AnimatedDiv";

export default function HeroSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted/30 container flex flex-col lg:flex-row items-center gap-12">
      <AnimatedDiv animation="slide-left" delay={0.2}>
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-muted border-4 border-background shadow-2xl">
              <Image
                src="https://vaibhavmaurya.vercel.app/_next/image?url=%2Fassets%2Fvaibhav.png&w=640&q=75"
                alt={siteConfig.author.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </AnimatedDiv>
      <div className="space-y-8">
        <div className="space-y-4">
          <AnimatedDiv animation="slide-up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I&apos;m{" "}
              <span className="text-primary">{siteConfig.author.name}</span>
            </h1>
          </AnimatedDiv>

          <AnimatedDiv animation="slide-up" delay={0.3}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {siteConfig.description}
            </p>
          </AnimatedDiv>
        </div>

        <AnimatedDiv animation="slide-up" delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="group">
              <Link href={`mailto:${siteConfig.author.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </AnimatedDiv>

        <AnimatedDiv animation="fade-in" delay={0.7}>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for freelance</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Based in {siteConfig.author.location}</span>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
