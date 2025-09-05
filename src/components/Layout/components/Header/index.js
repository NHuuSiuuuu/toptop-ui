import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button'
import {Wrapper as WrapperPopper} from '~/components/Popper'
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/Accountitem';
// import 'tippy.js/dist/tippy.css'; // optional
const cx = classNames.bind(styles); // sd bind sẽ đặt được tên class như này: post-item
function Header() {
    const [searchResult, setSearchResult] = useState([]) // Mảng lưu dữ liệu tìm kiếm

    useEffect(()=> {
        setTimeout(()=>{
            setSearchResult([1,2,3])
        },0)
    },[])
    return (
        <header className={cx('wrapper')}>  {/* cứ th nào làm thẻ cha trong component thì đặt là wrapper*/}
        
        <div className={cx('inner')}>  {/*inner: tức là bênt trong  */}
            {/* Logo */}
            <div className={cx('logo')}>
            <img src={images.logo} alt="Tiktok lỏ" />
            </div>

            {/* Search */}
            <Tippy
                interactive
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <WrapperPopper>
                       <h4 className={cx('search-title')}>
                            Accounts
                        </h4>

                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </WrapperPopper>
                        </div>
                    )}
            >
            <div className={cx('search')}>
                <input type="text" placeholder="Search account and videos" spellCheck="false" />

                <button className={cx('clear')}>
                {/* Clear */}
                <FontAwesomeIcon icon={faCircleXmark} />
                </button>

                {/* Icon Loading */}
                <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />

                <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} /> {/* Icon Search */}
                </button>
            </div>
            </Tippy>
            <div className={cx('actions')}>
                <Button text > {/*Mặc định là size M */}
                    Up load
                </Button>
                {/* <Button  leftIcon={<FontAwesomeIcon icon={faSignIn} />}>  
                    Button có icon
                </Button> */}
                <Button primary>
                    Login
                </Button>
            </div>
        </div>
        </header>
    );
}

export default Header;
