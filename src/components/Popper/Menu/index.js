import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [] }, hideOnClick = false, onChange = defaultFn) {
  const [history, setHistory] = useState([{ data: items }]); // {data: items} - tức là danh sách menu gốc cấp 1
  const current = history[history.length - 1]; // Lấy phần tử cuối của mảng history

  // console.log(history)
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children; // item.children ? true : false;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]); // đi sâu thêm 1 cấp menu
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      // visible
      delay={[0, 700]}
      interactive
      hideOnClick={hideOnClick}
      offset={[12, 10]} // chiều ngang - chiều cao
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <WrapperPopper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1)); // xóa bỏ đi phần tử cuối cùng trong mảng
                }}
              />
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </WrapperPopper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))} // xử lý về menu trang 1 khi bỏ hover vào 3 chấm
    >
      {children}
    </Tippy>
  );
}

export default Menu;
