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
        if(response.status==401)
        {
            console.log("ready to redirect");       
        }else if(response.status==500)
        {
            console.log('500')
        }else if(response.status==404)
        {
            console.log('404')
        }
        return response;
    },

    responseError: function (error) {
      
        if(error.status==undefined || error.status==401)
        {
              store.dispatch({type:UNKNOWN_ERROR})
        }
        // Handle an fetch error
        return Promise.reject(error);
    } 
});