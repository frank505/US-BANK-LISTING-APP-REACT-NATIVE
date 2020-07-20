import fetchIntercept from 'fetch-intercept';
import { UNKNOWN_ERROR } from './store/actiontypes/UnKnownError';




export const HttpInterceptor = (store) =>fetchIntercept.register({
    request: function (url, config) {
        // Modify the url or config here
        // config.headers.Authorization = "Bearer "+localStorage.getItem("crud_app");
        return [url, config];
    },

    requestError: function (error) {

        console.log(error);
        return Promise.reject(error);
    },

    response: function (response) {
        // Modify the reponse object
        console.log(response.status);
        // if(response.status==500)
        // {
        //     store.dispatch({type:UNKNOWN_ERROR});

        // }else if(response.status==404)
        // {
        //     store.dispatch({type:UNKNOWN_ERROR});
        // }
        return response;
    },

    responseError: function (error) {
      
       
              store.dispatch({type:UNKNOWN_ERROR})
        // Handle an fetch error
        return Promise.reject(error);
    } 
});