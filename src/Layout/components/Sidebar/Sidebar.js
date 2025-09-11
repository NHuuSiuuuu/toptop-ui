import config from '~/config';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import {
  HomeIcon,
  HomeActiveIcon,
  UsersGroupIcon,
  UsersGroupActiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from '~/components/Icon';

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For Your" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon/>} />
        <MenuItem title="Following" to={config.routes.following} icon={<UsersGroupIcon />} activeIcon={<UsersGroupActiveIcon/>} />
        <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon/>} />
      </Menu>
    </aside>
  );
}

export default Sidebar;
