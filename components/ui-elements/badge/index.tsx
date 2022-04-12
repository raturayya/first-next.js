interface IBadge {
  color: 'primary' | 'danger' | 'success' | 'warning' | 'dark' | 'light';
  isIcon?: boolean;
  icon?: string;
  text: string;
  size: 'extraSmall' | 'small' | 'base' | 'large' | 'extraLarge';
}

const colors = {
  primary: 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800',
  danger: 'text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800',
  success: 'text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800',
  warning: 'text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800',
  dark: 'text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-300',
  light: 'bg-gray-700 text-gray-300 dark:text-gray-700 dark:bg-gray-100'
};

const sizes = {
  base: 'text-md font-semibold',
  large: 'text-lg font-semibold',
  extraLarge: 'text-xl font-semibold',
  small: 'text-sm font-medium',
  extraSmall: 'text-xs font-medium'
};

const Badge = ({ color, isIcon, icon, text = 'base', size = 'small' }: IBadge) => {
  return (
    <span className={`mr-2 px-2.5 py-0.5 rounded ${colors[color]} ${sizes[size]}`}>{text}</span>
  );
};

export default Badge;
