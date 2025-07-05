"use client";

import Link from "next/link";
import { ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MotionDiv from "@/components/atoms/MotionDiv";

export default function YouTubeSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Latest Video
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch my latest tutorials and insights on web development
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-muted flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Building Modern Web Applications
                  </h3>
                  <p className="text-muted-foreground">
                    Learn how to create scalable and performant web applications
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="https://youtube.com/@vaibhavmaurya" target="_blank">
              Visit YouTube Channel
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </MotionDiv>
      </div>
    </section>
  );
}
