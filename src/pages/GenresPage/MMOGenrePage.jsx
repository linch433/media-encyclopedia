import {Typography} from "antd";
import {mmoParagraph} from "../../data/GenresPage/mmos.js";
import ReactPlayerWrapper from "../../components/ReactPlayer/ReactPlayerWrapper.jsx";

const MmoGenrePage = () => {
  const {Title, Paragraph} = Typography;

  return (
    <Typography>
      <Title>MMO</Title>
      <Paragraph>
        {mmoParagraph.first}
      </Paragraph>
      <Paragraph>
        {mmoParagraph.second}
      </Paragraph>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <ReactPlayerWrapper yourUrl={'https://youtu.be/nI77MvK3LqY'}/>
      </div>
    </Typography>
  );
};

export default MmoGenrePage;
