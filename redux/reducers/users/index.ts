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

const initialState = {
  posts: [],
  post: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null
};

const users = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USERS_ACTION:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: null
      };
    case GET_USERS_SUCCESSED_ACTION:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
        isSuccess: true,
        isError: false
      };
    case GET_USERS_FAILED_ACTION:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: action.payload
      };

    case GET_USER_ACTION:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: null
      };
    case GET_USER_SUCCESSED_ACTION:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
        isSuccess: true,
        isError: false
      };
    case GET_USER_FAILED_ACTION:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: action.payload
      };

    case CREATE_USER_ACTION:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: null
      };
    case CREATE_USER_SUCCESSED_ACTION:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
        isSuccess: true,
        isError: false
      };
    case CREATE_USER_FAILED_ACTION:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: action.payload
      };

    case UPDATE_USER_ACTION:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: null
      };
    case UPDATE_USER_SUCCESSED_ACTION:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
        isSuccess: true,
        isError: false
      };
    case UPDATE_USER_FAILED_ACTION:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: action.payload
      };

    case DELETE_USER_ACTION:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: null
      };
    case DELETE_USER_SUCCESSED_ACTION:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isSuccess: true,
        isError: false
      };
    case DELETE_USER_FAILED_ACTION:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: action.payload
      };

    default:
      return { ...state };
  }
};

export default users;
