import { ICreateComments, IUpdateComments } from '@models/comments.model';
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
import usersService from '@services/comments.services';

export const getCommentsAction = () => {
  return async (dispatch: any) => {
    dispatch({ type: GET_COMMENTS_ACTION });

    await usersService
      .getComments()
      .then((res: any) => {
        dispatch({
          type: GET_COMMENTS_SUCCESSED_ACTION,
          payload: res
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_COMMENTS_FAILED_ACTION,
          payload: err
        });
      });
  };
};

export const getCommentsDetailAction = (commentId: number) => {
  return async (dispatch: any) => {
    dispatch({ type: GET_COMMENT_ACTION });

    await usersService
      .getCommentsDetail(commentId)
      .then((res: any) => {
        dispatch({
          type: GET_COMMENT_SUCCESSED_ACTION,
          payload: res
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_COMMENT_FAILED_ACTION,
          payload: err
        });
      });
  };
};

export const createCommentAction = (comment: ICreateComments) => {
  return async (dispatch: any) => {
    dispatch({ type: CREATE_COMMENT_ACTION });

    await usersService
      .createComments(comment)
      .then((res: any) => {
        dispatch({
          type: CREATE_COMMENT_SUCCESSED_ACTION,
          payload: res
        });
      })
      .catch((err) => {
        dispatch({
          type: CREATE_COMMENT_FAILED_ACTION,
          payload: err
        });
      });
  };
};

export const updateCommentAction = (commentsId: number, comment: IUpdateComments) => {
  return async (dispatch: any) => {
    dispatch({ type: UPDATE_COMMENT_ACTION });

    await usersService
      .updateComments(commentsId, comment)
      .then((res: any) => {
        dispatch({
          type: UPDATE_COMMENT_SUCCESSED_ACTION,
          payload: res
        });
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_COMMENT_FAILED_ACTION,
          payload: err
        });
      });
  };
};

export const deleteCommentAction = (commentId: number) => {
  return async (dispatch: any) => {
    dispatch({ type: DELETE_COMMENT_ACTION });

    await usersService
      .deleteComment(commentId)
      .then((res: any) => {
        dispatch({
          type: DELETE_COMMENT_SUCCESSED_ACTION,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: DELETE_COMMENT_FAILED_ACTION,
          payload: err
        });
      });
  };
};
