import { Outlet } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import MainLayout from '../layouts/MainLayout/MainLayout.jsx';

const routes = [
  {
    path: '/',
    children: [
      {
        path: '',
        element: (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [
          {
            path: '',
            element: <HomePage />,
          },
        ],
      },
    ],
  },
];

export default routes;
