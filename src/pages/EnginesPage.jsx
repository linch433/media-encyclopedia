import {Typography} from "antd";
import {
  cryEnginePictures,
  enginesParagraphs, gameMakerPictures,
  godotPictures, panda3dPictures, renpyPictures,
  unityPictures,
  unrealEnginePictures
} from "../data/gameEngines.js";
import TitleDivider from "../components/VideoGamesHistoryPage/TitleDivider.jsx";
import ImageGroup from "../styles/ImageGroup/ImageGroup.jsx";
import ThreeScene from "../components/ThreeScene/ThreeScene.jsx";
import shiba from '../assets/shiba.glb';
import ThreeSceneContainer from "../styles/ThreeSceneContainer/ThreeSceneContainer.jsx";

const {Title, Paragraph} = Typography;

const EnginesPage = () => {
  return (
    <Typography>
      <Title>Ігрові двигуни</Title>
      <Paragraph>
        {enginesParagraphs.first}
      </Paragraph>
      <Paragraph>
        {enginesParagraphs.second}
      </Paragraph>
      <Paragraph>
        {enginesParagraphs.third}
      </Paragraph>
      <Paragraph>
        {enginesParagraphs.fourth}
      </Paragraph>
      <Paragraph>
        {enginesParagraphs.fifth}
      </Paragraph>
      <ThreeSceneContainer src={shiba} title={'3D моделі з котрими працюють розробники відеоігор'}/>

      <UnrealEngine/>
      <CryEngine/>
      <Unity/>
      <Godot/>
      <GameMaker/>
      <Panda3D/>
      <RenPy/>
    </Typography>
  );
};

const UnrealEngine = () => {
  return (
    <>
      <TitleDivider title={'Unreal Engine'}/>
      <Paragraph>
        {enginesParagraphs.sixth}
      </Paragraph>
      <Paragraph>
        {enginesParagraphs.seventh}
      </Paragraph>
      <ImageGroup images={unrealEnginePictures}/>
    </>
  );
};

const CryEngine = () => {
  return (
    <>
      <TitleDivider title={'CryEngine'}/>
      <Paragraph>
        {enginesParagraphs.eighth}
      </Paragraph>
      <Paragraph>
        {enginesParagraphs.ninth}
      </Paragraph>
      <ImageGroup images={cryEnginePictures}/>
    </>
  );
};

const Unity = () => {
  return (
    <>
      <TitleDivider title={'Unity'}/>
      <Paragraph>
        {enginesParagraphs.tenth}
      </Paragraph>
      <Paragraph>
        {enginesParagraphs.eleventh}
      </Paragraph>
      <ImageGroup images={unityPictures}/>
    </>
  );
};

const Godot = () => {
  return (
    <>
      <TitleDivider title={'Godot'}/>
      <Paragraph>
        {enginesParagraphs.twelfth}
      </Paragraph>
      <Paragraph>
        {enginesParagraphs.thirteen}
      </Paragraph>
      <ImageGroup images={godotPictures}/>
    </>
  );
};

const GameMaker = () => {
  return (
    <>
      <TitleDivider title={'GameMaker'}/>
      <Paragraph>
        {enginesParagraphs.fourteen}
      </Paragraph>
      <Paragraph>
        {enginesParagraphs.fifteen}
      </Paragraph>
      <ImageGroup images={gameMakerPictures}/>
    </>
  );
};

const Panda3D = () => {
  return (
    <>
      <TitleDivider title={'Panda3D'}/>
      <Paragraph>
        {enginesParagraphs.sixteen}
      </Paragraph>
      <Paragraph>
        {enginesParagraphs.seventeen}
      </Paragraph>
      <Paragraph>
        {enginesParagraphs.eighteen}
      </Paragraph>
      <Paragraph>
        {enginesParagraphs.nineteen}
      </Paragraph>
      <ImageGroup images={panda3dPictures}/>
    </>
  );
};

const RenPy = () => {
  return (
    <>
      <TitleDivider title={'Ren\'Py'}/>
      <Paragraph>
        {enginesParagraphs.twenty}
      </Paragraph>
      <Paragraph>
        {enginesParagraphs.twentyOne}
      </Paragraph>
      <ImageGroup images={renpyPictures}/>
    </>
  );
};

export default EnginesPage;
