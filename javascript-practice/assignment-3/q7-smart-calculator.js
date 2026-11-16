// Q7 Smart Calculator
const operations=["add","divide","power","root","subtract"],num1=25,num2=0;
function calculate(op,a,b){switch(op){case "add":return a+b;case "divide":if(b===0)throw new RangeError("Cannot divide by zero");return a/b;case "power":return a**b;case "root":if(a<0)throw new RangeError("Cannot root a negative number");return Math.sqrt(a);case "subtract":return a-b;default:throw new Error("InvalidOperationError");}}
for(const op of operations){try{console.log(op,calculate(op,num1,num2));}catch(error){console.error(op,error.message);}}