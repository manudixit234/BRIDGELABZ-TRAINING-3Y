// Q1 Async Coffee Maker
const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
function step(name){return wait(1000+Math.random()*1000).then(()=>{if(Math.random()<.1)throw new Error(name+" failed");console.log(name);});}
step("Water boiled").then(()=>step("Coffee brewed")).then(()=>step("Coffee poured")).then(()=>console.log("Coffee ready for the team!")).catch(error=>console.error("Coffee process failed:",error.message));