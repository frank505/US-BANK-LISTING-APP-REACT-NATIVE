import { CATEGORIES_LOADING, CATEGORIES_SUCCESS, CATEGORIES_ERROR, CLEAR_CATEGORIES } from "../actiontypes/Categories";
import { loadCategories } from "../../services/CategoriesService";

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