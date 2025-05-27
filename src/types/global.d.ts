interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
}

interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}