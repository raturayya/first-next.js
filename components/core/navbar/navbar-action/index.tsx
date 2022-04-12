import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const NavbarIcon = dynamic(() => import('@components/core/navbar/navbar-icon'));
const NavbarImage = dynamic(() => import('@components/core/navbar/navbar-image'));
const MenuComponent = dynamic(() => import('@components/ui-elements/menu'));
const Button = dynamic(() => import('@mui/material/Button'));
const KeyboardArrowDownIcon = dynamic(() => import('@mui/icons-material/KeyboardArrowDown'));

import { IMenuComponent } from '@components/ui-elements/menu';
import storageHelper from '@helpers/storage.helper';

interface IActionComponent {
  actions: IAction[];
}

export interface IAction {
  type: 'link' | 'menu';
  routeTo: string;
  icon?: string;
  imageUrl?: string;
  title?: string;
  menus?: IAction[];
  isLogout?: boolean;
}

const renderLink = (action: IAction) => {
  return (
    <Link href={action.routeTo}>
      <a className="flex items-center cursor-pointer">
        <NavbarIcon {...action} />
        <NavbarImage {...action} />
        {action.title}
      </a>
    </Link>
  );
};

const renderMenu = (action: IAction, menu: IMenuComponent) => {
  return (
    <>
      <Button
        className="text-gray-600"
        aria-controls="account-menu"
        aria-haspopup="true"
        onClick={menu.handleClick}
        data-unq="navbar-button-goToProfile"
        endIcon={<KeyboardArrowDownIcon />}>
        <div className="flex items-center text-gray-600 tt-capitalize">
          {storageHelper.get(`${process.env.NEXT_PUBLIC_STORAGE_PROFILE_NAME}`)?.name ||
            action.title}
        </div>
      </Button>
      <MenuComponent {...menu} />
    </>
  );
};

const NavbarAction = (props: IActionComponent) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (props.actions) {
    return (
      <div className="flex items-center space-x-4">
        {props.actions.map((action: IAction, i: number) => (
          <React.Fragment key={i}>
            {action.type === 'link'
              ? renderLink(action)
              : renderMenu(action, {
                  anchorEl: anchorEl,
                  handleClick: (e: any) => handleClick(e),
                  handleClose: () => handleClose(),
                  menus: action.menus
                })}
          </React.Fragment>
        ))}
      </div>
    );
  }

  return null;
};

export default NavbarAction;
