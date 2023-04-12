import {Typography} from "antd";
import {
  actionParagraphs, battleRoyale,
  fightingGames,
  platformGames, rhythmGames,
  shooterGames,
  shooterOldGames, stealthGames, survivalGames
} from "../../data/GenresPage/actionGames.js";
import TitleDivider from "../../components/VideoGamesHistoryPage/TitleDivider.jsx";
import ImageGroup from "../../styles/ImageGroup/ImageGroup.jsx";

const {Title, Paragraph} = Typography;

const ActionGenrePage = () => {

  return (
    <Typography>
      <Title>Action</Title>
      <Paragraph>
        {actionParagraphs.first}
      </Paragraph>
      <Paragraph>
        {actionParagraphs.second}
      </Paragraph>
      <PlatformGames/>
      <ShooterGames/>
      <FightingGames/>
      <StealthGames/>
      <SurvivalGames/>
      <RhythmGames/>
      <BattleRoyale/>
    </Typography>
  );
};

const PlatformGames = () => {
  return (
    <>
      <TitleDivider title={'Platform games'}/>
      <Paragraph>
        {actionParagraphs.third}
      </Paragraph>
      <Paragraph>
        {actionParagraphs.fourth}
      </Paragraph>
      <ImageGroup images={platformGames}/>
    </>
  );
};

const ShooterGames = () => {
  return (
    <>
      <TitleDivider title={'Shooter games'}/>
      <Paragraph>
        {actionParagraphs.fifth}
      </Paragraph>
      <Paragraph>
        {actionParagraphs.sixth}
      </Paragraph>
      <ImageGroup images={shooterOldGames}/>
      <Paragraph>
        {actionParagraphs.seventh}
      </Paragraph>
      <ImageGroup images={shooterGames}/>
      <Paragraph>
        {actionParagraphs.eighth}
      </Paragraph>
    </>
  );
};

const FightingGames = () => {
  return (
    <>
      <TitleDivider title={'Fighting games'}/>
      <Paragraph>
        {actionParagraphs.ninth}
      </Paragraph>
      <ImageGroup images={fightingGames}/>
    </>
  )
}

const StealthGames = () => {
  return (
    <>
      <TitleDivider title={'Stealth games'}/>
      <Paragraph>
        {actionParagraphs.tenth}
      </Paragraph>
      <Paragraph>
        {actionParagraphs.eleventh}
      </Paragraph>
      <Paragraph>
        {actionParagraphs.twelfth}
      </Paragraph>
      <ImageGroup images={stealthGames}/>
    </>
  );
};

const SurvivalGames = () => {
  return (
    <>
      <TitleDivider title={'Survival games'}/>
      <Paragraph>
        {actionParagraphs.thirteen}
      </Paragraph>
      <ImageGroup images={survivalGames}/>
    </>
  );
};

const RhythmGames = () => {
  return (
    <>
      <TitleDivider title={'Rhythm games'}/>
      <Paragraph>
        {actionParagraphs.fourteen}
      </Paragraph>
      <Paragraph>
        {actionParagraphs.fifteen}
      </Paragraph>
      <ImageGroup images={rhythmGames}/>
    </>
  )
}

const BattleRoyale = () => {
  return (
    <>
      <TitleDivider title={'Battle Royale'}/>
      <Paragraph>
        {actionParagraphs.sixteen}
      </Paragraph>
      <ImageGroup images={battleRoyale}/>
    </>
  );
};

export default ActionGenrePage;
