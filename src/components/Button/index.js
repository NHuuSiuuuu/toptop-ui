import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  disabled = false,
  rounded = false,
  small = false,
  large = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    // Chặn hết envent handle
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        // Kiểm tra tên key có bắt đầu bằng on không và kiểm tra value của key có phải là 1 func không
        delete props[key]; // xóa key khỏi props
      }
    });
  }

  // if (disabled) {
  //   delete props.onClick
  // }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className, // Khi có className nó sẽ lấy giá trị [className] làm key ở đây
    primary, // biết tắt của primary: primary - Chỉ được thêm khi prop primary là truthy
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

Button.prototype = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
};

// Ví dụ:

// Button.propTypes = {
//   children: PropTypes.node.isRequired, // node: bất kỳ thứ gì React có thể render được: string, number, element, arr
// };

/* 
<Button>Click me</Button>          // children là string

<Button><strong>Click</strong></Button> // children là React element

<Button>{123}</Button>             // children là number

<Button>{false}</Button>           // children là boolean (React bỏ qua, không render)
 */

export default Button;
