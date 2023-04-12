import {Typography} from "antd";
import {
  adventureGames,
  adventuresParagraph,
  graphicAdventure, interactiveMovie, realTime3DAdventures,
  textAdventure, visualNovels
} from "../../data/GenresPage/adventures.js";
import TitleDivider from "../../components/VideoGamesHistoryPage/TitleDivider.jsx";
import ImageGroup from "../../styles/ImageGroup/ImageGroup.jsx";

const {Title, Paragraph} = Typography;

const AdventureGenrePage = () => {

  return (
    <Typography>
      <Title>Adventure</Title>
      <Paragraph>
        {adventuresParagraph.first}
      </Paragraph>
      <Paragraph>
        {adventuresParagraph.second}
      </Paragraph>
      <Paragraph>
        {adventuresParagraph.third}
      </Paragraph>
      <Paragraph>
        {adventuresParagraph.fourth}
      </Paragraph>
      <ImageGroup images={adventureGames}/>
      <TextAdventure/>
      <GraphicAdventure/>
      <VisualNovels/>
      <InteractiveMovie/>
      <RealTime3D/>
    </Typography>
  );
};

const TextAdventure = () => {
  return (
    <>
      <TitleDivider title={'Text adventure'}/>
      <Paragraph>
        {adventuresParagraph.fifth}
      </Paragraph>
      <ImageGroup images={textAdventure}/>
    </>
  );
};

const GraphicAdventure = () => {
  return (
    <>
      <TitleDivider title={'Graphic adventure'}/>
      <Paragraph>
        {adventuresParagraph.sixth}
      </Paragraph>
      <ImageGroup images={graphicAdventure}/>
    </>
  );
};

const VisualNovels = () => {
  return (
    <>
      <TitleDivider title={'Visual novels'}/>
      <Paragraph>
        {adventuresParagraph.seventh}
      </Paragraph>
      <ImageGroup images={visualNovels}/>
    </>
  );
};

const InteractiveMovie = () => {
  return (
    <>
      <TitleDivider title={'Interactive movie'}/>
      <Paragraph>
        {adventuresParagraph.eighth}
      </Paragraph>
      <ImageGroup images={interactiveMovie}/>
    </>
  );
};

const RealTime3D = () => {
  return (
    <>
      <TitleDivider title={'Real-time 3D adventures'}/>
      <Paragraph>
        {adventuresParagraph.ninth}
      </Paragraph>
      <ImageGroup images={realTime3DAdventures}/>
    </>
  )
}
export default AdventureGenrePage;
