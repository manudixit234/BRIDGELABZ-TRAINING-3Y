// Q5 Callback Hell and Async/Await comparison
const delay=fn=>setTimeout(fn,1000);
function callbackPipeline(){delay(()=>{console.log("design");delay(()=>{console.log("build");delay(()=>{console.log("test");delay(()=>{console.log("deploy");delay(()=>console.log("celebrate"));});});});});}
async function asyncPipeline(){for(const stage of ["design","build","test","deploy","celebrate"]){await new Promise(resolve=>setTimeout(resolve,1000));console.log(stage);}}
callbackPipeline();
// Run asyncPipeline() separately to compare. async/await reads like sequential code and avoids deeply nested callbacks.