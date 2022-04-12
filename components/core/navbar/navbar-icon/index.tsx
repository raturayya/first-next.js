import { IAction } from '@components/core/navbar/navbar-action';
import { ILeading } from '@components/core/navbar/navbar-leading';

const NavbarIcon = (action: ILeading | IAction) => {
  if (action.icon) {
    return <i>{action.icon}</i>;
  }

  return null;
};

export default NavbarIcon;
