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
async function postFetch(url,query){
  var data={};
  data=query;
    url=BASEURL+url;
    var token;
    console.log(url);
    console.log(JSON.stringify(query).replace(/{|}/gi, ""));
    if(url.indexOf('login')==-1 && url.indexOf('Login')==-1){
       token= await storage.load({key:'token',autoSync:false});
       token=token.data;
    }
    // 'token':token
    // body: JSON.stringify(query).replace(/{|}/gi, "")
    return result= await fetch(url,{
      method:'post',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        'token':token
      },
      body:JSON.stringify(data)

     })
    .then((response)=>{return response.json()})
    .then((result)=>{
      console.log(result);
      if(result.success){
        return result;
      }else {
        alert('获取数据失败');
      }
    })
    .catch(error=>{
      console.log(error);
      alert('网络错误');
    })
}
async function getFetch(url,query){
    url=BASEURL+url+"?1=1";
    console.log(url);
    var token;
    if(url.indexOf('login')==-1 && url.indexOf('Login')==-1){
      try {
        token= await storage.load({key:'token',autoSync:false});
      } catch (e) {
        alert("用户没有登录");
         return null;
      }
       console.log(token);
         token=token.data;
         console.log("获取缓存 token="+token);

    }
    if(query!=null && query.page!=null && query.page>0)url+="&page="+query.page;
    if(query!=null && query.pageSize!=null && query.pageSize>0)url+="&pageSize="+query.pageSize;
    if(query!=null && query.qStr!=null && query.qStr.length>0)url+="&"+query.qStr;
    console.log(url);
    return result= await fetch(url,{
      method:'get',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        'token':token
      },
     })
    .then((response)=>response.json())
    .then((result)=>{
      if(result.success){
        return result;
      }else {
        alert('获取数据失败');
        return null;
      }
    })
    .catch(error=>{
      alert('网络错误');
      return null;
    })
}
async function getStorage(key){
  return await storage.load({
    key:key,
    autoSync:false
  }).then(ret=>{
      return ret;
    })
    .catch(error=>{
      return null;
    })

}
 DataRepository.prototype._fetch=async (demo)=>{
   if(demo.out.save){
      if(demo.data!=null && demo.data.page!=null && demo.data.page>0){
        demo.out.key=demo.out.key+"^"+demo.data.page+"^"+demo.data.pageSize;
      }
   }
  var result;
  if(demo.type==null || demo.type=='get')result= await getFetch(demo.url,demo.data);
  else {
    result= await postFetch(demo.url,demo.data);
  }
  //如果 result 为 null或者为 undefined 缓存中去获取
  console.log(result);
  if(result ==null || result ==undefined){
    if(demo.out.save){
      console.log("获取缓存");
      result=await getStorage(demo.out.key);
    }
  }else if(demo.out.save) {
    //缓存数据
    await storage.save({
      key:demo.out.key,
      rawData:result,
    });
    console.log("存放"+demo.out.key);
  }
  console.log(result);
  return result;
    //判断url 是否需要token
}
DataRepository.prototype._urlForQueryAndPage=(url,query,pageNumber)=>{
      if (query) {
      return (
        url + '?q=' +
        encodeURIComponent(query) + '&pageSize=10&page=' + pageNumber
        );
      } else {
        // With no query, load latest movies
        return (
          url + '?pageSize=10&page=' + pageNumber
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
  if(reqUrl.indexOf("http")==-1){
   reqUrl=BASEURL+reqUrl;
  }


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
            if(getKey!=null && getKey.length>0){
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
                        if(responseData.success){
                          if(saveKey!=null && saveKey.length>0){
                            storage.save({
                              key:saveKey,
                              rawData:responseData.data,
                            });
                          }
                           resolve(responseData.data);
                        }else {
                          reject(responseData.data);
                        }

                      })
                      .catch((error)=>{
                        reject("网络请求失败1");
                      })
                })
                .catch((error)=>{
                  reject("网络请求失败1");
                })
            }else {
              fetch(reqUrl)
              .then((response)=>response.json())
              .then((responseData)=>{
                if(saveKey!=null && saveKey.length>0){
                  storage.save({
                    key:saveKey,
                    rawData:responseData.data,
                  });
                }
                 resolve(responseData);
              })
              .catch((error)=>{
                reject("网络请求失败2");
              })
            }
        })

  }
  );
}

//从缓存中 获取token

module.exports=DataRepository;
