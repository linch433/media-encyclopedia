import {Menu} from "antd";
import {useNavigate} from "react-router-dom";
import {menuItems} from "./routes.jsx";
import renderMenuItem from "../../utils/renderMenuItem.jsx";

export function NavigationMenu() {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    const findItem = (items, key) => {
      for (const item of items) {
        if (item.key === key) {
          return item;
        }

        if (item.subMenu) {
          const foundItem = findItem(item.subMenu, key);
          if (foundItem) {
            return foundItem;
          }
        }
      }

      return null;
    };

    const target = findItem(menuItems, e.key);
    if (target && target.to) {
      navigate(target.to);
    }
  };

  return (
    <Menu
      theme='light'
      mode='inline'
      defaultSelectedKeys={['1']}
      onClick={handleMenuClick}
      style={{minWidth: 0}}
    >
      {menuItems.map((item) => renderMenuItem(item))}
    </Menu>
  );
}
