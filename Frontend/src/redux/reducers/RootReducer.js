import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import ProfileReducer from "./ProfileReducer";

const RootReducer = combineReducers({
   userAuth: AuthReducer,
   news: ProfileReducer,
  
});


export default RootReducer;