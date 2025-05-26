import React from "react";
import { Button, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import reactLogo from "../../../assets/react.svg";

interface MobileNavbarProps {
  siderVisible: boolean;
  onToggleSider: () => void;
}

const { Header } = Layout;

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  onToggleSider,
  siderVisible,
}) => {
  const icon = siderVisible ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />;

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        background: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 16px",
      }}
    >
      <div className="demo-logo">
        <img src={reactLogo} alt="React logo" style={{ height: "32px" }} />
      </div>
      <Button
        type="text"
        onClick={onToggleSider}
        icon={icon}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </Header>
  );
};

export default MobileNavbar;
