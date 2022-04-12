const ApiRoutes = {
  users: {
    list: '/users',
    get: (userId: number) => {
      return '/users/' + userId;
    },
    create: '/users',
    update: (userId: number) => {
      return '/users/' + userId;
    },
    delete: (userId: number) => {
      return '/users/' + userId;
    }
  }
};

export default ApiRoutes;
