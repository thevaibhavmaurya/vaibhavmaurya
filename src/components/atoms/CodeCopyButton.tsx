"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

interface CodeCopyButtonProps {
  code: string;
  className?: string;
}

export default function CodeCopyButton({
  code,
  className,
}: CodeCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log("Error copying to clipboard:", error);
      fallbackCopyToClipboard(code);
    }
  };

  const fallbackCopyToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log("Fallback copy failed:", error);
    }

    document.body.removeChild(textArea);
  };

  return (
    <Button
      onClick={handleCopy}
      size="sm"
      variant="ghost"
      className={`absolute top-2 right-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity ${className}`}
      aria-label="Copy code to clipboard"
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4 text-black" />
      )}
    </Button>
  );
}
