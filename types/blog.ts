export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: string;
  meta_title: string;
  meta_description: string;
  status: string;
  featured: boolean;
  views: number;
  reading_time: number;
  published_at: string;
  created_at: string;
  category: string;
  author: string;
}