import AnimatedDiv from "../atoms/AnimatedDiv";

export default function PageTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <AnimatedDiv animation="slide-up" className="max-w-3xl mb-12">
      <h1 className="text-4xl lg:text-5xl font-bold pb-4 gradient-text">
        {title}
      </h1>
      <p className="text-xl text-muted-foreground">{description}</p>
    </AnimatedDiv>
  );
}
