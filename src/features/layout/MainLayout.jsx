import {Layout, theme} from "antd";
import {Route, Routes} from "react-router-dom";
import ReferencesPage from "../../pages/References.jsx";
import VideoGamesHistoryPage from "../../pages/VideogamesHistoryPage.jsx";
import GenresPage from "../../pages/GenresPage.jsx";
import FamousDevelopersPage from "../../pages/FamousDevelopersPage.jsx";
import EnginesPage from "../../pages/EnginesPage.jsx";
import CompaniesPage from "../../pages/CompaniesPage.jsx";
import GlossaryPage from "../../pages/GlossaryPage.jsx";

const {Content} = Layout;

const MainLayout = () => {
  const {token: {colorBgContainer}} = theme.useToken();

  return (
    <Content
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
      }}
    >
      <Routes>
        <Route path='/' element={<VideoGamesHistoryPage/>}/>
        <Route path='/genres' element={<GenresPage/>}/>
        <Route path='/famous_developers' element={<FamousDevelopersPage/>}/>
        <Route path='/engines' element={<EnginesPage/>}/>
        <Route path='/companies' element={<CompaniesPage/>}/>
        <Route path='/glossary' element={<GlossaryPage/>}/>
        <Route path="/references" element={<ReferencesPage/>}/>
      </Routes>
    </Content>
  );
};

export default MainLayout;
