import {Typography} from "antd";
import {competitive, racing, sportsBasedFighting, sportsGame, sportsParagraph} from "../../data/GenresPage/sports.js";
import TitleDivider from "../../components/VideoGamesHistoryPage/TitleDivider.jsx";
import ImageGroup from "../../styles/ImageGroup/ImageGroup.jsx";

const {Title, Paragraph} = Typography;

const SportsGenrePage = () => {

  return (
    <Typography>
      <Title>Sports</Title>
      <Paragraph>
        {sportsParagraph.first}
      </Paragraph>
      <Racing/>
      <SportsGame/>
      <Competitive/>
      <SportsBaseFighting/>
    </Typography>
  );
};

const Racing = () => {
  return (
    <>
      <TitleDivider title={'Racing'}/>
      <Paragraph>
        {sportsParagraph.second}
      </Paragraph>
      <ImageGroup images={racing}/>
    </>
  )
}

const SportsGame = () => {
  return (
    <>
      <TitleDivider title={'Sports game'}/>
      <Paragraph>
        {sportsParagraph.third}
      </Paragraph>
      <ImageGroup images={sportsGame}/>
    </>
  )
}

const Competitive = () => {
  return (
    <>
      <TitleDivider title={'Competitive'}/>
      <Paragraph>
        {sportsParagraph.fourth}
      </Paragraph>
      <ImageGroup images={competitive}/>
    </>
  )
}

const SportsBaseFighting = () => {
  return (
    <>
      <TitleDivider title={'Sports-based fighting'}/>
      <Paragraph>
        {sportsParagraph.fifth}
      </Paragraph>
      <ImageGroup images={sportsBasedFighting}/>
    </>
  )
}

export default SportsGenrePage;