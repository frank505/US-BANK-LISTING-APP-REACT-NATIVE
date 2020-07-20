import { POSTS_LOADING, POSTS_SUCCESS,POST_LOADING,POST_SUCCESS, CLEAR_POSTS,CLEAR_POST, POSTS_SEARCH_LOADING, POSTS_SEARCH_SUCCESS, CLEAR_SEARCH_POSTS } from "../actiontypes/Posts";
import { loadPosts,loadPost, loadSearchPost} from "../../services/PostsService";

export const GetPostsAction = (page,categories) =>
{

   return (dispatch)=>{

       dispatch({type:POSTS_LOADING});
       
       loadPosts(page,categories).then((res)=>{
              
        console.log(res);
           if(res instanceof Array)
           {
                
                 dispatch({type:POSTS_SUCCESS,res});
           }else
           {
            res = "";
           }

                   
           },
           error=>{
               console.log(error);
           }
       )
   } 

} 


export const GetPostAction = (id) =>
{

   return (dispatch)=>{

       dispatch({type:POST_LOADING});
       
       loadPost(id).then((res)=>{
              
        console.log(res);
           if(res instanceof Array)
           {
                
                 dispatch({type:POST_SUCCESS,res});
           }else
           {
            res = "";
           }

                   
           },
           error=>{
               console.log(error);
           }
       )
   } 

} 


export const clearPostsState = () =>
{
    return (dispatch)=>
    {
        dispatch({type:CLEAR_POSTS});
    }
}

export const clearPostState = () =>
{
    return (dispatch)=>
    {
        dispatch({type:CLEAR_POST});
    }
}

   
export const GetSearchPostsAction = (category,page,searchParam) =>
{

   return (dispatch)=>{

       dispatch({type:POSTS_SEARCH_LOADING});
       
      loadSearchPost(category,page,searchParam).then((res)=>{
              
        console.log(res);
           if(res instanceof Array)
           {
                
                 dispatch({type:POSTS_SEARCH_SUCCESS,res});
           }else
           {
            res = "";
           }

                   
           },
           error=>{
               console.log(error);
           }
       )
   } 

} 


export const clearSearchPostState= () =>
{
    return (dispatch)=>
    {
        dispatch({type:CLEAR_SEARCH_POSTS});
    }
}