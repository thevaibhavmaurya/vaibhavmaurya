"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Share2, Copy, Check } from "lucide-react";

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
  className?: string;
}

export default function ShareButton({
  title,
  text,
  url,
  className,
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [isWebShareSupported, setIsWebShareSupported] = useState(false);

  useEffect(() => {
    setIsWebShareSupported(
      typeof navigator !== "undefined" && "share" in navigator
    );
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
      } catch (error) {
        console.log("Error sharing:", error);
        handleCopyToClipboard();
      }
    } else {
      handleCopyToClipboard();
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      fallbackCopyToClipboard(url);
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
      onClick={handleShare}
      size="sm"
      variant="outline"
      className={className}
      aria-label="Share this article"
    >
      {copied ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Copied!
        </>
      ) : isWebShareSupported ? (
        <>
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </>
      ) : (
        <>
          <Copy className="mr-2 h-4 w-4" />
          Copy Link
        </>
      )}
    </Button>
  );
}
