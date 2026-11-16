// Q2 Employee Bonus Calculator
"use strict";
const employees=[{name:"Amit",salary:"45000",years:"5"},{name:"Sara",salary:"38000",years:"2"},{name:"Kiran",salary:"52000",years:"7"}];
for(const employee of employees){try{const salary=Number(employee.salary),years=Number(employee.years);if(!employee.name||!Number.isFinite(salary)||!Number.isFinite(years))throw new Error("Invalid employee record");const bonus=salary*(years>3?.10:.05);console.log(`${employee.name}: Salary ₹${salary}, Experience ${years} years, Bonus ₹${bonus.toFixed(2)}`);}catch(error){console.error(error.message);}}