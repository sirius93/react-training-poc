export const userDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'REQUEST_PROFILE_DATA':
      return { ...state, userData: action.userData};
    default: return state;
  }
}