import {
  LinkOutlined,
  HistoryOutlined,
  VideoCameraOutlined,
  UserOutlined,
  DashboardOutlined,
  TeamOutlined,
  BookOutlined,
} from '@ant-design/icons';

export const menuItems = [
  {
    key: '1',
    icon: <HistoryOutlined/>,
    label: 'Історія відеоігор',
    to: '/games_history',
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
        label: 'Action',
        to: '/genres/actions',
      },
      {
        key: '2-3',
        label: 'Adventure',
        to: '/genres/adventure',
      },
      {
        key: '2-4',
        label: 'Strategic',
        to: '/genres/strategic',
      },
      {
        key: '2-5',
        label: 'Sports',
        to: '/genres/sports',
      },
      {
        key: '2-6',
        label: 'Action-Adventure',
        to: '/genres/action_adventure',
      },
      {
        key: '2-7',
        label: 'Puzzle',
        to: '/genres/puzzle',
      },
      {
        key: '2-8',
        label: 'Role playing',
        to: '/genres/roleplaying',
      },
      {
        key: '2-9',
        label: 'MMO',
        to: '/genres/mmo',
      },
      {
        key: '2-10',
        label: 'Simulation',
        to: '/genres/simulation',
      },
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
    label: 'Game engines',
    to: '/engines',
  },
  {
    key: '5',
    icon: <TeamOutlined/>,
    label: 'Ігрові компанії',
    to: '/companies',
  },
  // {
  //   key: '6',
  //   icon: <BookOutlined/>,
  //   label: 'Глосарій',
  //   to: '/glossary',
  // },
  {
    key: '7',
    icon: <LinkOutlined/>,
    label: 'Посилання',
    to: '/references',
  },
];
