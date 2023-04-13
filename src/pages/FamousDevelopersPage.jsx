import {Typography} from "antd";
import {
  famousDevelopersInfo,
  kojimaPicture, kojimaWorks,
  meierPicture, meierWorks,
  miyamotoPicture, miyamotoWorks,
  newellPicture, newellWorks, perssonPicture, perssonWorks
} from "../data/famousDevelopers.js";
import TitleDivider from "../components/VideoGamesHistoryPage/TitleDivider.jsx";
import ImageGroup from "../styles/ImageGroup/ImageGroup.jsx";

const {Title, Paragraph} = Typography;

const FamousDevelopersPage = () => {
  return (
    <Typography>
      <Title>Відомі розробники</Title>
      <Paragraph>
        {famousDevelopersInfo.first}
      </Paragraph>
      <MiyamotoParagraph/>
      <KojimaParagraph/>
      <MeierParagraph/>
      <NewellParagraph/>
      <PerssonParagraph/>
    </Typography>
  );
};

const MiyamotoParagraph = () => {
  return (
    <>
      <TitleDivider title={'Shigeru Miyamoto'}/>
      <Paragraph>
        {famousDevelopersInfo.second}
      </Paragraph>
      <ImageGroup images={miyamotoPicture}/>
      <Paragraph>
        {famousDevelopersInfo.third}
      </Paragraph>
      <Paragraph>
        {famousDevelopersInfo.fourth}
      </Paragraph>
      <ImageGroup images={miyamotoWorks}/>
    </>
  );
};

const KojimaParagraph = () => {
  return (
    <>
      <TitleDivider title={'Hideo Kojima'}/>
      <Paragraph>
        {famousDevelopersInfo.fifth}
      </Paragraph>
      <ImageGroup images={kojimaPicture}/>
      <Paragraph>
        {famousDevelopersInfo.sixth}
      </Paragraph>
      <ImageGroup images={kojimaWorks}/>
    </>
  );
};

const MeierParagraph = () => {
  return (
    <>
      <TitleDivider title={'Sid Meier'}/>
      <Paragraph>
        {famousDevelopersInfo.seventh}
      </Paragraph>
      <ImageGroup images={meierPicture}/>
      <ImageGroup images={meierWorks}/>
    </>
  );
};

const NewellParagraph = () => {
  return (
    <>
      <TitleDivider title={'Gabe Newell'}/>
      <Paragraph>
        {famousDevelopersInfo.eighth}
      </Paragraph>
      <ImageGroup images={newellPicture}/>
      <Paragraph>
        {famousDevelopersInfo.ninth}
      </Paragraph>
      <Paragraph>
        {famousDevelopersInfo.tenth}
      </Paragraph>
      <ImageGroup images={newellWorks}/>
    </>
  );
};

const PerssonParagraph = () => {
  return (
    <>
      <TitleDivider title={'Markus Persson'}/>
      <Paragraph>
        {famousDevelopersInfo.eleventh}
      </Paragraph>
      <ImageGroup images={perssonPicture}/>
      <Paragraph>
        {famousDevelopersInfo.twelfth}
      </Paragraph>
      <Paragraph>
        {famousDevelopersInfo.thirteen}
      </Paragraph>
      <ImageGroup images={perssonWorks}/>
    </>
  );
};

export default FamousDevelopersPage;
