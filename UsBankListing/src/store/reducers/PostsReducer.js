import { CLEAR_POSTS, POSTS_LOADING, POSTS_SUCCESS, POSTS_ERROR,
    CLEAR_SEARCH_POSTS, POSTS_SEARCH_LOADING, POSTS_SEARCH_SUCCESS, POSTS_SEARCH_ERROR 
} from "../actiontypes/Posts"

const initState = {
    postsState:"",
    postSearch:""
}

 

const PostsReducer = (state=initState, action) =>
{
    switch(action.type){
    

        case CLEAR_POSTS:
            return{
                ...state,
                postsState:""
            }
            case POSTS_LOADING:
                return{
                    ...state,
                    postsState:"loading"
                }
        case POSTS_SUCCESS:
            return{
            ...state,
            postsState:action.res,
        }

        case POSTS_ERROR:
            return {
           ...state,
           postsState: action.res
            }

            case CLEAR_SEARCH_POSTS:
                return{
                    ...state,
                    postSearch:""
                }
                case POSTS_SEARCH_LOADING:
                    return{
                        ...state,
                        postSearch:"loading"
                    }
            case POSTS_SEARCH_SUCCESS:
                return{
                ...state,
                postSearch:action.res,
            }
    
            case POSTS_SEARCH_ERROR:
                return {
               ...state,
               postSearch: action.res
                }
     
          
            
        default:
            return state

    }
}


export default PostsReducer;