interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  author?: string;
  content?: string;
  source?: { id: string | null; name: string };
  publishedAt?: date;
}

interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}