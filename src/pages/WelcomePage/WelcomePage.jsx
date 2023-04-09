import {Image} from 'antd';
import CustomTooltip from "../../styles/CustomTooltip/CustomTooltip.jsx";
import departmentLogo from '../../assets/cafedra_logo.jpg';
import './welcomePageStyle.css';

const WelcomePage = () => {
  return (
    <div className={'WelcomePage'}>
      <div>Кафедра комп'ютерних систем та мереж</div>
      <Image src={departmentLogo} width={200} className={'departmentLogo'}/>
      <div>Назва дисципліни: "Мультимедійні засоби в комп'ютерних системах"</div>
      <div>Тема <CustomTooltip title={'Мультимедійна енциклопедія'} children={'МЕ'}/>: "Історія технології відеоігор"
      </div>
      <div>Виконав Копинець В. І., 2023 рік</div>
    </div>
  );
};

export default WelcomePage;
