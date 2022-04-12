import axios from '@api/api';
import ApiRoutes from '@api/api_routes';
import { ICreateUsers, IUpdateUsers } from '@models/users.model';

export default {
  getUsers: async () => {
    try {
      const url = ApiRoutes.users.list;
      const response = await axios.get(url);

      return response.data;
    } catch (err) {
      throw err;
    }
  },

  getUsersDetail: async (userId: number) => {
    try {
      const url = ApiRoutes.users.get(userId);
      const response = await axios.get(url);

      return response.data;
    } catch (err) {
      throw err;
    }
  },

  createUsers: async (user: ICreateUsers) => {
    try {
      const url = ApiRoutes.users.create;
      const response = await axios.post(url, user);

      return response.data;
    } catch (err) {
      throw err;
    }
  },

  updateUsers: async (userId: number, user: IUpdateUsers) => {
    try {
      const url = ApiRoutes.users.update(userId);
      const response = await axios.put(url, user);

      return response.data;
    } catch (err) {
      throw err;
    }
  },

  deleteUser: async (userId: number) => {
    try {
      const url = ApiRoutes.users.delete(userId);
      const response = await axios.delete(url);

      return response.data;
    } catch (err) {
      throw err;
    }
  }
};
