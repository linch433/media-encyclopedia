import {Typography} from "antd";
import {actionAdventureParagraph} from "../../data/GenresPage/actionAdventure.js";
import TitleDivider from "../../components/VideoGamesHistoryPage/TitleDivider.jsx";

const {Title, Paragraph} = Typography;

const ActionAdventureGenrePage = () => {

  return (
    <Typography>
      <Title>Action-Adventure</Title>
      <Paragraph>
        {actionAdventureParagraph.first}
      </Paragraph>
      <Paragraph>
        {actionAdventureParagraph.second}
      </Paragraph>
      <Paragraph>
        {actionAdventureParagraph.third}
      </Paragraph>
      <SurvivalHorror/>
      <Metroidvania/>
    </Typography>
  );
};

const SurvivalHorror = () => {
  return (
    <>
      <TitleDivider title={'Survival horror'}/>
      <Paragraph>
        {actionAdventureParagraph.fourth}
      </Paragraph>
      <Paragraph>
        {actionAdventureParagraph.fifth}
      </Paragraph>
    </>
  );
};

const Metroidvania = () => {
  return (
    <>
      <TitleDivider title={'Metroidvania'}/>
      <Paragraph>
        {actionAdventureParagraph.sixth}
      </Paragraph>
    </>
  );
};

export default ActionAdventureGenrePage;
