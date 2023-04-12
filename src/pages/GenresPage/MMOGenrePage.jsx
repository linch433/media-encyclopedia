import {Typography} from "antd";
import {mmoParagraph} from "../../data/GenresPage/mmos.js";

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
    </Typography>
  );
};

export default MmoGenrePage;
