import React, { useEffect, useState } from "react";
import { Alert, Row } from "antd";
import CardItem from "../components/fragments/CardItem";
import axios from "axios";
import dummyData from "../assets/dummy.json";

const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get<NewsResponse>(
          "https://newsapi.org/v2/everything?domains=bbc.com&language=en&apiKey=7fc320ae7e17460491c911a114890e76"
        );
        if (response.data.status === "ok") {
          setArticles(response.data.articles);
        } else {
          setError("Failed to fetch live news");
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 429) {
            console.warn(
              "API returned 429 (Too Many Requests). Using dummy data."
            );
            setArticles(dummyData.articles);
          } else if (err.response?.status === 426) {
            console.warn(
              "API returned 426 (corsNotAllowed). Using dummy data."
            );
            setArticles(dummyData.articles);
          } else {
            console.error("Error fetching news:", err);
            setArticles(dummyData.articles);
            setError(
              `Failed to fetch data: ${err.message}.`
            );
          }
        } else if (err instanceof Error) {
          console.error("An unexpected error occurred:", err);
          setError(`Failed to fetch data: ${err.message}.`);
        } else {
          console.error("An unexpected error occurred:", err);
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (error) {
    return <Alert message="Error" description={error} type="error" showIcon />;
  }

  return (
    <Row gutter={[22, 22]} justify="center">
      {articles.map((article, index) => {
        return <CardItem key={index} data={article} loading={loading} />;
      })}
    </Row>
  );
};

export default Home;
