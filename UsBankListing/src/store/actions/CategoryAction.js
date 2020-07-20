import { CATEGORIES_LOADING, CATEGORIES_SUCCESS, CATEGORIES_ERROR,
     CLEAR_CATEGORIES, CATEGORIES_SEARCH_LOADING, CATEGORIES_SEARCH_SUCCESS, CLEAR_SEARCH_CATEGORIES } from "../actiontypes/Categories";
import { loadCategories, loadSearchCategories } from "../../services/CategoriesService";

export const GetCategories = (page) =>
{

   return (dispatch)=>{

       dispatch({type:CATEGORIES_LOADING});
       
       loadCategories(page).then((res)=>{
              
        console.log(res);
           if(res instanceof Array)
           {
                
                 dispatch({type:CATEGORIES_SUCCESS,res});
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


export const clearCategoryState = () =>
{
    return (dispatch)=>
    {
        dispatch({type:CLEAR_CATEGORIES});
    }
}



export const GetSearchCategories = (page,searchParam) =>
{

   return (dispatch)=>{

       dispatch({type:CATEGORIES_SEARCH_LOADING});
       
       loadSearchCategories(page,searchParam).then((res)=>{
              
        console.log(res);
           if(res instanceof Array)
           {
                console.log(res);
                 dispatch({type:CATEGORIES_SEARCH_SUCCESS,res});
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
 

export const clearSearchCategoryState = () =>
{
    return (dispatch)=>
    {
        dispatch({type:CLEAR_SEARCH_CATEGORIES});
    }
}