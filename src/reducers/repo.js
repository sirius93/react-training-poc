import config from "../configs/config.json";

const userRepos = (state = [], action) => {
  switch (action.type) {
    case "GET_USER_REPOS":
      return {
        repos: action.payload,
        items: action.payload.slice(0, config.ISSUES_ON_PAGE),
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
    case "CHANGE_REPO_PAGE":
      return {
        ...state,
        items: action.payload
      };
      break;
    default:
      return state;
  }
};

export default userRepos;
