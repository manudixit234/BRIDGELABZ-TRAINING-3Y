// Q1 Dynamic Data Parser
"use strict";
const apiData=["25","true","false","NaN","                     ","100px","3.14",null,undefined],validNumbers=[],invalidValues=[];
for(const value of apiData){const n=Number(value);console.log({original:value,number:n,boolean:Boolean(value),string:String(value)});
 if(value===null||value===undefined||(typeof value==="string"&&!value.trim())||Number.isNaN(n))invalidValues.push(value);else validNumbers.push(n);}
console.log({validNumbers,invalidValues});