import { Outlet } from 'react-router-dom';
import MainLayout from '../layouts/MainLayouts/MainLayout.jsx';
import WelcomePage from '../pages/WelcomePage.jsx';
import ContentPage from '../pages/ContentPage.jsx';
import GlossaryPage from '../pages/GlossaryPage.jsx';
import ListOfReferencesPage from '../pages/ListOfReferencesPage.jsx';

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
            element: <WelcomePage />,
          },
          {
            path: '/content',
            element: <ContentPage />,
          },
          {
            path: '/glossary',
            element: <GlossaryPage />,
          },
          {
            path: '/references',
            element: <ListOfReferencesPage />,
          },
        ],
      },
    ],
  },
];

export default routes;