"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { resources } from "@/lib/data/resources";
import { ResourceCategory } from "@/lib/types/resource";
import { SectionTitleDescription } from "../molecules/AnimatedTitleDescription";

const categoryNames: Record<ResourceCategory, string> = {
  tools: "Development Tools",
  learning: "Learning Resources",
  libraries: "Libraries & Frameworks",
  inspiration: "Design Inspiration",
  assets: "Assets & Media",
  other: "Other Resources",
};

export default function ResourcesGrid() {
  const [selectedCategory, setSelectedCategory] = useState<
    ResourceCategory | "all"
  >("all");

  const filteredResources =
    selectedCategory === "all"
      ? resources
      : resources.filter((resource) => resource.category === selectedCategory);

  const categories: (ResourceCategory | "all")[] = [
    "all",
    "tools",
    "learning",
    "libraries",
    "inspiration",
    "assets",
    "other",
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold gradient-text">
          Filter by Category
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category === "all"
                ? "All"
                : categoryNames[category as ResourceCategory]}
            </Button>
          ))}
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        Showing {filteredResources.length} resource
        {filteredResources.length !== 1 ? "s" : ""}
      </div>

      <div className="space-y-12">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="space-y-6">
            <SectionTitleDescription
              title={resource.title}
              description={resource.description}
              containerClassName="text-start mx-0"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resource.items.map((item, index) => (
                <Card
                  key={index}
                  className="group h-full floating-card  bg-card/50"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-lg gradient-text group-hover:text-primary transition-colors">
                          {item.name}
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          {item.free && (
                            <div className="px-2 py-1 text-xs rounded-full border-0 text-green-600 dark:text-green-400">
                              Free
                            </div>
                          )}
                          {item.rating && (
                            <div className="flex items-center gap-1 px-2 py-1 rounded-full border-0">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs text-foreground/80">
                                {item.rating}/5
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <CardDescription className="line-clamp-3 flex-1">
                      {item.description}
                    </CardDescription>

                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.slice(0, 3).map((tag) => (
                          <div
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full border-0 text-foreground/80"
                          >
                            {tag}
                          </div>
                        ))}
                        {item.tags.length > 3 && (
                          <div className="px-2 py-1 text-xs rounded-full border-0 text-muted-foreground">
                            +{item.tags.length - 3}
                          </div>
                        )}
                      </div>
                    )}

                    <Button
                      asChild
                      className="w-full border-0 hover:bg-primary/20"
                      size="sm"
                    >
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Resource
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No resources found in this category.
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => setSelectedCategory("all")}
          >
            Show All Resources
          </Button>
        </div>
      )}
    </div>
  );
}
