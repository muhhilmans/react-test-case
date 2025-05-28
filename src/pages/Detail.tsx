import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dummyData from "../assets/dummy.json";
import { Alert, Card } from "antd";

const { Meta } = Card;

const Detail: React.FC = () => {
  const params = useParams<{ title: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      let encodedTitle: string | undefined;
      if (params.title) {
        encodedTitle = encodeURIComponent(params.title);
      }

      if (encodedTitle) {
        try {
          const response = await axios.get<NewsResponse>(
            `https://newsapi.org/v2/everything?q=${encodedTitle}&apiKey=7fc320ae7e17460491c911a114890e76`
          );
          if (
            response.data.status === "ok" &&
            response.data.articles.length > 0
          ) {
            setArticle(response.data.articles[0]);
          } else {
            setError("Failed to fetch live news for this title.");
            setArticle(dummyData.articles[0] || null);
          }
        } catch (err) {
          console.error("Error fetching news:", err);
          setError("Failed to fetch news. Showing dummy data.");
          setArticle(dummyData.articles[0] || null);
        } finally {
          setLoading(false);
        }
      } else {
        setError("No article title provided.");
        setLoading(false);
      }
    };

    fetchNews();
  }, [params.title]);

  if (error) {
    return <Alert message="Error" description={error} type="error" showIcon />;
  }

  if (loading) {
    return <Card loading style={{ width: "100%", height: "300px" }} />;
  }

  if (!article) {
    return (
      <Alert
        message="Info"
        description="No article details found."
        type="info"
        showIcon
      />
    );
  }

  const coverImage = article.urlToImage ? (
    <img
      alt={article.title}
      src={article.urlToImage}
      style={{ height: "300px", objectFit: "cover", width: "100%" }}
    />
  ) : null;

  return (
    <Card
      hoverable
      variant="borderless"
      cover={coverImage}
      style={{ width: "80%", margin: "20px auto" }}
    >
      <Meta title={article.title} description={article.description} />
      {article.content && <p style={{ marginTop: 16 }}>{article.content}</p>}
      {article.author && <p>Author: {article.author}</p>}
      <p>Source: {article.source?.name}</p>
      <p>Published At: {new Date(article.publishedAt).toLocaleString()}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        See Website
      </a>
    </Card>
  );
};

export default Detail;
