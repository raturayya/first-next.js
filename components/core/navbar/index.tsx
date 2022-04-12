import dynamic from 'next/dynamic';

const NavbarAction = dynamic(() => import('@components/core/navbar/navbar-action'));
const NavbarLeading = dynamic(() => import('@components/core/navbar/navbar-leading'));

import { IAction } from '@components/core/navbar/navbar-action';
import { ILeading } from '@components/core/navbar/navbar-leading';

export interface INavbar {
  leading?: ILeading;
  actions?: IAction[];
}

const renderLeading = (navbar: INavbar) => {
  if (navbar.leading) return <NavbarLeading leading={navbar.leading} />;

  return null;
};

const renderAction = (navbar: INavbar) => {
  if (navbar.actions) return <NavbarAction actions={navbar.actions} />;

  return null;
};

const Navbar = (props: INavbar) => {
  return (
    <div className="fixed top-0 left-0 w-full p-[0px] my-0 mx-auto bg-white z-[1000]">
      <div className="py-[20px] px-[16px] md:px-[60px] flex items-center justify-between max-w-[1600px] my-[0px] mx-auto">
        {renderLeading(props)}
        {renderAction(props)}
      </div>
    </div>
  );
};

export default Navbar;
