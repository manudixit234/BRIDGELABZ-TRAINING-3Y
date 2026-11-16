// Q6 Employee Management System
class Employee{constructor(id,name,department,salary){Object.assign(this,{id,name,department,salary});}applyBonus(percent){this.salary*=1+percent/100;}getAnnualSalary(){return this.salary*12;}}
const employees=[new Employee(1,"Amit","HR",35000),new Employee(2,"Sara","Tech",60000),new Employee(3,"Kiran","Finance",48000),new Employee(4,"Neha","Sales",42000),new Employee(5,"Raj","Support",38000)];
employees[1].applyBonus(10);employees.forEach(e=>console.log(e.name,e.getAnnualSalary()));
console.log("Annual payout:",employees.reduce((sum,e)=>sum+e.getAnnualSalary(),0));