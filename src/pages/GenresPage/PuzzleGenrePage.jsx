import {Typography} from "antd";
import {
  breakoutClone,
  exploration,
  physicsGame,
  puzzleParagraph, puzzlePlatformGame,
  tileMatchingGame
} from "../../data/GenresPage/puzzles.js";
import TitleDivider from "../../components/VideoGamesHistoryPage/TitleDivider.jsx";
import ImageGroup from "../../styles/ImageGroup/ImageGroup.jsx";

const {Title, Paragraph} = Typography;

const PuzzleGenrePage = () => {

  return (
    <Typography>
      <Title>Puzzle</Title>
      <Paragraph>
        {puzzleParagraph.first}
      </Paragraph>
      <Paragraph>
        {puzzleParagraph.second}
      </Paragraph>
      <Paragraph>
        {puzzleParagraph.third}
      </Paragraph>

      <BreakoutCloneGame/>
      <LogicalGame/>
      <PhysicsGame/>
      <CodingGame/>
      <Exploration/>
      <HiddenObject/>
      <RevealPicture/>
      <TitleMatchingGame/>
      <TraditionalPuzzleGame/>
      <PuzzlePlatform/>
    </Typography>
  );
};

const BreakoutCloneGame = () => {
  return (
    <>
      <TitleDivider title={'Breakout clone game'}/>
      <Paragraph>
        {puzzleParagraph.fourth}
      </Paragraph>
      <ImageGroup images={breakoutClone}/>
    </>
  );
};

const LogicalGame = () => {
  return (
    <>
      <TitleDivider title={'Logical game'}/>
      <Paragraph>
        {puzzleParagraph.fifth}
      </Paragraph>
    </>
  );
};

const PhysicsGame = () => {
  return (
    <>
      <TitleDivider title={'Physics game'}/>
      <Paragraph>
        {puzzleParagraph.sixth}
      </Paragraph>
      <Paragraph>
        {puzzleParagraph.seventh}
      </Paragraph>
      <ImageGroup images={physicsGame}/>
    </>
  );
};

const CodingGame = () => {
  return (
    <>
      <TitleDivider title={'Coding game'}/>
      <Paragraph>
        {puzzleParagraph.eighth}
      </Paragraph>
    </>
  );
};

const Exploration = () => {
  return (
    <>
      <TitleDivider title={'Trial-and-error/Exploration'}/>
      <Paragraph>
        {puzzleParagraph.ninth}
      </Paragraph>
      <ImageGroup images={exploration}/>
    </>
  );
};

const HiddenObject = () => {
  return (
    <>
      <TitleDivider title={'Hidden object game'}/>
      <Paragraph>
        {puzzleParagraph.tenth}
      </Paragraph>
    </>
  );
};

const RevealPicture = () => {
  return (
    <>
      <TitleDivider title={'Reveal the picture game'}/>
      <Paragraph>
        {puzzleParagraph.eleventh}
      </Paragraph>
    </>
  );
};

const TitleMatchingGame = () => {
  return (
    <>
      <TitleDivider title={'Tile-matching game'}/>
      <Paragraph>
        {puzzleParagraph.twelfth}
      </Paragraph>
      <ImageGroup images={tileMatchingGame}/>
    </>
  );
};

const TraditionalPuzzleGame = () => {
  return (
    <>
      <TitleDivider title={'Traditional puzzle game'}/>
      <Paragraph>
        {puzzleParagraph.thirteen}
      </Paragraph>
    </>
  );
};

const PuzzlePlatform = () => {
  return (
    <>
      <TitleDivider title={'Puzzle-platform game'}/>
      <Paragraph>
        {puzzleParagraph.fourteen}
      </Paragraph>
      <ImageGroup images={puzzlePlatformGame}/>
      <Paragraph>
        {puzzleParagraph.fifteen}
      </Paragraph>
      <Paragraph>
        {puzzleParagraph.sixteen}
      </Paragraph>
      <Paragraph>
        {puzzleParagraph.seventeen}
      </Paragraph>
    </>
  );
};


export default PuzzleGenrePage;
