import {ajaxCall} from '../Utils/service';
import store from '../store';

export const REQUEST_PROFILE_DATA = 'REQUEST_PROFILE_DATA'
export const REQUEST_PROFILE_REPOS = 'REQUEST_PROFILE_DATA'
export const REQUEST_REPO_ISSUES = 'REQUEST_REPO_ISSUES'
let baseUrl = "https://api.github.com";

export function getUserData(username){
    ajaxCall(`${baseUrl}/users/${username}/repos`).then(
      data => {
        store.dispatch({ type: "REQUEST_PROFILE_DATA", userData: data });
      }
    )
  }