export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  tags: string[];
  featured: boolean;
  author: string;
  readingTime: number;
  image: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface BlogFrontmatter {
  title: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  featured: boolean;
  author: string;
  readingTime: number;
  image: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface BlogSearchParams {
  query?: string;
  tag?: string;
  page?: number;
}

export interface BlogMetadata {
  totalPosts: number;
  totalPages: number;
  currentPage: number;
  postsPerPage: number;
  allTags: string[];
}
