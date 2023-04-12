import {Layout} from 'antd';
import {useState} from 'react';
import MainLayout from './features/layout/MainLayout.jsx';
import './app.css';
import HeaderMenu from './features/layout/Header.jsx';
import SiderMenu from './features/layout/Sider.jsx';
import FloatModalButton from './styles/FloatModalButton.jsx';

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{height: '100vh'}}>
      <SiderMenu collapsed={collapsed}/>
      <Layout className="site-layout">
        <HeaderMenu collapsed={collapsed} setCollapsed={setCollapsed}/>
        <MainLayout/>
        <FloatModalButton/>
      </Layout>
    </Layout>
  );
}
