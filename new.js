var $bt=document.querySelector("#btn");
var $msg=document.querySelector("#msg");

$bt.onclick=()=>{
var promise=new Promise((resolve,reject)=>{
var req=new XMLHttpRequest;
req.open("GET","http://api.icndb.com/jokes/random");
req.onload=()=>{
  if(req.status==200){
    resolve(req.response)
  }
  else{
    reject("Failed")
  }
}
req.onerror=()=>{
    reject("ERROR")
}
req.send();
})
promise.then((res)=>{
  console.log("Success")
  $msg.innerHTML=JSON.parse(res).value.joke;
})
promise.catch((res)=>{
  console.log("FAIL")
  $msg.innerHTML=res;
})}//Thats all
