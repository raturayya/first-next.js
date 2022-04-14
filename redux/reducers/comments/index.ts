import {
    CREATE_COMMENT_ACTION,
    CREATE_COMMENT_FAILED_ACTION,
    CREATE_COMMENT_SUCCESSED_ACTION,
    DELETE_COMMENT_ACTION,
    DELETE_COMMENT_FAILED_ACTION,
    DELETE_COMMENT_SUCCESSED_ACTION,
    GET_COMMENTS_ACTION,
    GET_COMMENTS_FAILED_ACTION,
    GET_COMMENTS_SUCCESSED_ACTION,
    GET_COMMENT_ACTION,
    GET_COMMENT_FAILED_ACTION,
    GET_COMMENT_SUCCESSED_ACTION,
    UPDATE_COMMENT_ACTION,
    UPDATE_COMMENT_FAILED_ACTION,
    UPDATE_COMMENT_SUCCESSED_ACTION
  } from '@redux/types/comments';
  
  const initialState = {
    comments: [],
    comment: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null
  };
  
  const comments = (state = initialState, action: any) => {
    switch (action.type) {
      case GET_COMMENTS_ACTION:
        return {
          ...state,
          isLoading: true,
          isSuccess: false,
          isError: false,
          error: null
        };
      case GET_COMMENTS_SUCCESSED_ACTION:
        return {
          ...state,
          comments: action.payload,
          isLoading: false,
          isSuccess: true,
          isError: false
        };
      case GET_COMMENTS_FAILED_ACTION:
        return {
          ...state,
          isLoading: false,
          isSuccess: false,
          isError: true,
          error: action.payload
        };
  
      case GET_COMMENT_ACTION:
        return {
          ...state,
          isLoading: true,
          isSuccess: false,
          isError: false,
          error: null
        };
      case GET_COMMENT_SUCCESSED_ACTION:
        return {
          ...state,
          post: action.payload,
          isLoading: false,
          isSuccess: true,
          isError: false
        };
      case GET_COMMENT_FAILED_ACTION:
        return {
          ...state,
          isLoading: false,
          isSuccess: false,
          isError: true,
          error: action.payload
        };
  
      case CREATE_COMMENT_ACTION:
        return {
          ...state,
          isLoading: true,
          isSuccess: false,
          isError: false,
          error: null
        };
      case CREATE_COMMENT_SUCCESSED_ACTION:
        return {
          ...state,
          comment: action.payload,
          isLoading: false,
          isSuccess: true,
          isError: false
        };
      case CREATE_COMMENT_FAILED_ACTION:
        return {
          ...state,
          isLoading: false,
          isSuccess: false,
          isError: true,
          error: action.payload
        };
  
      case UPDATE_COMMENT_ACTION:
        return {
          ...state,
          isLoading: true,
          isSuccess: false,
          isError: false,
          error: null
        };
      case UPDATE_COMMENT_SUCCESSED_ACTION:
        return {
          ...state,
          Comment: action.payload,
          isLoading: false,
          isSuccess: true,
          isError: false
        };
      case UPDATE_COMMENT_FAILED_ACTION:
        return {
          ...state,
          isLoading: false,
          isSuccess: false,
          isError: true,
          error: action.payload
        };
  
      case DELETE_COMMENT_ACTION:
        return {
          ...state,
          isLoading: true,
          isSuccess: false,
          isError: false,
          error: null
        };
      case DELETE_COMMENT_SUCCESSED_ACTION:
        return {
          ...state,
          comment: action.payload,
          isLoading: false,
          isSuccess: true,
          isError: false
        };
      case DELETE_COMMENT_FAILED_ACTION:
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
  
  export default comments;
  