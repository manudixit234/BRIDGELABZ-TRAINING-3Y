// Q8 Dynamic Discount Evaluator
const cart=[{item:"Laptop",category:"electronics",price:45000},{item:"Shoes",category:"fashion",price:2500},{item:"Book",category:"education",price:600}];
let discountedSubtotal=0;
for(const product of cart){const rate=product.category==="electronics"?.10:product.category==="fashion"?.05:0;discountedSubtotal+=product.price*(1-rate);}
const originalTotal=cart.reduce((sum,item)=>sum+item.price,0);
const finalTotal=discountedSubtotal>50000?discountedSubtotal*.95:discountedSubtotal;
console.log({originalTotal,discountedSubtotal,finalTotal});