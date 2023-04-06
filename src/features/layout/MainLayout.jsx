import {Layout, theme} from "antd";
import {Route, Routes} from "react-router-dom";
import ContentPage from "../../pages/ContentPage.jsx";
import ReferencesPage from "../../pages/References.jsx";

const {Content} = Layout;

const MainLayout = () => {
  const {token: {colorBgContainer}} = theme.useToken();

  return (
    <Content
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
      }}
    >
      <Routes>
        <Route path="/" element={<ContentPage/>}/>
        <Route path="/references" element={<ReferencesPage/>}/>
      </Routes>
    </Content>
  );
};

export default MainLayout;
