import HttpService from './HttpService'

//load contacts with pagination

 export  const loadCategories= async (page) =>
 {  
    const http = new HttpService();


  let  Url = "categories?per_page=20&page="+page;

  return http.getData(Url).then((data)=>{
    return data;
}).catch((error)=> {console.log(error)
    return error; 
     });

 }