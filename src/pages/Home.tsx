import React, { useEffect, useState } from "react";
import { Row } from "antd";
import CardItem from "../components/fragments/CardItem";
import axios from "axios";

const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get<NewsResponse>(
          'https://newsapi.org/v2/everything?domains=bbc.com&language=en&apiKey=7fc320ae7e17460491c911a114890e76'
        );
        if (response.data.status === 'ok') {
          setArticles(response.data.articles);
        } else {
          setError('Failed to fetch news');
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [articles]);

  if (loading) {
    return <p>Loading news...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Row gutter={[22, 22]} justify="center">
      {articles.map((article, index) => {
        return <CardItem key={index} data={article} />;
      })}
    </Row>
  );
};

export default Home;
