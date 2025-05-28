import React from "react";
import { Card, Col } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

interface CardItemProps {
  data: Article;
  loading?: boolean;
}

const CardItem: React.FC<CardItemProps> = ({ data, loading }) => {
  const coverImage =
    loading === false && data.urlToImage ? (
      <img
        alt={data.title}
        src={data.urlToImage}
        style={{ height: "200px", objectFit: "cover" }}
      />
    ) : null;

  const detailUrl = `/detail/${encodeURIComponent(data.title)}`;

  return (
    <Col
      sm={{ flex: "100%", span: 24 }}
      md={{ flex: "50%", span: 12 }}
      lg={{ flex: "30%", span: 8 }}
    >
      <Link to={detailUrl}>
        <Card
          loading={loading}
          hoverable
          variant="borderless"
          cover={coverImage}
          style={{ width: "100%", height: "100%" }}
        >
          <Meta title={data.title} description={data.description} />
        </Card>
      </Link>
    </Col>
  );
};

export default CardItem;
