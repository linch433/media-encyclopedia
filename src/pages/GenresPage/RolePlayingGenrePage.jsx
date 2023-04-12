import {Typography} from "antd";
import {rolePlayingParagraph} from "../../data/GenresPage/rolePlaying.js";
import TitleDivider from "../../components/VideoGamesHistoryPage/TitleDivider.jsx";

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
    </>
  );
};

export default RolePlayingGenrePage;
