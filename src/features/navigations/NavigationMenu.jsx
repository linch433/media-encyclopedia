import {Menu} from "antd";
import {useNavigate} from "react-router-dom";
import {menuItems} from "./routes.jsx";

export function NavigationMenu() {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    const target = menuItems.find((item) => item.key === e.key);
    if (target) {
      navigate(target.to);
    }
  };

  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={handleMenuClick}>
      {menuItems.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
}