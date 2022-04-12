import { OPEN_MODAL_ACTION, CLOSE_MODAL_ACTION } from '@redux/types/components/modal';

const initialState = {
  isShow: false,
  data: null
};

const modal = (state = initialState, action: any) => {
  switch (action.type) {
    case OPEN_MODAL_ACTION:
      return {
        ...state,
        isShow: true,
        data: action.payload
      };
    case CLOSE_MODAL_ACTION:
      return {
        ...state,
        isShow: false,
        data: null
      };

    default:
      return { ...state };
  }
};

export default modal;
