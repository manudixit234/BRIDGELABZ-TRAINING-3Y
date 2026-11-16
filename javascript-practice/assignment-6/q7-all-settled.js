// Q7 Promise.allSettled Dashboard
const started=Date.now();
function loadProfile(){return new Promise((resolve,reject)=>setTimeout(()=>Math.random()<.2?reject("Profile failed"):resolve("Profile Loaded"),2000));}
function loadPosts(){return new Promise((resolve,reject)=>setTimeout(()=>Math.random()<.2?reject("Posts failed"):resolve("Posts Loaded"),1500));}
function loadMessages(){return new Promise((resolve,reject)=>setTimeout(()=>Math.random()<.2?reject("Messages failed"):resolve("Messages Loaded"),1000));}
Promise.allSettled([loadProfile(),loadPosts(),loadMessages()]).then(results=>{results.forEach((result,index)=>console.log(["Profile","Posts","Messages"][index],result.status,result.status==="fulfilled"?result.value:result.reason));console.log("Total time:",Date.now()-started,"ms");});