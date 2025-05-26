import React from "react";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Sider } = Layout;

interface MobileSiderProps {
  visible: boolean;
  onClose: () => void;
}

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

const MobileSider: React.FC<MobileSiderProps> = ({ visible, onClose }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={!visible}
      onCollapse={onClose}
      style={{
        position: "fixed",
        zIndex: 2,
        height: "100%",
        background: "#fff",
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        onClick={onClose}
        defaultSelectedKeys={["home"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default MobileSider;
