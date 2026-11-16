// Q1 E-Commerce Product Manager
class Product{constructor(id,name,price,category){Object.assign(this,{id,name,price,category});}applyDiscount(percent){this.price*=1-percent/100;}getDetails(){return `${this.name} (${this.category}) — ₹${this.price.toFixed(2)}`;}}
const products=[new Product(1,"Keyboard",1500,"Electronics"),new Product(2,"Notebook",250,"Stationery"),new Product(3,"Monitor",8500,"Electronics")];
products[0].applyDiscount(10);products.filter(p=>p.price>1000).forEach(p=>console.log(p.getDetails()));