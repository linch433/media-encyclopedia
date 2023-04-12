import {Typography} from "antd";
import {strategiesParagraph} from "../../data/GenresPage/strategies.js";
import TitleDivider from "../../components/VideoGamesHistoryPage/TitleDivider.jsx";

const {Title, Paragraph} = Typography;

const StrategicGenrePage = () => {

  return (
    <Typography>
      <Title>Strategic</Title>
      <Paragraph>
        {strategiesParagraph.first}
      </Paragraph>
      
      <FourXGames/>
      <ArtilleryGames/>
      <AutoBattler/>
      <MobaArts/>
      <RealTimeStrategy/>
      <RealTimeTactics/>
      <TowerDefence/>
      <TurnBasedStrategy/>
      <TurnBasedTactics/>
      <Wargame/>
      <GrandStrategyWargame/>
    </Typography>
  );
};

const FourXGames = () => {
  return (
    <>
      <TitleDivider title={'4X game'}/>
      <Paragraph>
        {strategiesParagraph.second}
      </Paragraph>
    </>
  );
};

const ArtilleryGames = () => {
  return (
    <>
      <TitleDivider title={'Artillery game'}/>
      <Paragraph>
        {strategiesParagraph.third}
      </Paragraph>
    </>
  );
};

const AutoBattler = () => {
  return (
    <>
      <TitleDivider title={'Auto battler (Auto chess)'}/>
      <Paragraph>
        {strategiesParagraph.fourth}
      </Paragraph>
    </>
  );
};

const MobaArts = () => {
  return (
    <>
      <TitleDivider title={'MOBA/ARTS'}/>
      <Paragraph>
        {strategiesParagraph.fifth}
      </Paragraph>
      <Paragraph>
        {strategiesParagraph.sixth}
      </Paragraph>
    </>
  );
};

const RealTimeStrategy = () => {
  return (
    <>
      <TitleDivider title={'Real-time strategy'}/>
      <Paragraph>
        {strategiesParagraph.seventh}
      </Paragraph>
    </>
  );
};

const RealTimeTactics = () => {
  return (
    <>
      <TitleDivider title={'Real-time tactics'}/>
      <Paragraph>
        {strategiesParagraph.eighth}
      </Paragraph>
    </>
  );
};

const TowerDefence = () => {
  return (
    <>
      <TitleDivider title={'Tower defense'}/>
      <Paragraph>
        {strategiesParagraph.ninth}
      </Paragraph>
    </>
  );
};

const TurnBasedStrategy = () => {
  return (
    <>
      <TitleDivider title={'Turn-based strategy'}/>
      <Paragraph>
        {strategiesParagraph.tenth}
      </Paragraph>
      <Paragraph>
        {strategiesParagraph.eleventh}
      </Paragraph>
    </>
  );
};

const TurnBasedTactics = () => {
  return (
    <>
      <TitleDivider title={'Turn-based tactics'}/>
      <Paragraph>
        {strategiesParagraph.twelfth}
      </Paragraph>
    </>
  );
};

const Wargame = () => {
  return (
    <>
      <TitleDivider title={'Wargame'}/>
      <Paragraph>
        {strategiesParagraph.thirteen}
      </Paragraph>
    </>
  );
};

const GrandStrategyWargame = () => {
  return (
    <>
      <TitleDivider title={'Grand strategy wargame'}/>
      <Paragraph>
        {strategiesParagraph.fourteen}
      </Paragraph>
    </>
  );
};

export default StrategicGenrePage;
