"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedDiv from "@/components/atoms/AnimatedDiv";

export default function YouTubeSection() {
  return (
    <section className="container py-20">
      <AnimatedDiv animation="slide-up" className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Latest Video
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Watch my latest tutorials and insights on web development
        </p>
      </AnimatedDiv>

      <div className="max-w-4xl mx-auto">
        <Card className="overflow-hidden border-0 shadow-lg py-0">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-muted flex items-center justify-center group cursor-pointer">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/gk6-lUzqLsw?si=OT3pAzU7zyKHs_TA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>

      <AnimatedDiv animation="fade-in" className="text-center mt-8">
        <Button asChild variant="outline" size="lg" className="group">
          <Link href="https://youtube.com/@thevaibhavmaurya" target="_blank">
            Visit YouTube Channel
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </AnimatedDiv>
    </section>
  );
}
