const CommentsData = (state = [], action) => {
    switch (action.type) {
      case "FETCH_COMMENTS_SUCCESS":
        return {
          ...state,
          comments: action.comments,
          status: true,
          message: ""
        };
        break;
      case "FETCH_COMMENTS_FAILURE":
        return {
          ...state,
          comments: {},
          status: false,
          message: action.error
        };
        break;
  
      default:
        return state;
    }
  };
  
  export default CommentsData;