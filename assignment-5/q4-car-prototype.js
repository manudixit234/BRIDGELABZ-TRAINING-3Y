// Q4 Constructor Function and Prototype
function Car(brand,model){this.brand=brand;this.model=model;}
Car.prototype.getDetails=function(){return `${this.brand} ${this.model}`;};
const carOne=new Car("Toyota","Camry"),carTwo=new Car("Honda","City");
console.log(carOne.getDetails(),carTwo.getDetails());
console.log("Shared prototype method:",carOne.getDetails===carTwo.getDetails);