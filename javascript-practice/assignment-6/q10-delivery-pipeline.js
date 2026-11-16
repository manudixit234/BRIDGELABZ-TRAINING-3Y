// Q10 Async Delivery Pipeline
function deliveryStep(message){return new Promise((resolve,reject)=>setTimeout(()=>Math.random()<.08?reject(new Error(message+" failed")):resolve(message),1000+Math.random()*1000));}
async function runPipeline(){console.log("Start Pipeline");const steps=["Step 1: Order taken","Step 2: Food prepared","Step 3: Package ready","Step 4: Out for delivery","Delivery completed!"];try{for(const step of steps)console.log(await deliveryStep(step));}catch(error){console.error("Pipeline failed!",error.message);}}
runPipeline();
// await pauses this async function until each Promise settles; it does not block the JavaScript event loop.