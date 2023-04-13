import {Typography} from "antd";
import TitleDivider from "../components/VideoGamesHistoryPage/TitleDivider.jsx";
import {
  activisionBlizzardPictures, bethesdaSoftworksPictures, biowarePictures, cdProjectRedPictures,
  electronicArtsPictures,
  gameCompaniesParagraph, naughtyDogPictures,
  nintendoCompPictures, rockstarGamesPictures, squareEnixPictures, ubisoftPictures, valveCorpPictures
} from "../data/gamingCompanies.js";
import ImageGroup from "../styles/ImageGroup/ImageGroup.jsx";
import ReactPlayer from "react-player";

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
      <ImageGroup images={activisionBlizzardPictures}/>
      <Paragraph>
        {gameCompaniesParagraph.third}
      </Paragraph>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <ReactPlayer url={'https://youtu.be/yaqeZ9Snt4E'} controls={true} height={480} width={640}/>
      </div>
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
      <ImageGroup images={electronicArtsPictures}/>
      <Paragraph>
        {gameCompaniesParagraph.fifth}
      </Paragraph>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <ReactPlayer url={'https://youtu.be/-mIIzGgYsG0'} controls={true} height={480} width={640}/>
      </div>
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
      <ImageGroup images={nintendoCompPictures}/>
      <Paragraph>
        {gameCompaniesParagraph.eighth}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.ninth}
      </Paragraph>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <ReactPlayer url={'https://youtu.be/_gfFlzxuaj8'} controls={true} height={480} width={640}/>
      </div>
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
      <ImageGroup images={ubisoftPictures}/>
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
      <ImageGroup images={rockstarGamesPictures}/>
      <Paragraph>
        {gameCompaniesParagraph.twelfth}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.thirteen}
      </Paragraph>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <ReactPlayer url={'https://youtu.be/v6mDqrmBt0Y'} controls={true} height={480} width={640}/>
      </div>
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
      <ImageGroup images={bethesdaSoftworksPictures}/>
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
      <ImageGroup images={squareEnixPictures}/>
      <Paragraph>
        {gameCompaniesParagraph.sixteen}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.seventeen}
      </Paragraph>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <ReactPlayer url={'https://youtu.be/uFrxTj9VscU'} controls={true} height={480} width={640}/>
      </div>
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
      <ImageGroup images={naughtyDogPictures}/>
      <Paragraph>
        {gameCompaniesParagraph.nineteen}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.twenty}
      </Paragraph>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <ReactPlayer url={'https://youtu.be/zS7CKM7wRJ8'} controls={true} height={480} width={640}/>
      </div>
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
      <ImageGroup images={valveCorpPictures}/>
      <Paragraph>
        {gameCompaniesParagraph.twentyTwo}
      </Paragraph>
      <Paragraph>
        {gameCompaniesParagraph.twentyThree}
      </Paragraph>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <ReactPlayer url={'https://youtu.be/JoV9o6b91Sc'} controls={true} height={480} width={640}/>
      </div>
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
      <ImageGroup images={cdProjectRedPictures}/>
      <Paragraph>
        {gameCompaniesParagraph.twentyFive}
      </Paragraph>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <ReactPlayer url={'https://youtu.be/XoBrhuKpTNs'} controls={true} height={480} width={640}/>
      </div>
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
      <ImageGroup images={biowarePictures}/>
      <Paragraph>
        {gameCompaniesParagraph.twentySeven}
      </Paragraph>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <ReactPlayer url={'https://youtu.be/uNZCjagAXWk'} controls={true} height={480} width={640}/>
      </div>
    </>
  );
};

export default CompaniesPage;
