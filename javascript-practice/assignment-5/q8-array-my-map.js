// Q8 Custom Array myMap Method
Array.prototype.myMap=function(callback,thisArg){if(typeof callback!=="function")throw new TypeError("Callback must be a function");const result=[];for(let index=0;index<this.length;index++){if(index in this)result[index]=callback.call(thisArg,this[index],index,this);}return result;};
console.log([1,2,3].myMap(number=>number*2));