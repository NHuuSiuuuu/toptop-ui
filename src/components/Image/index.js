import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

console.log('Anhe', images.noImage);

// Khi mà ko chuyền fallBack từ ngoài vào(Header/index.js) thì nó sẽ lấy images.noImage | và nếu chuyền fallback từ ngoài vào thì images.noImage sẽ không được sử dụng nữa
const Image = forwardRef(({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) => {
  //fallBack: customFallBack = images.noImage: đổi tên tành custom và gán giá trị mặc định
  const [fallBack, setFallBack] = useState(''); // khi lỗi sẽ thay thế

  const handleError = () => {
    setFallBack(customFallBack); // khi lỗi nó sẽ dùng ảnh này
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      src={fallBack || src}
      alt={alt}
      ref={ref}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
