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
  },

  comments: {
    list: '/comments',
    get: (commentId: number) => {
      return '/comments/' + commentId;
    },
    create: '/comments',
    update: (commentId: number) => {
      return '/comments/' + commentId;
    },
    delete: (commentId: number) => {
      return '/comments/' + commentId;
    }
  }
};

export default ApiRoutes;
