import {Menu} from "antd";

function renderMenuItem(item) {
  const {subMenu, key, icon, label} = item;

  if (subMenu) {
    return (
      <Menu.SubMenu key={key} icon={icon} title={label}>
        {item.subMenu.map((subItem) => renderMenuItem(subItem))}
      </Menu.SubMenu>
    );
  }

  return (
    <Menu.Item key={item.key} icon={item.icon}>
      {item.label}
    </Menu.Item>
  );
};

export default renderMenuItem;
