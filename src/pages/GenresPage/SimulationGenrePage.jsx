import {Typography} from "antd";
import {
  constructionManagement,
  lifeSimulation,
  simulationsParagraph,
  vehicleSimulation
} from "../../data/GenresPage/simulations.js";
import TitleDivider from "../../components/VideoGamesHistoryPage/TitleDivider.jsx";
import ImageGroup from "../../styles/ImageGroup/ImageGroup.jsx";

const {Title, Paragraph} = Typography;

const SimulationGenrePage = () => {

  return (
    <Typography>
      <Title>Simulation</Title>
      <Paragraph>
        {simulationsParagraph.first}
      </Paragraph>
      <ConstructionAndManagement/>
      <LifeSimulation/>
      <VehicleSimulation/>
    </Typography>
  );
};

const ConstructionAndManagement = () => {
  return (
    <>
      <TitleDivider title={'Construction and management simulation'}/>
      <Paragraph>
        {simulationsParagraph.second}
      </Paragraph>
      <Paragraph>
        {simulationsParagraph.third}
      </Paragraph>
      <Paragraph>
        {simulationsParagraph.fourth}
      </Paragraph>
      <ImageGroup images={constructionManagement}/>
    </>
  );
};

const LifeSimulation = () => {
  return (
    <>
      <TitleDivider title={'Life simulation'}/>
      <Paragraph>
        {simulationsParagraph.fifth}
      </Paragraph>
      <Paragraph>
        {simulationsParagraph.sixth}
      </Paragraph>
      <Paragraph>
        {simulationsParagraph.seventh}
      </Paragraph>
      <Paragraph>
        {simulationsParagraph.eighth}
      </Paragraph>
      <Paragraph>
        {simulationsParagraph.ninth}
      </Paragraph>
      <ImageGroup images={lifeSimulation}/>
    </>
  );
};

const VehicleSimulation = () => {
  return (
    <>
      <TitleDivider title={'Vehicle simulation'}/>
      <Paragraph>
        {simulationsParagraph.tenth}
      </Paragraph>
      <Paragraph>
        {simulationsParagraph.eleventh}
      </Paragraph>
      <Paragraph>
        {simulationsParagraph.twelfth}
      </Paragraph>
      <Paragraph>
        {simulationsParagraph.thirteen}
      </Paragraph>
      <Paragraph>
        {simulationsParagraph.fourteen}
      </Paragraph>
      <Paragraph>
        {simulationsParagraph.fifteen}
      </Paragraph>
      <ImageGroup images={vehicleSimulation}/>
    </>
  );
};


export default SimulationGenrePage;
