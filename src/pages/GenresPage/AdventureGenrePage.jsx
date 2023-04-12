import {Typography} from "antd";
import {adventuresParagraph} from "../../data/GenresPage/adventures.js";
import TitleDivider from "../../components/VideoGamesHistoryPage/TitleDivider.jsx";

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
    </>
  )
}
export default AdventureGenrePage;
