import { Platform } from 'react-native';


class HttpService
{
       
    setUrl = () =>
    {
       let url = "https://usbanklisting.com/wp-json/wp/v2";
        return url;
    }

    postData = async(item ,addedUrl,postType,tokenId="") =>
    {

        const requestOptions = this.postRequestOptions(null,item,postType);
         
        return fetch(this.setUrl()+"/"+addedUrl, requestOptions).then(
            response=>response.json());
    }


    getData = async(addedUrl,tokenId="") =>
    {
        console.log(this.setUrl()+"/"+addedUrl);
   
        const requestOptions = this.getRequestOptions(null);

        return fetch(this.setUrl()+"/"+addedUrl, requestOptions).then(
            response=>response.json());
    }


    deleteData = async(addedUrl,tokenId="") =>
    {
        const requestOptions = this.deleteRequestOptions(null);

        return fetch(this.setUrl()+"/"+addedUrl, requestOptions).then(
            response=>response.json());
    }

    getRequestOptions = (token) =>
    {
        let requestOptions = {
            method:'GET',
            headers:{
                'Authorization':'Bearer '+token,
                'Content-type':'application/json',
            }
        }

        return requestOptions;
    }


    postRequestOptions = (token,item,postType) =>
    {
        let requestOptions = {
            method:postType,
            headers:{'Authorization':'Bearer '+token,
                'Content-type':'Application/json',
            },

            body:JSON.stringify(item)


        }

        return requestOptions;
    }



    deleteRequestOptions = (token) =>
    {
        let requestOptions = {
            method:'DELETE',
            headers:{
                'Authorization':'Bearer '+token,
                'Content-type':'application/json',
            }
        }

        return requestOptions;
    }



}     


export default HttpService;








