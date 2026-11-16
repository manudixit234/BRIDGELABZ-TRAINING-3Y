// Q3 Transaction Validator
const transactions=[{id:1,amount:2000},{id:2,amount:-500},{id:3},null],valid=[],invalid=[];
transactions.forEach((tx,index)=>{try{if(tx===null)throw new TypeError("Null entry");if(tx.id==null||tx.amount==null)throw new ReferenceError("Missing id or amount");if(tx.amount<0)throw new RangeError("Negative amount");valid.push(tx);}catch(error){invalid.push({row:index+1,type:error.name,message:error.message});}});
console.log({valid,invalid,successful:valid.length,failed:invalid.length});
// Debugging: place a breakpoint inside forEach and watch tx, index, valid and invalid.