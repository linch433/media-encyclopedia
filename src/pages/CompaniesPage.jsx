import {Typography} from "antd";
import TitleDivider from "../components/VideoGamesHistoryPage/TitleDivider.jsx";
import {gameCompaniesParagraph} from "../data/gamingCompanies.js";

const {Title, Paragraph} = Typography;

const CompaniesPage = () => {
  return (
    <Typography>
      <Title>Ігрові компанії</Title>
      <Paragraph>
        {gameCompaniesParagraph.first}
      </Paragraph>
      <TitleDivider title={'Activision Blizzard'}/>
      <Paragraph>
        {gameCompaniesParagraph.second}
      </Paragraph>
      <TitleDivider title={'Electronic Arts'}/>
      <Paragraph>
        {gameCompaniesParagraph.third}
      </Paragraph>
      <TitleDivider title={'Nintendo'}/>
      <Paragraph>
        {gameCompaniesParagraph.fourth}
      </Paragraph>
      <TitleDivider title={'Ubisoft'}/>
      <Paragraph>
        {gameCompaniesParagraph.fifth}
      </Paragraph>
      <TitleDivider title={'Rockstar Games'}/>
      <Paragraph>
        {gameCompaniesParagraph.sixth}
      </Paragraph>
      <TitleDivider title={'Bethesda Softworks'}/>
      <Paragraph>
        {gameCompaniesParagraph.seventh}
      </Paragraph>
      <TitleDivider title={'Square Enix'}/>
      <Paragraph>
        {gameCompaniesParagraph.eighth}
      </Paragraph>
      <TitleDivider title={'Naughty Dog'}/>
      <Paragraph>
        {gameCompaniesParagraph.ninth}
      </Paragraph>
      <TitleDivider title={'Valve Corporation'}/>
      <Paragraph>
        {gameCompaniesParagraph.tenth}
      </Paragraph>
      <TitleDivider title={'CD Projekt Red'}/>
      <Paragraph>
        {gameCompaniesParagraph.eleventh}
      </Paragraph>
      <TitleDivider title={'Bioware'}/>
      <Paragraph>
        {gameCompaniesParagraph.twelfth}
      </Paragraph>
    </Typography>
  );
};

export default CompaniesPage;
