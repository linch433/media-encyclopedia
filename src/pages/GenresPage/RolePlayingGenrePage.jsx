import {Typography} from "antd";
import {
  actionRpg,
  firstPersonRpg,
  mmoRpg, monsterTamer,
  rogueLike,
  rolePlayingParagraph,
  sandBoxRpg
} from "../../data/GenresPage/rolePlaying.js";
import TitleDivider from "../../components/VideoGamesHistoryPage/TitleDivider.jsx";
import ImageGroup from "../../styles/ImageGroup/ImageGroup.jsx";

const {Title, Paragraph} = Typography;

const RolePlayingGenrePage = () => {

  return (
    <Typography>
      <Title>Role-playing</Title>
      <Paragraph>
        {rolePlayingParagraph.first}
      </Paragraph>
      <ActionRpg/>
      <MmoRpg/>
      <RogueLike/>
      <TacticalRpg/>
      <SandboxRpg/>
      <FirstPersonRpg/>
      <MonsterTamer/>
    </Typography>
  );
};

const ActionRpg = () => {
  return (
    <>
      <TitleDivider title={'Action RPG'}/>
      <Paragraph>
        {rolePlayingParagraph.second}
      </Paragraph>
      <ImageGroup images={actionRpg}/>
    </>
  );
};

const MmoRpg = () => {
  return (
    <>
      <TitleDivider title={'MMORPG'}/>
      <Paragraph>
        {rolePlayingParagraph.third}
      </Paragraph>
      <ImageGroup images={mmoRpg}/>
    </>
  );
};

const RogueLike = () => {
  return (
    <>
      <TitleDivider title={'Roguelikes'}/>
      <Paragraph>
        {rolePlayingParagraph.fourth}
      </Paragraph>
      <ImageGroup images={rogueLike}/>
    </>
  );
};

const TacticalRpg = () => {
  return (
    <>
      <TitleDivider title={'Tactical RPG'}/>
      <Paragraph>
        {rolePlayingParagraph.fifth}
      </Paragraph>
    </>
  );
};

const SandboxRpg = () => {
  return (
    <>
      <TitleDivider title={'Sandbox RPG'}/>
      <Paragraph>
        {rolePlayingParagraph.sixth}
      </Paragraph>
      <ImageGroup images={sandBoxRpg}/>
    </>
  );
};

const FirstPersonRpg = () => {
  return (
    <>
      <TitleDivider title={'First-person party-based RPG'}/>
      <Paragraph>
        {rolePlayingParagraph.seventh}
      </Paragraph>
      <Paragraph>
        {rolePlayingParagraph.eighth}
      </Paragraph>
      <ImageGroup images={firstPersonRpg}/>
    </>
  );
};

const MonsterTamer = () => {
  return (
    <>
      <TitleDivider title={'Monster Tamer'}/>
      <Paragraph>
        {rolePlayingParagraph.ninth}
      </Paragraph>
      <ImageGroup images={monsterTamer}/>
    </>
  );
};

export default RolePlayingGenrePage;
