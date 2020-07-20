import { CLEAR_CATEGORIES, CATEGORIES_LOADING, 
    CATEGORIES_SUCCESS, CATEGORIES_ERROR, CLEAR_SEARCH_CATEGORIES, 
    CATEGORIES_SEARCH_LOADING, CATEGORIES_SEARCH_SUCCESS, 
    CATEGORIES_SEARCH_ERROR } from "../actiontypes/Categories"

const initState = {
    categorieState:"",
    categoriesSearchState:""
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
         
            case CLEAR_SEARCH_CATEGORIES:
            return{
                ...state,
                categoriesSearchState:""
            }
            case CATEGORIES_SEARCH_LOADING:
                return{
                    ...state,
                    categoriesSearchState:"loading"
                }
        case CATEGORIES_SEARCH_SUCCESS:
            return{
            ...state,
            categoriesSearchState:action.res,
        }

        case CATEGORIES_SEARCH_ERROR:
            return {
           ...state,
           categoriesSearchState: action.res
            }
            
        default:
            return state

    }
}


export default CategoryReducer;