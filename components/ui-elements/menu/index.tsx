import React from 'react';
import { IAction } from '@components/core/navbar/navbar-action';
import Menu from '@mui/material/Menu';
import MenuItemComponent from './menu-item';

export interface IMenuComponent {
  anchorEl: any;
  handleClick?: any;
  handleClose: any;
  menus?: IAction[];
}

const MenuComponent = ({ anchorEl, handleClose, menus }: IMenuComponent) => {
  return (
    <>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        {menus
          ? menus.map((menu: IAction, j: number) => (
              <div key={j}>
                <MenuItemComponent menu={menu} handleClose={handleClose} />
              </div>
            ))
          : null}
      </Menu>
    </>
  );
};

export default MenuComponent;
