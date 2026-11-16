// Q1 Scope Conflict Resolver
let bonus=5000;
function calculateSalary(isPermanent){const salary=40000;const total=salary+(isPermanent?bonus:0);console.log("Total salary:",total);}
calculateSalary(true);calculateSalary(false);console.log("Global bonus remains:",bonus);