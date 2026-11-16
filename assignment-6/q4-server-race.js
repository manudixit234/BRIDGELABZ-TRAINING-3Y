// Q4 Async Timeout Race
function server(name,delay){return new Promise((resolve,reject)=>setTimeout(()=>Math.random()<.1?reject(new Error(name+" failed")):resolve(name+" responded"),delay));}
const serverA=server("Server A",2000),serverB=server("Server B",3000);
Promise.all([serverA,serverB]).then(()=>console.log("Deployment completed for all servers")).catch(error=>console.error("Deployment error:",error.message));
Promise.race([server("Server A",2000),server("Server B",3000)]).then(first=>console.log("Fastest response:",first)).catch(error=>console.error(error.message));