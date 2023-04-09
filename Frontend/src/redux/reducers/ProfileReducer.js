import * as ActionTypes from '../ActionTypes';
const initState = {
    news:[],
  };
  
  const ProfileReducer = (state = initState, action) => {
    switch (action.type) {
      
      case ActionTypes.LOADING:
        return {
          ...state,
          news: "loading...",
        };
  
      case ActionTypes.LOAD_PROFILE_SUCCESS:
        return {
          ...state,
          news: action.res,
        };
  
      case ActionTypes.LOAD_PROFILE_ERROR:
        return {
          ...state,
          news: action.res,
        };
    
      case ActionTypes.CODE_ERROR:
        return {
          ...state,
          news:
            "There seems to be a problem, please refresh your browser",
        };
  
      default:
        return state;
    }
  };
  
  export default ProfileReducer;
  