// Q5 Frontend Pipeline: nested callbacks, then async/await
const delay=fn=>setTimeout(fn,1000);
function callbackPipeline(){delay(()=>{console.log("callback: design");delay(()=>{console.log("callback: build");delay(()=>{console.log("callback: test");delay(()=>{console.log("callback: deploy");delay(()=>console.log("callback: celebrate"));});});});});}
async function asyncPipeline(){for(const stage of ["design","build","test","deploy","celebrate"]){await new Promise(resolve=>setTimeout(resolve,1000));console.log("async/await:",stage);}}
callbackPipeline();
asyncPipeline(); // Run both implementations to compare their flow.
