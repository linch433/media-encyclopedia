import {Typography} from "antd";
import {mmoParagraph} from "../../data/GenresPage/mmos.js";
import ReactPlayer from "react-player";

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
        <ReactPlayer url={'https://youtu.be/nI77MvK3LqY'} controls={true} height={480} width={640}/>
      </div>
    </Typography>
  );
};

export default MmoGenrePage;
