import {Collapse, Typography, theme} from 'antd';
import {CaretRightOutlined} from '@ant-design/icons';
import {genresArray, genreParagraphArray} from "../../data/GenresPage/genresArray.js";

const GenresPage = () => {
  const {Title, Paragraph} = Typography;
  const {Panel} = Collapse;
  const {token} = theme.useToken();

  const panelStyle = {
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  }

  return (
    <Typography>
      <Title>Жанри відеоігор</Title>
      {genreParagraphArray.map((paragraph, index) => (
        <Paragraph key={index}>
          {paragraph}
        </Paragraph>
      ))}
      <Paragraph>
        <div style={{marginBottom: '0.5rem'}}>Виділяють такі жанри відеоігор:</div>
        <Collapse
          bordered={false}
          expandIcon={({isActive}) => <CaretRightOutlined rotate={isActive ? 90 : 0}/>}
          style={{background: token.colorBgContainer}}
        >
          {genresArray.map((genre, index) => (
            <Panel header={genre.title} key={index}>
              {genre.items.length > 0 ? (
                <ul style={{listStyleType: 'disc'}}>
                  {genre.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (<p></p>)}
            </Panel>
          ))}
        </Collapse>
      </Paragraph>
    </Typography>
  );
};

export default GenresPage;
