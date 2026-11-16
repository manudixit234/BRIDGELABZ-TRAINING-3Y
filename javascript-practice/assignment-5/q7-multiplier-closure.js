// Q7 Multiplier Closure
function makeMultiplier(multiplier){return function(number){return number*multiplier;};}
const triple=makeMultiplier(3);
console.log(triple(5)); // 15; returned function remembers multiplier from its lexical scope.