import { cn } from "@/lib/utils";
import AnimatedDiv from "../atoms/AnimatedDiv";

export default function TitleDescription({
  title,
  description,
  as: Component = "h1",
  containerClassName,
  titleClassName,
  descriptionClassName,
}: {
  title: string;
  description: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <AnimatedDiv
      animation="slide-up"
      className={cn("mb-12 max-w-3xl", containerClassName)}
    >
      <Component className={cn("font-jost gradient-text pb-6", titleClassName)}>
        {title}
      </Component>
      <p className={cn("text-muted-foreground", descriptionClassName)}>
        {description}
      </p>
    </AnimatedDiv>
  );
}

export function PageTitleDescription({
  title,
  description,
  containerClassName,
  titleClassName,
  descriptionClassName,
}: {
  title: string;
  description: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <TitleDescription
      title={title}
      description={description}
      as="h1"
      containerClassName={cn(containerClassName)}
      titleClassName={cn(
        "text-4xl lg:text-5xl font-jost font-bold",
        titleClassName
      )}
      descriptionClassName={cn("text-xl", descriptionClassName)}
    />
  );
}

export function SectionTitleDescription({
  title,
  description,
  containerClassName,
  titleClassName,
  descriptionClassName,
}: {
  title: string;
  description: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <TitleDescription
      title={title}
      description={description}
      as="h2"
      containerClassName={cn("text-center mx-auto", containerClassName)}
      titleClassName={cn("text-3xl md:text-4xl font-medium", titleClassName)}
      descriptionClassName={cn("text-lg", descriptionClassName)}
    />
  );
}
