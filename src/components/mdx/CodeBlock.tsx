import { ReactNode } from "react";
import CodeCopyButton from "../atoms/CodeCopyButton";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { extractCodeContent } from "@/lib/services/extract-code-content";

export function CodeBlock({
  children,
  className,
  isInline,
  ...props
}: {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}) {
  const codeContent = extractCodeContent(children);
  const language = className?.replace(/language-/, "") || "text";

  return (
    <div className="relative group">
      <SyntaxHighlighter
        language={language}
        showLineNumbers={!isInline}
        wrapLines={true}
        {...props}
      >
        {codeContent}
      </SyntaxHighlighter>
      <CodeCopyButton code={codeContent} />
    </div>
  );
}
