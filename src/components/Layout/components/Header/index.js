import classNames from 'classnames/bind'
import styles from './Header.module.scss'

const cx = classNames.bind(styles) // sd bind sẽ đặt được tên class như này: post-item

function Header() {
    return ( 
        <h2 className={cx('wrapper')}> {/* cứ th nào làm thẻ cha trong component thì đặt là wrapper*/}
            <div className={cx('inner')}> {/*inner: tức là bênt trong  */}
            {/* Logo */}
            {/* Search */}
            </div>
        </h2> )
}

export default Header;