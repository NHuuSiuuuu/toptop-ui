import { useEffect, useRef, useState } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as searchServices from '~/services/searchService';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import AccountItem from '~/components/Accountitem';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { SearchIcon } from '~/components/Icon';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState(''); // Lư gtri input
  const [searchResult, setSearchResult] = useState([]); // Mảng lưu dữ liệu tìm kiếm
  const [showResult, setShowResult] = useState(true); // quản lý ấn/hiện kết quả
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef(); // tạo ref truy cập trực tiếp vào input
  useEffect(() => {
    // Nếu ô tìm kiếm trống thì không cần fetch dữ liệu
    if (!debouncedValue.trim()) {
      // loại bỏ khoảng trắng ở đầu và cuối chuỗi
      setSearchResult([]);
      return; // Nếu searchValue rỗng thì thoát hàm k thực hiện phần fetch(...), không gọi API
    }

    const fetchApi = async () => {
      // Trước khi gọi API xét nó là true
      setLoading(true);

      const result = await searchServices.search(debouncedValue);
      setSearchResult(result);

      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);

  // Hàm xóa nội dung trong input
  const handleClear = () => {
    setSearchValue(''); // reset input
    setSearchResult([]); // reset kết quả
    inputRef.current.focus(); // focus lại vào input
  };

  //   Hàm xử lý ẩn kết quả đi
  const handleHideResult = () => {
    setShowResult(false);
  };

  // Hàm
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      // Nếu k bắt đầu bằng khoảng trắng thì mới setSearchValue
      setSearchValue(searchValue);
      // return
    }
  };

  return (
    // Using a wrapper <div> or <span> tag around the reference element solves 
    // this by creating a new parentNode context
    <div>
      <HeadlessTippy
        appendTo={() => document.body}
        interactive // cho phép thao tác bên trong popper
        visible={showResult && searchResult.length > 0} // điều kiện hiển thị
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <WrapperPopper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </WrapperPopper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={searchValue}
            type="text"
            placeholder="Search account and videos"
            spellCheck="false"
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue &&
            !loading && ( // Nếu có text và ko có loading thì hiện nút clear
              <button className={cx('clear')} onClick={handleClear}>
                <FontAwesomeIcon icon={faCircleXmark} /> {/* Clear */}
              </button>
            )}
          {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}
          <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <SearchIcon /> {/* Icon Search */}
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
