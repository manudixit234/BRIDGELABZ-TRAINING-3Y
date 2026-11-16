// Q9 Shopping Cart Total
class Cart{constructor(){this.items=[];}addItem(name,price,quantity=1){this.items.push({name,price,quantity});}getTotal(){return this.items.reduce((sum,item)=>sum+item.price*item.quantity,0);}applyCoupon(code){const match=/^(?:DISC|SAVE)(10|20)$/.exec(code);if(!match)throw new Error("Invalid coupon");return this.getTotal()*(1-Number(match[1])/100);}}
const cart=new Cart();cart.addItem("Keyboard",1500,1);cart.addItem("Mouse",700,2);
try{console.log("Total:",cart.getTotal(),"After coupon:",cart.applyCoupon("SAVE20"));}catch(error){console.error(error.message);}