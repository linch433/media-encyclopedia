import {Typography} from "antd";
import ThreeScene from "../../components/ThreeScene/ThreeScene.jsx";
import './ThreeSceneContainerStyle.css';

const {Paragraph} = Typography;

const ThreeSceneContainer = ({src, title}) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <div
        className={'grabbing'}
        style={{
          borderWidth: '2px',
          borderColor: '#454a6e',
          borderStyle: 'solid',
          marginBottom: '1.5rem',
          marginTop: '1rem',
        }}>
        <ThreeScene src={src}/>
      </div>
      <Paragraph style={{fontWeight: 'bold'}}>
        {title}
      </Paragraph>
    </div>
  );
};

export default ThreeSceneContainer;
