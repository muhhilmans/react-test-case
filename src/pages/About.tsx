import { Button, Input, Space } from "antd";
import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Ini adalah halaman tentang kami.</p>
      <Space direction="vertical">
        <Input placeholder="Basic usage" />
        <Button type="primary">Primary Button</Button>
      </Space>
    </div>
  );
};

export default About;
