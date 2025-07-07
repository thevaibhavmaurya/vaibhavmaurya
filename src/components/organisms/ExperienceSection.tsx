import { Building, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionTitleDescription } from "../molecules/AnimatedTitleDescription";

const experiences = [
  {
    id: 1,
    company: "Kyte Research",
    position: "Software Engineer",
    duration: "Feb 2025 - Present",
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
      "WordPress",
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
    ],
    type: "Full-time",
  },
  {
    id: 3,
    company: "Aara Technologies",
    position: "React Js Developer",
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
    type: "Internship",
  },
];

export default function ExperienceSection() {
  return (
    <section className="container py-20">
      <SectionTitleDescription
        title="Work Experience"
        description="My professional journey in software development and web technologies"
      />

      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {experiences.map((experience) => (
            <Card key={experience.id} className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {experience.position}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="h-4 w-4" />
                        <span className="font-medium text-foreground">
                          {experience.company}
                        </span>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {experience.type}
                    </Badge>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
