import React, { useState } from "react";
import { Card, Col } from "antd";
import CardModal from "./CardModal";

const { Meta } = Card;

interface CardItemProps {
  data: Article;
  loading?: boolean;
}

const CardItem: React.FC<CardItemProps> = ({ data, loading }) => {
  const [open, setOpen] = useState(false);

  const coverImage =
    loading === false && data.urlToImage ? (
      <img
        alt={data.title}
        src={data.urlToImage}
        style={{ height: "200px", objectFit: "cover" }}
      />
    ) : null;

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Col
      sm={{ flex: "100%", span: 24 }}
      md={{ flex: "50%", span: 12 }}
      lg={{ flex: "30%", span: 8 }}
    >
      <Card
        loading={loading}
        hoverable
        variant="borderless"
        cover={coverImage}
        style={{ width: "100%", height: "100%" }}
        onClick={handleOpenModal}
      >
        <Meta title={data.title} description={data.description} />
      </Card>
      <CardModal open={open} onClose={handleCloseModal} data={data} />
    </Col>
  );
};

export default CardItem;
