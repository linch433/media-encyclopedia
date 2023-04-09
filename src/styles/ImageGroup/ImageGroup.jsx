import {Image} from 'antd';
import './imageGroupStyle.css';

const ImageGroup = ({images}) => {
  const height = 200;

  return (
    <div className='image_group'>
      {images.map((image, index) => (
        <div key={index}>
          <Image height={height} src={image.src} alt={image.title} style={{borderRadius: '5px'}}/>
          <div className={'image_title'}>{image.title}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageGroup;
