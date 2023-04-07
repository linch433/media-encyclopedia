import {Layout, theme} from 'antd';
import {useState} from 'react';
import MainLayout from "./features/layout/MainLayout.jsx";
import './app.css';
import HeaderMenu from "./features/layout/Header.jsx";
import SiderMenu from "./features/layout/Sider.jsx";

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {token: {colorBgContainer}} = theme.useToken();

  return (
    <Layout style={{height: '100vh'}}>
      <SiderMenu collapsed={collapsed}/>
      <Layout className="site-layout">
        <HeaderMenu collapsed={collapsed} setCollapsed={setCollapsed}/>
        <MainLayout/>
      </Layout>
    </Layout>
  );
}
