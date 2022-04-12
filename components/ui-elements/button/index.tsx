interface IButtonProps {
  type: 'button' | 'submit';
  children: JSX.Element | React.ReactChild;
  className?: string;
  color?: 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'gray';
  size?: 'extra-small' | 'small' | 'base' | 'large' | 'extra-large';
  disabled?: boolean;
  isOutlined?: boolean;
  isBlock?: boolean;
  isLoading?: boolean;
  onClick?: any;
  dataUnq?: string;
}

const Button = ({
  type = 'button',
  children,
  className,
  color = 'primary',
  size = 'base',
  disabled,
  isOutlined = false,
  isBlock = false,
  isLoading = false,
  onClick,
  dataUnq = 'button-action-default'
}: IButtonProps) => {
  let baseClass = `button ${color ? 'button--' + color : ''} ${size ? 'button--' + size : ''} ${
    isOutlined ? 'button--outlined' : ''
  } ${isBlock ? 'button--block' : ''}`;

  return (
    <button
      type={type}
      className={className ? baseClass + ' ' + className : baseClass}
      disabled={disabled || isLoading}
      onClick={onClick}
      data-unq={dataUnq}>
      {isLoading ? <span className="text-sm">Waiting</span> : children}
    </button>
  );
};

export default Button;
