import React, { useState } from "react";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Flex, Menu } from "antd";
import { Link } from "react-router-dom";
import { Header } from "antd/es/layout/layout";
import reactLogo from "../../assets/react.svg";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: "about",
    icon: <UserOutlined />,
    label: (
      <Link
        to="https://my-portfolio-muh-hilman-sholehudins-projects.vercel.app/"
        target="_blank"
      >
        About
      </Link>
    ),
  },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        background: "#fff",
      }}
    >
      <Flex align="center" justify="space-between" gap="large">
        <div className="demo-logo">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Flex>
    </Header>
  );
};

export default Navbar;
