import {Typography} from "antd";
import {listOfReferences} from "../data/listOfReferences.js";

const {Title, Paragraph} = Typography;

const ReferencesPage = () => {
  return (
    <Typography>
      <Title>Список літератури</Title>
      {listOfReferences.map((reference, index) => (
        <Paragraph>
          {index + 1}. {reference}
        </Paragraph>
      ))}
    </Typography>
  );
};

export default ReferencesPage;
