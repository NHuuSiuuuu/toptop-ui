import classNames from 'classnames/bind';
import styles from './Accountitem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles)
function AccountItem() {
  return <div className={cx('wrapper')}>
    <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/0b8c1148e38d9167b0454d6cd29a0460~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=11a265dd&x-expires=1756738800&x-signature=13qT6Pl%2B4zmIeQrOaJRDsutbOvs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" alt="NHuu" />
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
