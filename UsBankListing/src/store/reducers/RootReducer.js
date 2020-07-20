import {combineReducers} from 'redux'
import CategoryReducer from './CategoryReducer';
import ErrorReducer from './ErrorReducer';
import PostsReducer from './PostsReducer';



const RootReducer = combineReducers({
category:CategoryReducer,
unknownErr:ErrorReducer,
posts:PostsReducer
});
  




export default RootReducer