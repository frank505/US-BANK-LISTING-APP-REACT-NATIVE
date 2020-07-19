import {combineReducers} from 'redux'
import CategoryReducer from './CategoryReducer';
import ErrorReducer from './ErrorReducer';



const RootReducer = combineReducers({
category:CategoryReducer,
unknownErr:ErrorReducer
});





export default RootReducer