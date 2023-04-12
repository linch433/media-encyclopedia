import {Typography} from "antd";
import {actionAdventureParagraph, metroidvania, survivalHorror} from "../../data/GenresPage/actionAdventure.js";
import TitleDivider from "../../components/VideoGamesHistoryPage/TitleDivider.jsx";
import ImageGroup from "../../styles/ImageGroup/ImageGroup.jsx";

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
      <ImageGroup images={survivalHorror}/>
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
      <ImageGroup images={metroidvania}/>
    </>
  );
};

export default ActionAdventureGenrePage;
