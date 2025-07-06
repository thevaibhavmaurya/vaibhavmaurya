"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config/site";
import AnimatedDiv from "@/components/atoms/AnimatedDiv";

export default function HeroSection() {
  return (
    <section className="py-20 lg:py-32 container flex flex-col lg:flex-row items-center gap-12">
      <AnimatedDiv animation="slide-left" delay={0.2}>
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="relative aspect-square w-80 lg:w-[450px] rounded-2xl overflow-hidden bg-muted border-4 border-background shadow-2xl transform transition-all duration-500 hover:-rotate-3 hover:scale-105 hover:shadow-3xl hover:shadow-primary/20">
              <Image
                src="/images/profile.jpg"
                alt={siteConfig.author.name}
                fill
                className="object-cover transition-all duration-500 hover:brightness-110 hover:contrast-110"
                priority
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl transition-all duration-500 hover:w-24 hover:h-24 hover:bg-primary/30"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl transition-all duration-500 hover:w-28 hover:h-28 hover:bg-secondary/30"></div>
          </div>
        </div>
      </AnimatedDiv>
      <div className="space-y-8">
        <div className="space-y-4">
          <AnimatedDiv animation="slide-up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight transition-all duration-300 hover:scale-105 hover:tracking-wide cursor-default">
              Hi, I&apos;m{" "}
              <span className="gradient-text transition-all duration-300 hover:text-shadow-lg hover:scale-110 inline-block hover:rotate-1">
                {siteConfig.author.name}
              </span>
            </h1>
          </AnimatedDiv>

          <AnimatedDiv animation="slide-up" delay={0.3}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl transition-all duration-300 hover:text-foreground hover:scale-105 cursor-default">
              {siteConfig.description}
            </p>
          </AnimatedDiv>
        </div>

        <AnimatedDiv animation="slide-up" delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="group transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href={`mailto:${siteConfig.author.email}`}>
                <Mail className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </AnimatedDiv>

        <AnimatedDiv animation="fade-in" delay={0.7}>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 transition-all duration-300 hover:text-green-600 hover:scale-105 cursor-default">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse transition-all duration-300 hover:w-3 hover:h-3 hover:bg-green-400"></div>
              <span>Available for freelance</span>
            </div>
            <div className="flex items-center gap-2 transition-all duration-300 hover:text-foreground hover:scale-105 cursor-default">
              <FileText className="h-4 w-4 transition-transform hover:rotate-12" />
              <span>Based in {siteConfig.author.location}</span>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
