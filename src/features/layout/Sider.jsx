import {NavigationMenu} from "../navigations/NavigationMenu.jsx";
import {Layout} from "antd";

const SiderMenu = ({collapsed}) => {
  const {Sider} = Layout;

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">{collapsed ? 'MD' : 'Media'}</div>
      <NavigationMenu/>
    </Sider>
  );
};

export default SiderMenu;
