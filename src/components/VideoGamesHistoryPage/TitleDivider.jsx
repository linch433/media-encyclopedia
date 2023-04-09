import {Divider, Typography} from "antd";

const TitleDivider = ({title}) => {
  const {Title} = Typography
  return (
    <div>
      <Divider orientation='left' orientationMargin='0'>
        <Title level={5}>{title}</Title>
      </Divider>
    </div>
  );
};

export default TitleDivider;
