interface IAlert {
  color: 'primary' | 'danger' | 'success' | 'warning' | 'dark' | 'light' | 'attention';
  isIcon?: boolean;
  icon?: string;
  isDismissable?: boolean;
  actionDismissable?: any;
  children: any;
}

const colors = {
  primary: 'text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800',
  danger: 'text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800',
  success: 'text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800',
  warning: 'text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800',
  dark: 'text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-300',
  light: 'bg-gray-700 text-gray-300 dark:text-gray-700 dark:bg-gray-100',
  attention: 'clr-yellow-500 bg--yellow-400 dark:bg-yellow-200 dark:text-yellow-800'
};

const handleIcon = (isIcon: boolean, icon: any, color: string) => {
  if (isIcon) {
    return <i className="absolute -top-[12px] -left-[12px] text-[50px]">{icon}</i>;
  }

  return null;
};

const handleDismissable = (isButton: boolean, actionButton: any, color: string) => {
  if (isButton) {
    return (
      <button
        type="button"
        className={`ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8 ${color}`}
        data-collapse-toggle="alert-1"
        aria-label="Close"
        onClick={actionButton}>
        <span className="sr-only">Close</span>
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"></path>
        </svg>
      </button>
    );
  }

  return null;
};

const Alert = ({
  color,
  isIcon = false,
  icon,
  isDismissable = false,
  actionDismissable,
  children
}: IAlert) => {
  return (
    <div
      className={`relative flex items-center p-4 mb-4 text-sm rounded-lg overflow-hidden ${colors[color]}`}
      role="alert">
      {handleIcon(isIcon, icon, color)}

      <div className={`relative ml-3 text-sm font-medium`}>{children}</div>

      {handleDismissable(isDismissable, actionDismissable, color)}
    </div>
  );
};

export default Alert;
