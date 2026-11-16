// Q6 Progressive Discount System
const purchaseTotal=7200;
let rate=0;
if(purchaseTotal>=10000) rate=.25;
else if(purchaseTotal>=5000) rate=.15;
else if(purchaseTotal>=2000) rate=.05;
console.log({originalTotal:purchaseTotal,discountPercentage:rate*100,finalPrice:Math.round(purchaseTotal*(1-rate))});