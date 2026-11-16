// Q8 Employee Salary Projection
let salary=40000;
const annualIncrementRate=8, projection=[];
for(let year=1;year<=5;year++){salary+=salary*annualIncrementRate/100;projection.push({year,salary:Math.round(salary)});}
console.table(projection);