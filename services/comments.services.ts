import axios from '@api/api';
import ApiRoutes from '@api/api_routes';
import { ICreateComments, IUpdateComments } from '@models/comments.model';

export default {
  getComments: async () => {
    try {
      const url = ApiRoutes.comments.list;
      const response = await axios.get(url);

      return response.data;
    } catch (err) {
      throw err;
    }
  },

  getCommentsDetail: async (commentId: number) => {
    try {
      const url = ApiRoutes.comments.get(commentId);
      const response = await axios.get(url);

      return response.data;
    } catch (err) {
      throw err;
    }
  },

  createComments: async (user: ICreateComments) => {
    try {
      const url = ApiRoutes.comments.create;
      const response = await axios.post(url, user);

      return response.data;
    } catch (err) {
      throw err;
    }
  },

  updateComments: async (commentId: number, comment: IUpdateComments) => {
    try {
      const url = ApiRoutes.comments.update(commentId);
      const response = await axios.put(url, comment);

      return response.data;
    } catch (err) {
      throw err;
    }
  },

  deleteComment: async (commentId: number) => {
    try {
      const url = ApiRoutes.comments.delete(commentId);
      const response = await axios.delete(url);

      return response.data;
    } catch (err) {
      throw err;
    }
  }
};
