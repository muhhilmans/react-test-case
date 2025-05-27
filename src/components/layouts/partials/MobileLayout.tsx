import React from "react";
import MobileSider from "./MobileSider";
import { Layout } from "antd";
import MobileNavbar from "./MobileNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "../../../pages/Home";

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

  return (
    <>
      <MobileSider visible={siderVisible} onClose={hideSider} />
      <Layout style={{ marginLeft: siderVisible ? 200 : 80 }}>
        <MobileNavbar onToggleSider={toggleSider} siderVisible={siderVisible} />
        <Content style={{ padding: "0 50px" }}>
          <div
            style={{
              margin: "32px 0",
              minHeight: 380,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          PT. EIGEN TRI MATHEMA. ©{new Date().getFullYear()} Created by Muh Hilman Sholehudin.
        </Footer>
      </Layout>
    </>
  );
};

export default MobileLayout;
