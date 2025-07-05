import { table } from "console";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

function MDXWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mdx-wrapper">
      <div className="mdx-content max-w-none">{children}</div>
    </div>
  );
}

const MdxComponents: MDXComponents = {
  wrapper: MDXWrapper,

  h1: ({ children, ...props }) => (
    <h1
      className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 mt-8 scroll-mt-24 text-foreground"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4 mt-8 scroll-mt-24 text-foreground"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-4 mt-6 scroll-mt-24 text-foreground"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4
      className="text-xl md:text-2xl font-semibold tracking-tight leading-tight mb-3 mt-6 scroll-mt-24 text-foreground"
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({ children, ...props }) => (
    <h5
      className="text-lg md:text-xl font-semibold tracking-tight leading-tight mb-3 mt-4 scroll-mt-24 text-foreground"
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({ children, ...props }) => (
    <h6
      className="text-base md:text-lg font-semibold tracking-tight leading-tight mb-2 mt-4 scroll-mt-24 text-foreground"
      {...props}
    >
      {children}
    </h6>
  ),

  p: ({ children, ...props }) => (
    <p
      className="text-base md:text-lg text-muted-foreground leading-7 mb-6 [&:not(:first-child)]:mt-6"
      {...props}
    >
      {children}
    </p>
  ),

  a: ({ children, href, ...props }) => {
    const isExternal = href?.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          className="text-primary font-medium hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href || "#"}
        className="text-primary font-medium hover:underline"
        {...props}
      >
        {children}
      </Link>
    );
  },

  ul: ({ children, ...props }) => (
    <ul className="my-6 ml-6 space-y-2 list-disc [&>li]:mt-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="my-6 ml-6 space-y-2 list-decimal [&>li]:mt-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="text-muted-foreground leading-7" {...props}>
      {children}
    </li>
  ),

  code: ({ children, className, ...props }) => {
    const isInline = !className;

    if (isInline) {
      return (
        <code
          className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground"
          {...props}
        >
          {children}
        </code>
      );
    }

    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },

  pre: ({ children, ...props }) => (
    <pre
      className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-slate-950 p-4 text-sm text-white"
      {...props}
    >
      {children}
    </pre>
  ),

  blockquote: ({ children, ...props }) => (
    <blockquote
      className="mt-6 border-l-4 border-primary pl-6 italic text-muted-foreground"
      {...props}
    >
      {children}
    </blockquote>
  ),

  img: ({ alt, src, ...props }) => {
    if (!src) return null;

    return (
      <Image
        className="rounded-lg shadow-md my-6 w-full h-auto"
        alt={alt || ""}
        src={src}
        width={800}
        height={600}
        sizes="(max-width: 768px) 100vw, 800px"
        style={{ width: "100%", height: "auto" }}
        {...props}
      />
    );
  },

  table: ({ children, ...props }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full border-collapse border border-border" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-muted" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }) => <tbody {...props}>{children}</tbody>,
  tr: ({ children, ...props }) => (
    <tr className="border-b border-border" {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }) => (
    <th
      className="border border-border px-4 py-2 text-left font-semibold text-foreground"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td
      className="border border-border px-4 py-2 text-muted-foreground"
      {...props}
    >
      {children}
    </td>
  ),

  hr: ({ ...props }) => <hr className="my-8 border-border" {...props} />,

  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-foreground" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic text-foreground" {...props}>
      {children}
    </em>
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}

export default MdxComponents;
