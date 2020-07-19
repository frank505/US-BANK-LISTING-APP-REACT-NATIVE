import { CLEAR_CATEGORIES, CATEGORIES_LOADING, 
    CATEGORIES_SUCCESS, CATEGORIES_ERROR } from "../actiontypes/Categories"

const initState = {
    categorieState:"",
}


const CategoryReducer = (state=initState, action) =>
{
    switch(action.type){
    

        case CLEAR_CATEGORIES:
            return{
                ...state,
                categorieState:""
            }
            case CATEGORIES_LOADING:
                return{
                    ...state,
                    categorieState:"loading"
                }
        case CATEGORIES_SUCCESS:
            return{
            ...state,
            categorieState:action.res,
        }

        case CATEGORIES_ERROR:
            return {
           ...state,
           categorieState: action.res
            }

            
        default:
            return state

    }
}


export default CategoryReducer;