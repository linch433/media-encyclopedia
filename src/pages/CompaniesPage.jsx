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

      <ActivisionBlizzard/>
      <ElectronicArts/>
      <Nintendo/>
      <Ubisoft/>
      <RockstarGames/>
      <BethesdaSoftworks/>
      <SquareEnix/>
      <NaughtyDog/>
      <ValveCorporation/>
      <CDProjectRed/>
      <Bioware/>
    </Typography>
  );
};

const ActivisionBlizzard = () => {
  return (
    <>
      <TitleDivider title={'Activision Blizzard'}/>
      <Paragraph>
        {gameCompaniesParagraph.second}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.third}
      </Paragraph>
    </>
  );
};

const ElectronicArts = () => {
  return (
    <>
      <TitleDivider title={'Electronic Arts'}/>
      <Paragraph>
        {gameCompaniesParagraph.fourth}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.fifth}
      </Paragraph>
    </>
  );
};

const Nintendo = () => {
  return (
    <>
      <TitleDivider title={'Nintendo'}/>
      <Paragraph>
        {gameCompaniesParagraph.sixth}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.seventh}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.eighth}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.ninth}
      </Paragraph>
    </>
  );
};

const Ubisoft = () => {
  return (
    <>
      <TitleDivider title={'Ubisoft'}/>
      <Paragraph>
        {gameCompaniesParagraph.tenth}
      </Paragraph>
    </>
  );
};

const RockstarGames = () => {
  return (
    <>
      <TitleDivider title={'Rockstar Games'}/>
      <Paragraph>
        {gameCompaniesParagraph.eleventh}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.twelfth}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.thirteen}
      </Paragraph>
    </>
  );
};


const BethesdaSoftworks = () => {
  return (
    <>
      <TitleDivider title={'Bethesda Softworks'}/>
      <Paragraph>
        {gameCompaniesParagraph.fourteen}
      </Paragraph>
    </>
  );
};

const SquareEnix = () => {
  return (
    <>
      <TitleDivider title={'Square Enix'}/>
      <Paragraph>
        {gameCompaniesParagraph.fifteen}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.sixteen}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.seventeen}
      </Paragraph>
    </>
  );
};

const NaughtyDog = () => {
  return (
    <>
      <TitleDivider title={'Naughty Dog'}/>
      <Paragraph>
        {gameCompaniesParagraph.eighteen}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.nineteen}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.twenty}
      </Paragraph>
    </>
  );
};

const ValveCorporation = () => {
  return (
    <>
      <TitleDivider title={'Valve Corporation'}/>
      <Paragraph>
        {gameCompaniesParagraph.twentyOne}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.twentyTwo}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.twentyThree}
      </Paragraph>
    </>
  );
};


const CDProjectRed = () => {
  return (
    <>
      <TitleDivider title={'CD Project Red'}/>
      <Paragraph>
        {gameCompaniesParagraph.twentyFour}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.twentyFive}
      </Paragraph>
    </>
  );
};

const Bioware = () => {
  return (
    <>
      <TitleDivider title={'Bioware'}/>
      <Paragraph>
        {gameCompaniesParagraph.twentySix}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.twentySeven}
      </Paragraph>
    </>
  );
};

export default CompaniesPage;
