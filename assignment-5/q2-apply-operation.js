// Q2 Apply Operation
function applyOperation(numbers,operation){return numbers.map(operation);}
const numbers=[1,2,3,4];
console.log("Doubled:",applyOperation(numbers,n=>n*2));
console.log("Squared:",applyOperation(numbers,n=>n*n));