import { CLOSE_MODAL_ACTION, OPEN_MODAL_ACTION } from '@redux/types/components/modal';

export const openModal = (data: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: OPEN_MODAL_ACTION,
      payload: data
    });
  };
};

export const closeModal = () => {
  return async (dispatch: any) => {
    dispatch({
      type: CLOSE_MODAL_ACTION,
      payload: null
    });
  };
};
