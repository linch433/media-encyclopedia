import { Layout, theme } from 'antd';
import { Route, Routes } from 'react-router-dom';
import ReferencesPage from '../../pages/References.jsx';
import VideoGamesHistoryPage from '../../pages/VideogamesHistoryPage.jsx';
import GenresPage from '../../pages/GenresPage/GenresPage.jsx';
import FamousDevelopersPage from '../../pages/FamousDevelopersPage.jsx';
import EnginesPage from '../../pages/EnginesPage.jsx';
import CompaniesPage from '../../pages/CompaniesPage.jsx';
import GlossaryPage from '../../pages/GlossaryPage.jsx';
import ActionGenrePage from '../../pages/GenresPage/ActionGenrePage.jsx';
import AdventureGenrePage from '../../pages/GenresPage/AdventureGenrePage.jsx';
import RpgGenrePage from '../../pages/GenresPage/RpgGenrePage.jsx';
import SportsGenrePage from '../../pages/GenresPage/SportsGenrePage.jsx';
import StrategicGenrePage from '../../pages/GenresPage/StrategicGenrePage.jsx';

const { Content } = Layout;

const MainLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
        overflowY: 'auto',
      }}
    >
      <Routes>
        <Route path="/" element={<VideoGamesHistoryPage />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/famous_developers" element={<FamousDevelopersPage />} />
        <Route path="/engines" element={<EnginesPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/references" element={<ReferencesPage />} />
        <Route path='/genres/action' element={<ActionGenrePage/>}/>
        <Route path='/genres/adventure' element={<AdventureGenrePage/>}/>
        <Route path='/genres/rpg' element={<RpgGenrePage/>}/>
        <Route path='/genres/sports' element={<SportsGenrePage/>}/>
        <Route path='/genres/strategic' element={<StrategicGenrePage/>}/>
      </Routes>
    </Content>
  );
};

export default MainLayout;
