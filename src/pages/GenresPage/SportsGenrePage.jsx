import {Typography} from "antd";
import {sportsParagraph} from "../../data/GenresPage/sports.js";
import TitleDivider from "../../components/VideoGamesHistoryPage/TitleDivider.jsx";

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
    </>
  )
}

export default SportsGenrePage;