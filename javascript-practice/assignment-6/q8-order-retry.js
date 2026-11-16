// Q8 Order Processing Retry
function submitOrder(){return new Promise((resolve,reject)=>setTimeout(()=>Math.random()<.5?resolve("Order accepted"):reject(new Error("Temporary API failure")),500));}
async function processOrder(){for(let attempt=1;attempt<=3;attempt++){try{const result=await submitOrder();console.log(`Attempt ${attempt}: Success`,result);return;}catch(error){console.log(`Attempt ${attempt}: Failed`);if(attempt===3)throw new Error("Order could not be processed");}}}
processOrder().catch(error=>console.error(error.message));