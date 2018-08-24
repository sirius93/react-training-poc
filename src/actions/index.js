import config from "../../public/config.json";
import userRepos from "../reducers/repo";
import messages from "../../public/messages.json";

export const getGithubUserRepo = (user, props) => {
  if (user) {
    fetch(`${config.GIT_USER_REPO_URL}/${user}/repos`)
      .then(resp => resp.json())
      .then(userRepos => {
        props.dispatch({ type: "GET_USER_REPOS", payload: userRepos });
      })
      .catch(error => {
        props.dispatch({ type: "GET_USER_REPOS_ERROR", message: error });
      });
  }
};

export const getIssuesSuccess = (issues, props) => {
  props.dispatch({
    type: "GET_ISSUES_SUCCESS",
    issues
  });
};

export const getIssuesError = (error, props) => {
  props.dispatch({
    type: "GET_ISSUES_FAILURE",
    error
  });
};

export const changePage = (payload, props) => {
  props.dispatch({
    type: "CHANGE_PAGE",
    payload
  });
};

export const fetchIssueSuccess = (issueDetail, props) => {
  props.dispatch({
    type: "FETCH_ISSUE_SUCCESS",
    issueDetail
  });
};

export const fetchIssueError = (error, props) => {
  props.dispatch({
    type: "FETCH_ISSUE_FAILURE",
    error
  });
};
