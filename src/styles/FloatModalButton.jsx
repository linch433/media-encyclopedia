import {FloatButton, Modal} from "antd";
import {FormatPainterOutlined, QuestionOutlined, ContactsOutlined} from '@ant-design/icons';
import CustomTooltip from "./CustomTooltip/CustomTooltip.jsx";

const FloatModalButton = () => {
  const infoModalAboutDeveloper = () => {
    Modal.info({
      title: 'Info', content: (
        <div>
          <div>Кафедра комп'ютерних систем та мереж</div>
          <div>Назва дисципліни: "Мультимедійні засоби в комп'ютерних системах"</div>
          <div>Тема <CustomTooltip title={'Мультимедійна енциклопедія'} children={'МЕ'}/>: "Історія технології
            відеоігор"
          </div>
          <div>Виконав Копинець В. І., 2023 рік</div>
        </div>
      ),
      centered: true,
      width: 550,
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
      </FloatButton.Group>
    </>
  );
};

export default FloatModalButton;
