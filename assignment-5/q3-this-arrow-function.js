// Q3 Arrow Function and this
const user={name:"Manu",showName:()=>console.log(this.name)};
user.showName(); // Arrow functions capture lexical this, not the user object.
user.showName=function(){console.log(this.name);}; // A normal method receives the object as this.
user.showName();