const userRepos = (state = [], action) => {
  switch (action.type) {
    case "GET_USER_REPOS":
      return {
        repos: action.payload,
        status: true,
        message: ""
      };
      break;
    case "GET_USER_REPOS_ERROR":
      return {
        repos: [],
        status: false,
        message: action.message
      };
      break;

    default:
      return state;
  }
};

export default userRepos;
