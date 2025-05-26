import React from "react";
import MobileSider from "./MobileSider";
import { Breadcrumb, Layout, theme } from "antd";
import MobileNavbar from "./MobileNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "../../../pages/Home";
import About from "../../../pages/About";

const { Content, Footer } = Layout;

interface MobileLayoutProps {
  siderVisible: boolean;
  hideSider: () => void;
  toggleSider: () => void;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
  siderVisible,
  hideSider,
  toggleSider,
}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <MobileSider visible={siderVisible} onClose={hideSider} />
      <Layout style={{ marginLeft: siderVisible ? 200 : 80 }}>
        <MobileNavbar onToggleSider={toggleSider} siderVisible={siderVisible} />
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[
              { title: "Home" },
              { title: "List" },
              { title: "PageLayout" },
            ]}
          />
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Your Name
        </Footer>
      </Layout>
    </>
  );
};

export default MobileLayout;
