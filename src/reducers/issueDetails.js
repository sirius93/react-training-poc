import config from "../../public/config.json";

const issueDetail = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ISSUE_SUCCESS":
      return {
        ...state,
        detail: action.issueDetail,
        status: true,
        message: ""
      };
      break;
    case "FETCH_ISSUE_FAILURE":
      return {
        ...state,
        detail: {},
        status: false,
        message: action.error
      };
      break;

    default:
      return state;
  }
};

export default issueDetail;
