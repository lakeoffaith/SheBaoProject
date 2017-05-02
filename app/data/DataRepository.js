import{
  AsyncStorage
} from 'react'
import {BASEURL} from './rap.js';
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
//网络请求和缓存获取数据。
DataRepository.prototype._getFetch=function(reqUrl:string,getKey:string,saveKey:string){
  var reqUrl=BASEURL+reqUrl;

  //先通过storage 查找
  //
  //

  return new Promise((resolve,reject)=>{
      //如果key 不为空，没有结果产生，才会区网络请求数据
          storage.load({
            key:saveKey,
            autoSync:false,
          })
          .then(ret=>{
             resolve(ret);
          })
          .catch(error=>{
            storage.load({
              key:getKey,
              autoSync:false,
            }).then(getPar=>{
                  if(getKey=='token'){
                    reqUrl=reqUrl+"&token="+getPar
                  }
                  fetch(reqUrl)
                  .then((response)=>response.json())
                  .then((responseData)=>{
                    if(saveKey!=null && saveKey.length>0){
                      storage.save({
                        key:saveKey,
                        rawData:responseData.data,
                      });
                    }
                     resolve(responseData.data);
                  })
                  .catch((error)=>{
                    reject("网络请求失败");
                  })
            })



        })

  }
  );
}

//从缓存中 获取token

module.exports=DataRepository;
