import { UNKNOWN_ERROR } from "../actiontypes/UnKnownError";


const initState = {
    unknownErr:false,
}


const ErrorReducer = (state=initState, action) =>
{
    switch(action.type){
    

        case  UNKNOWN_ERROR:
            return{
                ...state,
                unknownErr:true
            }
      

            
        default:
            return state

    }
}


export default ErrorReducer;