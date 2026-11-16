// Q3 Monthly Expense Tracker
const expenses={food:4500,travel:1800,rent:9000,bills:2200,leisure:1500};
const total=Object.values(expenses).reduce((a,b)=>a+b,0);
const average=total/Object.keys(expenses).length;
let afterTax=total; afterTax+=afterTax*0.10;
console.log({total:total.toFixed(2),average:average.toFixed(2),finalAfterTax:afterTax.toFixed(2)});