// Q3 Callback to Promise Migration
function getBugs(){return new Promise((resolve,reject)=>setTimeout(()=>{const failed=false;if(failed)reject(new Error("Bug API failed"));else resolve(["UI glitch","API timeout","Login failure"]);},1000));}
getBugs().then(bugs=>console.table(bugs.map((bug,index)=>({number:index+1,bug})))).catch(error=>console.error(error.message));