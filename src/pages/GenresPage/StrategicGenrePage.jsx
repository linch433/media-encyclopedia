import {Typography} from "antd";
import {
  artilleryGame,
  autoChess,
  fourXGame, grandStrategyWargame,
  mobaArts,
  realTimeStrategy, realTimeTactics,
  strategiesParagraph, towerDefense, turnBasedStrategy, turnBasedTactics, wargame
} from "../../data/GenresPage/strategies.js";
import TitleDivider from "../../components/VideoGamesHistoryPage/TitleDivider.jsx";
import ImageGroup from "../../styles/ImageGroup/ImageGroup.jsx";

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
      <ImageGroup images={fourXGame}/>
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
      <ImageGroup images={artilleryGame}/>
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
      <ImageGroup images={autoChess}/>
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
      <ImageGroup images={mobaArts}/>
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
      <ImageGroup images={realTimeStrategy}/>
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
      <ImageGroup images={realTimeTactics}/>
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
      <ImageGroup images={towerDefense}/>
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
      <ImageGroup images={turnBasedStrategy}/>
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
      <ImageGroup images={turnBasedTactics}/>
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
      <ImageGroup images={wargame}/>
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
      <ImageGroup images={grandStrategyWargame}/>
    </>
  );
};

export default StrategicGenrePage;
