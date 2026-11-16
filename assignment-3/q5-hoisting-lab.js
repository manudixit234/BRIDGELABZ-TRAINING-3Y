// Q5 Hoisting Lab
console.log(score); // undefined: var is hoisted and initialized.
announce(); // Function declarations are hoisted with their body.
var score=50;
function announce(){console.log("Game started");}
let status="ready";
function startGame(){console.log(status);}
startGame();
// let/const stay in the temporal dead zone until initialized.
// Arrow function expressions assigned to const are not callable before initialization.