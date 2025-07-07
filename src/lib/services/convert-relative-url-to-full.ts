import { siteConfig } from "../config/site";

export default function convertRelativeUrlToFull(url: string): string {
  if (!url) return url;

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  if (url.startsWith("/")) {
    return `${siteConfig.url}${url}`;
  }

  return `${siteConfig.url}/${url}`;
}
