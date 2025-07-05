import { ReactNode } from "react";

interface MDXWrapperProps {
  children: ReactNode;
}

export default function MDXWrapper({ children }: MDXWrapperProps) {
  return (
    <div className="mdx-wrapper">
      <div className="mdx-content max-w-none">{children}</div>
    </div>
  );
}
