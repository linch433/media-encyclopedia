import {Tooltip} from "antd";
import styles from './CustomTooltip.module.css';

const CustomTooltip = ({title, children}) => {
  return (
    <Tooltip title={title}><span className={styles.custom_span}>{children}</span></Tooltip>
  );
};

export default CustomTooltip;
