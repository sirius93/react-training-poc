import config from "../configs/config.json";

const repoIssues = (state = [], action) => {
  switch (action.type) {
    case "GET_ISSUES_SUCCESS":
      return {
        issues: action.issues,
        items: action.issues.slice(0, config.ISSUES_ON_PAGE),
        status: true,
        message: ""
      };
      break;
    case "GET_ISSUES_FAILURE":
      return {
        issues: [],
        items: [],
        status: false,
        message: action.error
      };
      break;
    case "CHANGE_PAGE":
      return {
        ...state,
        items: action.payload
      };
      break;

    default:
      return state;
  }
};

export default repoIssues;
