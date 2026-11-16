// Q9 JSON Audit
const rawData=['{"user":"Alex","age":25}','{"id":2}','{invalid}','{"user":"Mina","age":"22"}'],clean=[],errors=[];
rawData.forEach((line,index)=>{try{const item=JSON.parse(line);if(!item.user||item.age===undefined)throw new Error("Missing user or age");const age=Number(item.age);if(!Number.isFinite(age))throw new Error("Invalid age");if(age>=18)clean.push({...item,age});}catch(error){errors.push({line:index+1,message:error.message});}});
console.log({clean,errors});