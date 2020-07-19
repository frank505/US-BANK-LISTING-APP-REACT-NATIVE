import { CATEGORIES_LOADING, CATEGORIES_SUCCESS, CATEGORIES_ERROR } from "../actiontypes/Categories";
import { loadCategories } from "../../services/CategoriesService";

export const GetCategories = (page) =>
{

   return (dispatch)=>{

       dispatch({type:CATEGORIES_LOADING});
       
       loadCategories(page).then((res)=>{
              
            console.log(res);

                   dispatch({type:CATEGORIES_SUCCESS,res});
           },
           error=>{
               console.log(error);
           }
       )
   } 

} 