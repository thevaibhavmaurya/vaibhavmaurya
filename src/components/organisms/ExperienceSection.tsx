"use client";

import { Building, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MotionDiv from "@/components/atoms/MotionDiv";

const experiences = [
  {
    id: 1,
    company: "Kyte",
    position: "Software Engineer",
    duration: "Fab 2025 - Present",
    location: "Remote",
    description:
      "Building AirLyft.One, a comprehensive Web3 growth hacking platform that solves blockchain marketing challenges. Developing features for bot-resistant campaigns, dynamic rewards distribution, smart contract integration, and AI-powered spam protection. Created seamless user onboarding experience and migrated from SQL to GraphQL architecture for better scalability and performance.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "NestJS",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Node.js",
    ],
    type: "Full-time",
  },
  {
    id: 2,
    company: "Digital Mart Lab",
    position: "Wordpress Developer",
    duration: "Sep 2024 - Jan 2025",
    location: "Lucknow, India",
    description:
      "Developed and maintained multiple client projects using WordPress and PHP, handling both frontend and backend development. Led the development of CatalogueWala.com, a subscription-based e-commerce platform enabling users to create and manage digital catalogues. Implemented custom themes, plugins, and database optimization for enhanced performance and user experience.",
    technologies: [
      "Wordpress",
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJs",
      "NodeJs",
      "MySQL",
      "hPanel",
      "cPanel",
    ],
    type: "Full-time",
  },
  {
    id: 3,
    company: "Aara Technologies",
    position: "React Js Developer Intern",
    duration: "Jun 2024 - Aug 2024",
    location: "Lucknow, India",
    description:
      "Developed ceawaup.com, a comprehensive web application for architects and construction professionals. Contributed to B2B and B2C marketplace projects similar to IndiaMart and TradeIndia, focusing on user interface development and API integration. Enhanced BharatERP system by debugging existing features and implementing new functionalities to improve business process management.",
    technologies: [
      "React",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Sass",
      "Material UI",
      "Tailwind CSS",
      "ReactQuery",
    ],
    type: "Full-time",
  },
];

export default function ExperienceSection() {
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
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in software development and the companies I've worked
            with
          </p>
        </MotionDiv>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <MotionDiv
                  key={experience.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                  {/* Content */}
                  <div className="ml-20">
                    <Card className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{experience.duration}</span>
                              <Badge variant="outline" className="ml-2">
                                {experience.type}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">
                              {experience.position}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Building className="h-4 w-4" />
                                <span>{experience.company}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{experience.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {experience.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
