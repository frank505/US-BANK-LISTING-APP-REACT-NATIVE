import { CLEAR_POSTS, POSTS_LOADING, POSTS_SUCCESS, POSTS_ERROR,
    CLEAR_POST, POST_LOADING, POST_SUCCESS, POST_ERROR 
} from "../actiontypes/Posts"

const initState = {
    postsState:"",
    postState:""
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

            case CLEAR_POST:
                return{
                    ...state,
                    postState:""
                }
                case POST_LOADING:
                    return{
                        ...state,
                        postState:"loading"
                    }
            case POST_SUCCESS:
                return{
                ...state,
                postState:action.res,
            }
    
            case POST_ERROR:
                return {
               ...state,
               postState: action.res
                }

            
        default:
            return state

    }
}


export default PostsReducer;