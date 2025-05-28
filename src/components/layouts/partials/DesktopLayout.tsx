import { Layout } from "antd";
import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../../../pages/Home";
import Detail from "../../../pages/Detail";

const { Content, Footer } = Layout;

const DesktopLayout: React.FC = () => {
  return (
    <Layout>
      <Navbar />
      <Content style={{ padding: "0 50px" }}>
        <div
          style={{
            margin: "32px 0",
            minHeight: 380,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:title" element={<Detail />} />
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        PT. EIGEN TRI MATHEMA. ©{new Date().getFullYear()} Created by Muh Hilman
        Sholehudin.
      </Footer>
    </Layout>
  );
};

export default DesktopLayout;
