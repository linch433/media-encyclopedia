import {FloatButton, Modal} from "antd";
import {FormatPainterOutlined, QuestionOutlined, ContactsOutlined} from '@ant-design/icons';

const FloatModalButton = () => {
  const infoModalAboutDeveloper = () => {
    Modal.info({
      title: 'Інформація про розробника медіа-енциклопедії', content: (
        <div>
          Content, abc
        </div>
      ),
      centered: true,
      width: 600,
    })
  };

  return (
    <>
      <FloatButton.Group
        trigger="hover"
        type="default"
        icon={<QuestionOutlined/>}
      >
        <FloatButton
          icon={<ContactsOutlined/>}
          tooltip={<div>Інформація про розробника</div>}
          onClick={infoModalAboutDeveloper}
        />
        <FloatButton
          icon={<FormatPainterOutlined/>}
          tooltip={<div>Зміна теми</div>}
        />
      </FloatButton.Group>
    </>
  );
};

export default FloatModalButton;
