import React from "react";
import { Card, Col } from "antd";

const { Meta } = Card;

interface CardItemProps {
    data: Article;
}

const CardItem: React.FC<CardItemProps> = ({ data }) => {
  return (
    <Col sm={{ flex: "100%", span: 24 }} md={{ flex: "50%", span: 12 }} lg={{ flex: "30%", span: 8 }}>
      <Card
        hoverable
        variant="borderless"
        cover={
          <img
            alt={data.title}
            src={data.urlToImage}
            style={{ height: "200px", objectFit: "cover" }}
          />
        }
        style={{ width: "100%", height: "100%" }}
      >
        <Meta title={data.title} description={data.description} />
      </Card>
    </Col>
  );
};

export default CardItem;
