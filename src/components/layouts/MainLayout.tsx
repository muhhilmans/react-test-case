import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Layout } from "antd";
import MobileLayout from "./partials/MobileLayout";
import DesktopLayout from "./partials/DesktopLayout";

const MainLayout: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [siderVisible, setSiderVisible] = useState(false);

  const toggleSider = () => {
    setSiderVisible(!siderVisible);
  };

  const hideSider = () => {
    setSiderVisible(false);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {isMobile ? (
        <MobileLayout
          siderVisible={siderVisible}
          hideSider={hideSider}
          toggleSider={toggleSider}
        />
      ) : (
        <DesktopLayout />
      )}
    </Layout>
  );
};

export default MainLayout;
