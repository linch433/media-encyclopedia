import {NavigationMenu} from "../navigations/NavigationMenu.jsx";
import {Layout} from "antd";
import {useNavigate} from "react-router-dom";

const SiderMenu = ({collapsed}) => {
  const navigation = useNavigate();
  const {Sider} = Layout;

  return (
    <Sider theme='dark' trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">{collapsed ? 'MD' : 'Media'}</div>
      <NavigationMenu/>
    </Sider>
  );
};

export default SiderMenu;
