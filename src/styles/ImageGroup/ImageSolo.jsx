import {Image} from 'antd';
import './imageSoloStyle.css';

const ImageSolo = ({images}) => {

  return (
    <div className='image_group'>
      {images.map((image, index) => (
        <div key={index} className={'image_item'}>
          <div className={'image_source'}>
            <Image src={image.src} alt={image.title} height={'100%'}
                   style={{borderRadius: '5px', objectFit: 'contain'}}/>
          </div>
          <div className={'image_title'}>{image.title}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageSolo;
