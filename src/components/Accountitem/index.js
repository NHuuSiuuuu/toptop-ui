import classNames from 'classnames/bind';
import styles from './Accountitem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles)
function AccountItem() {
  return <div className={cx('wrapper')}>
    <img className={cx('avatar')} src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/0419dc5e1ff00281ac160b654b49f104~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=74100b14&x-expires=1757404800&x-signature=oq6Wzns%2F0rj8cLP8Ev7P8%2F6oCWs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" alt="NHuu" />
    <div className={cx('info')}>
        <h4 className={cx('name')}>
            <span>Nguyễn Ngọc Hưng</span>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>messibucuronaldo</span>
    </div>
  </div>;
}

export default AccountItem;
