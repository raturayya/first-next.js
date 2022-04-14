import { ICreateUsers, IUpdateUsers } from '@models/users.model';
import {
  CREATE_USER_ACTION,
  CREATE_USER_FAILED_ACTION,
  CREATE_USER_SUCCESSED_ACTION,
  DELETE_USER_ACTION,
  DELETE_USER_FAILED_ACTION,
  DELETE_USER_SUCCESSED_ACTION,
  GET_USERS_ACTION,
  GET_USERS_FAILED_ACTION,
  GET_USERS_SUCCESSED_ACTION,
  GET_USER_ACTION,
  GET_USER_FAILED_ACTION,
  GET_USER_SUCCESSED_ACTION,
  UPDATE_USER_ACTION,
  UPDATE_USER_FAILED_ACTION,
  UPDATE_USER_SUCCESSED_ACTION
} from '@redux/types/users';
import usersService from '@services/users.services';

export const UsersAction = () => {
  return async (dispatch: any) => {
    dispatch({ type: GET_USERS_ACTION });

    await usersService
      .getUsers()
      .then((res: any) => {
        dispatch({
          type: GET_USERS_SUCCESSED_ACTION,
          payload: res
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_USERS_FAILED_ACTION,
          payload: err
        });
      });
  };
};

export const getUsersDetailAction = (userId: number) => {
  return async (dispatch: any) => {
    dispatch({ type: GET_USER_ACTION });

    await usersService
      .getUsersDetail(userId)
      .then((res: any) => {
        dispatch({
          type: GET_USER_SUCCESSED_ACTION,
          payload: res
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_USER_FAILED_ACTION,
          payload: err
        });
      });
  };
};

export const createUserAction = (user: ICreateUsers) => {
  return async (dispatch: any) => {
    dispatch({ type: CREATE_USER_ACTION });

    await usersService
      .createUsers(user)
      .then((res: any) => {
        dispatch({
          type: CREATE_USER_SUCCESSED_ACTION,
          payload: res
        });
      })
      .catch((err) => {
        dispatch({
          type: CREATE_USER_FAILED_ACTION,
          payload: err
        });
      });
  };
};

export const updateUserAction = (usersId: number, user: IUpdateUsers) => {
  return async (dispatch: any) => {
    dispatch({ type: UPDATE_USER_ACTION });

    await usersService
      .updateUsers(usersId, user)
      .then((res: any) => {
        dispatch({
          type: UPDATE_USER_SUCCESSED_ACTION,
          payload: res
        });
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_USER_FAILED_ACTION,
          payload: err
        });
      });
  };
};

export const deleteUserAction = (userId: number) => {
  return async (dispatch: any) => {
    dispatch({ type: DELETE_USER_ACTION });

    await usersService
      .deleteUser(userId)
      .then((res: any) => {
        dispatch({
          type: DELETE_USER_SUCCESSED_ACTION,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: DELETE_USER_FAILED_ACTION,
          payload: err
        });
      });
  };
};
