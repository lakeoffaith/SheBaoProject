import{
  AsyncStorage
} from 'react'

// Singleton pattern
function DataRepository(){
  if(typeof DataRepository.instance==='object'){
    return DataRepository.instance;
  }
  DataRepository.instance=this;
}
DataRepository.prototype._urlForQueryAndPage=(url,query,pageNumber)=>{
      if (query) {
      return (
        url + '?q=' +
        encodeURIComponent(query) + '&page_limit=10&page=' + pageNumber
      );
    } else {
      // With no query, load latest movies
      return (
        url + '?page_limit=10&page=' + pageNumber
      );
    }
  };

DataRepository.prototype._postFetch=function(reqUrl:string,params:?Object){
  return new Promise((resolve,reject)=>{
    fetch(reqUrl,{
      method:'post',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(params).replace(/{|}/gi, "")
     })
    .then((response)=>response.json())
    .then((responseData)=>{
      console.log("postfetch");
      console.log(responseData);
       resolve(responseData);
    })
    .catch((error)=>{
      console.error(error);
      resolve(null);
    })
  }
  );
}
DataRepository.prototype._getFetch=function(reqUrl:string){
  //先通过storage 查找
  //
  //
  var result=null;
//   return new Promise((resolve,reject)=>{
//     storage.load({
//     key:'list',
//     autoSync:false,
//   }).then(ret=>{
//     console.log("nihao"+ret);
//     resolve(ret);
//   })
// });
  return new Promise((resolve,reject)=>{
      fetch(reqUrl)
      .then((response)=>response.json())
      .then((responseData)=>{
        console.log(responseData+"==="+reqUrl);
        storage.save({
          key:"list",
          rawData:responseData
        });
         resolve(responseData);
      })
    .catch((error)=>{
      console.error(error);
      resolve(null);
    })
  }
  );
}

module.exports=DataRepository;
