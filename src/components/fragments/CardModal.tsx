import React from "react";
import { Button, Modal } from "antd";

interface CardModalProps {
  open: boolean;
  onClose: () => void;
  data: Article | null;
}

const CardModal: React.FC<CardModalProps> = ({ open, onClose, data }) => {
  if (!data) {
    return null;
  }

  const handleGoToWebsite = () => {
    if (data.url) {
      window.open(data.url, "_blank");
    }
  };

  return (
    <Modal
      title={data.title}
      centered
      open={open}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Close
        </Button>,
        <Button
          key="goto"
          type="primary"
          onClick={handleGoToWebsite}
          disabled={!data.url}
        >
          Go to Website
        </Button>,
      ]}
      width={{
        xs: "90%",
        sm: "80%",
        md: "70%",
        lg: "60%",
        xl: "50%",
        xxl: "40%",
      }}
    >
      {data.urlToImage && (
        <img
          alt={data.title}
          src={data.urlToImage}
          style={{ width: "100%", marginBottom: 16 }}
        />
      )}
      <p>
        <strong>Description:</strong> {data.description}
      </p>
      {data.content && (
        <p>
          <strong>Content:</strong> {data.content}
        </p>
      )}
      {data.author && (
        <p>
          <strong>Author:</strong> {data.author}
        </p>
      )}
      {data.publishedAt && (
        <p>
          <strong>Published At:</strong>{" "}
          {new Date(data.publishedAt).toLocaleString()}
        </p>
      )}
      {data.source?.name && (
        <p>
          <strong>Source:</strong> {data.source.name}
        </p>
      )}
    </Modal>
  );
};

export default CardModal;
