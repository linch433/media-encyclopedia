import {Typography} from 'antd';
import TitleDivider from '../components/VideoGamesHistoryPage/TitleDivider.jsx';
import ImageGroup from '../styles/ImageGroup/ImageGroup.jsx';
import {
  paragraphData,
  pionerPeriod,
  goldenDecadeGames,
  goldenDecadeConsoles,
  eightBits,
  thirdPersonGraphic,
  onlineGaming,
  newCentury,
  esport,
  VR
} from '../data/gamesHistory.js';

const {Title, Paragraph} = Typography;

const VideoGamesHistoryPage = () => {
  return (
    <Typography>
      <Title>Історія відеоігор</Title>
      <Paragraph>{paragraphData.first}</Paragraph>

      <PionerPeriodSection/>
      <GoldenDecadeSection/>
      <EightBitsSection/>
      <ThirdPersonGraphicSection/>
      <OnlineGamingSection/>
      <TendenciesSection/>
      <KeyTendenciesSection/>
    </Typography>
  );
};

const PionerPeriodSection = () => {
  return (
    <>
      <TitleDivider title={'Піонерський період'}/>
      <Paragraph>{paragraphData.second}</Paragraph>
      <ImageGroup images={pionerPeriod}/>
    </>
  );
};

const GoldenDecadeSection = () => {
  return (
    <>
      <TitleDivider title={'Золотий вік'}/>
      <Paragraph>{paragraphData.third}</Paragraph>
      <ImageGroup images={goldenDecadeGames}/>
      <ImageGroup images={goldenDecadeConsoles}/>
    </>
  );
};

const EightBitsSection = () => {
  return (
    <>
      <TitleDivider title={'Ера 8-бітних консолей'}/>
      <Paragraph>{paragraphData.fourth}</Paragraph>
      <ImageGroup images={eightBits}/>
    </>
  );
};

const ThirdPersonGraphicSection = () => {
  return (
    <>
      <TitleDivider title={'3-D графіка'}/>
      <Paragraph>{paragraphData.fifth}</Paragraph>
      <ImageGroup images={thirdPersonGraphic}/>
    </>
  );
};

const OnlineGamingSection = () => {
  return (
    <>
      <TitleDivider title={'Онлайн геймінг'}/>
      <Paragraph>{paragraphData.sixth}</Paragraph>
      <ImageGroup images={onlineGaming}/>
    </>
  );
};

const TendenciesSection = () => {
  return (
    <>
      <Title level={3}>Тенденції</Title>
      <Paragraph>{paragraphData.seventh}</Paragraph>
      <ImageGroup images={newCentury}/>
      <Paragraph>{paragraphData.eighth}</Paragraph>
      <Paragraph>{paragraphData.ninth}</Paragraph>
      <Paragraph>{paragraphData.tenth}</Paragraph>
      <ImageGroup images={esport}/>
    </>
  );
};

const KeyTendenciesSection = () => {
  return (
    <>
      <TitleDivider title={'Ключові тенденції'}/>
      <Paragraph>{paragraphData.eleventh}</Paragraph>
      <Paragraph>{paragraphData.twelfth}</Paragraph>
      <ImageGroup images={VR}/>
      <Paragraph>{paragraphData.thirteen}</Paragraph>
      <Paragraph>{paragraphData.fourteen}</Paragraph>
    </>
  );
};

export default VideoGamesHistoryPage;


