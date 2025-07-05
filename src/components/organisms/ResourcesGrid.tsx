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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { resources } from "@/lib/data/resources";
import { ResourceCategory } from "@/lib/types/resource";

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
      {/* Category Filter */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Filter by Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category === "all"
                ? "All"
                : categoryNames[category as ResourceCategory]}
            </Button>
          ))}
        </div>
      </div>

      {/* Resources Count */}
      <div className="text-sm text-muted-foreground">
        Showing {filteredResources.length} resource
        {filteredResources.length !== 1 ? "s" : ""}
      </div>

      {/* Resources Grid */}
      <div className="space-y-12">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">{resource.title}</h2>
              <p className="text-muted-foreground">{resource.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resource.items.map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {item.name}
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          {item.free && (
                            <Badge
                              variant="secondary"
                              className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            >
                              Free
                            </Badge>
                          )}
                          {item.rating && (
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs text-muted-foreground">
                                {item.rating}/5
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <CardDescription className="line-clamp-3">
                      {item.description}
                    </CardDescription>

                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <Button asChild className="w-full" size="sm">
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

      {/* No Results */}
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
