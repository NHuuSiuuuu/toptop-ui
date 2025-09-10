import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import routesConfig from '~/config/routes'
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, UploadIcon } from '~/components/Icon';
import Image from '~/components/Image'
import Search from '~/components/Search'
// import 'tippy.js/dist/tippy.css'; // optional
const cx = classNames.bind(styles); // sd bind sẽ đặt được tên class như này: post-item

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
                {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
                {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
                {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback shortcuts',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {

  const currentUser = 1;

  // Handle Logic
  const handleMenuChange = (menuItem) => {
    // console.log(menuItem);
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/mixi',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
        {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true, // Có cái này nó sẽ có cái vạch
    },
  ];



  return (
    <header className={cx('wrapper')}>
      {/* cứ th nào làm thẻ cha trong component thì đặt là wrapper*/}
      <div className={cx('inner')}>
        {/*inner: tức là bênt trong  */}
        {/* Logo */}
        <div className={cx('logo')}>
          <Link to={routesConfig.home} className={cx('logo-link')}><img src={images.logo} alt="Tiktok lỏ" /></Link>
        </div>


        {/* Search */}
        <Search/>
      
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy content="Upload video" delay={[0, 200]}>
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>

              <button className={cx('action-btn')}>
                <MessageIcon/>
              </button>
            </>
          ) : (
            <>
              <Button text> Up load </Button> {/*Mặc định là size M */}
              <Button primary>Login</Button>
            </>
          )}
          {/* Menu */}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="1https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/0419dc5e1ff00281ac160b654b49f104~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=74100b14&x-expires=1757404800&x-signature=oq6Wzns%2F0rj8cLP8Ev7P8%2F6oCWs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt="Ronaldo"
                // fallBack="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/482235808_2177386846052698_6216436897432676126_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE0op-mLa779lVE9wwex9HKWUAN9RPg6DJZQA31E-DoMhVTOzHEXLAufdS1tkTxsC87D4RhNlfmtBPkKDmlMCjS&_nc_ohc=UTe9smFc85AQ7kNvwH2b6X2&_nc_oc=Admzu6t6oOrrElj3zqCmWp0TtL-qhZDL7u533FQoyLe1FFF9rhlHTvXfAZLwCDe3JFo&_nc_zt=23&_nc_ht=scontent.fhan3-2.fna&_nc_gid=UkEaDKN8Kn7zSFbqEBfN9w&oh=00_Afbi5gkMOok8kpfNdUeNtR7JEIq38jRV9YJHf3QqO55JnQ&oe=68C3753E"

              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
