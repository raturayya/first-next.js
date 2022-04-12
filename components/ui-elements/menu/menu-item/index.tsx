import { IAction } from '@components/core/navbar/navbar-action';
import MenuItem from '@mui/material/MenuItem';
// import { logoutAction } from '@redux/actions/auth';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

interface IMenuItem {
  menu: IAction;
  handleClose: any;
}

const MenuItemComponent = ({ menu, handleClose }: IMenuItem) => {
  const authState = useSelector((state: any) => state.auth);
  const [isLogout, setIsLogout] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogout && authState.isSuccess) {
      window.location.href = '/redeem';
      setIsLogout(false);
    }
  }, [authState.isSuccess, isLogout]);

  return (
    <>
      <MenuItem
        onClick={() => {
          if (menu.isLogout) {
            setIsLogout(true);
            // dispatch(logoutAction());
          } else {
            router.push(menu.routeTo);
          }
          handleClose();
        }}
        data-unq="navbar-button-goToProfile">
        {menu.title}
      </MenuItem>
    </>
  );
};

export default MenuItemComponent;
