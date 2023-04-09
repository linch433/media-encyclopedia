import {NavigationMenu} from "../navigations/NavigationMenu.jsx";
import {Layout} from "antd";
import {useNavigate} from "react-router-dom";
import {ReactComponent as MiniLogo} from '../../assets/mini_logo.svg';
import {ReactComponent as BigLogo} from '../../assets/big_logo.svg';

const SiderMenu = ({collapsed}) => {
  const navigation = useNavigate();
  const {Sider} = Layout;

  return (
    <Sider theme='light' trigger={null} collapsible collapsed={collapsed}>
      <div
        className="logo"
        onClick={() => {
          navigation('/')
        }}
      >
        {collapsed ? <MiniLogo/> : <BigLogo/>}
      </div>
      <NavigationMenu/>
    </Sider>
  );
};

export default SiderMenu;
