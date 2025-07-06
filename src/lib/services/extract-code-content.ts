import { ReactNode } from "react";

export function extractCodeContent(children: ReactNode): string {
  if (typeof children === "string") {
    return children;
  }

  if (Array.isArray(children)) {
    return children.map((child) => extractCodeContent(child)).join("");
  }

  if (
    typeof children === "object" &&
    children !== null &&
    "props" in children
  ) {
    const element = children as any;
    if (element.props && element.props.children) {
      return extractCodeContent(element.props.children);
    }
  }

  return "";
}
