import {
  LinkOutlined,
  HistoryOutlined,
  VideoCameraOutlined,
  UserOutlined,
  DashboardOutlined,
  TeamOutlined,
  BookOutlined
} from "@ant-design/icons";

export const menuItems = [
  {
    key: '1',
    icon: <HistoryOutlined/>,
    label: 'Історія відеоігор',
    to: '/'
  },
  {
    key: '2',
    icon: <VideoCameraOutlined/>,
    label: 'Жанри відеоігор',
    subMenu: [
      {
        key: '2-1',
        label: 'Загальний огляд',
        to: '/genres',
      },
      {
        key: '2-2',
        label: 'Екшн',
        to: '/genres',
      },
      {
        key: '2-3',
        label: 'Пригоди',
        to: '/genres',
      },
      // ...додаткові підпункти меню
    ],
  },
  {
    key: '3',
    icon: <UserOutlined/>,
    label: 'Відомі розробники',
    to: '/famous_developers',
  },
  {
    key: '4',
    icon: <DashboardOutlined/>,
    label: 'Ігрові двигуни',
    to: '/engines',
  },
  {
    key: '5',
    icon: <TeamOutlined/>,
    label: 'Ігрові компанії',
    to: '/companies',
  },
  {
    key: '6',
    icon: <BookOutlined/>,
    label: 'Глосарій',
    to: '/glossary',
  },
  {
    key: '7',
    icon: <LinkOutlined/>,
    label: 'Посилання',
    to: '/references',
  },
];
