import HttpService from './HttpService'

//load contacts with pagination

 export  const loadPosts = async (page,categories) =>
 {  
    const http = new HttpService();


  let  Url = "posts?categories="+categories+"&per_page=20&page="+page;

  return http.getData(Url).then((data)=>{
     console.log(Url);
    return data;
}).catch((error)=> {
    return error; 
     });
 }
 
 export  const loadPost = async (id) =>
 {  
    const http = new HttpService();
  let  Url = "posts?slug="+id;
  return http.getData(Url).then((data)=>{
     console.log(Url);
    return data;
}).catch((error)=> {
    return error; 
     });
 }
